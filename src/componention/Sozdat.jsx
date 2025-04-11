import React, { useState } from "react";
import styled from "styled-components";
import { Star } from "lucide-react"; // lucide-react — жеңил иконалар үчүн

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: sans-serif;
`;

const DropdownButton = styled.button`
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);

  color: #e4e6eb;
  padding: 10px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
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
  padding: 8px 0;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  gap: 12px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #31343a;
  }

  .thumbnail {
    width: 56px;
    height: 36px;
    border-radius: 4px;
    object-fit: cover;
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 14px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 12px;
    color: #a4a4a4;
  }

  .icon {
    color: #ffdf00;
  }
`;

const Sozdat = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
      Cоздать
      </DropdownButton>
      {open && (
        <DropdownList>
          <DropdownItem>
      
          </DropdownItem>
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Sozdat;
