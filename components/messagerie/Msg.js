import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import jwt from 'jsonwebtoken';
import style from '../../styles/Msg.module.css';

const socket = io('http://localhost:3001', {
  transports: ['websocket'],
  withCredentials: true,
});

export default function Msg() {
  const [idEnv, setIdEnv] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt.decode(token);
      if (decodedToken) {
        const { nom, prenom, userId } = decodedToken;
        setIdEnv(userId);
      } else {
        console.log('Erreur lors du décodage du token');
      }
    } else {
      console.log('Aucun token trouvé');
    }

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('allMessages', (messages) => {
      setMessages(messages);
    });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('connect');
      socket.off('allMessages');
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    const messageData = {
      idEnv: idEnv,
      message: inputValue,
    };

    socket.emit('message', messageData);
    setInputValue('');
  };

  return (
    <div className={style.right}>
      <div className={style.nav}>
        <h1 className={style.title}>Real-time Chat</h1>
      </div>
      <ul className={style.groupet}>
        {messages.map((message) =>
          message.idEnv === idEnv ? (
            <li key={message._id} className={style.backmsg}>
              <div className={style.message1}>
                <span className={style.span1}>{message.message}</span>
              </div>
            </li>
          ) : (
            <li key={message._id} className={style.backmsg1}>
              <div className={style.message}>
                <span className={style.span}>{message.message}</span>
              </div>
            </li>
          )
        )}
      <div ref={messagesEndRef} />
      </ul>
      <form onSubmit={handleMessageSubmit} className={style.groupe}>
        <input
          type="text"
          className={style.msg}
          placeholder="Ecrire un message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={style.btn}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}
