import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi Laura Jodz!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something hilarious and unique.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
