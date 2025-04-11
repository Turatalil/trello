// src/componention/Registratr.jsx
import styled from "styled-components"
import { FcGoogle } from "react-icons/fc"
import { FaMicrosoft, FaApple } from "react-icons/fa"
import { FaSlack } from "react-icons/fa6"
import TurtalyLogo from "./TurtalyLogo"

export default function RegisterForm() {
  return (
    <Background>
      <SideImage src="/left-illustration.png" alt="left" className="left" />
      <Card>
       <TurtalyLogo/>
        <Title>Зарегистрируйтесь, чтобы продолжить</Title>

        <Input placeholder="Введите ваш адрес электронной почты" />

        <Note>
          Регистрируясь, я соглашаюсь с Условиями использования продуктов Cloud и принимаю Политику конфиденциальности Atlassian.
        </Note>

        <Button primary>Зарегистрироваться</Button>

        <SmallText>Или продолжить с помощью:</SmallText>

        <SocialButtons>
          <Button><FcGoogle size={20} /> Google</Button>
          <Button><FaMicrosoft size={20} /> Microsoft</Button>
          <Button><FaApple size={20} /> Apple</Button>
          <Button><FaSlack size={20} style={{ color: "#611f69" }} /> Slack</Button>
        </SocialButtons>

        <LoginLink>Уже есть аккаунт Atlassian? Войти</LoginLink>

        <Divider />
        <FooterNote>
          <LogoSmall src="/atlassian-logo.png" alt="Atlassian" />
          Один аккаунт для Trello, Jira, Confluence и не только. <br />
          Для защиты сайта используется система reCAPTCHA Google. <br />
          Кроме того, действуют положения Политики конфиденциальности и Условий использования Google.
        </FooterNote>
      </Card>
      <SideImage src="/right-illustration.png" alt="right" className="right" />
    </Background>
  )
}

// ----------------------------
// Styled Components
// ----------------------------

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f6f8;
  min-height: 100vh;
  position: relative;
  padding: 2rem;
`

const SideImage = styled.img`
  position: absolute;
  bottom: 0;
  height: 200px;

  &.left {
    left: 2%;
  }

  &.right {
    right: 2%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 2;
`

const Logo = styled.img`
  width: 100px;
  margin: 0 auto;
  margin-bottom: 1rem;
`

const LogoSmall = styled.img`
  width: 120px;
  margin-bottom: 0.5rem;
`

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`

const Note = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
`

const Button = styled.button`
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: ${({ primary }) => (primary ? "#0052cc" : "#fff")};
  color: ${({ primary }) => (primary ? "#fff" : "#333")};
  border: ${({ primary }) => (primary ? "none" : "1px solid #ccc")};

  &:hover {
    background: ${({ primary }) => (primary ? "#0747a6" : "#f2f2f2")};
  }
`

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const SmallText = styled.p`
  font-size: 0.85rem;
  color: #555;
  margin: 1rem 0 0.5rem;
`

const LoginLink = styled.p`
  font-size: 0.85rem;
  color: #0052cc;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Divider = styled.hr`
  margin: 1.5rem 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`

const FooterNote = styled.p`
  font-size: 0.75rem;
  color: #888;
  text-align: center;
`

