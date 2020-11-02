import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { CodeOutlined, CopyOutlined } from '@ant-design/icons';
import { Modal, Button, Space, message, Tag } from 'antd';
import { shopList } from "../../api/api";
import { requestInterface } from "../../type";
import {CopyToClipboard} from 'react-copy-to-clipboard';


import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarouselComponent from "../../components/Carousel";

const Shop = () => {

    const [ list, setList ]: any = useState([])
    const [ visible, setVisible ] = useState(false)
    const [ nowIdx, setNowIdx ] = useState(0)

    useEffect(() => {
        const getList = async () => {
            const result: requestInterface = await shopList()
            if (result.code === 0) {
                setList(result.data.list)
            }
        }
        getList()
    }, []);

    return (
        <StyledWrapper>
            <Header></Header>
            <StyledCarousel>
                <StyledCarouselBanner>
                    <CarouselComponent></CarouselComponent>
                </StyledCarouselBanner>
                <StyledCarouselClassificationn>
                    <StyledCarouselClassificationnTitle>
                        <div>分类</div>
                    </StyledCarouselClassificationnTitle>
                </StyledCarouselClassificationn>
            </StyledCarousel>
            <StyledTitle>
                <span className="title">All Animtion</span>
                <a href="/shop" className="more">View</a>
            </StyledTitle>
            {
                list?.length > 0 ?
                <StyledCardWrapper>
                {
                    list.map((i: any, idx: number) => (
                        <StyledCard key={ idx }>
                            <StyledCardInnerHtml dangerouslySetInnerHTML={ { __html: i.iframe } }></StyledCardInnerHtml>
                            <div>
                                <StyledCardInfo>
                                    <span>{ i.title  }</span>
                                    <a href={ i.src } target="_blannk" rel="noopener noreferrer">View</a>
                                </StyledCardInfo>
                                <StyledCardItem>
                                    <Tag color="blue">Gsap</Tag>
                                </StyledCardItem>
                                <StyledCardBtn>
                                    <CodeOutlined style={{ cursor: 'pointer' }} onClick={ () => { setNowIdx(idx); setVisible(true) } } />
                                </StyledCardBtn>
                            </div>
                        </StyledCard>
                    ))
                }
                </StyledCardWrapper> :
                <StyledEmpty><p style={{ marginTop: 100, textAlign: 'center' }}>暂时什么也没有...</p></StyledEmpty>
            }
            <Footer></Footer>
            <Modal
                title={ list[nowIdx]?.title }
                visible={visible}
                footer={null}
            >
                <p>{ list[nowIdx]?.iframe }</p>
                <Space>
                    <CopyToClipboard text={list[nowIdx]?.iframe} onCopy={() => message.success('copy success')}>
                        <Button icon={<CopyOutlined />}>Copy</Button>
                    </CopyToClipboard>
                    <Button type="primary" onClick={() => setVisible(false)}>Ok</Button>
                </Space>
            </Modal>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.section`
    background-color: #f1f4f8;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const StyledCarousel = styled.section`
    width: 100%;
    max-width: 1400px;
    height: 380px;
    box-sizing: border-box;
    margin: 20px auto;
    padding: 0 20px;
    display: flex;
`

const StyledCarouselBanner = styled.section`
    box-shadow: 0 14px 20px 0 rgba(234,63,255,0), 0 15px 40px 0 rgba(79,125,183,.08);
    background: #fff;
    width: 75%;
`
const StyledCarouselClassificationn = styled.section`
    width: 25%;
    margin-left: 15px;
    box-shadow: 0 14px 20px 0 rgba(234,63,255,0), 0 15px 40px 0 rgba(79,125,183,.08);
    background: #fff;
`
const StyledCarouselClassificationnTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 39px;
    div {
        font-weight: 600;
    font-size: 16px;
    color: #3c3c3c;
    letter-spacing: 0;
    margin-left: 10px;
    }
`

const StyledTitle = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 10px 20px;
    .title {
        font-size: 16px;
        font-weight: 500;
        color: #424242;
}
    }
    .more {
        font-size: 16px;
        color: #333;
    }
`


const StyledCardWrapper = styled.div`
    flex: 1;
    width: 100%;
    max-width: 1400px;
    box-sizing: border-box;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    padding: 0 20px 20px;
`
const StyledEmpty = styled.div`
    flex: 1;
    width: 100%;
`

const StyledCard = styled.section`
    border: 1px solid #f0f0f0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum', "tnum";
    position: relative;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 4px 8px 0 rgba(79,125,183,.08);
    transition: all .3s;
    display: flex;
    flex-direction: column;
    &:hover {
        box-shadow: 0 14px 20px 0 rgba(234,63,255,0), 0 15px 40px 0 rgba(79,125,183,.08);
    }
`

const StyledCardInnerHtml = styled.div`
    flex: 1;
`
const StyledCardInfo = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 10px;
    span {
        font-size: 16px;
        color: #333;
    }
    a {
        font-size: 16px;
    }
`
const StyledCardItem = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 10px;
`
const StyledCardBtn = styled.section`
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid #e9e9e9;
    & > * {
        flex: 1;
    }
`

export default Shop