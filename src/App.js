import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";

let name="MEAR";
function App() {
  return (
    <>
<Navbar title={"MEAR Texty"} aboutTexty="What do u want to know About us"/>
{/* <Navbar/> */}
<div className="container">

<TextForm heading="Enter the text to analyz"/>
</div>
    </>
  );
}

export default App;
