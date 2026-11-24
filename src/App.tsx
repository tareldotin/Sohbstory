import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Issues from "./pages/Issues";
import IssueDetail from "./pages/IssueDetail";
import Subscribe from "./pages/Subscribe";
import Categories from "./pages/Categories";
import Contributors from "./pages/Contributors";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/issues/:slug" element={<IssueDetail />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
