import React from 'react';
import {API_NEW_RELEASES, API_NEW_TV} from "../../API/API";
import NewReleases from "./NewReleases/NewReleases";

const Home = () => {
    return (
        <>
            <NewReleases header="Мировые релизы в кинотеатрах" url={API_NEW_RELEASES} link="movie"/>
            <NewReleases header="Популярные сериалы" url={API_NEW_TV} link="tv"/>
        </>
    );
};

export default Home;