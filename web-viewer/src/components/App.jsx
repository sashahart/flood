import React from 'react'
import { Content, Layout, Header, Navigation } from 'react-mdl'

import Map from './Map'

import { colors } from '../constants'

const App = () => (
  <div>
    <Layout fixedHeader style={{background: 'white'}}>
      <Header title="Texas Flood Information Viewer" style={{backgroundColor: colors.twdbBlue}}>
        <Navigation>
          <a href="">Flood Preparation</a>
          <a href="">About this Site</a>
        </Navigation>
      </Header>
      <div className="site-warning">
        <strong>Warning:</strong> This site is in development and should not be relied upon for any real information.
      </div>
      <Content>
        <Map />
      </Content>
    </Layout>
  </div>
)

export default App
