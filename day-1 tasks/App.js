
import './App.css';
import Hello from './Hello';
import Display from './Display';
import Uni from './Jsx';
import Images from './Images';
import Input from './Input';
import Color from './Color';
import List from './List';
import Message from './Message';


function App() {
  return (
   <div className='i'>
<Hello />
<Display />
<Uni />
<Images />
<Input />
<Color />
<List />
<Message  isLoggedIn={false} userName="vishnukumar"/>


   </div>
  );
}

export default App;
