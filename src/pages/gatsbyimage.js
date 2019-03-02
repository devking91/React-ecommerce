import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const About = props => (
  <Layout location={props.location}>
    <Helmet title="Gatsby Image" />
    <h3>Images displayed here utilise the Gatsby-Image plugin</h3>
    <Img fluid={props.data.background.fluid} alt="Big Lamp" />
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: 0.3,
        zIndex: 0,
      }}
      fluid={props.data.background.fluid}
      alt="Big Lamp"
    />
  </Layout>
)

export const query = graphql`
  query LayoutQuery {
    background: imageSharp(id: { regex: "/header.png/" }) {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default About
