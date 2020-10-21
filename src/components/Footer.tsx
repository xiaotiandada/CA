import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledHeader>
            <a href="https://github.com/xiaotiandada" target="_blank" rel="noopener noreferrer">Github</a>
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