import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <StyledHeader>
            <a href="/">Github</a>
        </StyledHeader>
    )
}

const StyledHeader = styled.footer`
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    border-top: 1px solid #e5e5e5;
    a {
        color: #333;
        margin: 0 10px;
        font-size: 18px;
        text-decoration: underline;
    }
`

export default Footer