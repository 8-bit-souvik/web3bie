import styles from "../styles/highlight.module.css";
import React, { Component } from "react";

export const Highlight = ({ aboutdata}) => {
    return (
        <section className={styles.highlight}>
        <a href="blockchain"><img src="https://cdn-icons-png.flaticon.com/512/2091/2091665.png"/><p>Blockchain</p></a>
        <a href="crypto"><img src="https://www.clipartmax.com/png/middle/429-4296815_session-2-10-15-12-00pm-cryptocurrencies-and-cryptocurrency-icon-png.png"/><p>Crypto</p></a>
        <a href="nft"><img src="https://upload.wikimedia.org/wikipedia/commons/2/24/NFT_Icon.png"/><p>NFT</p></a>
        <a href="dao"><img src="https://e7.pngegg.com/pngimages/565/151/png-clipart-the-dao-initial-coin-offering-decentralized-autonomous-organization-internet-of-things-help-portal-angle-text-thumbnail.png"/><p>DAO</p></a>
        <a href="metaverse"><img src="https://cdn2.iconfinder.com/data/icons/metaverse/512/metaverse-virtual-world-10-512.png"/><p>Metaverse</p></a>
        <a href="blogs"><img src="https://cdn-icons-png.flaticon.com/512/2125/2125457.png"/><p>Blogs</p></a>
        </section>
        );
}

export default Highlight;