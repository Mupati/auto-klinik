import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Wrapper>
      <h1>Loading..</h1>
      <h3>Learn React</h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fdcced;
  color: #ddeacc;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loader
