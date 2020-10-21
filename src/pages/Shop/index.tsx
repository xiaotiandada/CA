import React, { Fragment } from 'react';
import styled from 'styled-components'
import { Card } from 'antd';
import { DownloadOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';


import Header from "../../components/Header";
import Footer from "../../components/Footer";

const list = [
    {
        title: 'Default Card',
        src: 'https://codepen.io/agathaco/embed/preview/zYBGXaz?height=265&theme-id=dark&default-tab=html,result',
        iframe: `<iframe
        height="265"
        style="width: 100%"
        scrolling="no"
        title="Curious Bear"
        src="https://codepen.io/agathaco/embed/preview/zYBGXaz?height=265&theme-id=dark&default-tab=html,result"
        frameBorder="no"
        loading="lazy"
        // @ts-ignore
        allowtransparency="true"
        allowFullScreen={ true }>
        See the Pen
        <a href='https://codepen.io/agathaco/pen/zYBGXaz'>Curious Bear</a> by agathaco(<a href='https://codepen.io/agathaco'>@agathaco</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>`
    }
]

const Shop = () => {
    return (
        <Fragment>
            <Header></Header>
            <StyledCardWrapper>
                {
                    list.map((i, idx) => (
                        <Card title={ i.title } style={{ overflow: 'auto' }} key={idx} extra={<a href={ i.src } target="_blannk" rel="noopener noreferrer">View</a>} actions={[
                            <DownloadOutlined key="download" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}>
                            {
                                idx === 0 ? <div dangerouslySetInnerHTML={ { __html: i.iframe } }></div> : <div style={{ height: 265 }}></div>
                            }
                        </Card>
                    ))
                }
            </StyledCardWrapper>
            <Footer></Footer>
        </Fragment>
    )
}

const StyledCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    padding: 20px;
`

export default Shop