import React, { useState, useEffect, useRef } from 'react'
import { Box, TextField, Button, Typography, Stack, IconButton } from '@mui/material'
import axios from 'axios'

const Chat = ({ isOpen, toggleChat, darkMode }) => {
  const [chat, setChat] = useState([])
  const [message, setMessage] = useState('')
  const chatRef = useRef(null)

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chat])

  function exerciseRelated(message){
    const exerciseKeywords = [
      'exercise', 'exercises', 'workout', 'fitness', 'muscle', 'gym', 'training', 'strength', 'cardio', 
      'yoga', 'stretch', 'bodybuilding', 'chest', 'arms', 'back', 'legs', 'weight', 'abs', 'core',
      'calisthenics', 'HIIT', 'aerobics', 'powerlifting', 'crossfit', 'endurance', 'mobility',
      'flexibility', 'plyometrics', 'kettlebell', 'dumbbell', 'barbell', 'resistance', 'squat',
      'deadlift', 'bench press', 'pull up', 'push up','warm-up', 'overhead press', 'row', 'lunge']
    return exerciseKeywords.some(word => message.toLowerCase().includes(word))
  }

  async function handleSend() {
    if(!message) return

    if(!exerciseRelated(message)){
      const newChat = [...chat, { user: 'bot', text: 'Please ask an exercise-related question.'}]
      setChat(newChat)
      setMessage('')
      return
    }

    const newChat = [...chat, { user: 'user', text: message }]
    setChat(newChat)
    try{
      const response = await axios.post('/api/chat', { message })
      setChat([...newChat, { user: 'bot', text: response.data.reply }])
    }
    catch(error){
      if(error.response && error.response.status === 429) {
        setChat([...newChat, { user: 'bot', text: error.response.data.error }])
      } 
      else{
        setChat([...newChat, { user: 'bot', text: 'An error has occurred.' }])
      }
    }
    setMessage('')
  }

  return (
    <>
      <IconButton 
        onClick={toggleChat}
        sx={{
          position: 'fixed', fontSize: '16px',bottom: '40px', right: '50px', 
          height: '70px', width: '75px', backgroundColor: 'red', color: 'white',
          zIndex: 1000,
          '&:hover': {
            backgroundColor: 'darkred',
          }
        }}>
          AI Chat
      </IconButton>

      {isOpen && (
        <Box 
          id='chat'
          p='16px'
          sx={{
            position: 'fixed', bottom: '120px', right: '40px', width: '550px',
            height: '600px', backgroundColor: darkMode ? '#D3D3D3' : '#f9f9f9',
            border: '1px solid #ccc', borderRadius: '8px', display: 'flex',
            flexDirection: 'column', zIndex: 999
          }}>
          <Box sx={{ flex: 1, overflowY: 'auto', mb: '12px', p: '8px' }}>
            <Stack spacing={2}>
              {chat.map((msg, index) => (
                <Typography 
                  key={index}
                  align={msg.user === 'user' ? 'right' : 'left'} 
                  sx={{
                    backgroundColor: msg.user === 'user' ? '#cfe9ff' : '#e5e5e5',
                    padding: '8px',
                    border: '3px solid #ccc',
                    borderRadius: '12px',
                    alignSelf: msg.user === 'user' ? 'flex-end' : 'flex-start',
                    color: 'black'
                  }}>
                  {msg.text}
                </Typography>
              ))}
              <div ref={chatRef} />
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <TextField 
              value={message}
              placeholder='Ask any exercise questions'
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: '75%' }}
            />
            <Button 
              onClick={handleSend}
              variant='contained'
              color='error'
              sx={{ height: '54px', ml: '8px', width: '25%' }}>
              Send
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Chat;