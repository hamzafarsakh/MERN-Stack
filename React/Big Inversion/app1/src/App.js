import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard fname="hasan" lname="hasannn" age={40} color="black"/>
      <PersonCard fname="hamza" lname="farsakh" age={27} color="green"/>
      <PersonCard fname="yousef" lname="labade" age={29} color="yellow"/>
      <PersonCard fname="khalid" lname="hassun" age={29} color="white"/>
    </div>
  );
}

export default App;
