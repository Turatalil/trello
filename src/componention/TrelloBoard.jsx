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

const TrelloBoard = () => {
  return (
<div>
    <Header>
       <Div1>
             <TurtalyLogo/>
             <WorkspaceSelect/>
             <Select/>
             <TemplateDropdown/>
             <Sozdat/>
       </Div1>
     
     
     
       <div>
               <PremiumTrialSelect/>
               <Betafersia/>
               <BellButton/>
       </div>
    </Header>
</div>
       );
};

export default TrelloBoard;

const Div1 =styled.div`
  display: flex;
  align-items: center;
  
`
const Header =styled.header`
  margin-top: 0px;
  height: 50px;
  background-color: #1a1c21;
  width: 100%;

`
