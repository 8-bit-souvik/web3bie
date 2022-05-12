import styles from "../styles/highlight.module.css";
import React, { Component } from "react";

export const Highlight = ({ aboutdata}) => {
    return (
        <section className={styles.highlight}>
        <a href="#"><img src="https://img.icons8.com/ios/2x/staff-sergeant-ssg.png"/><p>Blockchain</p></a>
        <a href="#"><img src="https://img.icons8.com/ios/2x/staff-sergeant-ssg.png"/><p>Crypto</p></a>
        <a href="#"><img src="https://img.icons8.com/ios/2x/staff-sergeant-ssg.png"/><p>NFT</p></a>
        <a href="#"><img src="https://img.icons8.com/ios/2x/staff-sergeant-ssg.png"/><p>DAO</p></a>
        <a href="#"><img src="https://img.icons8.com/ios/2x/staff-sergeant-ssg.png"/><p>Metaverse</p></a>
        <a href="#"><img src="https://img.icons8.com/ios/2x/staff-sergeant-ssg.png"/><p>Blogs</p></a>
        </section>
        );
}

export default Highlight;