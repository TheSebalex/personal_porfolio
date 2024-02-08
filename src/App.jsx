import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// ... tus otros imports ...

function App() {
  return (
    <>
      <Router basename={process.env.NODE_ENV === 'production' ? '/personal_porfolio' : '/'}>
        <Routes>
            <Route path="/" element={<Layout children={<Home/>}/>}></Route>
            <Route path="/experience" element={<Layout children={<Experience/>}/>}></Route>
            <Route path="/portfolio" element={<Layout children={<Portfolio/>}/>}></Route>
            <Route path="/contact" element={<Layout children={<Contact/>}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
