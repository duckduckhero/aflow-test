import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import ceramics from './he_ceramics.json'

function App() {

  return (
    <div className="App">
      <Table ceramics={ceramics} type="carbides"/>
      <Table ceramics={ceramics} type="oxides"/>
      <Table ceramics={ceramics} type="nitrides"/>
      <Table ceramics={ceramics} type="borides"/>
      <Table ceramics={ceramics} type="carbo-nitrides"/>
    </div>
  );
}

export default App;
