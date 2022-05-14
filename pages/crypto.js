import Head from "next/head";
import "aos/dist/aos.css";
import Image from "next/image";
import date from 'date-and-time';
import Header from "../Components/header";
import Homepage from "../Components/crypto/home";
import Concept from "../Components/crypto/concept";
import Learn from "../Components/crypto/learn";
import Pricing from "../Components/crypto/pricing";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import News from "../Components/news";

export default function Crypto({ coinprice, news }) {
  // console.log(news);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Homepage />
      <Concept />
      <Pricing markets={coinprice} />
      <Learn />
      <News newsData={news}/>
      <Footer />
    </div>
  );
}

import { Appwrite } from "appwrite";

const sdk = new Appwrite();

export const getStaticProps = async () => {
  //   sdk
  //     .setEndpoint("http://localhost/v1") // Your API Endpoint
  //     .setProject("627c0eedb0b99a327ae1"); // Your project ID

  //   let promise = sdk.database.listDocuments("627c1203b0d457d95d8f");

  //   let data = await promise;
  //   console.log("data", data);

  const newsapi = await fetch('https://newsapi.org/v2/everything?q=cryptocurrency&from='+date.format(new Date(), 'YYYY-MM-DD', true)+'&sortBy=publishedAt&apiKey=ac33785863764469b3c8efb55b183743')
  const news = await newsapi.json();

  const coinpriceapi = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const coinprice = await coinpriceapi.json();

  return {
    props: {
      // data,
      coinprice,
      news
    },
  };
};
 