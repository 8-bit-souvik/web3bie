import Head from "next/head";
import "aos/dist/aos.css";
import Image from "next/image";
import Header from "../Components/header";
import Concept from "../Components/dao/concept";
import Homepage from "../Components/dao/home";
import Features from "../Components/dao/features";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
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
      <Features />
      <Footer />
    </div>
  );
}
