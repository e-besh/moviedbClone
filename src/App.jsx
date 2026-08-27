import { useState } from "react";
import "./App.css";
import Header from "./assets/Components/Header/Header";
import Banner from "./assets/Components/Banner/Banner";
import MovieCard from "./assets/Components/MovieCard/MovieCard";
import DisplayRow from "./assets/Components/DisplayRow/DisplayRow";
import Footer from "./assets/Components/Footer/Footer";
// import Navbar from './assets/Components/Practice/Navbar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar/> */}
      <Header />
      <div className="appBackground">
        <Banner />
        <DisplayRow />
        <Footer />
      </div>
    </>
  );
}

export default App;
