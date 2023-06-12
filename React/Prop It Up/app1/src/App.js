import './App.css';
import './components/PersonCard'
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard fname={"aaaaa"} lname={"AAAAA"} age={20} color={"black"}/>
      <PersonCard fname={"bbbbb"} lname={"BBBB"} age={30} color={"green"}/>
      <PersonCard fname={"ccccc"} lname={"CCCC"} age={40} color={"yellow"}/>
      <PersonCard fname={"ddddddd"} lname={"DDDDD"} age={50} color={"gray"}/>
      
    </div>
  );
}

export default App;
