/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  CrossChainTokenTimelock,
  CrossChainTokenTimelockInterface,
} from "../../../../../../contracts/token/ERC20/utils/TokenTimelock.sol/CrossChainTokenTimelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICrossChainERC20",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "releaseTime_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "beneficiary",
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
        name: "chainID",
        type: "uint8",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseTime",
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
    name: "token",
    outputs: [
      {
        internalType: "contract ICrossChainERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b5060405161081238038061081283398101604081905261002f916100d0565b42811161009d5760405162461bcd60e51b815260206004820152603260248201527f546f6b656e54696d656c6f636b3a2072656c656173652074696d65206973206260448201527165666f72652063757272656e742074696d6560701b606482015260840160405180910390fd5b6001600160a01b03928316608052911660a05260c052610113565b6001600160a01b03811681146100cd57600080fd5b50565b6000806000606084860312156100e557600080fd5b83516100f0816100b8565b6020850151909350610101816100b8565b80925050604084015190509250925092565b60805160a05160c0516106b861015a6000396000818160aa015260fb015260008181606801526102af01526000818160d501528181610198015261028c01526106b86000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063148836a21461005157806338af3eed14610066578063b91d4001146100a5578063fc0c546a146100d3575b600080fd5b61006461005f3660046105d2565b6100f9565b005b7f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b6040517f0000000000000000000000000000000000000000000000000000000000000000815260200161009c565b7f0000000000000000000000000000000000000000000000000000000000000000610088565b7f00000000000000000000000000000000000000000000000000000000000000004210156101945760405162461bcd60e51b815260206004820152603260248201527f546f6b656e54696d656c6f636b3a2063757272656e742074696d65206973206260448201527f65666f72652072656c656173652074696d65000000000000000000000000000060648201526084015b60405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000006040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa1580156101fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022191906105f5565b90506000811161027f5760405162461bcd60e51b815260206004820152602360248201527f546f6b656e54696d656c6f636b3a206e6f20746f6b656e7320746f2072656c6560448201526261736560e81b606482015260840161018b565b6102d46001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016837f0000000000000000000000000000000000000000000000000000000000000000846102d8565b5050565b6040805160ff851660248201526001600160a01b038416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16636daaaa4d60e01b17905261034890859061034e565b50505050565b60006103a3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166104389092919063ffffffff16565b80519091501561043357808060200190518101906103c1919061060e565b6104335760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161018b565b505050565b60606104478484600085610451565b90505b9392505050565b6060824710156104c95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161018b565b6001600160a01b0385163b6105205760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161018b565b600080866001600160a01b0316858760405161053c919061065c565b60006040518083038185875af1925050503d8060008114610579576040519150601f19603f3d011682016040523d82523d6000602084013e61057e565b606091505b509150915061058e828286610599565b979650505050505050565b606083156105a857508161044a565b8251156105b85782518084602001fd5b8160405162461bcd60e51b815260040161018b9190610678565b6000602082840312156105e457600080fd5b813560ff8116811461044a57600080fd5b60006020828403121561060757600080fd5b5051919050565b60006020828403121561062057600080fd5b8151801515811461044a57600080fd5b60005b8381101561064b578181015183820152602001610633565b838111156103485750506000910152565b6000825161066e818460208701610630565b9190910192915050565b6020815260008251806020840152610697816040850160208701610630565b601f01601f1916919091016040019291505056fea164736f6c634300080d000a";

type CrossChainTokenTimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainTokenTimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainTokenTimelock__factory extends ContractFactory {
  constructor(...args: CrossChainTokenTimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    token_: PromiseOrValue<string>,
    beneficiary_: PromiseOrValue<string>,
    releaseTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrossChainTokenTimelock> {
    return super.deploy(
      token_,
      beneficiary_,
      releaseTime_,
      overrides || {}
    ) as Promise<CrossChainTokenTimelock>;
  }
  override getDeployTransaction(
    token_: PromiseOrValue<string>,
    beneficiary_: PromiseOrValue<string>,
    releaseTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      token_,
      beneficiary_,
      releaseTime_,
      overrides || {}
    );
  }
  override attach(address: string): CrossChainTokenTimelock {
    return super.attach(address) as CrossChainTokenTimelock;
  }
  override connect(signer: Signer): CrossChainTokenTimelock__factory {
    return super.connect(signer) as CrossChainTokenTimelock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainTokenTimelockInterface {
    return new utils.Interface(_abi) as CrossChainTokenTimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainTokenTimelock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainTokenTimelock;
  }
}