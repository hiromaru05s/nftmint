import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const contractABI = [
  // コントラクトのABIをここに追加
];

const contractAddress  = "YOUR_CONTRACT_ADDRESS";

async function mintNFTs() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_PROVIDER_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
  const contract = new ethers.Contract(contractAddress, contractABI, wallet);

  const tokenURIs = [
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata1.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata2.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata3.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata4.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata5.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata6.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata7.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata8.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata9.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata10.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata11.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata12.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata13.json",
    "https://bronze-peculiar-octopus-170.mypinata.cloud/ipfs/QmQ1w6UVv3owtDxJH1gioY2KhvTfWg9m413y399NBHwVNS/metadata14.json",
  ];

  for (const tokenURI of tokenURIs) {
    try {
      const tx = await contract.mint(wallet.address, tokenURI);
      await tx.wait();
      console.log(`Minted NFT with tokenURI: ${tokenURI}`);
    } catch (error) {
      console.error(`Error minting NFT with tokenURI: ${tokenURI}`, error);
    }
  }
}

mintNFTs().catch((error) => {
  console.error("Error minting NFTs:", error);
});
