import { expect } from "chai";
import hre from "hardhat";

describe("Testing ERC-1155 Open zeppelin Contract", function () {
  beforeEach(async function () {
    this.hre = hre;
    this.accounts = await this.hre.ethers.getSigners();
    this.tester1 = this.accounts[0].address;
    this.tester2 = this.accounts[2].address;

    this.bridge = await this.hre.ethers.getContractFactory("GenericHandlerTest");
    this.bridgeInstance = await this.bridge.deploy();
    await this.bridgeInstance.deployed();

    this.MyCrossChainERC1155 = await this.hre.ethers.getContractFactory("MyCrossChainERC1155");
    this.MyCrossChainERC1155Instance = await this.MyCrossChainERC1155.deploy("abcd.xyz", this.bridgeInstance.address);
    await this.MyCrossChainERC1155Instance.deployed();

    await this.MyCrossChainERC1155Instance.mint(this.tester2, [1, 2, 3], [10, 11, 12]);

    this.network = await this.hre.ethers.provider.getNetwork();

    await this.bridgeInstance.linkContract(
      this.MyCrossChainERC1155Instance.address,
      111,
      this.MyCrossChainERC1155Instance.address,
    );
  });

  it("Router Crosstalk - Checking transferCrossChain Function", async function () {
    await this.MyCrossChainERC1155Instance.setCrossChainGasLimit(100000);
    let gas = await this.MyCrossChainERC1155Instance.fetchCrossChainGasLimit();
    console.log("GAS = " + gas.toString());
    await this.MyCrossChainERC1155Instance.transferCrossChain(
      111,
      this.tester2,
      [1, 2, 3],
      [5, 5, 5],
      "0x00",
      1000000000,
    );
    let Logs = await this.MyCrossChainERC1155Instance.queryFilter("CrossTalkSend");
    let Logs1 = await this.bridgeInstance.queryFilter("deposit");
    await this.bridgeInstance.execute(
      this.MyCrossChainERC1155Instance.address,
      Logs[0].args.sourceChain,
      Logs[0].args.sourceAddress,
      Logs1[0].args._data,
    );
    let balanceTester1 = await this.MyCrossChainERC1155Instance.balanceOfBatch(
      [this.tester1, this.tester1, this.tester1],
      [1, 2, 3],
    );
    let balanceTester2 = await this.MyCrossChainERC1155Instance.balanceOfBatch(
      [this.tester2, this.tester2, this.tester2],
      [1, 2, 3],
    );
    console.log("BALANCE OF TESTER 1 " + balanceTester1);
    console.log("BALANCE OF TESTER 2 " + balanceTester2);
    expect(balanceTester2[0].toString()).to.be.equal("15");
    expect(balanceTester2[1].toString()).to.be.equal("16");
    expect(balanceTester2[2].toString()).to.be.equal("17");
  });
});
