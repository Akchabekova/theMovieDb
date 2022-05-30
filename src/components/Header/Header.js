import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
        <div className="container">
            <div className="header-logo">
                <div className="logo">
                    <Link to="/">
                    <img src="https://s6.vcdn.biz/static/132364661/logox2.png/pt/r0x0" />
                    </Link>
                </div>
                <div className="header-desc">
                    <Link to="/films">
                    <h4 className="header-desc-item">Фильмы</h4>
                    </Link>
                    <Link to="/serials">
                    <h4 className="header-desc-item">Сериалы</h4>
                    </Link>
                    <Link to="/person/">
                    <h4 className="header-desc-item">Люди</h4>
                    </Link>
                    <h4 className="header-desc-item">Еще</h4>
                   <h4 className="header-desc-item">+</h4>
                </div>
                <div className="header-search">
                    <h4 className="header-search-item">Search</h4>
                    <h4 className="header-search-item">Ru</h4>
                    <h4 className="header-search-item">Войти</h4>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;