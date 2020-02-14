import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'
import {
  LandingPage,
  Header,
  Loader,
  Footer,
  Login,
  Dashboard,
} from './components'
import { Layout } from 'antd'

const { Content } = Layout

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Content>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={LandingPage}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </Content>
      </Main>
      <Footer />
    </Router>
  )
}

export default App

const Main = styled.main`
  height: calc(100vh - 128px);
`
