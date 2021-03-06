import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "src/pages/Home";
import Layout from "src/components/Layout";

/**
 * MainLayout component to seperate the homepage from the main library view and have seperate routin.
 */

function MainLayout() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default MainLayout;
