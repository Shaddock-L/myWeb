
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Error from './pages/Error';
import Home from './pages/Home';
import WorkExp from "./pages/WorkExperience";
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/workexp' element={<WorkExp />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );

}
export default App;

