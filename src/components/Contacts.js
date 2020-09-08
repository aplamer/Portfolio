import React from 'react';
import CONTACTS from '../data/contacts'

const Contact = props =>{
        const {link, image} = props.socialprofile;

        return (
            <div className = "contacts">
                <a href={link}>
                    <img src = {image} className = "contactImage"/>
                </a>
            </div>
        )
    
}

const Contacts = () =>(
        <div style ={{textAlign:"center"}}>
                {
                    CONTACTS.map(CONTACT => (
                        <Contact key={CONTACT.id} socialprofile={CONTACT} />
                    ))
                }
        </div>
    )

export default Contacts;