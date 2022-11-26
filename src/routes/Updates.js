import { DiscordMessage, DiscordMessages } from '@danktuary/react-discord-message';
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import { Paper } from '@mui/material';

const Updates = () => {

  const [messages, setMessages] = useState();

  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/discord/todos`, requestOptions)
      .then(response => response.text())
      .then(result => setMessages(JSON.parse(result)))
      .catch(error => console.log('error', error));

  }, [])

  return (
    <Container style={{marginTop: '10px'}}>
      <h1>Updates</h1>
      <p style={{fontSize: '20px', marginTop: '20px'}}>
        Updates are pulled from our discord server in a channel where we tell each other what we're
        going to work on next.
      </p>
      <Paper 
        style={{
          whiteSpace: 'pre-wrap', 
          height: '70vh', 
          width: '80vw', 
          overflow: 'auto', 
          resize: 'both',
          marginTop: '10px',
        }}
      >
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
    </Container>
  )
}

export default Updates