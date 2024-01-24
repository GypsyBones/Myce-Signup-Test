import React, {Component} from 'react'
import './Nav.css'
import '../custom.scss';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar container-fluid">
                <ul className="nav nav-tabs row">
                    <li className="nav-item col">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
