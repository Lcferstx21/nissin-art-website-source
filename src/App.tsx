import "./App.css";
import { SplashScreen } from "./Pages/SplashScreen";
import { PageBottom } from "./components/PageBottom";
import { FixedContact } from "./layout/FixedContact";
import { TopNavbar } from "./layout/TopNavbar";
import { AboutUs } from "./Pages/AboutUs";
import { Home } from "./Pages/Home";
import { Results } from "./Pages/Results";
import { Schedule } from "./Pages/Schedule";
import { Team } from "./Pages/Team";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Join from "./Pages/Join";
import { QA } from "./Pages/QA";
import { Contact } from "./Pages/Contact";

function AppContent() {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobile, setIsMobile] = useState(false);
  const isMobileHomePage = isMobile && isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowHeader(y >= window.innerHeight * 1);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col">
      {isHomePage && <SplashScreen />}
      {!isMobileHomePage && <TopNavbar showHeader={showHeader} />}
      {!isMobileHomePage && <FixedContact showHeader={showHeader} />}

      {/* 路由配置 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/results" element={<Results />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join" element={<Join />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!isMobileHomePage && <PageBottom />}
    </div>
  );
}

function App() {
  const basePath = import.meta.env.VITE_BASE_URL || "/"; // 如果没有设置VITE_BASE_URL，默认为"/"

  return (
    <Router basename={basePath}>
      <AppContent />
    </Router>
  );
}

export default App;
