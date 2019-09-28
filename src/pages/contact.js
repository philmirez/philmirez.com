import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'core/seo'
import Layout from 'layout/layout'
import Header from 'buildingBlocks/Header'
import Home from 'buildingBlocks/Home'
import Footer from 'molecules/footer/footer'

import { theme } from 'core/theme'
import { Card, Gallery } from 'layout/style'
import Resume from 'molecules/table/resume'
import { Parallax } from 'molecules/parallax/parallax'

import Grid from '@material-ui/core/Grid'
import Contact from 'molecules/forms/contact'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title='Phil Ramirez'
      keywords={[
        `philmirez`,
        `phil ramirez`,
        `phillip ramirez`,
        `phil`,
        `ramirez`,
        `phillip`,
        `full-stack`,
        `developer`,
        `software`,
        `engineer`,
        `javascript`,
        `nodejs`,
        `node`,
        `gatsbyjs`,
        `gatsby`,
        `linux`,
        `postgresql`,
        `sql`,
        `git`,
        `expressjs`,
        `reactjs`,
        `react`,
        `redux`,
        `graphql`,
        `npm`,
        `Washington D.C.`,
        `Northern Virginia`,
        `George Mason University`
      ]}
    />
    <Header link={{ url: '/', title: 'Home'}}/>
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      style={{backgroundColor: theme.color.white.primary, width: '100%', height: '90vh'}}
    >
        <Grid item xs={8} >
        <Contact />
        </Grid>
    </Grid>
    <Footer />
  </Layout>
)

export const query = graphql`
    query ContactQuery {
        allMarkdownRemark {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        path
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`

export default IndexPage

// Sources:
// - https://www.gatsbyjs.org/starters/?v=2
