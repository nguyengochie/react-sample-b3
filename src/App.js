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
import Test from "./components/Test";
import B3Bai1 from "./components/buoi_13/B3Bai1";
import B3Bai2 from "./components/buoi_13/B3Bai2";
import B3Bai3 from "./components/buoi_13/B3Bai3";
import Page13 from "./components/buoi_13/bai_moi/Page13";
import DemoMemo from "./components/buoi_13/bai_moi/DemoMemo";
import DemoUseMemo from "./components/buoi_13/bai_moi/DemoUseMemo";

// ctrl + shift + o
function App() {

  let url = new URL(window.location)
  let params = new URLSearchParams(url.search);
  let sourceid = params.get('id')
  // console.log(sourceid);

  
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page12 />} />
          <Route path="/detail" element={<Page12Detail />} />
        </Routes>
      </BrowserRouter> */}
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
      {/* <Test /> */}
      {/* <B3Bai1 /> */}
      {/* <B3Bai2 /> */}
      {/* <B3Bai3 /> */}
      {/* <Page13 /> */}
      <DemoUseMemo />
    </>
  );
}

export default App;
