import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'

const { Header } = Layout

const TheHeader = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

export default TheHeader

const Wrapper = styled.header``
