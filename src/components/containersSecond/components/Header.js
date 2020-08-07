import React from 'react'
import styled from 'styled-components';

const Link = ({ className, children }) => (
    <p className={className}>
        {children}
    </p>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;


const MyHeader = () => (
    <React.Fragment>
        <Link>Unstyled, boring Link</Link>
        <StyledLink>Styled, exciting Link</StyledLink>
    </React.Fragment>
)

export default MyHeader;