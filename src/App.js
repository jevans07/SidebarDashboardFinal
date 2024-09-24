import './App.css';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route, Navigate,} from 'react-router-dom'
import Specifics from './pages/AllSpecifics/Specifics'
import Outreach from './pages/AllOutreach/Outreach';
import Resistance from './pages/AllResistance/Resistance'
import Pathogen from './pages/AllPathogens/Pathogen';
import SpecificsAnimals from './pages/AllSpecifics/SpecificsAnimal';
import SpecificsState from './pages/AllSpecifics/SpecificsState';
import PathogensSelection from './pages/AllPathogens/PathogenSelection';
import PathogensProfiles from './pages/AllPathogens/PathogenProfiles';
import PathogensMaps from './pages/AllPathogens/PathogenMaps';
import ResistanceOptions from './pages/AllResistance/ResistanceOptions';
import ResistanceProfiles from './pages/AllResistance/ResistanceProfiles';
import ResistanceMaps from './pages/AllResistance/ResistanceMaps';
import OutreachVideos from './pages/AllOutreach/Videos';
import OutreachReports from './pages/AllOutreach/Reports';
import OutreachWebinars from './pages/AllOutreach/Webinars';
import OutreachFeedback from './pages/AllOutreach/Feedback';
import Home from './pages/Home';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <>
    <Router>
      <div>
        <Breadcrumbs />
      <Sidebar />
      <Routes>
      <Route exact path="/home" element={<Home />} />
        <Route exact path="/specifics" element={<Specifics />} />
        <Route exact path="/specifics/state" element={<SpecificsState />} />
        <Route exact path="/specifics/animal" element={<SpecificsAnimals />} />
        <Route exact path="/AMR-pathogen-info" element={<Pathogen />} />
        <Route exact path="/AMR-pathogen-info/pathogen-selection" element={<PathogensSelection />} />
        <Route exact path="/AMR-pathogen-info/pathogen-profiles" element={<PathogensProfiles />} />
        <Route exact path="/AMR-pathogen-info/pathogen-maps" element={<PathogensMaps />} />
        <Route exact path="/AMR-resistance" element={<Resistance />} />
        <Route exact path="/AMR-resistance/options" element={<ResistanceOptions />} />
        <Route exact path="/AMR-resistance/profiles" element={<ResistanceProfiles />} />
        <Route exact path="/AMR-resistance/maps" element={<ResistanceMaps />} />
        <Route exact path="/outreach-and-dissemination" element={<Outreach />} />
        <Route exact path="/outreach-and-dissemination/AMR-tutorial-videos" element={<OutreachVideos />} />
        <Route exact path="/outreach-and-dissemination/monthly-reports" element={<OutreachReports />} />
        <Route exact path="/outreach-and-dissemination/webinars-and-updates" element={<OutreachWebinars />} />
        <Route exact path="/outreach-and-dissemination/feedback" element={<OutreachFeedback />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      <Footer />
      </div>
    </Router>
    </>
  );
  
}

export default App;

