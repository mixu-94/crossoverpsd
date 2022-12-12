import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Socials from "./components/Socials/Socials";
import Sub from "./components/Sub/Sub";
import Tabs from "./components/Tabs/Tabs";
import Standard from "./Standard Pictures/Standard";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      <Socials />
      <Pricing />
      <Tabs />
      <Sub />
      <Standard />
      <Footer />
    </div>
  );
}

export default App;
