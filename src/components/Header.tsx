import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <StyledHeader>
            <span>💖</span>
            <nav>
                <a href="/">Home</a>
                <Link to="/shop">Shop</Link>
                <a href="/">About</a>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .05);
    span {
        font-size: 30px;
    }
    a {
        color: #333;
        margin: 0 10px;
        font-size: 18px;
    }
`

export default Header