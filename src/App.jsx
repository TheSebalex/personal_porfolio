import { Route, HashRouter, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Routes/Home/Home"
import { Experience } from "./Components/Routes/Experience/Experience";
import { Portfolio } from "./Components/Routes/Portfolio/Portfolio";
import { Contact } from "./Components/Routes/Contact/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
            <Route path="/" element={<Layout children={<Home/>}/>}></Route>
            <Route path="/experience" element={<Layout children={<Experience/>}/>}></Route>
            <Route path="/portfolio" element={<Layout children={<Portfolio/>}/>}></Route>
            <Route path="/contact" element={<Layout children={<Contact/>}/>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
