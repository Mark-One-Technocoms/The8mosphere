import { Outlet } from "react-router-dom";
import { Header, Footer, WhatWeDo } from "./components";
import { useLocation } from "react-router-dom";
import { Home, About } from "./pages";
import EightVoicedDemo from "./components/EightVoicedDemo";

function App() {
  let location = useLocation();

  return (
    <div className="">
      <Header />
      <div>
        {location.pathname === "/" ? (
          <>
            <Home />
            <WhatWeDo />
            <EightVoicedDemo />
            <About />
          </>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
