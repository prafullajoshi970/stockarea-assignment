import Detail from "./component/Detail";
import Home from "./component/Home";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
