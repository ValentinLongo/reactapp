import './App.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from './MovieDetails';
import { LandingPage } from './LandingPage';

//solo header
export function App() {
  return (
    <Router>
        <header>
          <Link to="/"><h1>Peliculas</h1></Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/movies/:movieId' element={<MovieDetails/>} />
          </Routes>
        </main>
    </Router>
  );
}


