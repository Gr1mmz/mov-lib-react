import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Popular from "./components/Popular/Popular";
import Genres from "./components/Genres/Genres";
import Library from "./components/Library/Library";
import Footer from "./components/Footer/Footer";
import SearchResults from "./components/SearchResults/SearchResults";
import Movie from "./components/Movie/Movie";
import Modal from "./components/UI/Modal/Modal";
import MobileNavbar from "./components/Header/MobileNavbar/MobileNavbar";

import './styles/App.css';

function App() {

    const [modal, setModal] = useState(false);
    const [mobileNavbar, setMobileNavbar] = useState(false);

    return (
        <BrowserRouter>
            <div className="App">
                <Header setModal={setModal} setMobileNavbar={setMobileNavbar}/>
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
                <Modal type="login" visible={modal} setVisible={setModal}/>
                <MobileNavbar visible={mobileNavbar} setVisible={setMobileNavbar}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
