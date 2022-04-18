import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  color: #ffffff;
  font-size: 12px;
  letter-spacing: .4px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 8px;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.1);
  span{
    display: block;
    margin-top: 0.3rem;
  }
`;

const StyledCart = styled.div`
  border-radius: 4px;
  max-width: 30px;
  position: relative;
  img{
    max-width: 100%;
  }
  span{
    position: absolute;
    color: #fff;
    right: 26px;
    background-color: #663ff4;
    border-radius: 20px;
    padding: 0.2rem;
    font-size: 12px;
    bottom: 20px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Header(props) {
  return (
    <StyledHeader>
      <Link to={"/"}>
        <StyledH1 className="">Unsplash <span>Select &#10003;</span></StyledH1>
      </Link>
      <StyledCart>
        <Link to={"/"}>
          <img src={require("../Assets/cart.svg").default} alt="cart" />
          {
            props.count &&
            <span>{props.count}</span>
          }
        </Link>
      </StyledCart>
    </StyledHeader>
  );
}

export default Header;
