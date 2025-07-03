import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
