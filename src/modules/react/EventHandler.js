import React from 'react'
import styled from 'styled-components'

const EventHandlerContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`

const EventHandler = () => {
  const handler1 = (e) => {
    console.log('handler1', e);
  };
  const handler2 = (e) => {
    console.log('handler2', e);
  };

  const handler3 = (e) => {
    console.log('handler3', e);
  };
  const handler4 = (e) => {
    console.log('handler4', e);
  };
  return (
    <EventHandlerContainer>
      <h1>Event Handler</h1>
      <div>check console.log, the correct order is: 4,2,3,1</div>
      <div onClick={handler3} onClickCapture={handler4} >
        <button onClick={handler1} onClickCapture={handler2}>Click me</button>
      </div>
    </EventHandlerContainer>
  )
}

export default EventHandler