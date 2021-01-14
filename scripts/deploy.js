async function main() {
  // We get the contract to deploy
  const initialHolder = "0x5518876726C060b2D3fCda75c0B9f31F13b78D07";
  const tokenAddress = "0x22b29196c49aA443d3E65297Eb5faE21D9CF1fe7";
  // const TrustSwapTokenFactory = await ethers.getContractFactory(
  //   "TrustSwapToken"
  // );
  // const trustToken = await TrustSwapTokenFactory.deploy(
  //   "TrustSwap Token",
  //   "SWAP",
  //   18,
  //   initialHolder,
  //   ethers.utils.parseEther("1000000")
  // );

  // console.log("TrustSwapTokenFactory deployed to:", trustToken.address);
  const SwapTokenLockerFactory = await ethers.getContractFactory(
    "SwapTokenLocker"
  );
  const SwapTokenLocker = await SwapTokenLockerFactory.deploy(
    tokenAddress,
    initialHolder
  );
  console.log("SwapTokenLocker deployed to:", SwapTokenLocker.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
