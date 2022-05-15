import styles from "../../styles/blogs.module.css";

export const Blogs = ({ aboutdata }) => {
  return (
    <section id="blogs" className={styles.blogs}>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://s2.coinmarketcap.com/static/img/coins/200x200/1975.png" /></div>
         <div className={styles.blog_title}>What is Chainlink?</div>
         <div className={styles.blog_content}>Someone who has been dealing in cryptocurrencies and blockchain technology lately must be aware of the importance a good oracle network has within the trading infrastructure. Oracles render a seamless interactive link for the decentralized Web 3.0 cluster where users can access existing data sources, legacy channels, and upgraded computations. In addition, decentralized oracle networks, </div>
     </div>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://s2.coinmarketcap.com/static/img/coins/200x200/4030.png" /></div>
         <div className={styles.blog_title}>Algorand</div>
         <div className={styles.blog_content}>Algorand is one of many recent attempts aimed at expanding the potential applications of bitcoin. It will speed up transaction processing and reduce the time it takes for transactions on its network to be deemed complete. Algorand, which debuted in 2019, attempts to achieve these qualities by reinventing the mechanism of traditional cryptocurrencies </div>
     </div>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://img.etimg.com/photo/msid-89445454,quality-100/should-you-buy-avalanche-avax-price-prediction-2022.jpg" /></div>
         <div className={styles.blog_title}>Avalanche (AVAX)</div>
         <div className={styles.blog_content}>Bitcoin was the original blockchain, which inspired the design of all future networks, including Ethereum. However, the adoption of NFTs and Decentralized Finance (DeFi) have played a major role in altering the blockchain scene today. Avalanche’s creators, Ava Labs, think they have invented the world’s fastest smart contract blockchain platform. </div>
     </div>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://chaindebrief.com/wp-content/uploads/2022/01/Polkadot-vs-Cosmos-1024x536.jpeg" /></div>
         <div className={styles.blog_title}>Polkadot vs. Cosmos: A Detailed Comparison</div>
         <div className={styles.blog_content}>With everything from Ethereum to Bitcoin, plus countless smaller chains, it becomes challenging for developers to create applications that support multiple chains. It requires extensive resources, which is why many users only use one or two chains at a time. Think of the blockchains as different planets of the solar system. </div>
     </div>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://www.researchgate.net/publication/342012510/figure/fig1/AS:962110624366602@1606396456592/Transaction-flow-in-a-Blockchain.png" /></div>
         <div className={styles.blog_title}>A Complete Guide on Flow Blockchain</div>
         <div className={styles.blog_content}>NFTs and blockchain technology have been massively making headlines for some time now. But, even before that, crypto enthusiasts and blockchain developers felt the presence of NFT usage through an early gaming project called CryptoKitties.   The developers built the project on the Ethereum network where users can mint NFT based kitties which have a… </div>
     </div>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://play2moon.com/wp-content/uploads/2022/03/Polygon_Vs_Solana.jpg" /></div>
         <div className={styles.blog_title}>Solana Vs. Polygon Vs. Ethereum – The Ultimate Comparison</div>
         <div className={styles.blog_content}>Blockchain technology is one of the most talked-about technologies in the world right now. It has entered almost every segment, bringing its decentralized system for improvements over the existing technologies. With the entry of blockchain, many different kinds of applications were also developed for these segments. It also gave birth to things like NFTs, decentralized</div>
     </div>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png" /></div>
         <div className={styles.blog_title}>Blockchain Interoperability – Understanding Cross-Chain Technology</div>
         <div className={styles.blog_content}>eroperability. Apart from this, we will also take a look at various aspects that relate to cross-chain technology and what it holds for the future!   As we know, blockchain works on </div>
     </div>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://www.blockchain-council.org/wp-content/uploads/2022/02/How-to-purchase-land-in-the-metaverse-A-Comprehensive-Guide-01.png" /></div>
         <div className={styles.blog_title}>How to Purchase Land in the Metaverse? A Comprehensive Guide</div>
         <div className={styles.blog_content}>The Metaverse is a step towards digitalizing the actual world by combining Virtual Reality (VR), Augmented Reality (AR), and videos. Users can work, play, and stay connected with pals in the virtual world through their digital avatars. There are lots to do in the Metaverse, from having a meeting to travelling across the virtual globe…</div>
     </div>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://blog.web3labs.com/hubfs/7%20Common%20Myths%20About%20Blockchain%20Blog.png" /></div>
         <div className={styles.blog_title}>7 Common Myths About Blockchain</div>
         <div className={styles.blog_content}>Blockchain is a versatile technology, and while it may not be a one-size-fits-all solution, the vast majority of supposed drawbacks stem from misunderstanding how it works. The most common mistake is that people tend to oversimplify issues that some blockchain solutions face and then apply that to every blockchain... </div>
     </div>
     <div className={styles.blog}>
         <div className={styles.blog_image}><img src="https://blog.quicknode.com/content/images/size/w2000/2022/05/chain-blog-avax.png" /></div>
         <div className={styles.blog_title}>Avalanche & QuickNode: Powering and Scaling the Future of Crypto</div>
         <div className={styles.blog_content}>Avalanche is a smart contracts platform that is home to many decentralized applications. It is EVM compatible, which means you can write solidity for your AVAX...</div>
     </div>
    </section>
  );
};

export default Blogs;