import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import NotFound from "./pages/404";
import RootLayout from "./layout";
import Team from "./pages/Team";
import Outcomes from "./pages/Outcomes";
import Dissemination from "./pages/Dissemination";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import VirtualReality from "./pages/VirtualReality";
import VRArticle from "./pages/VirtualReality/Article";
import Manufacturing from "./pages/Manufacturing";
import ManufacturingArticle from "./pages/Manufacturing/Article";
import MoocVideos from "./pages/Mooc";
import MoocArticle from "./pages/Mooc/Article";
import XRPage from "./pages/VirtualReality/WhatIsXR";

const App = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/advisory-board" element={<AdvisoryBoard />}></Route>
          <Route path="/outcomes" element={<Outcomes />}></Route>
          <Route path="/dissemination" element={<Dissemination />}></Route>
          <Route path="/activities" element={<Activities />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/virtual-reality" element={<VirtualReality />}></Route>
          <Route path="/vr/content-types" element={<XRPage />}></Route>
          <Route path="/vr/:articleName" element={<VRArticle />}></Route>
          <Route path="/manufacturing" element={<Manufacturing />}></Route>
          <Route
            path="/manufacturing/:articleName"
            element={<ManufacturingArticle />}
          ></Route>
          <Route path="/mooc-videos" element={<MoocVideos />}></Route>
          <Route
            path="/mooc-videos/:articleName"
            element={<MoocArticle />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default App;
