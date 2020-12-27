import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledHeader>
            <div className="container">
                <div className="cooperation-links">
                    <div className="title">友情链接：</div>
                    <a href="https://xiaotiandada.github.io" target="_blank" rel="noopener noreferrer">小田的Blog</a>
                </div>
                <div className="cooperation-links">
                    <div className="title">其他链接：</div>
                    <a href="https://github.com/xiaotiandada" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className="copyright">XIAOTIAN 所有 <a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">无</a></div>
            </div>

        </StyledHeader>
    )
}

const StyledHeader = styled.footer`
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px 0;
    position: relative;
    overflow: hidden;
    flex: none;

    .container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        height: 100%;
        width: 100%;
        max-width: 1360px;
        margin: 0 20px
    }
   .cooperation-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        font-size: 14px;
        color: #a6aebc;
        margin: 2px 0;
        .title {

        }
        a {
            color: #a6aebc;
            margin-right: 10px;
        }
   }
   .copyright {
    font-size: 14px;
    color: #a6aebc;
    margin-top: 8px;
    a {
        color: #a6aebc;
    }
   }
`

export default Footer