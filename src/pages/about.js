import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'

export default () => (
  <Layout>
    <Title text='About Me'/>
    <div>
      <Link to='/'>Home</Link> | <Link to='/about'>About me</Link>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Layout>
)