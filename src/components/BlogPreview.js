//import
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

//markup
const BlogPreview = (props) => {
  return (
    <StyledDiv className='shadow p-3 mt-4'>
      <Link to={props.readMore} title={props.title}>
        <h5>{props.title}</h5>
        <p className='pt-1 pb-1 mt-3 border-bottom'>{props.author} | {props.date}</p>
        <p>{ props.excerpt }</p>
      </Link>
    </StyledDiv>
  );
};

//styles
const StyledDiv = styled.div`
  border-bottom: 1px solid #1963F7;
  color: #636363;
  a{
    color: #212529;
  }

  p{
    font-size: 0.9rem;
  }
`;
export default BlogPreview
