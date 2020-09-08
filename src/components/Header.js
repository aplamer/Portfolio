import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Header = ({children}) => {
    return(
        <div>
            <div id = "header">
                <h4 className = "headerh4"><Link className = "headerLink" to='/'>Home</Link></h4>
                <h4 className = "headerh4"><Link className = "headerLink" to='/about'>About</Link></h4>
                <h4 className = "headerh4"><Link className = "headerLink" to='/education'>Education/Skills</Link></h4>
                <h4 className = "headerh4"><Link className = "headerLink" to='/projects'>Projects</Link></h4>
                <h4 className = "headerh4"><Link className = "headerLink" to='/contacts'>Contacts</Link></h4>
            </div>
            {children}
        </div>
        
    )
}


export default Header;