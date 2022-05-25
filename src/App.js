import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "./App.css";

let name="MEAR";
function App() {
  return (
    <>
<Navbar title={"MEAR Texty"} aboutTexty="What do u want to know About us"/>
{/* <Navbar/> */}
<div className="container my-5">

{/* <TextForm heading="Enter the text to analyz"/> */}
<About />
</div>
    </>
  );
}

export default App;
