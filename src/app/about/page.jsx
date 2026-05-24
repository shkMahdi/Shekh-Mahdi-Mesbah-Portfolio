import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import AboutFullView from "@/components/about/AboutFullView";

export const metadata = {
  title: "About | Shekh Mahdi Mesbah",
  description:
    "More about Mahdi — photography, writing, reading, sports, and the picture he's painting.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutFullView />
      <Footer />
    </>
  );
}
