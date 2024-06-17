import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const contractABI = [
    [
        {
          "type": "constructor",
          "inputs": [
            {
              "name": "name_",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "symbol_",
              "type": "string",
              "internalType": "string"
            }
          ],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "approve",
          "inputs": [
            {
              "name": "to",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "balanceOf",
          "inputs": [
            {
              "name": "owner",
              "type": "address",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "getApproved",
          "inputs": [
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "isApprovedForAll",
          "inputs": [
            {
              "name": "owner",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "operator",
              "type": "address",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bool",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "maxTokens",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "mint",
          "inputs": [
            {
              "name": "to",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "uri",
              "type": "string",
              "internalType": "string"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "name",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "string",
              "internalType": "string"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "owner",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "ownerOf",
          "inputs": [
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "address",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "renounceOwnership",
          "inputs": [],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "safeTransferFrom",
          "inputs": [
            {
              "name": "from",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "to",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "safeTransferFrom",
          "inputs": [
            {
              "name": "from",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "to",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "data",
              "type": "bytes",
              "internalType": "bytes"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "setApprovalForAll",
          "inputs": [
            {
              "name": "operator",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "approved",
              "type": "bool",
              "internalType": "bool"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "supportsInterface",
          "inputs": [
            {
              "name": "interfaceId",
              "type": "bytes4",
              "internalType": "bytes4"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "bool",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "symbol",
          "inputs": [],
          "outputs": [
            {
              "name": "",
              "type": "string",
              "internalType": "string"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "tokenURI",
          "inputs": [
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "name": "",
              "type": "string",
              "internalType": "string"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "transferFrom",
          "inputs": [
            {
              "name": "from",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "to",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "transferOwnership",
          "inputs": [
            {
              "name": "newOwner",
              "type": "address",
              "internalType": "address"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "event",
          "name": "Approval",
          "inputs": [
            {
              "name": "owner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "approved",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "tokenId",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "ApprovalForAll",
          "inputs": [
            {
              "name": "owner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "operator",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "approved",
              "type": "bool",
              "indexed": false,
              "internalType": "bool"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "BatchMetadataUpdate",
          "inputs": [
            {
              "name": "_fromTokenId",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            },
            {
              "name": "_toTokenId",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "MetadataUpdate",
          "inputs": [
            {
              "name": "_tokenId",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "OwnershipTransferred",
          "inputs": [
            {
              "name": "previousOwner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "newOwner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            }
          ],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "Transfer",
          "inputs": [
            {
              "name": "from",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "to",
              "type": "address",
              "indexed": true,
              "internalType": "address"
            },
            {
              "name": "tokenId",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
            }
          ],
          "anonymous": false
        },
        {
          "type": "error",
          "name": "ERC721IncorrectOwner",
          "inputs": [
            {
              "name": "sender",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "owner",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "ERC721InsufficientApproval",
          "inputs": [
            {
              "name": "operator",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "ERC721InvalidApprover",
          "inputs": [
            {
              "name": "approver",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "ERC721InvalidOperator",
          "inputs": [
            {
              "name": "operator",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "ERC721InvalidOwner",
          "inputs": [
            {
              "name": "owner",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "ERC721InvalidReceiver",
          "inputs": [
            {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "ERC721InvalidSender",
          "inputs": [
            {
              "name": "sender",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "ERC721NonexistentToken",
          "inputs": [
            {
              "name": "tokenId",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "type": "error",
          "name": "OwnableInvalidOwner",
          "inputs": [
            {
              "name": "owner",
              "type": "address",
              "internalType": "address"
            }
          ]
        },
        {
          "type": "error",
          "name": "OwnableUnauthorizedAccount",
          "inputs": [
            {
              "name": "account",
              "type": "address",
              "internalType": "address"
            }
          ]
        }
      ]
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
