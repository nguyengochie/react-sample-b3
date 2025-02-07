import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Baiap3 from "./components/buoi_11/Baiap3";
import Page12 from "./components/buoi_12/Page12";
import Page12Detail from "./components/buoi_12/Page12Detail";

// ctrl + shift + o
function App() {

  let url = new URL(window.location)
  let params = new URLSearchParams(url.search);
  let sourceid = params.get('id')
  console.log(sourceid);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page12 />} />
          <Route path="/detail" element={<Page12Detail />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="App"> */}
      {/* <Page1 /> */}
      {/* <Page6 /> */}
      {/* <Page7 /> */}
      {/* <Page8 /> */}
      {/* <Page9 /> */}
      {/* <Page11 /> */}
      {/* <BaiTap1 /> */}
      {/* <BaiTap2 /> */}
      {/* <Baiap3 /> */}
      {/* </div> */}
    </>
  );
}

export default App;
