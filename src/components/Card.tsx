import React from 'react';
import styled from 'styled-components'
import { Tag } from 'antd';



const StyledCard = styled.section`
    border: 1px solid #f0f0f0;
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
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
const StyledCardCover = styled.div`
    height: 240px;
    padding: 0px;
    box-sizing: border-box;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
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

const Card: React.FC<any> = ({ data }) => {
  return (
    <StyledCard>
      <StyledCardCover>
          {
              data.cover ? <img src={data.cover} alt="cover" /> : ''
          }
      </StyledCardCover>
      <div>
          <StyledCardInfo>
              <span>{data.title}</span>
              <a href={data.src} target="_blannk" rel="noopener noreferrer">View</a>
          </StyledCardInfo>
          <StyledCardItem>
              <Tag color="blue">Gsap</Tag>
          </StyledCardItem>
      </div>
    </StyledCard>
  )
}

export default Card
