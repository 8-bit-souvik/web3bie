import styles from "../../styles/dao/features.module.css";

export const Features = ({ aboutdata }) => {
  return (
      <>
      <div className={styles.features}>

      <iframe  src="https://www.youtube-nocookie.com/embed/KHm0uUPqmVE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <h2>Examples of DAOs</h2>  
Decentralized autonomous organizations have gained traction over the last few years and are now fully incorporated into many blockchain projects. The decentralized finance (DeFi) space uses DAOs to allow applications to become fully decentralized, for example.
<br />
<br />
To some, the Bitcoin (BTC) network is the earliest example of a DAO there is. The network scales via community agreement, even though most network participants have never met each other. It also does not have an organized governance mechanism, and instead, miners and nodes have to signal support.
<br />
<br />

However, Bitcoin is not seen as a DAO by today’s standards. By current measures, Dash would be the first true DAO, as the project has a governance mechanism that allows stakeholders to vote on the use of its treasury.
<br />
<br />

Other, more advanced DAOs, including decentralized networks built on top of the Ethereum blockchain, are responsible for launching cryptocurrency-backed stablecoins. In some cases, the organizations that initially launched these DAOs slowly give away control of the project to one day become irrelevant. Token holders can actively vote on governance proposals to hire new contributors, add new tokens as collateral for their coins or adjust other parameters. 
      </div>
    
      </>
  )
}

export default Features;