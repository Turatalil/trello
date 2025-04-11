import React from "react";
import styled from "styled-components";

const InputWithIcon = () => {
  return (
    <Label>
      <StyledInput type="text" placeholder="Поиск" autoComplete="off" />
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.25"
            d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </Icon>
    </Label>
  );
};

export default InputWithIcon;
const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 250px;
  height: 7px;
  border-radius: 6px;
  border: 2px solid #373737;
  padding: 15px 8px 15px 10px;
  background-color: transparent;
`;

const StyledInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: #c5c5c5;
  font-size: 16px;
  width: 100%;
`;

const Icon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #c5c5c5;
  display: flex;
  align-items: center;
`;
