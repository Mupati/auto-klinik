import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AdminDashboard, DriverDashboard } from '../components'

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(true)
  console.log(setIsAdmin)

  useEffect(() => {
    document.title = 'Dashboard - Auto Klinik'
  }, [])

  return <Wrapper>{isAdmin ? <AdminDashboard /> : <DriverDashboard />}</Wrapper>
}

export default Dashboard

const Wrapper = styled.div``
