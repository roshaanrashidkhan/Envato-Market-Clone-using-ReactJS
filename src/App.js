import "./App.css";
import WebThemes from "./components/WebThemes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graphics from "./components/Graphics";
import Code from "./components/Code";
import Photos from "./components/Photos";
import StartSelling from "./components/StartSelling";
import Signin from "./components/Signin";
import Web from "./AfterSignin/Web";
import Code2 from "./AfterSignin/Code2";
import Graphics2 from "./AfterSignin/Graphics2";
import Photos2 from "./AfterSignin/Photos2";
import Selling from "./AfterSignin/Selling";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebThemes />} />
          <Route path="/components/Graphics" element={<Graphics />} />
          <Route path="/components/Code" element={<Code />} />
          <Route path="/components/Photos" element={<Photos />}/>
          <Route path="/components/StartSelling" element={<StartSelling />}/>
          <Route path="/components/Signin" element={<Signin />}/>
          <Route path="/AfterSignin/Web" element={<Web />}/>
          <Route path="/AfterSignin/Graphics2" element={<Graphics2 />} />
          <Route path="/AfterSignin/Code2" element={<Code2 />} />
          <Route path="/AfterSignin/Photos2" element={<Photos2 />}/>
          <Route path="/AfterSignin/Selling" element={<Selling />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
