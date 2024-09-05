
import BackTop from "@/components/modules/BackTop";
import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />


      <Component {...pageProps} />
      <Footer />
      <BackTop />

    </>
  )
}
