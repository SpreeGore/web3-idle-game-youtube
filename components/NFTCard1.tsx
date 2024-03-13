import { Text, Card } from "@chakra-ui/react";
import { MediaRenderer, Web3Button, useActiveClaimCondition, useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { nftDropContractAddress } from "../constants/contracts";
import { ethers } from "ethers";
import { ALL } from "dns";

type Props = {
    nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
    const { contract } = useContract(nftDropContractAddress);
    const { data, isLoading } = useActiveClaimCondition(
        contract,
        nft.metadata.id, // Token ID required for ERC1155 contracts here.
      );

    return (
        <Card key={nft.metadata.id} overflow={"hidden"}>
            <MediaRenderer
                src={nft.metadata.image}
                height="80%"
                width="80%"
            />
            <Text fontSize={"small"} fontWeight={"bold"} my={5} textAlign={"center"}>{nft.metadata.name}</Text>
            {!isLoading && data ? (
                <Text textAlign={"center"} my={5}>Cost: {ethers.utils.formatEther(data?.price)}{" " + data?.currencyMetadata.symbol}</Text>
            ) :(
                <Text>Loading...</Text>
            )}
            <Web3Button
                contractAddress={nftDropContractAddress}
                action={(contract) => contract.erc721.claim(1)}
            >Buy</Web3Button>
        </Card>
    )
};