import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { BUSINESSES_CONTRACT_ADDRESS } from "../constants/contracts";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint A Shadow Land</h1>

      <p className={styles.explain}>
        COST: 10 Matic
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        theme="dark"
        contractAddress={BUSINESSES_CONTRACT_ADDRESS}
        action={(contract) => contract.erc1155.claim(10,1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        MINT
      </Web3Button>
    </div>
  );
};

export default Mint;