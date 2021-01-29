async function main() {
  // We get the contract to deploy
  const initialHolder = "0x5518876726C060b2D3fCda75c0B9f31F13b78D07";
  const usdt = "0xA3DaD7756d3B393bAf768eB3d5A7dAec6D77F8b6";
  const usdc = "0xEdd738877C6a828F7D9478734E8438E62858314E";
  const dai = "0x7472526142268C13AC586107cFcB0fD46bD1Db93";
  const locker = "0x08506bA6a24a26c234f5c21D191Fc8ce3E6B3832";
  // const tokenAddress = "0x22b29196c49aA443d3E65297Eb5faE21D9CF1fe7";
  // const swapAddress = "0xcc4304a31d09258b0029ea7fe63d032f52e44efe";
  /*const MockERC20 = await ethers.getContractFactory("MockERC20");
  const usdt = await MockERC20.deploy(
    "Mock USDT",
    "USDT",
    6,
    initialHolder,
    "1000000000000"
  );

  console.log("USDT deployed to:", usdt.address);

  const usdc = await MockERC20.deploy(
    "Mock USDC",
    "USDC",
    6,
    initialHolder,
    "1000000000000"
  );

  console.log("USDC deployed to:", usdc.address);

  const dai = await MockERC20.deploy(
    "Mock DAI",
    "DAI",
    18,
    initialHolder,
    ethers.utils.parseEther("1000000")
  );

  console.log("DAI deployed to:", dai.address);*/
  const SwapTokenLockerFactory = await ethers.getContractFactory(
    "SwapTokenLocker"
  );
  const SwapTokenLocker = await SwapTokenLockerFactory.deploy(initialHolder);
  console.log("SwapTokenLocker deployed to:", SwapTokenLocker.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
