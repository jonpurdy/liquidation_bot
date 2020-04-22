const additionalEvents = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tradeOwner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "addedCollateral",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetPrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stablePrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "AddCollateral",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tradeOwner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "int256",
        name: "protectedOpenPrice",
        type: "int256"
      }
    ],
    name: "FrontRunning",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isTradingAsset",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stableAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetPrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stablePrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "InternalExchange",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tradeOwner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLiquidated",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateral",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protectedAssetOpenPrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetPrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stablePrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetRedemptionAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "referral",
        type: "address"
      }
    ],
    name: "TradeClose",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tradeOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stableToSendLiquidator",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stableToSendTradeOwner",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "TradeLiquidate",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tradeId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tradeOwner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateral",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leverage",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetPrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stablePrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "openFee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oracleRoundId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "referral",
        type: "address"
      }
    ],
    name: "TradeOpen",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetTokenAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stableTokenAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lstPrice",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityMinted",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "addedLiq",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "UpdateLiquidity",
    type: "event"
  }
];

const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidityTokenAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_stableAddress",
        type: "address"
      },
      {
        internalType: "address payable",
        name: "_tokenAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_fsToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_chainLinkAssetAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_chainLinkStableAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_incentiveAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_votingProxyAddress",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_isWeth",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "_isDSR",
        type: "bool"
      },
      {
        internalType: "address",
        name: "_daiPot",
        type: "address"
      },
      {
        internalType: "address",
        name: "_daiJoin",
        type: "address"
      },
      {
        internalType: "address",
        name: "_vat",
        type: "address"
      }
    ],
    payable: true,
    stateMutability: "payable",
    type: "constructor"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    constant: true,
    inputs: [],
    name: "constants",
    outputs: [
      {
        internalType: "bool",
        name: "isWeth",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "isDSR",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "imbalanceMultiplier",
        type: "uint256"
      },
      {
        internalType: "int256",
        name: "dfrDivider",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "timeFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "initSecuredDeadline",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "isSecured",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "dsrAdditionalRewards",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "liquidatedTraderReturn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "liquidatorReturn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "liquidationRatio",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maxLeverage",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "dynamicFunding",
    outputs: [
      {
        internalType: "uint256",
        name: "longSharesOutstanding",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "shortSharesOutstanding",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastDfrUpdate",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "incentivesStruct",
    outputs: [
      {
        internalType: "uint256",
        name: "currentSnapshot",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastWeeklyLiquidityUpdate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exchangeIncentiveWeight",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "instances",
    outputs: [
      {
        internalType: "contract ERC20Detailed",
        name: "stableToken",
        type: "address"
      },
      {
        internalType: "contract TOKEN",
        name: "assetToken",
        type: "address"
      },
      {
        internalType: "contract AggregatorInterface",
        name: "chainlinkAsset",
        type: "address"
      },
      {
        internalType: "contract AggregatorInterface",
        name: "chainlinkStable",
        type: "address"
      },
      {
        internalType: "contract Incentives",
        name: "incentive",
        type: "address"
      },
      {
        internalType: "contract TOKEN",
        name: "fsToken",
        type: "address"
      },
      {
        internalType: "contract DAIJoin",
        name: "daiJoin",
        type: "address"
      },
      {
        internalType: "contract DAIPot",
        name: "pot",
        type: "address"
      },
      {
        internalType: "contract VatLike",
        name: "vat",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "isExchangeInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "isFromInitializer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "liquidityToken",
    outputs: [
      {
        internalType: "contract ERC20Snapshot",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "uint256",
        name: "tradeInitFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tradeCount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maxFeeDivisor",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokensToMaxFeeDivisor",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minTradeSize",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "frontRunningTimeWindow",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "tokenPools",
    outputs: [
      {
        internalType: "uint256",
        name: "assetTokenBorrowPool",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "longBorrowValue",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "shortAssetBorrowPool",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "shortBorrowValue",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "stableTokenBorrowPool",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "stableTokenCollateralPool",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "stablePoolSharesOutstanding",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "votingProxy",
    outputs: [
      {
        internalType: "contract VotingProxy",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "initializeExchange",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_collateral",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_leverage",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_referral",
        type: "address"
      }
    ],
    name: "openLong",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_collateral",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_leverage",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_referral",
        type: "address"
      }
    ],
    name: "openShort",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_tradeId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_referral",
        type: "address"
      }
    ],
    name: "closeTrade",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "setImbalanceMultiplier",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_isTradingAsset",
        type: "bool"
      }
    ],
    name: "internalExchange",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "calculateImbalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_collateral",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_tradeId",
        type: "uint256"
      }
    ],
    name: "addCollateral",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_assetTokenAmount",
        type: "uint256"
      }
    ],
    name: "addLiquidity",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_tokensToBurn",
        type: "uint256"
      }
    ],
    name: "removeLiquidity",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_tradeId",
        type: "uint256"
      }
    ],
    name: "liquidateTrade",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "addFundsToDsr",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "int256",
        name: "_amount",
        type: "int256"
      }
    ],
    name: "setDfrDivider",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "setTimeFee",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "setExchangeIncentiveWeight",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "setTokensToMaxFeeDivisor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "setMaxFeeDivisor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "setTradeInitFee",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "setLiquidatedTraderReturn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "setLiquidatorReturn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "setLiquidationRatio",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_maxLeverage",
        type: "uint256"
      }
    ],
    name: "setMaxLeverage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bool",
        name: "_isSecured",
        type: "bool"
      }
    ],
    name: "initSecure",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_frontRunningTimeWindow",
        type: "uint256"
      }
    ],
    name: "setFrontRunningTimeWindow",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_assetOracle",
        type: "address"
      },
      {
        internalType: "address",
        name: "_stableOracle",
        type: "address"
      }
    ],
    name: "updateOracles",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getLtPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getAssetTokenPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getStableTokenPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getStableTokenAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getAssetTokenAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_snapshotId",
        type: "uint256"
      }
    ],
    name: "getLiquidityPayoutMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getDFR",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_timeFee",
        type: "uint256"
      }
    ],
    name: "getAdjustedTimeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_tradeId",
        type: "uint256"
      }
    ],
    name: "getLiquidationPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getDiscountedTradeInitFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_tradeId",
        type: "uint256"
      }
    ],
    name: "tradeIdToTrade",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  ...additionalEvents
];

module.exports = {
  abi
};
