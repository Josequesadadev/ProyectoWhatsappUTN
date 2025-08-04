import React from 'react';
import { Link } from 'react-router-dom';

function Header({ title, contact }) {
  return (
    <header>
      <div className={`div-header ${contact ? 'chat-header' : ''}`}>
        {contact ? (
          <div className="info-contact">
             <Link to="/">&#x2190;</Link> {/* Botón simple para volver */}
            <img className="img-contact-style" src={contact.image} alt={contact.name} />
            <div className="name-contacts">{contact.name}</div>
          </div>
        ) : (

          <div className="div-logo-h1">
            <h1 className="p-whatsapp">{title}</h1>
          </div>
        )}
        <div className="icons">
          <i className="class-icon bi bi-camera"></i>
          <i className="class-icon bi bi-three-dots-vertical"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;