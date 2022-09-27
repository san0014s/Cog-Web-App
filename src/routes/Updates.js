import { DiscordMessage, DiscordMessages } from '@danktuary/react-discord-message';
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

const Updates = () => {

  const [messages, setMessages] = useState();

  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:8080/discord/todos", requestOptions)
      .then(response => response.text())
      .then(result => setMessages(JSON.parse(result)))
      .catch(error => console.log('error', error));

  }, [])

  return (
    <div>
      Updates
      <Paper style={{'whiteSpace': 'pre-wrap', height: '70vh', width: '80vw', overflow: 'auto', resize: 'both'}}>
        <DiscordMessages>
          {messages && messages.map((message) => {
            return (
              <DiscordMessage key={message.id} 
                author={message.author.username} 
                timestamp={message.timestamp}
                avatar={'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp?size=32'}
              >
                {message.content}
              </DiscordMessage>
            )
          })}   
        </DiscordMessages>   
      </Paper>
    </div>
  )
}

export default Updates