import styles from "../../styles/dao/concept.module.css";

export const Concept = ({ aboutdata }) => {
  return (
    <>
      <div className={styles.concept}>
        <div>
          {" "}
          <div>
            <h2>Why do we need DAOs?</h2>
            Starting an organization with someone that involves funding and
            money requires a lot of trust in the people you’re working with. But
            it’s hard to trust someone you’ve only ever interacted with on the
            internet. With DAOs you don’t need to trust anyone else in the
            group, just the DAO’s code, which is 100% transparent and verifiable
            by anyone.
            <br />
            <br />
            This opens up so many new opportunities for global collaboration and
            coordination.
          </div>
          <br />
          <br />
          <br />
          <div className={`${styles.concept} ${styles.concept1}`}>
            <div>
              <h2>How does a DAO work?</h2>
              As mentioned, a DAO is an organization where decisions get made
              from the bottom-up; a collective of members owns the organization.
              There are various ways to participate in a DAO, usually through
              the ownership of a token.
              <br />
              <br />
              DAOs operate using smart contracts, which are essentially chunks
              of code that automatically execute whenever a set of criteria are
              met. Smart contracts are deployed on numerous blockchains
              nowadays, though Ethereum was the first to use them.
              <br />
              <br />
              These smart contracts establish the DAO’s rules. Those with a
              stake in a DAO then get voting rights and may influence how the
              organization operates by deciding on or creating new governance
              proposals.
              <br />
              <br />
              This model prevents DAOs from being spammed with proposals: A
              proposal will only pass once the majority of stakeholders approve
              it. How that majority is determined varies from DAO to DAO and is
              specified in the smart contracts.
              <br />
              <br />
              DAOs are fully autonomous and transparent. As they are built on
              open-source blockchains, anyone can view their code. Anyone can
              also audit their built-in treasuries, as the blockchain records
              all financial transactions.
            </div>

            <img src="https://s3.cointelegraph.com/storage/uploads/view/6d610cd09174124ce7e54ef284f85563.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Concept;
