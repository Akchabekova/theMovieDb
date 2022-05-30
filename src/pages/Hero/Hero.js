import React, {useEffect,useState} from 'react';
import axios from 'axios';


const Hero = () => {
    const [hero,setHero] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/trending/movie/day?language=ru-RUS&sort_by=popularity.desc&api_key=c15dc811a651d1fac269c5d73e1332f0`)
            .then((res) => {
                setHero(res.data)
                setLoading(false)
            })
    },[])
     if(loading) {
         return "Loading ..."
     }
    return (
        <div className="hero">
            <div className="container">
                <h1 className="hero-title">Добро пожаловать!</h1>
                <h3 className="hero-desc">Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
                <input type="text" className="input-hero"  placeholder="Найти фильм,сериал,персону ..." />
                <button className="btn-search">Поиск</button>
            </div>
        </div>
    );
};

export default Hero;




