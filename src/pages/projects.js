import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Projects, Algolia } from '../components'

const ProjectsPage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Wrapper>
      <Layout>
        <Projects projects={projects} title="all projects" page />
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "projects" } }
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          name
          type
        }
      }
    }
  }
`

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export default ProjectsPage
