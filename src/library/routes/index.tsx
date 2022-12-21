import React, { lazy, Suspense } from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
// import Guide from "../pages/Guide";
// import BeginGuide from "../pages/BeginGuide";
// import LatestNews from "../pages/LatestNews";
// import Microdosing from "../pages/Microdosing";
// import PlanTrip from "../pages/PlanTrip";
import Loader from "../../components/Loader";
// import NotFound from "../../pages/NotFound";
const Guide = lazy(() => import("../pages/Guide"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const BeginGuide = lazy(() => import("../pages/BeginGuide"));
const LatestNews = lazy(() => import("../pages/Microdosing"));
const Microdosing = lazy(() => import("../pages/Microdosing"));
const PlanTrip = lazy(() => import("../pages/PlanTrip"));
// const Loader = lazy(() => import("../../components/Loader"));
const Library = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Sidebar>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="home" element={<Guide />} />
            <Route path="beginners-guide" element={<BeginGuide />} />
            <Route path="latest-news" element={<LatestNews />} />
            <Route path="microdosing" element={<Microdosing />} />
            <Route path="plan-your-trip" element={<PlanTrip />} />
          </Routes>
        </Sidebar>
      </Suspense>
    </>
  );
};

export default Library;
