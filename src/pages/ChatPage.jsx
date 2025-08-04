import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { contacts } from '../data';

const initialMessagesByContact = {
  1: [
    { id: 1, text: "¡Hola Lio! ¿Listo para el partido?", fromUser: true },
    { id: 2, text: "¡Anda pa alla bobo!", fromUser: false },
  ],
  2: [
    { id: 1, text: "Hola Cristiano, ¿cómo va todo?", fromUser: true },
    { id: 2, text: "¡Hola! Todo bien, entrenando a full. SIUUU", fromUser: false },
    { id: 3, text: "SIUUUU", fromUser: true },
  ],
  3: [
    { id: 1, text: "Neymar, ¿vas a la fiesta?", fromUser: false },
    { id: 2, text: "¡Ni loco me pierdo esa fiesta! Voy a decir que estoy lesionado", fromUser: true },
    { id: 3, text: "A las 11pm, no faltes.", fromUser: false },
  ],
};

function ChatPage() {
  const { contactId } = useParams();
  const contact = contacts.find(c => c.id === parseInt(contactId));

  // Obtiene los mensajes iniciales según el contacto, o un array vacío si no hay
  const [messages, setMessages] = useState(
    initialMessagesByContact[contactId] || []
  );
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault(); 
    if (newMessage.trim() === '') return;
    
    const messageToAdd = {
      id: Date.now(),
      text: newMessage,
      fromUser: true,
    };
    setMessages([...messages, messageToAdd]);
    setNewMessage('');
  };

  if (!contact) {
    return <div>Contacto no encontrado</div>;
  }

  return (
    <div className="chat-page-body">
      <Header contact={contact} />
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={message.fromUser ? "message user-message" : "message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="content-barChat" onSubmit={handleSendMessage}>
        <input
          type="text"
          name="BarraChat"
          className="writing-bar"
          placeholder="Escribe un mensaje..."
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
        />
        <button type="submit" className="botton-send">
          <i className="bi bi-send-fill"></i>
        </button>
      </form>
    </div>
  );
}

export default ChatPage;