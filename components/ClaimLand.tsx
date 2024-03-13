
import { MediaRenderer, Web3Button, useActiveClaimCondition, useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { BUSINESSES_CONTRACT_ADDRESS } from "../constants/contracts";
import { ethers } from "ethers";
import { Card } from "@nextui-org/react";

type Props = {
    nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
    const { contract } = useContract(BUSINESSES_CONTRACT_ADDRESS);
    const { data, isLoading } = useActiveClaimCondition(
        contract,
        nft.metadata.id, // Token ID required for ERC1155 contracts here.
      );

    return (
        <Card key={nft.metadata.id} >
            <MediaRenderer
                src={nft.metadata.image}
                height="100%"
                width="100%"
            />
            
            <Web3Button
                contractAddress={BUSINESSES_CONTRACT_ADDRESS}
                action={(contract) => contract.erc1155.claim(10, 1)}
            >Buy</Web3Button>
        </Card>
    )
};