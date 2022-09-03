import './App.css';
import {Route, Routes} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Sidebar/>}/>
        </Routes>
        <Main/>
    </div>
  );
}

export default App;
