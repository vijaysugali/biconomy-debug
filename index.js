const {
	BiconomySmartAccount,
	BiconomySmartAccountConfig,
} = require('@biconomy/account');

const {
	IPaymaster,
	BiconomyPaymaster,
	PaymasterMode,
} = require('@biconomy/paymaster');

const constants = require('./constants');
const { ethers } = require('ethers');

const signer = new ethers.Wallet(constants.userPrivateKey);
const provider = new ethers.providers.JsonRpcProvider(constants.rpcUrl);

let paymasterServiceData = {
	mode: PaymasterMode.SPONSORED,
};

const paymaster = new BiconomyPaymaster({
	paymasterUrl: constants.biconomy.payMasterUrl,
});
// This is how you create bundler instance in your dapp's
const { IBundler, Bundler } = require('@biconomy/bundler');
const { DEFAULT_ENTRYPOINT_ADDRESS } = require('@biconomy/account');

// Make use of core-types package
const { ChainId } = require('@biconomy/core-types');

const bundler = new Bundler({
	bundlerUrl: constants.biconomy.bundlerUrl,
	chainId: 137,
	entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
});

const run = async () => {
	const biconomySmartAccountConfig = {
		signer,
		chainId: 137,
		rpcUrl: constants.rpcUrl,
		paymaster,
		bundler,
	};
	console.log(signer);

	const biconomyAccount = new BiconomySmartAccount(
		biconomySmartAccountConfig
	);
	const biconomySmartAccount = await biconomyAccount.init();
	const scw = biconomySmartAccount.address;

	console.log(scw);

	const contract = new ethers.Contract(
		constants.fantasyV2ContractAddress,
		constants.fantazyAbi,
		provider
	);

	const encodedData = contract.interface.encodeFunctionData('createNewTeam', [
		124829920,
		1968692696,
		'T3',
		131004,
		131005,
		[
			131004, 130923, 131005, 131006, 131007, 130926, 130933, 130934,
			115752, 130930, 131012,
		],
	]);

	const transaction1 = {
		to: constants.fantasyV2ContractAddress,
		data: encodedData,
	};
	var userOpResponse;
	try {
		var partialUserOp = await biconomySmartAccount.buildUserOp([
			transaction1,
		]);
		const paymasterAndDataResponse = await paymaster.getPaymasterAndData(
			partialUserOp,
			paymasterServiceData
		);
		partialUserOp.paymasterAndData =
			paymasterAndDataResponse.paymasterAndData;

		console.log('Partial user op: ', partialUserOp);

		userOpResponse = await biconomySmartAccount.sendUserOp(partialUserOp);
		console.log('Uer op Response: ', userOpResponse);

		// console.log(userOpResponse);
		const transactionDetails = await userOpResponse.wait();
		console.log('transaction details below');
		console.log(transactionDetails);
	} catch (error) {
		console.log('Error: ', error);
	}
};

run();

/*

		"@biconomy/account": "^3.0.0-alpha.0",
		"@biconomy/bundler": "^3.0.0-alpha.0",
		"@biconomy/common": "^3.1.0-alpha.0",
		"@biconomy/core-types": "^3.0.0-alpha.0",
		"@biconomy/paymaster": "^3.0.0-alpha.0",

*/
