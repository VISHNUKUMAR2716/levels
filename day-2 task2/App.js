import "./App.css";
import Function from "./Function";
import Greeting from "./Conponet";
import SO from "./Inport";
import Multiple from "./Multiple Props";
import Count from "./Counte";
import ToggleContent from "./ToggleContent";
import Input from "./Text";
import Itemlist from "./Array";
import Form from "./Form";
function App() {
  return (
    <div classname="header">
      <header>
        <h1>TASK 2</h1>
      </header>
      <div>
         <Function />
         <Greeting />
         <SO />
         <Multiple />
         <Count />
         <ToggleContent />
         <Input />
         <Itemlist />
         <Form />
      </div>
    </div>
  );
}

export default App;
