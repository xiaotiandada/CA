import React from 'react'
import styled from 'styled-components'


import { Carousel } from 'antd';
// import banner1 from "../assets/image/banner1.png";

const CarouselComponent = () => {

  function onChange(a: any, b: any, c: any): void {
    console.log(a, b, c);
  }

  return (
    // @ts-ignore
    <Carousel afterChange={onChange} style={{ height: 380 }}>
      <StyledItem>
        <img src="https://cdn.uigreat.com/fce2139f-f8ba-47ad-bad7-964f6650abac.jpeg" alt="banner" aria-label="banner"/>
      </StyledItem>
      <StyledItem>
        <img src="https://cdn.uigreat.com/fce2139f-f8ba-47ad-bad7-964f6650abac.jpeg" alt="banner" aria-label="banner"/>
      </StyledItem>
  </Carousel>
  )
}

const StyledItem = styled.section`
    background-color: #364d79;
    height: 380px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`

export default CarouselComponent
