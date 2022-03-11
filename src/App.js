import './styles/App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Popular from "./components/Popular/Popular";
import Genres from "./components/Genres/Genres";
import Library from "./components/Library/Library";
import Footer from "./components/Footer/Footer";
import SearchResults from "./components/SearchResults/SearchResults";
import Movie from "./components/Movie/Movie";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/popular/*" element={<Popular />} />
                        <Route path="/genres/*" element={<Genres/>} />
                        <Route path="/library" element={<Library/>} />
                        <Route path="/search/*" element={<SearchResults />} />
                        <Route path="/movie/*" element={<Movie/>} />
                        <Route path="/tv/*" element={<Movie/>} />
                    </Routes>
                </Main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
