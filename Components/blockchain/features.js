import styles from "../../styles/blockchain/features.module.css";

export const Features = ({ aboutdata }) => {
  return (
      <div className={styles.features}>
      <h2><u>Why is Blockchain Popular?</u></h2>

     <h3>Highly Secure</h3> 
It uses a digital signature feature to conduct fraud-free transactions making it impossible to corrupt or change the data of an individual by the other users without a specific digital signature.
<h3>Decentralized System</h3>
Conventionally, you need the approval of regulatory authorities like a government or bank for transactions; however, with Blockchain, transactions are done with the mutual consensus of users resulting in smoother, safer, and faster transactions.
<h3>Automation Capability</h3>
To speed transactions, a set of rules — called a <b>smart contract</b> — is stored on the blockchain and executed automatically. A smart contract can define conditions for corporate bond transfers, include terms for travel insurance to be paid and much more.
<h3>Immutable records</h3>
No participant can change or tamper with a transaction after it’s been recorded to the shared ledger. If a transaction record includes an error, a new transaction must be added to reverse the error, and both transactions are then visible.
      

      <br />
      <br />
      <br />
      
      <h2><u>How blockchain works</u></h2>
      
      <h3>As each transaction occurs, it is recorded as a “block” of data</h3>
      Those transactions show the movement of an asset that can be tangible (a product) or intangible (intellectual). The data block can record the information of your choice: who, what, when, where, how much and even the condition — such as the temperature of a food shipment.

      <h3>Each block is connected to the ones before and after it</h3>
      These blocks form a chain of data as an asset moves from place to place or ownership changes hands. The blocks confirm the exact time and sequence of transactions, and the blocks link securely together to prevent any block from being altered or a block being inserted between two existing blocks.

      <h3>Transactions are blocked together in an irreversible chain: a blockchain</h3>
      Each additional block strengthens the verification of the previous block and hence the entire blockchain. This renders the blockchain tamper-evident, delivering the key strength of immutability. This removes the possibility of tampering by a malicious actor — and builds a ledger of transactions you and other network members can trust.

      </div>
  )
}

export default Features;