import { expect } from "chai";
import hre from "hardhat";

describe("Testing Bridge Contract", function () {
  beforeEach(async function () {
    this.hre = hre;
    this.accounts = await this.hre.ethers.getSigners();
    this.tester1 = this.accounts[0].address;
    this.tester2 = this.accounts[2].address;

    this.bridge = await this.hre.ethers.getContractFactory("GenericHandlerTest");
    this.bridgeInstance = await this.bridge.deploy();
    await this.bridgeInstance.deployed();

    this.CrossChainERC20 = await this.hre.ethers.getContractFactory("MyCrossChainERC20");
    this.CrossChainERC20Instance = await this.CrossChainERC20.deploy(
      "CrossChainERC20",
      "CCERC",
      this.bridgeInstance.address,
    );
    await this.CrossChainERC20Instance.deployed();

    await this.CrossChainERC20Instance.faucet(this.tester1, 3000);
    await this.CrossChainERC20Instance.faucet(this.tester2, 3000);

    this.network = await this.hre.ethers.provider.getNetwork();

    await this.bridgeInstance.linkContract(
      this.CrossChainERC20Instance.address,
      111,
      this.CrossChainERC20Instance.address,
    );
  });

  it("Router Crosstalk - Checking SendCrossChain Function", async function () {
    await this.CrossChainERC20Instance.setCrossChainGasLimit(100000);
    const args = await this.CrossChainERC20Instance.transferCrossChain(111, this.tester2, 1000, 1000000000);
    console.log(args[0], args[1]);
    let Logs = await this.CrossChainERC20Instance.queryFilter("CrossTalkSend");
    let Logs1 = await this.bridgeInstance.queryFilter("deposit");
    await this.bridgeInstance.execute(
      this.CrossChainERC20Instance.address,
      Logs[0].args.sourceChain,
      Logs[0].args.sourceAddress,
      Logs1[0].args._data,
    );
    let balanceTester1 = await this.CrossChainERC20Instance.balanceOf(this.tester1);
    let balanceTester2 = await this.CrossChainERC20Instance.balanceOf(this.tester2);
    console.log("BALANCE OF TESTER 1 " + balanceTester1.toString());
    console.log("BALANCE OF TESTER 2 " + balanceTester2.toString());
    expect(balanceTester2.toString()).to.be.equal("4000");
  });
});
