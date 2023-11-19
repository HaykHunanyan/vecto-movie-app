/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';
import searchIcon from '../../../assets/icons/ICON - Search.png'
import homeIcon from '../../../assets/icons/Group 46.png'
import tvIcon from '../../../assets/icons/Group 56.png'
import moviesIcon from '../../../assets/icons/Group 54.png'
import genresIcon from '../../../assets/icons/Group 53.png'
import watchLaterIcon from '../../../assets/icons/Group 47.png'
import './MainMenuWrapper.scss';

interface MainMenuItemsProps {
    menuOpen: boolean;
    handleMenuToggle:VoidFunction
  }
const MainMenuItems: React.FC<MainMenuItemsProps> = ({menuOpen,handleMenuToggle}) => {
    //onMouseEnter={handleMenuToggle} onMouseLeave={handleMenuToggle}
  return (
    <div className='main_menu_content'>
        <div className={`main-menu ${menuOpen ? 'open' : ''}`} >
            <div className={`profile-info ${menuOpen ? 'show' : 'hide'}`}>
                <div className='profile_icon'>
                    <UserOutlined />
                </div>
                <span>Daniel</span>
            </div>
            <a href="#" className="menu-item">
                <img src={searchIcon} alt='search'/>
                <span>Search</span>
            </a>
            <a href="#" className="menu-item">
                <img src={homeIcon} alt='home'/>
               <span> Home</span>
            </a>
            <a href="#" className="menu-item">
                <img src={tvIcon} alt='TV'/>
                <span>TV shows</span>
            </a>
            <a href="#" className="menu-item">
                <img src={moviesIcon} alt='movies'/>
                <span>Movies</span>
            </a>
            <a href="#" className="menu-item">
                <img src={genresIcon} alt='genres'/>
                <span>Genres</span>
            </a>
            <a href="#" className="menu-item">
                <img src={watchLaterIcon} alt='watchLater'/>
                <span>Watch Later</span>
            </a>
            <Popover content='Aditional Menu'>
                <div className='additional_menu_show' onClick={handleMenuToggle}>
                    <LeftOutlined style={{color:'white'}}/>
                </div>
            </Popover>
            <div className={`bottom_menu ${menuOpen ? 'show' : 'hide'}`}>
                <span>LANGUAGE</span>
                <span>GET HELP</span>
                <span>EXIT</span>
            </div>
        </div>
    </div>
  );
};

export default MainMenuItems;
