import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";



const PopularFilms= () => {
    const [popular, setPopular] = useState([])
    useEffect(() => {
        axios('https://api.themoviedb.org/3/trending/movie/day?language=ru-RUS&sort_by=popularity.desc&api_key=c15dc811a651d1fac269c5d73e1332f0')
            .then((res) => setPopular(res.data.results))
    }, [])

    const formatDate = (date) => {
        const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
        const reversedDate = date.split('-').reverse()
        reversedDate[1] = month[reversedDate[1] - 1]
        console.log(reversedDate)
        return reversedDate.join(' ')
    }

    return (
        <div className="scroller">
            {
                popular.map((item,id) => (
                    <div className="movie-card" key={id}>
                        <div className="card-img">
                            <Link to={`/movie/${item.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt=""/>
                            </Link>
                            <div className="consensus">
                                23
                            </div>
                        </div>
                        <div className="card-content">
                            <Link to={`/movie/${item.id}`}>
                                <h5 className="card-title">{item.title}</h5>
                            </Link>
                            <span className="card-year">{formatDate(item.release_date)}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};







export default PopularFilms;