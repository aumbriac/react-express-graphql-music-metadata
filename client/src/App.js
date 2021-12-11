import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TrackDetail from './pages/trackdetail';
import TrackList from './pages/tracklist';
import Navbar from './components/Navbar';
import AppState from './context/AppState';
import NotFound from './components/NotFound';

function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<TrackList />} />
          <Route path='/trackdetail/:title' element={<TrackDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppState>

  );
}

export default App;
