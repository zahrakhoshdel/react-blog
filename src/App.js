import Layout from "./components/Layout/Layout";
import FeaturedSection from "./components/Featured/FeaturedSection";
import NewsSection from "./components/News/NewsSection";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/BackToTop/BackToTopButton";

function App() {
  return (
    <div>
      <Layout>
        <FeaturedSection />
        <NewsSection />
        <Footer />
        <BackToTopButton />
      </Layout>
    </div>
  );
}

export default App;
