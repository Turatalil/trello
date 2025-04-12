import React from "react";
import styled from "styled-components";

const Sidebar = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Header>Рабочее пространство</Header>
      <Section>
        <Item>📋 Доски</Item>
        <Item>👥 Участники</Item>
        <Item>⚙️ Настройки</Item>
      </Section>
      <Divider />
      <Section>
        <Label>Режимы просмотра</Label>
        <SubItem>📊 Таблица</SubItem>
        <SubItem>📅 Календарь</SubItem>
      </Section>
      <Divider />
      <Section>
        <Label>Мои доски</Label>
        <BoardItem>📌 baitur</BoardItem>
      </Section>
      <Promo>
        <b>Jira помогает организовать проекты</b>
        <p>Гибкость и структура Jira позволяют легко управлять проектами.</p>
        <StartButton>Начать</StartButton>
      </Promo>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-280px")};
  width: 280px;
  height: 100%;
  background-color: #1d2125;
  color: #ccc;
  transition: left 0.3s ease;
  padding: 16px;
  z-index: 1000;
`;

const Header = styled.h3`
  color: white;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Item = styled.div`
  margin: 10px 0;
  cursor: pointer;
`;

const Label = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 8px;
`;

const SubItem = styled.div`
  margin-left: 10px;
  color: #ddd;
  cursor: pointer;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #333;
  margin: 15px 0;
`;

const BoardItem = styled.div`
  background-color: #333;
  padding: 8px;
  border-radius: 4px;
`;

const Promo = styled.div`
  background-color: #2c2f36;
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-size: 13px;
`;

const StartButton = styled.button`
  margin-top: 8px;
  background-color: #579dff;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
