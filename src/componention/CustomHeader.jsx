import React, { useState } from "react";
import styled from "styled-components";
import { FaStar, FaRocket, FaBolt, FaFilter, FaUserFriends } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiShare } from "react-icons/fi";


const CustomHeader = () => {

  return (
    <HeaderContainer>
      <LeftSection>

        <Logo>baitur</Logo>
        <FaStar color="white" style={{ marginLeft: "10px" }} />
        <Label>
          <FaUserFriends />
          <span>Для рабочего пространства</span>
        </Label>
        <Button>По доске</Button>
        <Button>📋 Таблица ▼</Button>
      </LeftSection>

      <RightSection>
        <RightButton><FaRocket /> Улучшения</RightButton>
        <RightButton><FaBolt /> Автоматизация</RightButton>
        <RightButton><FaFilter /> Фильтры</RightButton>
        <Avatar>BE</Avatar>
        <ShareButton><FiShare /> Поделиться</ShareButton>
        <HiOutlineDotsHorizontal color="white" size={20} />
      </RightSection>
    </HeaderContainer>
  );
};

export default CustomHeader;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 10, 10, 0.6);
  padding: 10px 20px;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  padding: 4px 8px;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #dfe3ea;
  color: black;
  padding: 6px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #cbd3dd;
  }
`;

const RightButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  background: transparent;
  cursor: pointer;


`;

const Avatar = styled.div`
  background: green;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShareButton = styled.button`
  background: #dfe3ea;
  color: black;
  padding: 6px 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: #cbd3dd;
  }
`;
