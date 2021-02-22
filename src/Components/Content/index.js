import React from 'react';
import styled from "styled-components"

const Content = () => {
    return (
        <Wrapper>
            <h2>Content</h2>
        </Wrapper>
    )
}

export default Content


const Wrapper = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    background-color: white;
    border-radius: 7px;

    h2 {
        margin: 10px;
        padding: 10px;
        text-align:center;
    }
`;