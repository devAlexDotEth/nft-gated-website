import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { isFeatureEnabled } from "@thirdweb-dev/sdk";
import Link from "next/link";
import { contractAddress } from "../const/yourDetails";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react';

const LoginPage = () => {
  const eventDate = new Date(Date.UTC(2023, 3, 17, 1, 0, 0)); // April 17, 2023, 1:00 AM UTC

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const formatEventDate = (eventDate) => {
        const dateFormatter = new Intl.DateTimeFormat(window.navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          timeZoneName: 'short',
        });

        return dateFormatter.format(eventDate);
      };

      setFormattedDate(formatEventDate(eventDate));
    }
  }, []);

  const address = useAddress();

  return (
    <div className={styles.container}>
      {/* Add Firm name/logo here */}
      <img src="/logo.svg" alt="Firm Logo" className={styles.logo} />
  
      <h1 className={styles.h1}>
      Cryptocurrency: U.S. Regulatory and Law Enforcement Issues
      </h1>
      <h2 className={styles.h2}>
      (What You Want To Know But Were Afraid To Ask)
      </h2>

      <p className={`${styles.explain} ${styles.paragraph}`}>
        U.S. lawyers will discuss the rise of criminal investigations and prosecutions in the crypto space, lawsuits filed by the SEC, CFTC and private plaintiffs relating to the marketing and sale of cryptocurrencies, requirements for service and personal jurisdiction in the U.S., creative theories being tested by plaintiffs lawyers, identification, tracing, recovery of stolen assets, fall out from FTX, and other recent developments.
      </p>

      <h2 className={styles.eventDetails}>{formattedDate}</h2>
      <h3 className={styles.eventDetails}> April 18, 2023 1:00 AM UTC <div><div>April 18, 2023 9:00 AM CST</div><div>Zoom (free to invitees)</div></div></h3>
      
    <p className={`${styles.explain} ${styles.paragraph}`}>
        Morvillo Abramowitz is a Tier 1 U.S. boutique law firm, widely recognized for its criminal defense, government investigations, and litigation prowess
        (including by U.S. New & World Report, Chambers, Benchmark, and Legal 500).
        It is offering a free webinar on for clients and their guests, to discuss recent developments in U.S. law and regulatory enforcement concerning crypto. Access to the Zoom event will be distributed by
        <span className={styles.inlineWrapper}> </span>
        <a
          href="https://www.maglaw.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mainButton}
        >
          NFTs
        </a>
      </p>
      <p className={styles.explain}>
        You can only access our{" "}
        <Link className={styles.secondaryButton} href="https://www.maglaw.com/">
          webinar
        </Link>{" "}
        if you own a NFT (Non Fungible Token)
      </p>

      <div className={styles.imageContainer}>
      <img src="/NFT.PNG" alt="Your Image Description" className={styles.image} />
      <img src="/NFT3.png" alt="Your Second Image Description" className={styles.image} />
    </div>
      <>
        {address ? (
          <p>
            Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        ) : (
          <p>Please connect your wallet to continue.</p>
        )}

        <ConnectWallet accentColor="#F213A4" />
      </>
    </div>
  );
}
export default LoginPage;