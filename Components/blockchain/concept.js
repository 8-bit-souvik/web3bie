import styles from "../../styles/blockchain/concept.module.css";

export const Concept = ({ aboutdata }) => {
  return (
    <div className={styles.concept}>
      <h1>Simple Concept</h1>
      You (a <b>node</b>) have a file of transactions on your computer (a{" "}
      <b>ledger</b>). Two government accountants (let&apos;s call them{" "}
      <b>miners</b>) have the same file on theirs (so it’s <b>distributed</b>).
      As you make a transaction, your computer sends an e-mail to each
      accountant to inform them. Each accountant rushes to be the first to check
      whether you can afford it (and be paid their salary <b>Bitcoins</b>). The
      first to check and validate hits “REPLY ALL”, attaching their logic for
      verifying the transaction (<b>proof of work</b>). If the other accountant
      agrees, everyone updates their file… This concept is enabled by{" "}
      <b>Blockchain</b> technology.
<br />
<br />
<br />
      Blockchain is a combination of three leading technologies:

<br/><b>1.</b> Cryptographic keys
<br/><b>2.</b> A peer-to-peer network containing a shared ledger
<br/><b>3.</b> A means of computing, to store the transactions and records of the network
<br />
<br />
Cryptography keys consist of two keys – <b>Private key and Public key</b> . These keys help in performing successful transactions between two parties. Each individual has these two keys, which they use to produce a secure digital identity reference. This secured identity is the most important aspect of Blockchain technology. In the world of cryptocurrency, this identity is referred to as ‘digital signature’ and is used for authorizing and controlling transactions.

<br />
<br />

The digital signature is merged with the <b>peer-to-peer network</b> ; a large number of individuals who act as authorities use the digital signature in order to reach a consensus on transactions, among other issues. When they authorize a deal, it is certified by a mathematical verification, which results in a successful secured transaction between the two network-connected parties. So to sum it up, Blockchain users employ cryptography keys to perform different types of digital interactions over the peer-to-peer network.
   
   
   <img src="https://www.pwc.com/us/en/industries/financial-services/images/2022-blockchain-graphic-update-how-blockchain%20works.png" />
   
   
    </div>
  );
};

export default Concept;
