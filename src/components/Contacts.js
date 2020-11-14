import React from 'react';
import CONTACTS from '../data/contacts'

const Contact = props =>{
        const {link, image} = props.socialprofile;

        return (
            <div className = "contacts">
                <a href={link}>
                    <img alt = '' src = {image} className = "contactImage"/>
                </a>
            </div>
        )
    
}

const Contacts = () =>(
        <div className = "home" style ={{textAlign:"center"}}>
            <h2 className = "homeText" style = {{textDecoration : "underline"}}>Contacts</h2>
                {
                    CONTACTS.map(CONTACT => (
                        <Contact key={CONTACT.id} socialprofile={CONTACT} />
                    ))
                }
        </div>
    )

export default Contacts;