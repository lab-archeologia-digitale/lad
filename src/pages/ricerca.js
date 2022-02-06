//import
import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container} from "react-bootstrap";

const Ricerca = ({data}) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>

      <h1 className="text-center">Ricerca</h1>

      {posts.map(({ node }, k) => {
        return (
          <Container key={k}>
            <Row className="my-5">
              <Col sm={3}>
                {node.frontmatter.img &&
                  node.frontmatter.img.childImageSharp &&
                  node.frontmatter.img.childImageSharp.gatsbyImageData && (
                    <Link to={node.fields.slug}>
                      <GatsbyImage
                        image={
                          node.frontmatter.img.childImageSharp.gatsbyImageData
                        }
                        key={
                          node.frontmatter.img.childImageSharp.gatsbyImageData
                            .src
                        }
                        alt={node.frontmatter.img.base}
                      />
                    </Link>
                  )}
              </Col>
              <Col sm={9}>
                <h2>
                  <Link to={node.fields.slug}>
                  {node.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-secondary">
                  {node.timeToRead} minuti di lettura
                </p>
                <p>{node.excerpt}</p>
              </Col>
            </Row>
          </Container>
        );})}
    </Layout>
  );};


export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___sort, order: DESC }
      filter: {fileAbsolutePath: {regex: "/posts\\/ricerca/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            sort
            img {
              base
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  formats: [AUTO, AVIF, WEBP]
                  quality: 100
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default Ricerca;
