import React, {Component} from 'react';


class Menu extends Component
{
    render(){
        return (
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#wedo.com">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#wedo.com">Categories</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#wedo.com">Bootcamps</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#wedo.com">Tutos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#wedo.com">Blogs</a>
                </li>
               
            </ul>
            
        )
    }
}

export default Menu