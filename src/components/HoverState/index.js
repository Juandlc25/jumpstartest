import React from "react";
import { StyledDiv } from "./style";

function HoverState() {
  return (
    <div>
      <StyledDiv>
        <h1>Hover State</h1>
        <div className="box">
          <div className="card">
            <p>View document</p>
          </div>
        </div>
        <div className="littlePinkBox"></div>
        <h2>Corporate Bylaws</h2>
        <p>
          An internal document that details the <br />
          operating rules for the corporation and are <br />
          typically adopted at the organizational <br />
          meeting of the board of directors
        </p>
        <div className="rectangle"> </div>
        <span className="ellipse"></span>
        <span className="ellipse2"></span>
        <span className="ellipse3"></span>
        <div className="boxOptions"></div>
        <div className="option"></div>
        <p className="optionName">Download</p>

        <p className="optionName2">Print</p>
        <p className="optionName3">Delete</p>
      </StyledDiv>
    </div>
  );
}

export default HoverState;
