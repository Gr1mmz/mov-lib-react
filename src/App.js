import './styles/App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Popular from "./components/Popular/Popular";
import Genres from "./components/Genres/Genres";
import Library from "./components/Library/Library";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/popular" element={<Popular/>} />
                        <Route path="/genres" element={<Genres/>} />
                        <Route path="/library" element={<Library/>} />
                    </Routes>
                </Main>
            </div>
        </BrowserRouter>
    );
}

export default App;
