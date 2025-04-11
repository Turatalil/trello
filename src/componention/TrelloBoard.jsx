import React from "react";
import styled from "styled-components";
import WorkspaceSelect from "./WorkspaceSelect";
import Select from "./Select";
import TemplateDropdown from "./TemplateDropdown";
import PremiumTrialSelect from "./PremiumTrialSelect";
import Sozdat from "./Sozdat";
import Betafersia from "./Betafersia";
import BellButton from "./BellButton";
import TurtalyLogo from "./TurtalyLogo";
import InputWithIcon from "./InputWithIcon";
import CustomHeader from "./CustomHeader";

const TrelloBoard = () => {
  return (
    <div>
      <Header>
        <Div1>
          <TurtalyLogo />
          <WorkspaceSelect />
          <Select />
          <TemplateDropdown />
          <Sozdat />
        </Div1>



        <Div2>
          <PremiumTrialSelect />
          <Betafersia />
          <InputWithIcon />
          <BellButton />
          <Button3>?</Button3>
        </Div2>
      </Header>
      <CustomHeader />
    </div>
  );
}

export default TrelloBoard;

const Button3 = styled.button`
  background-color:  #2c2f36;
  color: gainsboro;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  padding: 4px 10px;
  width: 38px;
  height: 38px;
  border-radius:50%;
`;

const Div2 = styled.div`
display: flex;
align-items: center;
`;

const Div1 = styled.div`
display: flex;
align-items: center;
border: 1px solid solid;
width: 700px;
`;
const Header = styled.header`
margin-top: 0px;
height: 50px;
background-color: #1a1c21;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`