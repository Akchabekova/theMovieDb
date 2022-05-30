import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";


const PersonInfo = () => {
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    const [filmsLoading,setFilmsLoading] = useState(true)

    const [persons,setPersons] = useState({})
    const [films,setFilms] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${id}?&language=ru&api_key=c15dc811a651d1fac269c5d73e1332f0`)
            .then(({data}) => {
                setPersons(data)
                setLoading(false)
            })
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?&language=ru&api_key=c15dc811a651d1fac269c5d73e1332f0`)
            .then(({data}) => {
                setFilms(data)
                setFilmsLoading(false)
            })

    },[id])
    if(loading || filmsLoading) {
        return "Loading ..."
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img className="img-personInfo" src={persons.profile_path ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${persons.profile_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}/>
                        <h3 className="persons-title">Персональная информация</h3>
                        <ul>
                            <li>Дата рождения</li>
                            <li>{persons.birthday}</li>
                            <li key={id}>Место рождения</li>
                            <li>{persons.place_of_birth}</li>
                            <li>Пол</li>
                            <li>{persons.gender === 2? "Мужской": "Женский"}</li>
                        </ul>
                    </div>
                    <div className="col-8" >
                        <h1 className="persons-title">{persons.name}</h1>
                        <p className="card-title">{persons.biography}</p>
                        <div className="scroller">
                            {
                                films.cast.map((item,index) => (
                                    <div key={index} className="movie-card" style={{zIndex:"2"}}>
                                        <div className="card-img">
                                            <Link to={`/movie/${item.id}`}>
                                                <img src={`/t/p/w600_and_h900_bestv2/${id}.jpg`} alt=""/>
                                            </Link>
                                        </div>
                                        <div className="card-content">
                                            <Link to={`/movie/${id}`}>
                                                <h5 className="card-title">{item.title}</h5>

                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default PersonInfo;

