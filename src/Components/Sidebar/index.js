import React from 'react'
import styled from "styled-components"
import {logo, data} from './data'

function Sidebar() {
    return (
        <Wrapper>
            <ImgWrap>
                <img src={logo[0].icon} alt="logo"/>
                <span>{logo[0].label}</span>
            </ImgWrap>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    height: 100vh;
    width: 250px;
    background-color: white;
    position: sticky;    
    top: 0;

    
    h2 {
        margin: 0;
        padding: 0;
    }
    img {
        height: 24px;
        width: 50px
    }
`;

const ImgWrap = styled.div`
    margin-top: 1.5rem;
    margin-left: 1rem;
    margin-bottom: 3rem;

    span {
        font-size: 23px;
        position: relative;
        font-family:  'Krona One', sans-serif;
        color: blue;
        
    }
`;

