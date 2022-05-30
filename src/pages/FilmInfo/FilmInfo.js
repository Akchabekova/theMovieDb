import React, {useEffect, useState} from 'react';
import {useParams , Link} from "react-router-dom";
import axios from "axios";
import Person from "../Person";
import PersonCompound from "../PersonCompound";


const FilmInfo = () => {
    const {id} = useParams()
    const [filmInfo, setFilmInfo] = useState({})
    const [filmloader, setFilmLoader] = useState(true)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=c15dc811a651d1fac269c5d73e1332f0`)
            .then((res) => {
                setFilmInfo(res.data)
                setFilmLoader(false)
            })

    }, [id] )
    if (filmloader) {
        return "Loading ... "
    }
    return (
        <>
            <div className="info-header" >
           <h5 className="info-cap">Обзор</h5>
            <h5 className="info-cap">Медиа</h5>
            <h5 className="info-cap">Фандом</h5>
             <h5 className="info-cap">Поделиться</h5>
                    </div>
            <div className="info-background" style={{
                backgroundImage:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${filmInfo.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
             <div className="container">
            <div className="info-card">
           <div className="info-img">
            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${filmInfo.poster_path}`} className="info-img"/>
            </div>
            <div className="info-desc">
            <div className="info-title">{filmInfo.title}</div>
             <div className="info-news">
             <div className="release-date"> {filmInfo.release_date}</div>
                                    {
                                        filmInfo.production_countries.map((country) => (
                                            <Link to={`/filmInfo${country}`} classname="production_country"
                                                  key={country.id}>({country.iso_3166_1})</Link>
                                        ))
                                    }
                                    {
                                        filmInfo.genres.map((elem) =>(
                                            <Link to={`/filmInfo/${elem.id}`} className="genres" key={elem.id}>{elem.name} ,</Link>
                                        ))
                                    }
                                    <div className="runtime">{filmInfo.runtime}</div>
                                </div>
                                    <div className="tagline">
                                        {filmInfo.tagline}
                                    </div>
                                    <h3 className="auto">Обзор</h3>
                                    <div className="overview">
                                        {filmInfo.overview}
                                    </div>
                                    <ul className="people-no-image">
                                        <li className="profile">Akiva Schaffer
                                            <p className="character">Director</p>
                                        </li>
                                        <li className="profile"> Dan Gregor
                                            <p className="character">Writer</p>
                                        </li>
                                        <li className="profile">Doung Mang
                                            <p className="character">Writer</p>
                                        </li>
                                    </ul>
                                    <h3 className="person-compound">
                                    <PersonCompound/>
                                    </h3>


                                </div>
                        </div>
                        </div>
                    </div>

            <Person/>
                    </>
    );
};

export default FilmInfo;
