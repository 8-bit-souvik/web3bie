import styles from "../../styles/nft/concept.module.css";

export const Concept = ({ aboutdata }) => {
  return (
    <>
      <section className={styles.concept}>
        <div>
          <h3>How Is an NFT Different from Cryptocurrency?</h3>
          NFT stands for non-fungible token. It’s generally built using the same
          kind of programming as cryptocurrency, like Bitcoin or Ethereum, but
          that’s where the similarity ends. Physical money and cryptocurrencies
          are “fungible,” meaning they can be traded or exchanged for one
          another. They’re also equal in value—one dollar is always worth
          another dollar; one Bitcoin is always equal to another Bitcoin.
          Crypto’s fungibility makes it a trusted means of conducting
          transactions on the blockchain. NFTs are different. Each has a digital
          signature that makes it impossible for NFTs to be exchanged for or
          equal to one another (hence, non-fungible). One NBA Top Shot clip, for
          example, is not equal to EVERYDAYS simply because they’re both NFTs.
          (One NBA Top Shot clip isn’t even necessarily equal to another NBA Top
          Shot clip, for that matter.)
        </div>
        <div>
          <h3>How Does an NFT Work?</h3>
          NFTs exist on a blockchain, which is a distributed public ledger that
          records transactions. You’re probably most familiar with blockchain as
          the underlying process that makes cryptocurrencies possible.
          Specifically, NFTs are typically held on the Ethereum blockchain,
          although other blockchains support them as well. An NFT is created, or
          “minted” from digital objects that represent both tangible and
          intangible items, including:
          <br />
          <br />- Art
          <br />- GIFs
          <br />- Videos and sports highlights
          <br />- Collectibles
          <br />- Virtual avatars and video game skins
          <br />- Designer sneakers
          <br />- Music
          <br />
          <br />
          Even tweets count. Twitter co-founder Jack Dorsey sold his first ever
          tweet as an NFT for more than $2.9 million. Essentially, NFTs are like
          physical collector’s items, only digital. So instead of getting an
          actual oil painting to hang on the wall, the buyer gets a digital file
          instead.
          <br />
          <br />
          They also get exclusive ownership rights. That’s right: NFTs can have
          only one owner at a time. NFTs’ unique data makes it easy to verify
          their ownership and transfer tokens between owners. The owner or
          creator can also store specific information inside them. For instance,
          artists can sign their artwork by including their signature in an
          NFT’s metadata.
        </div>
        <div>
          <h3>what is NFT used for? </h3>
          Blockchain technology and NFTs afford artists and content creators a
          unique opportunity to monetize their wares. For example, artists no
          longer have to rely on galleries or auction houses to sell their art.
          Instead, the artist can sell it directly to the consumer as an NFT,
          which also lets them keep more of the profits. In addition, artists
          can program in royalties so they’ll receive a percentage of sales
          whenever their art is sold to a new owner. This is an attractive
          feature as artists generally do not receive future proceeds after
          their art is first sold.
          <br />
          <br />
          Art isn’t the only way to make money with NFTs. Brands like Charmin
          and Taco Bell have auctioned off themed NFT art to raise funds for
          charity. Charmin dubbed its offering “NFTP” (non-fungible toilet
          paper), and Taco Bell’s NFT art sold out in minutes, with the highest
          bids coming in at 1.5 wrapped ether (WETH)—equal to $3,723.83 at time
          of writing.
        </div>
      </section>
    </>
  );
};

export default Concept;
