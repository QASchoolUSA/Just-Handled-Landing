import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import OperationalRhythm from "@/components/OperationalRhythm";
import FeatureGrid from "@/components/FeatureGrid";
import TaxMapping from "@/components/TaxMapping";
import SuccessMetrics from "@/components/SuccessMetrics";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Workflow />
      <OperationalRhythm />
      <FeatureGrid />
      <TaxMapping />
      <SuccessMetrics />
      <Pricing />
      <Footer />
    </main>
  );
}
