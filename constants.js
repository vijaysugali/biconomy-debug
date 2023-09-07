const rpcUrl =
	'https://polygon-mainnet.g.alchemy.com/v2/TgjRZGO1g6lFNhWGhru5UEsny_WPeCLC';

const fantasyV2ContractAddress = '0x5f1ac0000152438E43d2072D4577B6Ee28AFB402';

const usdtContractAddress = '0xc2132d05d31c914a87c6611c10748aeb04b58e8f';

const chainId = 137;

const biconomy = {
	payMasterUrl:
		'https://paymaster.biconomy.io/api/v1/137/Zs4IwoQVk.f1ed5a0c-36a1-430d-8abd-98947b5eca6e',
	bundlerUrl:
		'https://bundler.biconomy.io/api/v2/137/v1qWMVaqz.77e82619-mKji-4e99-kJ90-e27d82a76901',
};

const fantazyAbi = [
	{
		inputs: [
			{ internalType: 'uint256', name: '_sportsCount', type: 'uint256' },
			{ internalType: 'uint256', name: '_eventsCount', type: 'uint256' },
			{ internalType: 'uint256', name: '_poolsCount', type: 'uint256' },
			{ internalType: 'uint256', name: '_teamsCount', type: 'uint256' },
			{ internalType: 'uint256', name: '_usersCount', type: 'uint256' },
			{
				internalType: 'uint256',
				name: '_commissionNumerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_commissionDenominator',
				type: 'uint256',
			},
			{ internalType: 'string', name: '_appUrl', type: 'string' },
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'errorId', type: 'uint256' }],
		name: 'CustomError',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_teamId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_timestamp',
				type: 'uint256',
			},
		],
		name: 'Claim',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_teamId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_eventId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_insertType',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_timestamp',
				type: 'uint256',
			},
		],
		name: 'InsertTeam',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_teamId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_paymentType',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_timestamp',
				type: 'uint256',
			},
		],
		name: 'JoinContest',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Unpaused',
		type: 'event',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_sportId', type: 'uint256' },
			{ internalType: 'uint256', name: '_eventId', type: 'uint256' },
			{ internalType: 'uint256', name: '_startTime', type: 'uint256' },
			{ internalType: 'string', name: '_eventName', type: 'string' },
			{
				internalType: 'uint256[]',
				name: '_teamAsquad',
				type: 'uint256[]',
			},
			{
				internalType: 'uint8[]',
				name: '_teamAsquadCategories',
				type: 'uint8[]',
			},
			{
				internalType: 'uint256[]',
				name: '_teamBsquad',
				type: 'uint256[]',
			},
			{
				internalType: 'uint8[]',
				name: '_teamBsquadCategories',
				type: 'uint8[]',
			},
		],
		name: 'addNewEvent',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_eventId', type: 'uint256' },
			{ internalType: 'uint256', name: '_poolId', type: 'uint256' },
			{ internalType: 'uint256', name: '_contestType', type: 'uint256' },
			{ internalType: 'uint256', name: '_currencyId', type: 'uint256' },
			{ internalType: 'uint256', name: '_entryFee', type: 'uint256' },
			{
				internalType: 'uint256',
				name: '_userTeamsLimit',
				type: 'uint256',
			},
			{
				components: [
					{ internalType: 'uint8', name: 'minimum', type: 'uint8' },
					{ internalType: 'uint8', name: 'maximum', type: 'uint8' },
				],
				internalType: 'struct FantazyV2.Range',
				name: '_poolLimit',
				type: 'tuple',
			},
			{
				internalType: 'uint256',
				name: '_discountPercentNumerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_discountPercentDenominator',
				type: 'uint256',
			},
			{
				components: [
					{ internalType: 'uint256', name: 'from', type: 'uint256' },
					{ internalType: 'uint256', name: 'to', type: 'uint256' },
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				internalType: 'struct FantazyV2.PrizeBucket[]',
				name: '_winningsTable',
				type: 'tuple[]',
			},
		],
		name: 'addNewPool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'appUrl',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'string', name: '_appUrl', type: 'string' },
			{
				internalType: 'uint256',
				name: '_commissionNumerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_commissionDenominator',
				type: 'uint256',
			},
		],
		name: 'changeData',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_teamId', type: 'uint256' },
			{ internalType: 'uint256', name: '_poolId', type: 'uint256' },
			{ internalType: 'uint256', name: '_rank', type: 'uint256' },
			{ internalType: 'uint256', name: '_magicValue', type: 'uint256' },
			{ internalType: 'bool', name: '_isRefund', type: 'bool' },
			{ internalType: 'uint8', name: '_v', type: 'uint8' },
			{ internalType: 'bytes32', name: '_r', type: 'bytes32' },
			{ internalType: 'bytes32', name: '_s', type: 'bytes32' },
		],
		name: 'claim',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_eventId', type: 'uint256' },
			{ internalType: 'uint256', name: '_teamId', type: 'uint256' },
			{ internalType: 'string', name: '_teamName', type: 'string' },
			{
				internalType: 'uint256',
				name: '_selectedCaptain',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_selectedViceCaptain',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_selectedPlayers',
				type: 'uint256[]',
			},
		],
		name: 'createNewTeam',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'currenciesCount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'eventsCount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_poolId', type: 'uint256' },
			{ internalType: 'uint256', name: '_eventId', type: 'uint256' },
			{ internalType: 'uint256', name: '_teamId', type: 'uint256' },
			{ internalType: 'uint256', name: '_currencyId', type: 'uint256' },
		],
		name: 'getData',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'eventId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'contestType',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'currencyId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'entryFee',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'discountPercentNumerator',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'discountPercentDenominator',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'teamsJoinedCount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'paidStakedAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'bonusStakedAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'paidStakedClaimedAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'bonusStakedClaimedAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'joinTeamsLimit',
						type: 'uint256',
					},
					{
						components: [
							{
								internalType: 'uint8',
								name: 'minimum',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'maximum',
								type: 'uint8',
							},
						],
						internalType: 'struct FantazyV2.Range',
						name: 'poolLimit',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'uint256',
								name: 'from',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'to',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'amount',
								type: 'uint256',
							},
						],
						internalType: 'struct FantazyV2.PrizeBucket[20]',
						name: 'winningsTable',
						type: 'tuple[20]',
					},
					{
						internalType: 'bool',
						name: 'isWinningsTableUpdated',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'isCommissionWithdrawn',
						type: 'bool',
					},
				],
				internalType: 'struct FantazyV2.Pool',
				name: '_pool',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'string',
						name: 'eventName',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'sportId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'startTime',
						type: 'uint256',
					},
					{
						internalType: 'uint256[]',
						name: 'teamAsquad',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'teamBsquad',
						type: 'uint256[]',
					},
				],
				internalType: 'struct FantazyV2.Event',
				name: '_event',
				type: 'tuple',
			},
			{
				components: [
					{ internalType: 'address', name: 'user', type: 'address' },
					{
						internalType: 'string',
						name: 'teamName',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'eventId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'selectedCaptain',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'selectedViceCaptain',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'totalPlayersCount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'teamACount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'teamBCount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'category1Count',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'category2Count',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'category3Count',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'category4Count',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'category5Count',
						type: 'uint256',
					},
					{
						internalType: 'uint256[]',
						name: 'selectedPlayers',
						type: 'uint256[]',
					},
				],
				internalType: 'struct FantazyV2.Team',
				name: '_team',
				type: 'tuple',
			},
			{
				components: [
					{ internalType: 'string', name: 'name', type: 'string' },
					{ internalType: 'address', name: 'erc20', type: 'address' },
					{
						internalType: 'uint256',
						name: 'decimals',
						type: 'uint256',
					},
					{ internalType: 'bool', name: 'isErc20', type: 'bool' },
					{
						internalType: 'uint256',
						name: 'protocolBonusStakedAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'protocolPaidStakedAmount',
						type: 'uint256',
					},
				],
				internalType: 'struct FantazyV2.Currency',
				name: '_currency',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'string', name: '_name', type: 'string' },
			{ internalType: 'uint256', name: '_currencyId', type: 'uint256' },
			{ internalType: 'address', name: '_erc20', type: 'address' },
			{ internalType: 'uint256', name: '_decimals', type: 'uint256' },
			{ internalType: 'bool', name: '_isErc20', type: 'bool' },
		],
		name: 'insertCurrencyData',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_eventId', type: 'uint256' },
			{
				internalType: 'uint256[]',
				name: '_playerIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_playerPoints',
				type: 'uint256[]',
			},
		],
		name: 'insertPlayerPoints',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'string', name: '_name', type: 'string' },
			{ internalType: 'uint256', name: '_sportId', type: 'uint256' },
			{
				internalType: 'uint256',
				name: '_captainMultiplier',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_viceCaptainMultiplier',
				type: 'uint256',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'uint8',
								name: 'minimum',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'maximum',
								type: 'uint8',
							},
						],
						internalType: 'struct FantazyV2.Range',
						name: 'totalPlayers',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'uint8',
								name: 'minimum',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'maximum',
								type: 'uint8',
							},
						],
						internalType: 'struct FantazyV2.Range',
						name: 'eachTeam',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'uint8',
								name: 'minimum',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'maximum',
								type: 'uint8',
							},
						],
						internalType: 'struct FantazyV2.Range',
						name: 'category1',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'uint8',
								name: 'minimum',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'maximum',
								type: 'uint8',
							},
						],
						internalType: 'struct FantazyV2.Range',
						name: 'category2',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'uint8',
								name: 'minimum',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'maximum',
								type: 'uint8',
							},
						],
						internalType: 'struct FantazyV2.Range',
						name: 'category3',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'uint8',
								name: 'minimum',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'maximum',
								type: 'uint8',
							},
						],
						internalType: 'struct FantazyV2.Range',
						name: 'category4',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'uint8',
								name: 'minimum',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'maximum',
								type: 'uint8',
							},
						],
						internalType: 'struct FantazyV2.Range',
						name: 'category5',
						type: 'tuple',
					},
				],
				internalType: 'struct FantazyV2.TeamCriteria',
				name: '_teamCriteria',
				type: 'tuple',
			},
		],
		name: 'insertSportData',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
		],
		name: 'isFeeRefunded',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
		],
		name: 'isPrizeClaimed',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
		],
		name: 'isTeamParticipated',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_poolId', type: 'uint256' },
			{ internalType: 'uint256', name: '_teamId', type: 'uint256' },
			{ internalType: 'uint256', name: '_paymentType', type: 'uint256' },
			{ internalType: 'uint8', name: '_v', type: 'uint8' },
			{ internalType: 'bytes32', name: '_r', type: 'bytes32' },
			{ internalType: 'bytes32', name: '_s', type: 'bytes32' },
		],
		name: 'joinContest',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
		],
		name: 'paidPaymentType',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'paused',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'poolsCount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'protocolCommission',
		outputs: [
			{ internalType: 'uint256', name: 'numerator', type: 'uint256' },
			{ internalType: 'uint256', name: 'denominator', type: 'uint256' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'sportsCount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'teamsCount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'newOwner', type: 'address' },
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'unPause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_teamId', type: 'uint256' },
			{
				internalType: 'uint256',
				name: '_selectedCaptain',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_selectedViceCaptain',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_selectedPlayers',
				type: 'uint256[]',
			},
			{ internalType: 'uint8', name: '_v', type: 'uint8' },
			{ internalType: 'bytes32', name: '_r', type: 'bytes32' },
			{ internalType: 'bytes32', name: '_s', type: 'bytes32' },
		],
		name: 'updateEditedTeam',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_poolId', type: 'uint256' },
			{
				components: [
					{ internalType: 'uint256', name: 'from', type: 'uint256' },
					{ internalType: 'uint256', name: 'to', type: 'uint256' },
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				internalType: 'struct FantazyV2.PrizeBucket[]',
				name: '_winningsTable',
				type: 'tuple[]',
			},
		],
		name: 'updateWinnings',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'usersCount',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: '_currencyId', type: 'uint256' },
			{ internalType: 'uint256', name: '_poolId', type: 'uint256' },
			{ internalType: 'bool', name: '_isForce', type: 'bool' },
		],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{ stateMutability: 'payable', type: 'receive' },
];

const userPrivateKey =
	'0x116d8d323b5d37c84107a5d3e909a6a72a1b5fea7dd871b69fcc4648aa97fc9a';

module.exports = {
	rpcUrl,
	fantasyV2ContractAddress,
	usdtContractAddress,
	biconomy,
	chainId,
	fantazyAbi,
  userPrivateKey
};
