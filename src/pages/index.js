import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from '../components'

const HomePage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <About />
      <GridProjects projects={data.allAirtable.nodes} title="latest projects" />
      <Survey />
      <Slider customers={data.customers.nodes} />
    </Layout>
  )
}
export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "projects" } }
      sort: { fields: data___date, order: DESC }
      limit: 3
    ) {
      nodes {
        data {
          name
          type
          date(formatString: "Do MMMM, YYYY")
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
    customers: allAirtable(filter: { table: { eq: "customers" } }) {
      nodes {
        id
        data {
          name
          title
          quote
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  height: 150
                  width: 150
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`
export default HomePage
