/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace IRouterCrossTalk {
  export type ExecutesStructStruct = {
    chainID: PromiseOrValue<BigNumberish>;
    nonce: PromiseOrValue<BigNumberish>;
  };

  export type ExecutesStructStructOutput = [number, BigNumber] & {
    chainID: number;
    nonce: BigNumber;
  };
}

export interface IRouterCrossTalkInterface extends utils.Interface {
  functions: {
    "Link(uint8,address)": FunctionFragment;
    "Unlink(uint8)": FunctionFragment;
    "fetchExecutes(bytes32)": FunctionFragment;
    "fetchFeeToken()": FunctionFragment;
    "fetchHandler()": FunctionFragment;
    "fetchLink(uint8)": FunctionFragment;
    "fetchLinkSetter()": FunctionFragment;
    "routerSync(uint8,address,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "Link"
      | "Unlink"
      | "fetchExecutes"
      | "fetchFeeToken"
      | "fetchHandler"
      | "fetchLink"
      | "fetchLinkSetter"
      | "routerSync"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "Link",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "Unlink",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchExecutes",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchFeeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fetchHandler",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fetchLink",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchLinkSetter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "routerSync",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "Link", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Unlink", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetchExecutes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchFeeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fetchLink", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetchLinkSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "routerSync", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "CrossTalkReceive(uint8,uint8,address)": EventFragment;
    "CrossTalkSend(uint8,uint8,address,address,bytes4,bytes,bytes32)": EventFragment;
    "Linkevent(uint8,address)": EventFragment;
    "Unlinkevent(uint8,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CrossTalkReceive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CrossTalkSend"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Linkevent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unlinkevent"): EventFragment;
}

export interface CrossTalkReceiveEventObject {
  sourceChain: number;
  destChain: number;
  sourceAddress: string;
}
export type CrossTalkReceiveEvent = TypedEvent<
  [number, number, string],
  CrossTalkReceiveEventObject
>;

export type CrossTalkReceiveEventFilter =
  TypedEventFilter<CrossTalkReceiveEvent>;

export interface CrossTalkSendEventObject {
  sourceChain: number;
  destChain: number;
  sourceAddress: string;
  destinationAddress: string;
  _selector: string;
  _data: string;
  _hash: string;
}
export type CrossTalkSendEvent = TypedEvent<
  [number, number, string, string, string, string, string],
  CrossTalkSendEventObject
>;

export type CrossTalkSendEventFilter = TypedEventFilter<CrossTalkSendEvent>;

export interface LinkeventEventObject {
  ChainID: number;
  linkedContract: string;
}
export type LinkeventEvent = TypedEvent<[number, string], LinkeventEventObject>;

export type LinkeventEventFilter = TypedEventFilter<LinkeventEvent>;

export interface UnlinkeventEventObject {
  ChainID: number;
  linkedContract: string;
}
export type UnlinkeventEvent = TypedEvent<
  [number, string],
  UnlinkeventEventObject
>;

export type UnlinkeventEventFilter = TypedEventFilter<UnlinkeventEvent>;

export interface IRouterCrossTalk extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRouterCrossTalkInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    Link(
      _chainID: PromiseOrValue<BigNumberish>,
      _linkedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    Unlink(
      _chainID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fetchExecutes(
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[IRouterCrossTalk.ExecutesStructStructOutput]>;

    fetchFeeToken(overrides?: CallOverrides): Promise<[string]>;

    fetchHandler(overrides?: CallOverrides): Promise<[string]>;

    fetchLink(
      _chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fetchLinkSetter(overrides?: CallOverrides): Promise<[string]>;

    routerSync(
      srcChainID: PromiseOrValue<BigNumberish>,
      srcAddress: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  Link(
    _chainID: PromiseOrValue<BigNumberish>,
    _linkedContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  Unlink(
    _chainID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fetchExecutes(
    _hash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<IRouterCrossTalk.ExecutesStructStructOutput>;

  fetchFeeToken(overrides?: CallOverrides): Promise<string>;

  fetchHandler(overrides?: CallOverrides): Promise<string>;

  fetchLink(
    _chainID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  fetchLinkSetter(overrides?: CallOverrides): Promise<string>;

  routerSync(
    srcChainID: PromiseOrValue<BigNumberish>,
    srcAddress: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    Link(
      _chainID: PromiseOrValue<BigNumberish>,
      _linkedContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    Unlink(
      _chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    fetchExecutes(
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IRouterCrossTalk.ExecutesStructStructOutput>;

    fetchFeeToken(overrides?: CallOverrides): Promise<string>;

    fetchHandler(overrides?: CallOverrides): Promise<string>;

    fetchLink(
      _chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    fetchLinkSetter(overrides?: CallOverrides): Promise<string>;

    routerSync(
      srcChainID: PromiseOrValue<BigNumberish>,
      srcAddress: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "CrossTalkReceive(uint8,uint8,address)"(
      sourceChain?: PromiseOrValue<BigNumberish> | null,
      destChain?: PromiseOrValue<BigNumberish> | null,
      sourceAddress?: null
    ): CrossTalkReceiveEventFilter;
    CrossTalkReceive(
      sourceChain?: PromiseOrValue<BigNumberish> | null,
      destChain?: PromiseOrValue<BigNumberish> | null,
      sourceAddress?: null
    ): CrossTalkReceiveEventFilter;

    "CrossTalkSend(uint8,uint8,address,address,bytes4,bytes,bytes32)"(
      sourceChain?: PromiseOrValue<BigNumberish> | null,
      destChain?: PromiseOrValue<BigNumberish> | null,
      sourceAddress?: null,
      destinationAddress?: null,
      _selector?: PromiseOrValue<BytesLike> | null,
      _data?: null,
      _hash?: null
    ): CrossTalkSendEventFilter;
    CrossTalkSend(
      sourceChain?: PromiseOrValue<BigNumberish> | null,
      destChain?: PromiseOrValue<BigNumberish> | null,
      sourceAddress?: null,
      destinationAddress?: null,
      _selector?: PromiseOrValue<BytesLike> | null,
      _data?: null,
      _hash?: null
    ): CrossTalkSendEventFilter;

    "Linkevent(uint8,address)"(
      ChainID?: PromiseOrValue<BigNumberish> | null,
      linkedContract?: PromiseOrValue<string> | null
    ): LinkeventEventFilter;
    Linkevent(
      ChainID?: PromiseOrValue<BigNumberish> | null,
      linkedContract?: PromiseOrValue<string> | null
    ): LinkeventEventFilter;

    "Unlinkevent(uint8,address)"(
      ChainID?: PromiseOrValue<BigNumberish> | null,
      linkedContract?: PromiseOrValue<string> | null
    ): UnlinkeventEventFilter;
    Unlinkevent(
      ChainID?: PromiseOrValue<BigNumberish> | null,
      linkedContract?: PromiseOrValue<string> | null
    ): UnlinkeventEventFilter;
  };

  estimateGas: {
    Link(
      _chainID: PromiseOrValue<BigNumberish>,
      _linkedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    Unlink(
      _chainID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fetchExecutes(
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fetchFeeToken(overrides?: CallOverrides): Promise<BigNumber>;

    fetchHandler(overrides?: CallOverrides): Promise<BigNumber>;

    fetchLink(
      _chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fetchLinkSetter(overrides?: CallOverrides): Promise<BigNumber>;

    routerSync(
      srcChainID: PromiseOrValue<BigNumberish>,
      srcAddress: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    Link(
      _chainID: PromiseOrValue<BigNumberish>,
      _linkedContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    Unlink(
      _chainID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fetchExecutes(
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fetchFeeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fetchHandler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fetchLink(
      _chainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fetchLinkSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    routerSync(
      srcChainID: PromiseOrValue<BigNumberish>,
      srcAddress: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
