import { useState } from 'react';
import './App.css';
import FirstTest from './components/FirstTest/FirstTest';
import Tasks from './components/Tasks/Task';
import DropDown from './components/dropDown/DropDown';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const func = (prop: number) => { console.log(prop) };

function App() {
  const navigate = useNavigate();
  const [selectedDrop, setSelectedDrop] = useState<string>("");

  function navigateTo() {
    navigate("/Tasks");
  }

  return (
    <div >
      <header >
        <nav className="App-header">
          <ul className="header-list">
            <li>
              <Link to="/FirstTest" className="nav-link">FirstTest</Link>
            </li>
            <li>
              <Link to="/DropDown" className="nav-link">DropDown</Link>
            </li>
            <li>
              <p className="nav-link" onClick={()=>navigateTo()}>Tasks Navigate</p>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/FirstTest" element={<FirstTest onClick={() => func(10)} />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/DropDown" element={<DropDown onSelect={setSelectedDrop}/>} />
      </Routes>
    </div>
  );
}

export default App;

/*

PART 2: 02:00 min
https://www.youtube.com/watch?v=0dRPPmRYM3o&ab_channel=FernandaKipper%7CDev


*/