import Head from "next/head";
import "aos/dist/aos.css";
import Image from "next/image";
import date from 'date-and-time';
import Header from "../Components/header";
import Learn from "../Components/nft/learn";
import Homepage from "../Components/nft/home";
import Concept from "../Components/nft/concept";
import Popularnfts from "../Components/nft/popular";
import Navbar from "../Components/navbar";
import News from "../Components/news";
import Footer from "../Components/footer";
require('dotenv').config({ path: `${__dirname}/../.env` })
import { Appwrite } from "appwrite";



export default function Nft({nftnews_api, nftData}) {
  const { concept, home, learn, popular} = nftData.document[0];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Homepage home={home}/>
      <Concept concept={concept}/> 
      <Popularnfts popular={popular} />
      <Learn learn={learn}/>
      <News newsData={nftnews_api}/>
      <br />
      <Footer />
    </div>
  );
}










const sdk = new Appwrite();

export const getStaticProps = async () => {
  sdk
    .setEndpoint("http://localhost/v1") // Your API Endpoint
    .setProject(process.env.PROJECT_ID); // Your project ID

  let promise = sdk.database.listDocuments(process.env.NFT_DB);

  let nftData = await promise;

const nftnews = await fetch('https://newsapi.org/v2/everything?q=nft&from='+date.format(new Date(), 'YYYY-MM-DD', true)+'&sortBy=publishedAt&apiKey=ac33785863764469b3c8efb55b183743')
  const nftnews_api = await nftnews.json();


return{
  props: {
  nftData, 
  nftnews_api
  }
}

};
