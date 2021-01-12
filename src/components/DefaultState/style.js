import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    position: absolute;
    width: 188px;
    height: 40px;
    left: 48px;
    top: 58px;

    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;

    color: #000000;
  }
  .box {
    position: absolute;
    width: 305px;
    height: 300px;
    left: 48px;
    top: 112px;

    background: #ffffff;
    /* Normal Stroke */

    border: 1px solid #f1f4f6;
    box-sizing: border-box;
    .card {
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 10px;
    }
    .card > p {
      position: static;
      width: 71px;
      height: 14px;
      left: 86px;
      top: 9px;
      padding: 245px 117px 41px 117px;
      font-family: Avenir;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 14px;
      color: #8c14fc;
    }
  }

  .littlePinkBox {
    position: absolute;
    width: 44px;
    height: 44px;
    left: 178px;
    top: 137px;

    background: #fededd;
  }
  h2 {
    position: absolute;
    width: 243px;
    height: 22px;
    left: 79px;
    top: 190px;

    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;

    /* Heading Color */

    color: #0f2137;
  }
  p {
    position: absolute;
    width: 243px;
    height: 72px;
    left: 79px;
    top: 222px;

    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    /* or 18px */

    text-align: center;

    color: #343d48;
  }
`;
