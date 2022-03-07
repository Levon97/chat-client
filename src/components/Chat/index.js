import { useEffect, useState } from 'react';
import Background from '../Background';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';

let socket;

function Chat() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:3001';
  


  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    console.log(name,room);
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    console.log()

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
    console.log(message, messages);
  };
  return (
    <Background>
      <div>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          // onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
        />
      </div>
    </Background>
  );
}

export default Chat;
