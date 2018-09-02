import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li> <Link to="/nowshowing">NOW SHOWING </Link> </li>
                    <li> MY LIST </li>
                    <li> ALREADY SEEN </li>
                </ul>
            </header>
        )
    }
}

export default NavBar;