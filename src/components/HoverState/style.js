import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    position: absolute;
    width: 188px;
    height: 40px;
    left: 389px;
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
    left: 391px;
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
    left: 521px;
    top: 137px;

    background: #fededd;
  }
  h2 {
    position: absolute;
    width: 243px;
    height: 22px;
    left: 422px;
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
    left: 422px;
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
  .rectangle {
    position: absolute;
    width: 34px;
    height: 34px;
    left: 648px;
    top: 128px;

    /* Normal Stroke */

    border: 1px solid #f1f4f6;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .ellipse {
    position: absolute;
    width: 3px;
    height: 3px;
    left: 664px;
    top: 136px;

    background: rgba(52, 61, 72, 0.5);
  }
  .ellipse2 {
    position: absolute;
    width: 3px;
    height: 3px;
    left: 664px;
    top: 143px;

    background: rgba(52, 61, 72, 0.5);
  }
  .ellipse3 {
    position: absolute;
    width: 3px;
    height: 3px;
    left: 664px;
    top: 150px;

    background: rgba(52, 61, 72, 0.5);
  }
  .boxOptions {
    position: absolute;
    width: 148px;
    height: 110px;
    left: 686px;
    top: 127px;

    background: #ffffff;
    border: 1px solid #f1f4f6;
    box-sizing: border-box;
    /* Drop Shadow */

    box-shadow: 0px 1px 50px rgba(50, 50, 93, 0.07);
    border-radius: 5px;
  }
  .option {
    position: absolute;
    width: 148px;
    height: 30px;
    left: 686px;
    top: 136px;

    background: #b05efd;
  }
  .optionName {
    position: absolute;
    width: 89px;
    height: 30px;
    left: 731px;
    top: 136px;

    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;

    color: #ffffff;
  }
  .optionName2 {
    position: absolute;
    width: 89px;
    height: 30px;
    left: 731px;
    top: 166px;

    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;

    /* Heading Color */

    color: #0f2137;
  }
  .optionName3 {
    position: absolute;
    width: 89px;
    height: 30px;
    left: 731px;
    top: 196px;

    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;

    /* Red */

    color: #eb5757;
  }
  .vector {
    position: absolute;
    width: 12px;
    height: 17.78px;
    left: 702px;
    top: 142px;

    border: 1.5px solid #ffffff;
  }
`;
