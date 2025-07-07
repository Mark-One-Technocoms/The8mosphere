import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { useLocation } from "react-router-dom";
import { Home, About } from "./pages";
import EightVoicedDemo from "./components/EightVoicedDemo";

function App() {
  let location = useLocation();

  console.log(location.pathname);
  return (
    <div className="">
      <Header />
      <div>
        {location.pathname === "/" ? (
          <>
            <Home />
            <About />
            <EightVoicedDemo />
          </>
        ) : (
          <Outlet />
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
