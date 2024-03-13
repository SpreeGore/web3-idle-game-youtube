import { NFT, useContract, useNFTs } from "@thirdweb-dev/react";
import { BUSINESSES_CONTRACT_ADDRESS } from "../constants/contracts";
import Link from "next/link";

import ClaimLand from "../components/ClaimLand";
import { Button} from "@nextui-org/react";

export default function Shop()  {
    const { contract } = useContract(BUSINESSES_CONTRACT_ADDRESS);
    const { data: nfts } = useNFTs(contract);
    console.log(nfts);

    return (
        <>
            <>
                <Link
                    href="/"
                >
                    <Button>Back</Button>
                </Link>
            </>
            <>Shop</>
            <>Purchase tools with $CARROTS to increase your earnings.</>
            {!nfts ? (
                <>
                    
                </>
            ) : (
                <>
                  
                </>
            )}
        </>
    )
};