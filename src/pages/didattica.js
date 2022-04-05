//import
import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container } from "react-bootstrap";

import Seo from "../components/Seo";


const Didattica = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo
        title="Didattica del LAD"
        description="Didattica di LAD: tutte le attività del LAD rivolte alla didattica a vari livelli: corsi, seminari, tutorial, laboratori"
        url={ `${data.site.siteMetadata.siteUrl}/didattica/` }
        image={`${data.site.siteMetadata.siteUrl}${withPrefix(`/logos/lad-blue.png`)}`.replace(/([^:]\/)\/+/g, "$1")}
      />
      
      <Container>
      
        <h1 className="text-center">Didattica</h1>

        <p className="lead text-center">La didattica è un'attività centrale del LAD: Laboratorio di Archeologia Digitale alla Sapienza, in quanto tutti i nostri progetti prevedono la partecipazione e la condivisione di conoscenza e competenze con i più giovani. La didattica è organizzata in corsi tradizionali, laboratori pratici, seminari, tutorial e attività di tirocinio. Di seguito si elencano alcune ooprtunità di collaborare con noi.</p>
        <hr />
      

        <h1 className="text-center">Didattica</h1>

        <div className="p-5 m-5 border bg-light text-center">
          <p>
            Sono  <strong>chiuse le iscrizioni</strong> laboratori QGIS e
            Database per l'anno <strong>accademico 2021-2022</strong> causa
            raggiungimento del numero dei partecipanti.
          </p>
          <p>
            Per il programma e i dettagli seguire{" "}
            <a
              href={withPrefix(
                `notizie/2022-02-04-laboratori-didattici-di-archeologia-digitale-2021-2022/`
              )}
              title="Aperte le iscrizioni ai laboratori QGIS e Database a.a. 2021-2022"
            >
              questo collegamento
            </a>
            .
          </p>
        </div>

        {posts.map(({ node }, k) => {
          return (
            <Wrapper key={k}>
              <Row className="my-5 mx-md-5 py-5">
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
                          alt={node.frontmatter.title}
                        />
                      </Link>
                    )}
                </Col>

                <Col xs={12} md={10}>
                  <h2>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h2>
                  <p>{node.excerpt}</p>
                </Col>
              </Row>
            </Wrapper>
          );
        })}
      </Container>
    </Layout>
  );
};

const Wrapper = styled.section`
img {
  max-width: 100px!important;
}`;


export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
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

export default Didattica;
