import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
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
      <Tabs />
      <Sub />
      <Standard />
      <Footer />
    </div>
  );
}

export default App;
