import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 250px;
  z-index: 10;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  background-image: ${({ bgUrl }) => `url(${bgUrl})`};
  background-size: cover;
  background-position: center;
  z-index: -1;
  transition: background-image 0.4s ease-in-out;
`;

const Button = styled.button`
  padding: 10px 14px;
  background-color: #2c2f36;
  color: #e4e6eb;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  width: 100%;
  background-color: #20232a;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 10px 0;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 10px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #31343a;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 4px;
    object-fit: cover;
  }

  span {
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Footer = styled.div`
  padding: 12px;
  background-color: #1a1c21;
  border-top: 1px solid #2f2f2f;
  font-size: 12px;
  color: #c0c0c0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    background-color: #2d2dff;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 13px;
    cursor: pointer;
    width: fit-content;
  }
`;

const templates = [
  { title: "1-on-1 Meeting Agenda", img: "https://i.pinimg.com/originals/5d/e2/42/5de24294bad21ec99931f4c362354f22.jpg" },
  { title: "Agile Board Template | Trello", img: "https://cdn.pixabay.com/photo/2024/04/08/22/31/forest-8684668_1280.jpg" },
  { title: "Company Overview", img: "https://cdn.pixabay.com/photo/2016/11/23/18/25/creek-1854214_1280.jpg" },
  { title: "Design Huddle", img: "https://cdn.pixabay.com/photo/2015/10/04/06/52/pathway-970705_1280.jpg" },
  { title: "Go To Market Strategy Template", img: "https://cdn.pixabay.com/photo/2024/04/10/22/52/autumn-8688876_1280.jpg" },
  { title: "Kanban Template", img: "https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_1280.jpg" },
  { title: "Mise-En-Place Personal Productivity", img: "https://s3.stroi-news.ru/img/kartinki-na-fon-noutbuka-9.jpg" },
  { title: "Project Management", img: "https://cdn.pixabay.com/photo/2022/01/18/16/49/town-6947538_1280.jpg" },
  { title: "Remote Team Meetings", img: "https://cdn.pixabay.com/photo/2019/12/08/09/34/winter-4680713_1280.jpg" },
  { title: "Simple Project Board", img: "https://cdn.pixabay.com/photo/2017/12/03/22/11/winter-landscape-2995987_1280.jpg" },
  { title: "Teaching: Weekly Planning", img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1470&q=80" }
];

const TemplateDropdown = () => {
  const [open, setOpen] = useState(false);
  const [bgImage, setBgImage] = useState(templates[0].img); // default background

  return (
    <>
      <Background bgUrl={bgImage} />
      <Wrapper>
        <Button onClick={() => setOpen(!open)}>Шаблоны ▾</Button>
        {open && (
          <Dropdown>
            <List>
              {templates.map((tpl, index) => (
                <Item key={index} onClick={() => setBgImage(tpl.img)}>
                  <img src={tpl.img} alt="thumbnail" />
                  <span>{tpl.title}</span>
                </Item>
              ))}
            </List>
            <Footer>
              <span>Выбирайте из сотен шаблонов, созданных участниками сообщества Trello.</span>
              <button>Посмотреть шаблоны</button>
            </Footer>
          </Dropdown>
        )}
      </Wrapper>
    </>
  );
};

export default TemplateDropdown;
