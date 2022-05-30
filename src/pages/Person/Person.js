import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Person = () => {
    const {id} = useParams()
    const [persons, setPersons] = useState({})
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?language=ru&api_key=c15dc811a651d1fac269c5d73e1332f0`)
            .then((res)=>{
                setPersons(res.data)
                setLoader(false)
            })

    },[id])
    if(loader){
        return "Loading ..."
    }

    return (
        <div className="scroller">
            {
                persons.cast.map((person, id) => (
                    <div className="persons-card" key={id}>
                        <div className="card-img">
                            <Link to={`/person/${person.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${person.profile_path}`} alt=""/>
                            </Link>
                        </div>
                        <div className="card-content person">
                            <Link to={`/person/${person.id}`}>
                                <h5 className="card-title person">{person.name}{person.character}</h5>
                            </Link>
                        </div>
                    </div>

                ))
            }

        </div>
    );
};

export default Person;