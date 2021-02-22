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
    margin: 30px 0;
    border-radius: 5px;
    margin-top: 18px;

    h2 {
        margin: 0;
        padding: 10px;
        text-align: center;
        
    }
`;