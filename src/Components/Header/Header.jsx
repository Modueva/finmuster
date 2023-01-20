import React from 'react';
import logo from '../../Assets/Images/logo.svg'
import { NavLink } from 'react-router-dom';
import s from '../../Assets/Styles/Navbar.module.css';


const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className="container">

                    <div className="header__main">
                        <div className="logo">
                            <img src={logo}/>
                        </div>
                        <div className="contacts">
                            {/* <button onClick={() => {console.log('!!!!'); }}>+7 (918) 142-48-44</button> */}
                            <span className='number'>+7 (918) 142-48-44</span>
                            <button className='btn'>ЗАКАЗАТЬ ЗВОНОК</button>
                            <button className='btn'>ЛИЧНЫЙ КАБИНЕТ</button>
                        </div>
                    </div>
                    <hr/>            
                    <nav className={s.nav}>
                        <div className={s.item}>
                            <NavLink to='/home' activeClassName={s.activeLink}>Главная</NavLink>
                        </div>
                        <div className={`${s.item} ${s.active}`}>
                            <NavLink to='/investor' activeClassName={s.activeLink} > Инвесторам</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to='/company' activeClassName={s.activeLink}>Компаниям</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to='/partner' activeClassName={s.activeLink}> Партнерам</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to='/cases' activeClassName={s.activeLink}> Кейсы</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to='/blog' activeClassName={s.activeLink}> Блог</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to='/contacts' activeClassName={s.activeLink}> Контакты</NavLink>
                        </div>
                    </nav>
   
                </div>
            </header>
        </div>
    );
};

export default Header;