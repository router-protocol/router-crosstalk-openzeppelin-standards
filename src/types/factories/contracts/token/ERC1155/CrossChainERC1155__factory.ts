/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CrossChainERC1155,
  CrossChainERC1155Interface,
} from "../../../../contracts/token/ERC1155/CrossChainERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
      {
        internalType: "address",
        name: "genericHandler_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "sourceChain",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "destChain",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sourceAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "CrossTalkReceive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "sourceChain",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "destChain",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sourceAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "CrossTalkSend",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "ChainID",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "linkedContract",
        type: "address",
      },
    ],
    name: "Linkevent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "ChainID",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "linkedContract",
        type: "address",
      },
    ],
    name: "Unlinkevent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_chainID",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_linkedContract",
        type: "address",
      },
    ],
    name: "Link",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_chainID",
        type: "uint8",
      },
    ],
    name: "Unlink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approveFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchCrossChainGas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchFeetToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchHandler",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_chainID",
        type: "uint8",
      },
    ],
    name: "fetchLink",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchLinkSetter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "receiveCrossChain",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "srcChainID",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "srcAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "routerSync",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200260a3803806200260a83398101604081905262000034916200015d565b808262000041816200006b565b50600380546001600160a01b0319166001600160a01b0392909216919091179055506200028a9050565b80516200008090600290602084019062000084565b5050565b82805462000092906200024e565b90600052602060002090601f016020900481019282620000b6576000855562000101565b82601f10620000d157805160ff191683800117855562000101565b8280016001018555821562000101579182015b8281111562000101578251825591602001919060010190620000e4565b506200010f92915062000113565b5090565b5b808211156200010f576000815560010162000114565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200015857600080fd5b919050565b600080604083850312156200017157600080fd5b82516001600160401b03808211156200018957600080fd5b818501915085601f8301126200019e57600080fd5b815181811115620001b357620001b36200012a565b604051601f8201601f19908116603f01168101908382118183101715620001de57620001de6200012a565b81604052828152602093508884848701011115620001fb57600080fd5b600091505b828210156200021f578482018401518183018501529083019062000200565b82821115620002315760008484830101525b95506200024391505085820162000140565b925050509250929050565b600181811c908216806200026357607f821691505b6020821081036200028457634e487b7160e01b600052602260045260246000fd5b50919050565b612370806200029a6000396000f3fe608060405234801561001057600080fd5b50600436106101355760003560e01c80638cc78bdb116100b2578063c9adbf8211610081578063e985e9c511610066578063e985e9c5146102c4578063f242432a14610300578063fe9dc81a1461031357600080fd5b8063c9adbf82146102a0578063d43e6e70146102b157600080fd5b80638cc78bdb14610248578063a22cb46514610259578063aa15f41d1461026c578063bf18028c1461028d57600080fd5b80632eb2c2d6116101095780634e1273f4116100ee5780634e1273f41461020f5780635eba365a1461022f5780636edb7a3e1461023757600080fd5b80632eb2c2d6146101e75780633e27323d146101fc57600080fd5b8062fdd58e1461013a57806301ffc9a7146101605780630500387f146101835780630e89341c146101c7575b600080fd5b61014d6101483660046118a6565b610326565b6040519081526020015b60405180910390f35b61017361016e3660046118e8565b6103cf565b6040519015158152602001610157565b6101af61019136600461191b565b60ff166000908152600660205260409020546001600160a01b031690565b6040516001600160a01b039091168152602001610157565b6101da6101d5366004611938565b610415565b60405161015791906119a9565b6101fa6101f5366004611b18565b6104a9565b005b6101fa61020a366004611bc6565b61054b565b61022261021d366004611bff565b6106ce565b6040516101579190611d07565b606b5461014d565b6003546001600160a01b03166101af565b6005546001600160a01b03166101af565b6101fa610267366004611d28565b61080c565b61027f61027a366004611d56565b61081b565b604051610157929190611dd3565b61017361029b366004611df6565b610af0565b6004546001600160a01b03166101af565b6101fa6102bf3660046118a6565b610b7e565b6101736102d2366004611e91565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101fa61030e366004611eaf565b610bfc565b6101fa61032136600461191b565b610c97565b60006001600160a01b0383166103a95760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216632f5d1b2d60e11b148061040057506001600160e01b031982166303a24d0760e21b145b8061040f575061040f82610d94565b92915050565b60606002805461042490611f18565b80601f016020809104026020016040519081016040528092919081815260200182805461045090611f18565b801561049d5780601f106104725761010080835404028352916020019161049d565b820191906000526020600020905b81548152906001019060200180831161048057829003601f168201915b50505050509050919050565b6001600160a01b0385163314806104c557506104c585336102d2565b6105375760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f766564000000000000000000000000000060648201526084016103a0565b6105448585858585610de4565b5050505050565b6003546001600160a01b0316336001600160a01b0316146105d45760405162461bcd60e51b815260206004820152603c60248201527f526f7574657243726f737354616c6b203a204f6e6c792047656e65726963486160448201527f6e646c65722063616e2063616c6c20746869732066756e6374696f6e0000000060648201526084016103a0565b60ff821660009081526006602052604090205482906001600160a01b0316156106655760405162461bcd60e51b815260206004820152603660248201527f526f7574657243726f737354616c6b203a2043726f737320436861696e20436f60448201527f6e747261637420746f20436861696e204944207365740000000000000000000060648201526084016103a0565b60ff8316600081815260066020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03871690811790915590519092917f53c7bf44dd47ad6fd3a8aac7c23d9ad4bddd7ec5889d7afef3450216586460a391a3505050565b606081518351146107475760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d61746368000000000000000000000000000000000000000000000060648201526084016103a0565b6000835167ffffffffffffffff811115610763576107636119bc565b60405190808252806020026020018201604052801561078c578160200160208202803683370190505b50905060005b8451811015610804576107d78582815181106107b0576107b0611f52565b60200260200101518583815181106107ca576107ca611f52565b6020026020010151610326565b8282815181106107e9576107e9611f52565b60209081029190910101526107fd81611f7e565b9050610792565b509392505050565b610817338383611042565b5050565b60ff8516600090815260066020526040812054606090879087906001600160a01b038083169116146108b55760405162461bcd60e51b815260206004820152602b60248201527f526f7574657243726f737354616c6b203a20536f75726365204164647265737360448201527f204e6f74206c696e6b656400000000000000000000000000000000000000000060648201526084016103a0565b6003546001600160a01b0316336001600160a01b03161461093e5760405162461bcd60e51b815260206004820152603c60248201527f526f7574657243726f737354616c6b203a204f6e6c792047656e65726963486160448201527f6e646c65722063616e2063616c6c20746869732066756e6374696f6e0000000060648201526084016103a0565b600354604080516302cb03d960e61b815290516000926001600160a01b03169163b2c0f6409160048083019260209291908290030181865afa158015610988573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ac9190611f97565b60ff8b8116600090815260066020908152604091829020548b518c83012083516001600160a01b0390921682840152308285015293851660608201526001600160e01b03198d16608082015260a0808201949094528251808203909401845260c0019091528151910120909150868114610a685760405162461bcd60e51b815260206004820152601760248201527f526f7574657253796e63203a2056616c6964204861736800000000000000000060448201526064016103a0565b600080610a758b8b611136565b915091508a7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168460ff168e60ff167fb3a53a1237ae593ae811003a1899538674d696d17994453f2f97e892409e5cce8f308f8f604051610ad69493929190611fb4565b60405180910390a4909c909b509950505050505050505050565b6000333014610b675760405162461bcd60e51b815260206004820152603860248201527f526f7574657243726f737354616c6b203a2043616e206f6e6c7920626520636160448201527f6c6c65642062792043757272656e7420436f6e7472616374000000000000000060648201526084016103a0565b610b7385858585611228565b506001949350505050565b60035460405163095ea7b360e01b81526001600160a01b03918216600482015260248101839052839182169063095ea7b3906044016020604051808303816000875af1158015610bd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf69190611ff1565b50505050565b6001600160a01b038516331480610c185750610c1885336102d2565b610c8a5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f766564000000000000000000000000000000000000000000000060648201526084016103a0565b61054485858585856113ee565b6003546001600160a01b0316336001600160a01b031614610d205760405162461bcd60e51b815260206004820152603c60248201527f526f7574657243726f737354616c6b203a204f6e6c792047656e65726963486160448201527f6e646c65722063616e2063616c6c20746869732066756e6374696f6e0000000060648201526084016103a0565b60ff81166000818152600660205260408082205490516001600160a01b0390911692917f566e5d71d4547dca8d21d2527ec375bb6ad1052ea20ab35c3f310aba1d6bc66b91a360ff166000908152600660205260409020805473ffffffffffffffffffffffffffffffffffffffff19169055565b60006001600160e01b03198216636cdb3d1360e11b1480610dc557506001600160e01b031982166303a24d0760e21b145b8061040f57506301ffc9a760e01b6001600160e01b031983161461040f565b8151835114610e465760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016103a0565b6001600160a01b038416610eaa5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016103a0565b3360005b8451811015610fd4576000858281518110610ecb57610ecb611f52565b602002602001015190506000858381518110610ee957610ee9611f52565b602090810291909101810151600084815280835260408082206001600160a01b038e168352909352919091205490915081811015610f7c5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016103a0565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610fb990849061200e565b9250508190555050505080610fcd90611f7e565b9050610eae565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051611024929190612026565b60405180910390a461103a818787878787611599565b505050505050565b816001600160a01b0316836001600160a01b0316036110c95760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c66000000000000000000000000000000000000000000000060648201526084016103a0565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b600060606000806000808680602001905181019061115491906120ba565b9350935093509350600080306001600160a01b03168a87878787604051602401611181949392919061219b565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b03199094169390931790925290516111d491906121ee565b6000604051808303816000865af19150503d8060008114611211576040519150601f19603f3d011682016040523d82523d6000602084013e611216565b606091505b50909b909a5098505050505050505050565b6001600160a01b0384166112885760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016103a0565b81518351146112ea5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016103a0565b3360005b84518110156113865783818151811061130957611309611f52565b602002602001015160008087848151811061132657611326611f52565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b03168152602001908152602001600020600082825461136e919061200e565b9091555081905061137e81611f7e565b9150506112ee565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516113d7929190612026565b60405180910390a461054481600087878787611599565b6001600160a01b0384166114525760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016103a0565b33600061145e85611747565b9050600061146b85611747565b90506000868152602081815260408083206001600160a01b038c168452909152902054858110156114f15760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016103a0565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a1682528120805488929061152e90849061200e565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461158e848a8a8a8a8a611792565b505050505050505050565b6001600160a01b0384163b1561103a5760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906115dd908990899088908890889060040161220a565b6020604051808303816000875af1925050508015611618575060408051601f3d908101601f1916820190925261161591810190612268565b60015b6116cd57611624612285565b806308c379a00361165d57506116386122a1565b80611643575061165f565b8060405162461bcd60e51b81526004016103a091906119a9565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016103a0565b6001600160e01b0319811663bc197c8160e01b1461173e5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016103a0565b50505050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061178157611781611f52565b602090810291909101015292915050565b6001600160a01b0384163b1561103a5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906117d6908990899088908890889060040161232b565b6020604051808303816000875af1925050508015611811575060408051601f3d908101601f1916820190925261180e91810190612268565b60015b61181d57611624612285565b6001600160e01b0319811663f23a6e6160e01b1461173e5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016103a0565b6001600160a01b03811681146118a357600080fd5b50565b600080604083850312156118b957600080fd5b82356118c48161188e565b946020939093013593505050565b6001600160e01b0319811681146118a357600080fd5b6000602082840312156118fa57600080fd5b8135611905816118d2565b9392505050565b60ff811681146118a357600080fd5b60006020828403121561192d57600080fd5b81356119058161190c565b60006020828403121561194a57600080fd5b5035919050565b60005b8381101561196c578181015183820152602001611954565b83811115610bf65750506000910152565b60008151808452611995816020860160208601611951565b601f01601f19169290920160200192915050565b602081526000611905602083018461197d565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156119f8576119f86119bc565b6040525050565b600067ffffffffffffffff821115611a1957611a196119bc565b5060051b60200190565b600082601f830112611a3457600080fd5b81356020611a41826119ff565b604051611a4e82826119d2565b83815260059390931b8501820192828101915086841115611a6e57600080fd5b8286015b84811015611a895780358352918301918301611a72565b509695505050505050565b600067ffffffffffffffff821115611aae57611aae6119bc565b50601f01601f191660200190565b600082601f830112611acd57600080fd5b8135611ad881611a94565b604051611ae582826119d2565b828152856020848701011115611afa57600080fd5b82602086016020830137600092810160200192909252509392505050565b600080600080600060a08688031215611b3057600080fd5b8535611b3b8161188e565b94506020860135611b4b8161188e565b9350604086013567ffffffffffffffff80821115611b6857600080fd5b611b7489838a01611a23565b94506060880135915080821115611b8a57600080fd5b611b9689838a01611a23565b93506080880135915080821115611bac57600080fd5b50611bb988828901611abc565b9150509295509295909350565b60008060408385031215611bd957600080fd5b8235611be48161190c565b91506020830135611bf48161188e565b809150509250929050565b60008060408385031215611c1257600080fd5b823567ffffffffffffffff80821115611c2a57600080fd5b818501915085601f830112611c3e57600080fd5b81356020611c4b826119ff565b604051611c5882826119d2565b83815260059390931b8501820192828101915089841115611c7857600080fd5b948201945b83861015611c9f578535611c908161188e565b82529482019490820190611c7d565b96505086013592505080821115611cb557600080fd5b50611cc285828601611a23565b9150509250929050565b600081518084526020808501945080840160005b83811015611cfc57815187529582019590820190600101611ce0565b509495945050505050565b6020815260006119056020830184611ccc565b80151581146118a357600080fd5b60008060408385031215611d3b57600080fd5b8235611d468161188e565b91506020830135611bf481611d1a565b600080600080600060a08688031215611d6e57600080fd5b8535611d798161190c565b94506020860135611d898161188e565b93506040860135611d99816118d2565b9250606086013567ffffffffffffffff811115611db557600080fd5b611dc188828901611abc565b95989497509295608001359392505050565b8215158152604060208201526000611dee604083018461197d565b949350505050565b60008060008060808587031215611e0c57600080fd5b8435611e178161188e565b9350602085013567ffffffffffffffff80821115611e3457600080fd5b611e4088838901611a23565b94506040870135915080821115611e5657600080fd5b611e6288838901611a23565b93506060870135915080821115611e7857600080fd5b50611e8587828801611abc565b91505092959194509250565b60008060408385031215611ea457600080fd5b8235611be48161188e565b600080600080600060a08688031215611ec757600080fd5b8535611ed28161188e565b94506020860135611ee28161188e565b93506040860135925060608601359150608086013567ffffffffffffffff811115611f0c57600080fd5b611bb988828901611abc565b600181811c90821680611f2c57607f821691505b602082108103611f4c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611f9057611f90611f68565b5060010190565b600060208284031215611fa957600080fd5b81516119058161190c565b60006001600160a01b03808716835280861660208401525060806040830152611fe0608083018561197d565b905082606083015295945050505050565b60006020828403121561200357600080fd5b815161190581611d1a565b6000821982111561202157612021611f68565b500190565b6040815260006120396040830185611ccc565b828103602084015261204b8185611ccc565b95945050505050565b600082601f83011261206557600080fd5b81516020612072826119ff565b60405161207f82826119d2565b83815260059390931b850182019282810191508684111561209f57600080fd5b8286015b84811015611a8957805183529183019183016120a3565b600080600080608085870312156120d057600080fd5b84516120db8161188e565b602086015190945067ffffffffffffffff808211156120f957600080fd5b61210588838901612054565b9450604087015191508082111561211b57600080fd5b61212788838901612054565b9350606087015191508082111561213d57600080fd5b508501601f8101871361214f57600080fd5b805161215a81611a94565b60405161216782826119d2565b82815289602084860101111561217c57600080fd5b61218d836020830160208701611951565b969995985093965050505050565b6001600160a01b03851681526080602082015260006121bd6080830186611ccc565b82810360408401526121cf8186611ccc565b905082810360608401526121e3818561197d565b979650505050505050565b60008251612200818460208701611951565b9190910192915050565b60006001600160a01b03808816835280871660208401525060a0604083015261223660a0830186611ccc565b82810360608401526122488186611ccc565b9050828103608084015261225c818561197d565b98975050505050505050565b60006020828403121561227a57600080fd5b8151611905816118d2565b600060033d111561229e5760046000803e5060005160e01c5b90565b600060443d10156122af5790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156122df57505050505090565b82850191508151818111156122f75750505050505090565b843d87010160208285010111156123115750505050505090565b612320602082860101876119d2565b509095945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a060808301526121e360a083018461197d56fea164736f6c634300080d000a";

type CrossChainERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainERC1155__factory extends ContractFactory {
  constructor(...args: CrossChainERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    genericHandler_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrossChainERC1155> {
    return super.deploy(
      uri_,
      genericHandler_,
      overrides || {}
    ) as Promise<CrossChainERC1155>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    genericHandler_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, genericHandler_, overrides || {});
  }
  override attach(address: string): CrossChainERC1155 {
    return super.attach(address) as CrossChainERC1155;
  }
  override connect(signer: Signer): CrossChainERC1155__factory {
    return super.connect(signer) as CrossChainERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainERC1155Interface {
    return new utils.Interface(_abi) as CrossChainERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainERC1155 {
    return new Contract(address, _abi, signerOrProvider) as CrossChainERC1155;
  }
}
