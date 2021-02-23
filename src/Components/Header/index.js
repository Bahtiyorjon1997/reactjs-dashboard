import React from 'react';
import styled from "styled-components"

const Header = () => {
    return (
        <Wrapper>
            <h2>Header</h2>
        </Wrapper>
    )
}
export default Header

const Wrapper = styled.div`
    height: 60px;
    width: 100%;
    background-color: white;
 
    border-radius: 5px; 
    position: sticky;
    top: 30px;

    h2 {
        margin: 0;
        padding: 10px;
        text-align: center;
        
    }
`;