import { Routes, Route } from "react-router-dom";
import MainPage from "./components/main-page/mainPage";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Education from "./components/education/education";
import Skills from "./components/skills/skills";
import { useEffect, useState } from "react";
import ProgressBar from "./components/progress-bar/progressBar";

function App() {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(1);

  useEffect(() => {
    if (width >= 100) {
      setLoading(false);
    }
  }, [width]);

  return (
    loading ? <ProgressBar width={width} setWidth={setWidth} /> :
    <div className="App">
      <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
