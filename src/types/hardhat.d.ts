/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Governor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governor__factory>;
    getContractFactory(
      name: "IGovernor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernor__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC777",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC777__factory>;
    getContractFactory(
      name: "IERC777",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777__factory>;
    getContractFactory(
      name: "IERC777Recipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777Recipient__factory>;
    getContractFactory(
      name: "IERC777Sender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777Sender__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC1820Registry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1820Registry__factory>;
    getContractFactory(
      name: "DoubleEndedQueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DoubleEndedQueue__factory>;
    getContractFactory(
      name: "IGenericHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGenericHandler__factory>;
    getContractFactory(
      name: "IRouterCrossTalk",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouterCrossTalk__factory>;
    getContractFactory(
      name: "RouterCrossTalk",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RouterCrossTalk__factory>;
    getContractFactory(
      name: "CrossChainGovernor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainGovernor__factory>;
    getContractFactory(
      name: "ICrossChainGovernor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrossChainGovernor__factory>;
    getContractFactory(
      name: "MyCrossChainERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyCrossChainERC1155__factory>;
    getContractFactory(
      name: "MyCrossChainERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyCrossChainERC20__factory>;
    getContractFactory(
      name: "GenericHandlerTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GenericHandlerTest__factory>;
    getContractFactory(
      name: "CrossChainERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainERC1155__factory>;
    getContractFactory(
      name: "CrossChainERC1155Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainERC1155Burnable__factory>;
    getContractFactory(
      name: "CrossChainERC1155Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainERC1155Pausable__factory>;
    getContractFactory(
      name: "CrossChainERC1155URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainERC1155URIStorage__factory>;
    getContractFactory(
      name: "ICrossChainERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrossChainERC1155MetadataURI__factory>;
    getContractFactory(
      name: "ICrossChainERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrossChainERC1155__factory>;
    getContractFactory(
      name: "CrossChainERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainERC20__factory>;
    getContractFactory(
      name: "CrossChainERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainERC20Burnable__factory>;
    getContractFactory(
      name: "CrossChainERC20Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainERC20Pausable__factory>;
    getContractFactory(
      name: "ICrossChainERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrossChainERC20Metadata__factory>;
    getContractFactory(
      name: "ICrossChainERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrossChainERC20__factory>;
    getContractFactory(
      name: "CrossChainTokenTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainTokenTimelock__factory>;
    getContractFactory(
      name: "CrossChainERC777",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainERC777__factory>;
    getContractFactory(
      name: "ICrossChainERC777",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrossChainERC777__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Governor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governor>;
    getContractAt(
      name: "IGovernor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernor>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC777",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC777>;
    getContractAt(
      name: "IERC777",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC777>;
    getContractAt(
      name: "IERC777Recipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC777Recipient>;
    getContractAt(
      name: "IERC777Sender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC777Sender>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC1820Registry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1820Registry>;
    getContractAt(
      name: "DoubleEndedQueue",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DoubleEndedQueue>;
    getContractAt(
      name: "IGenericHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGenericHandler>;
    getContractAt(
      name: "IRouterCrossTalk",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouterCrossTalk>;
    getContractAt(
      name: "RouterCrossTalk",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RouterCrossTalk>;
    getContractAt(
      name: "CrossChainGovernor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainGovernor>;
    getContractAt(
      name: "ICrossChainGovernor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrossChainGovernor>;
    getContractAt(
      name: "MyCrossChainERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyCrossChainERC1155>;
    getContractAt(
      name: "MyCrossChainERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyCrossChainERC20>;
    getContractAt(
      name: "GenericHandlerTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GenericHandlerTest>;
    getContractAt(
      name: "CrossChainERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainERC1155>;
    getContractAt(
      name: "CrossChainERC1155Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainERC1155Burnable>;
    getContractAt(
      name: "CrossChainERC1155Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainERC1155Pausable>;
    getContractAt(
      name: "CrossChainERC1155URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainERC1155URIStorage>;
    getContractAt(
      name: "ICrossChainERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrossChainERC1155MetadataURI>;
    getContractAt(
      name: "ICrossChainERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrossChainERC1155>;
    getContractAt(
      name: "CrossChainERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainERC20>;
    getContractAt(
      name: "CrossChainERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainERC20Burnable>;
    getContractAt(
      name: "CrossChainERC20Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainERC20Pausable>;
    getContractAt(
      name: "ICrossChainERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrossChainERC20Metadata>;
    getContractAt(
      name: "ICrossChainERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrossChainERC20>;
    getContractAt(
      name: "CrossChainTokenTimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainTokenTimelock>;
    getContractAt(
      name: "CrossChainERC777",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainERC777>;
    getContractAt(
      name: "ICrossChainERC777",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrossChainERC777>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
