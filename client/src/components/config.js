import Web3 from "web3";

export const INFURA_ADDRESS = "https://rinkeby.infura.io/v3/a82bc1e7bff8499d9924dd779aea7a63"
window.web3 = new Web3(window.ethereum);

export const ADDRESS = "0x89f58b4522ccea27eac6ced6d4ca1f026bc36938"

export const ABI =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "orderGroup",
				"type": "uint256"
			}
		],
		"name": "cancel",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "cancelAll",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "witness",
				"type": "bytes32"
			},
			{
				"name": "graderQuorum",
				"type": "uint256"
			},
			{
				"name": "graderFee",
				"type": "uint256"
			},
			{
				"name": "graders",
				"type": "address[]"
			},
			{
				"name": "finalPrice",
				"type": "uint32"
			},
			{
				"name": "sigs",
				"type": "uint256[2][]"
			},
			{
				"name": "targets",
				"type": "uint256[]"
			}
		],
		"name": "claim",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "matchId",
				"type": "uint256"
			},
			{
				"name": "targets",
				"type": "uint256[]"
			}
		],
		"name": "claimFinalized",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "takerAccount",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "makerAccount",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "matchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "orderFillHash",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "orderDirection",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "price",
				"type": "uint32"
			},
			{
				"indexed": false,
				"name": "longAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newLongPosition",
				"type": "int256"
			},
			{
				"indexed": false,
				"name": "shortAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newShortPosition",
				"type": "int256"
			},
			{
				"indexed": false,
				"name": "longBalanceDelta",
				"type": "int256"
			},
			{
				"indexed": false,
				"name": "shortBalanceDelta",
				"type": "int256"
			}
		],
		"name": "LogTrade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "takerAccount",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "makerAccount",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "matchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "orderFillHash",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "status",
				"type": "uint16"
			}
		],
		"name": "LogTradeError",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "orderGroup",
				"type": "uint256"
			}
		],
		"name": "LogCancel",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "LogCancelAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "matchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "finalPrice",
				"type": "uint32"
			}
		],
		"name": "LogFinalizeMatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "matchId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "graderFee",
				"type": "uint256"
			}
		],
		"name": "LogClaim",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "matchId",
				"type": "uint256"
			},
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "packedLeftOrder",
				"type": "uint256[4]"
			},
			{
				"name": "packedRightOrders",
				"type": "uint256[4][]"
			}
		],
		"name": "matchOrders",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "detailsHash",
				"type": "uint256"
			},
			{
				"name": "recoveryTime",
				"type": "uint256"
			},
			{
				"name": "cancelPrice",
				"type": "uint256"
			},
			{
				"name": "graderQuorum",
				"type": "uint256"
			},
			{
				"name": "graderFee",
				"type": "uint256"
			},
			{
				"name": "graders",
				"type": "address[]"
			}
		],
		"name": "recoverFunds",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "expiry",
				"type": "uint256"
			},
			{
				"name": "matchId",
				"type": "uint256"
			},
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "packedOrders",
				"type": "uint256[4][]"
			}
		],
		"name": "trade",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "getCancelTimestamp",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "fillHash",
				"type": "bytes32"
			}
		],
		"name": "getFilledAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "matchId",
				"type": "uint256"
			}
		],
		"name": "getFinalizedStatus",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint32"
			},
			{
				"name": "",
				"type": "uint32"
			},
			{
				"name": "graders",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "matchId",
				"type": "uint256"
			},
			{
				"name": "account",
				"type": "address"
			},
			{
				"name": "token",
				"type": "address"
			}
		],
		"name": "getPosition",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "packed",
				"type": "uint256[4]"
			}
		],
		"name": "testOrder",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]