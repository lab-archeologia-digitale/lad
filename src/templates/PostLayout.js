//import
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import Layout from "../templates/Layout";
import Seo from "../components/Seo"
import ShareButtons from "../components/ShareButtons";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

//markup
export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const pageUrl = `${data.site.siteMetadata.siteUrl}${post.fields.slug}`.replace(/([^:]\/)\/+/g, "$1");
  
  return (
    <Layout>
      <Seo
        title={ post.frontmatter.title }
        description={ post.frontmatter.sommario ? post.frontmatter.sommario : post.excerpt }
        // https://stackoverflow.com/a/24381515
        url={ pageUrl }
        image={`${data.site.siteMetadata.siteUrl}${post.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src}`.replace(/([^:]\/)\/+/g, "$1")}
        />
      <Wrapper>
        <div>
          <Container className="post-container">
            <div className="post-info text-center">
              <h1>{post.frontmatter.title}</h1>

              { post.frontmatter.autore && 
                <p className="author">
                  di {post.frontmatter.autore}
                </p>
              }
              

              { post.frontmatter.tags && (
                <div className="text-center">
                  <div className="bg-light mb-3 p-3 text-muted d-inline-block">
                    Tag:&nbsp;
                    { post.frontmatter.tags.join(', ') } |
                    Licenza: {post.frontmatter.licenza } |
                    Livello: {post.frontmatter.livello }
                  </div>
                </div>
              )}

              { post.frontmatter.date &&
                <p className="text-center text-secondary">
                  Articolo pubblicato il {post.frontmatter.date}
                </p>
              }

              <ShareButtons 
                url={pageUrl} 
                title={ post.frontmatter.title } 
                tags={ post.frontmatter.tags || [] }
              />

            </div>


            {post.frontmatter.img && (
              <div className="post-image">
                <figure>
                  <GatsbyImage
                    image={post.frontmatter.img.childImageSharp.gatsbyImageData}
                    key={
                      post.frontmatter.img.childImageSharp.gatsbyImageData.src
                    }
                    alt={`${post.frontmatter.title} di ${post.frontmatter.autore}`}
                  />
                </figure>
                { post.frontmatter.didascalia && <p>{post.frontmatter.didascalia}</p> }
              </div>
            )}
            <div className="post-content">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </Container>
        </div>
      </Wrapper>
    </Layout>
  );
}

//styles
const Wrapper = styled.section`
  p.author {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 900 !important;
    font-size: 1.5rem;
  }
  table,
  thead,
  tbody,
  td,
  tr,
  th {
    border: 0.1px solid;
    padding: 8px 8px 8px 8px;
  }

  .post-container {
    max-width: 1000px;
    margin-top: 3rem;
  }
  .post-content img {
    max-width: 400px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .post-image {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .post-image p {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 300 !important;
    font-size: 1rem;
    text-align: center;
  }
`;

//graphql
export const query = graphql`
  query BlogQuery($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "it-IT")
        autore
        licenza
        livello
        title
        sommario
        tags
        didascalia
        img {
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              quality: 100
              formats: [AUTO, AVIF, WEBP]
            )
          }
        }
      }
    }
  }
`;
