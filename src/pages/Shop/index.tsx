import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { DownloadOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const Header = () => {
    return (
        <StyledHeader>
            <a href="/">Home</a>
            <Link to="/shop">Shop</Link>
            <a href="/">About</a>
        </StyledHeader>
    )
}

const list = [1, 2, 3, 4]

const Shop = () => {
    return (
        <Fragment>
            <Header></Header>
            <StyledCardWrapper>
                {
                    list.map((i, idx) => (
                        <Card title="Default Card" style={{ overflow: 'auto' }} key={idx} extra={<a href="#">View</a>} actions={[
                            <DownloadOutlined key="download" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}>
                            <iframe
                                height="265"
                                style={{ width: '100%' }}
                                scrolling="no"
                                title="Curious Bear"
                                src="https://codepen.io/agathaco/embed/preview/zYBGXaz?height=265&theme-id=dark&default-tab=html,result"
                                frameBorder="no"
                                loading="lazy"
                                // @ts-ignore
                                allowtransparency="true"
                                allowFullScreen={ true }>
                                See the Pen
                                <a href='https://codepen.io/agathaco/pen/zYBGXaz'>Curious Bear</a> by agathaco(<a href='https://codepen.io/agathaco'>@agathaco</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
                        </Card>
                    ))
                }
            </StyledCardWrapper>
        </Fragment>
    )
}


const StyledHeader = styled.nav`
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        margin: 0 10px;
        font-size: 20px;
    }
`

const StyledCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    padding: 20px;
`

export default Shop