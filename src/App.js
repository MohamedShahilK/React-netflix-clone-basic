import React from 'react'; //Not that much important
import { Action, Comedy, Documentary, Horror, Originals, Romance } from './API calling Config/constants/urls';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/NavBar/Navbar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={Originals} title='NetFlix Originals' />
      <RowPost url={Action} title='Action' isSmall />
      <RowPost url={Comedy} title='Comedy' isSmall />
      <RowPost url={Horror} title='Horror' isSmall />
      <RowPost url={Romance} title='Romance' isSmall />
      <RowPost url={Documentary} title='Documentary' isSmall />
    </div>
  );
}

export default App;
