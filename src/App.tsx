import './App.css';
import FirstTest from './components/FirstTest/FirstTest';
import Tasks from './components/Tasks/Task';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const func = (prop: number) => { console.log(prop) };

function App() {
  const navigate = useNavigate();

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
              <Link to="/Tasks" className="nav-link">Tasks</Link>
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
      </Routes>
    </div>
  );
}

export default App;

/*

PART 1:  20:00 min
https://www.youtube.com/watch?v=p1bjHvX-DqM&ab_channel=FernandaKipper%7CDev

FELIPE: 1:00:00
https://www.youtube.com/watch?v=0hVXjqHwvI0&ab_channel=FelipeRocha%E2%80%A2dicasparadevs

SOME DUDE: 10:00 min
https://www.youtube.com/watch?v=MQs8_KIj_PU&ab_channel=DevPleno

PART 2:
https://www.youtube.com/watch?v=0dRPPmRYM3o&ab_channel=FernandaKipper%7CDev

ANOTHER DUDE:
https://www.youtube.com/watch?v=UKCIfwI8DxA&ab_channel=RicardoPedroni


*/