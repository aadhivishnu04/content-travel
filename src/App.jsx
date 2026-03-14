import Header from "./components/Header"
import Banner from "./components/Banner";
import Banner1 from "./components/Banner1";
import Tags from "./components/Tags";
import Honeymooncard from "./components/Honeymooncard";
import Honeymooncard1 from "./components/Honeymooncard1";
import AdBanner from "./components/Ad";
import Brandstory from "./components/Brandstory";
import Brandstory1 from "./components/Brandstory1";
import Month from "./components/Month";
import Month1 from "./components/Month1";
import Visacard from "./components/Visacard";
import Visacard1 from "./components/Visacard1";
import UniqueStayStories from "./components/UniqueStayStories";
import UniqueStayStories11 from "./components/UniqueStayStories11";
import AroundTheWorld from "./components/AroundTheWorld"
import VisaFreeEscapes from "./components/VisaFreeEscapes"
import VisaFreeEscapes11 from "./components/VisaFreeEscapes11"
import LatestUpdates from "./components/LatestUpdates"
import LatestUpdates1 from "./components/LatestUpdates1"
import TravelMood from "./components/TravelMood"
import Footer from "./components/Footer"



function App() {
  return (
    <div>
      <Header/>
      <Banner />
      <Banner1 />
      <Tags />
      <LatestUpdates/>
      <LatestUpdates1/>
      {/* <AdBanner /> */}
      <Honeymooncard />
       <Honeymooncard1 />
      <Brandstory />
      <Brandstory1 />
      <Month/>
      <Month1/>
      <Visacard/>
      <Visacard1/>
      <UniqueStayStories/>
       <UniqueStayStories11/>
      <AroundTheWorld/>
      <VisaFreeEscapes/>
       <VisaFreeEscapes11/>
      <TravelMood/>
      <Footer/>
       {/* <AdBanner />
       <AdBanner />
       <AdBanner />
       <AdBanner />
       <AdBanner /> */}
    </div>
  );
}

export default App;