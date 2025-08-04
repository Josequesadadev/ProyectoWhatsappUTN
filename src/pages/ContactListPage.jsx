import React from 'react';
import Header from '../components/Header';
import ContactItem from '../components/ContactItem';
import { contacts } from '../data';

function ContactListPage() {
  return (
    <>
      <Header title="Whatsapp" />
      <main>
        <div className="hero-div">
          <h2 className="h2-chat">Chats</h2>
          <div className="search-icon-text">
            <i className="class-icon-black bi bi-search"></i>
            <input className="search" type="text" placeholder="Buscar chat" />
          </div>
          
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ContactListPage;