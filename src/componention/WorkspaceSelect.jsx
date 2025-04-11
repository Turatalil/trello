import React, { useState } from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: sans-serif;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: #e4e6eb;
  padding: 10px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  
`;

const DropdownList = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background-color: #20232a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 280px;
  z-index: 10;
  padding: 12px 0;
`;

const DropdownItem = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: white;
  background-color: transparent;

  &:hover {
    background-color: #31343a;
  }

  .icon {
    width: 36px;
    height: 36px;
    background: linear-gradient(to bottom right, #9cc8ff, #8abfff);
    color: black;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 15px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 12px;
    color: #a4a4a4;
  }
`;
const Hr =styled.hr`
  border: #4030304e;
`
const WorkspaceSelect = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        Рабочие пространства ▾
      </DropdownButton>
      {open && (
        <DropdownList>
          <DropdownItem>
            <div className="icon">P</div>
            <div className="info">
              <div className="title">Рабочее пространство Trello</div>
              <div className="subtitle">Текущее рабочее пространство</div>
            </div>
          </DropdownItem>
          <Hr/>
          
          <DropdownItem>
            <div className="icon">P</div>
            <div className="info">
              <div className="subtitle">Ваши рабочие пространства</div>
              <div className="title">Рабочее пространство Trello</div>
            </div>
          </DropdownItem>
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default WorkspaceSelect;
