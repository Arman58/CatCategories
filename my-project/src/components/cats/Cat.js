import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledItem = styled.div`
  border-radius: 8px;
  height: 200px;
  width: 200px;
  object-fit: cover;
  box-shadow: 5px 10px 8px 10px #888888;
`

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;

  ${StyledItem}:hover & {
    box-shadow: 5px 5px 5px 5px #f441a5;;
  }
`
const Cat = ({
                 url,
             }) => (
    <StyledItem>
        <StyledImage src={url}/>
    </StyledItem>
)


Cat.propTypes = {
    url: PropTypes.string,
}

Cat.defaultProps = {
    url: ""
}

export default Cat
