import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/HeaderTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";
import HeaderTop from "./components/HeaderTop.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const ExpertPage = lazy(() => import("./pages/ExpertPage.jsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.jsx"));
const OurTeam = lazy(() => import("./components/Ourtems/OurTeam.jsx"));
const OurProject1 = lazy(() => import("./components/OurProject1.jsx"));
const Contact = lazy(() => import("./components/contact.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const Sponser = lazy(() => import("./components/Sponser.jsx"));

function App() {
  return (
    <>
      <HeaderTop />

      <div className="sticky top-0 z-40">
        <Header />
      </div>

      <Suspense loading="lazy" fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expert" element={<ExpertPage />} />
          <Route path="/our" element={<OurTeam />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/project1" element={<OurProject1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/sponser" element={<Sponser />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
  function loader() {
    return (
      <h1>Loading...</h1>
    )
  }
}

export default App;
