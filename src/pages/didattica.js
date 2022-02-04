//import
import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container } from "react-bootstrap";

const Ricerca = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Wrapper>
        {posts.map(({ node }) => {
          return (
            <Container>
              <Row>
                <Col xs={2}>
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
                          alt=""
                        />
                      </Link>
                    )}
                </Col>

                <Col xs={12} md={10}>
                  <Link to={node.fields.slug}>
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                  <Link to={node.fields.slug}>
                    <p>{node.excerpt}</p>
                  </Link>
                </Col>
              </Row>
            </Container>
          );
        })}
      </Wrapper>
    </Layout>
  );
};

//style
const Wrapper = styled.section`
  a,
  a:hover {
    text-decoration: none !important;
    color: currentColor;
  }
  .container {
    margin: auto !important;
    margin-bottom: 3rem !important;
    margin-top: 3rem !important;
  }
`;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___sort, order: DESC }
      filter: {fileAbsolutePath: {regex: "/posts\\/didattica/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
          fields {
            slug
          }
          frontmatter {
            title
            autore
            sort
            img {
              base
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  formats: [AUTO, AVIF, WEBP]
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