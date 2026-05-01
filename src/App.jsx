import { Outlet, Link } from "react-router-dom";
import Header from "./Component/Header";

function App() {
  return (
    <div>
  <Header/>

      <Outlet /> 

    </div>
  );
}

export default App;