import React from 'react';
import { Link } from 'react-router-dom';

function ContactItem({ contact }) {

  return (
    <Link to={`/chat/${contact.id}`}>
      <div className="div-content-name-img">
        <div className="info-contact">
          <img className="img-contact-size" src={contact.image} alt={contact.name} />
          <div className="name-contacts">{contact.name}</div>
        </div>
        <div className="last-seen">{contact.lastSeen}</div>
      </div>
    </Link>
  );
}

export default ContactItem;