import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Login from "./Components/Login";

import Navbar from "./Components/Navbar";

import Post from "./Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
      
      <Post />
    </div>
  );
}

export default App;
