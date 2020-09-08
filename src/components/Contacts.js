import React from 'react';
import CONTACTS from '../data/contacts'

const Contact = props =>{
        const {link, image} = props.socialprofile;

        return (
            <div style={{display: 'inline-block', width:80, margin:10}}>
                <a href={link}>
                    <img src = {image} alt = 'profile' style = {{width: 50, height: 50}}/>
                </a>
            </div>
        )
    
}

const Contacts = () =>(
        <div>
            <h3>Contacts</h3>
            <div>
                {
                    CONTACTS.map(CONTACT => (
                        <Contact key={CONTACT.id} socialprofile={CONTACT} />
                    ))
                }
            </div>
        </div>
    )

export default Contacts;