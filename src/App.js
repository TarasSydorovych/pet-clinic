import logo from "./logo.svg";
import "./App.css";
import FirstBlock from "./components/main/firstBlock";
import About from "./components/main/about";
import Cinnosti from "./components/main/cinnosti";
import Servicec from "./components/main/servicec";
import GoogleMapComponent from "./components/main/googleMapComponents";
import Address from "./components/main/address";
import Vidguk from "./components/main/vidguk";
import ContactForm from "./components/main/contactForm";
import Footer from "./components/main/footer";
import Chat from "./components/chat/chat";

function App() {
  return (
    <>
      <FirstBlock />
      <Cinnosti />
      <About />
      <Servicec />
      <GoogleMapComponent />
      <Address />
      <Vidguk />
      <ContactForm />
      <Chat />
      <Footer />
    </>
  );
}

export default App;
