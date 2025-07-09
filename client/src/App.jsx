import { Outlet } from "react-router-dom";
import { Header, Footer, WhatWeDo, OurWork } from "./components";
import { useLocation } from "react-router-dom";
import { Home, About, JoinUs } from "./pages";
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
            <OurWork />
            <About />
            <JoinUs />
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
