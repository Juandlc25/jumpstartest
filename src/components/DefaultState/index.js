import React from "react";
import { StyledDiv } from "./style";

function DefaultState() {
  return (
    <StyledDiv>
      <h1>Default State</h1>
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
    </StyledDiv>
  );
}

export default DefaultState;
