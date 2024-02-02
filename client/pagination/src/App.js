import Createuser from "./page/Createuser.js";
import "./App.css";
import UserList from "./component/UserList2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route exact path="/create" element={<Createuser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
