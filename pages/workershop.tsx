import { useContract, useNFTs, useUser } from "@thirdweb-dev/react";
import { BUSINESSES_CONTRACT_ADDRESS, WORKER_CONTRACT_ADDRESS } from "../constants/contracts";
import styles from "../styles/Home.module.css";
import WorkerNFTCard from "../components/WorkerNFTCard";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Shop() {
    // Get the businesses contract instance
    // Get the NFTs from contract
    const { contract: businessesContract } = useContract(WORKER_CONTRACT_ADDRESS);
    const { data: businesses } = useNFTs(businessesContract);

    // Get the user's login state
    const { isLoggedIn, isLoading } = useUser();
    const router = useRouter();

    // Checks if the user is logged in and redirects to the login page if not.
    useEffect(() => {
      if (!isLoggedIn && !isLoading) {
        router.push("/login");
      }
    }, [isLoggedIn, isLoading, router]);

    return (
        <div className={styles.main}>
            <h2>Buy a business:</h2>
            <div className={styles.grid}>
            {businesses && businesses.length > 0 ? (
                businesses.map((business) => (
                    <WorkerNFTCard
                        key={business.metadata.id}
                        nft={business}
                    />
                ))
            ) : (
                <p>NO  businesses for sale.</p>
            )}
            </div>
        </div>
    )
};

// This is a server-side function that checks if the user is logged in and redirects to the login page if not.
