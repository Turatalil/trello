import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { FaSlack } from "react-icons/fa6";
import TurtalyLogo from "./TurtalyLogo";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [pass, setPass] = useState("");
  const [password, setPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  const handleRegister = () => {
    const emailUser = "Zhamshitov06@gmail.com";
    const passwordUser = "12345678";

    setIsLoading(true); 

    if (!password) {
      if (email === emailUser) {
        setPassword(true);
        setError("");
        setIsLoading(false); 
      } else {
        setError("Почтаны жазууда ката кетти?");
        setIsLoading(false); 
      }
    } else {
      if (pass === passwordUser) {
        setError("");
        setTimeout(() => {
          setIsLoading(false); 
          navigate("/dashboard");
        }, 3000);
      } else {
        setError("Парольду киргизүүдө ката бар!");
        setIsLoading(false); 
      }
    }
  };

  return (
    <Background>
      <Card>
        <TurtalyLogo />
        <Title>Зарегистрируйтесь, чтобы продолжить</Title>
        {!password && (
          <Input
            placeholder="Введите ваш адрес электронной почты"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        {password && (
          <Input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Введите пароль"
            type="password" // Added type for password input
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Note>
          Регистрируясь, я соглашаюсь с Условиями использования продуктов Cloud и
          принимаю Политику конфиденциальности Atlassian.
        </Note>
        <Button primary onClick={handleRegister} disabled={isLoading}>
          {isLoading ? <Spinner /> : "Зарегистрироваться"}
        </Button>
        <SmallText>Или продолжить с помощью:</SmallText>
        <SocialButtons>
          <Button>
            <FcGoogle size={20} /> Google
          </Button>
          <Button>
            <FaMicrosoft size={20} /> Microsoft
          </Button>
          <Button>
            <FaApple size={20} /> Apple
          </Button>
          <Button>
            <FaSlack size={20} style={{ color: "#611f69" }} /> Slack
          </Button>
        </SocialButtons>
        <LoginLink>Уже есть аккаунт Atlassian? Войти</LoginLink>
        <Divider />
        <FooterNote>
          <LogoSmall src="/atlassian-logo.png" alt="Atlassian" />
          Один аккаунт для Trello, Jira, Confluence и не только. <br />
          Для защиты сайта используется система reCAPTCHA Google. <br />
          Кроме того, действуют положения Политики конфиденциальности и Условий
          использования Google.
        </FooterNote>
      </Card>
    </Background>
  );
}

const GlobalFieldStyle = styled.div`
  margin-top: 2em;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 0.8rem;
  margin-top: -0.4rem;
  margin-bottom: 0.7rem;
  text-align: left;
`;

const Background = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2014/11/22/18/38/christmas-background-541922_1280.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Card = styled.div`
  background-color: white;
  width: 400px;
  padding: 2rem;
  border-radius: 7px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 10;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 96%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  height: 30px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.1em;
  margin-bottom: 0.7rem;
  text-align: left;
`;

const Note = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.6rem;
  margin: 0.4rem 0;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${(props) => (props.primary ? "#0052cc" : "#ffffff")};
  color: ${(props) => (props.primary ? "white" : "#333")};
  border: ${(props) => (props.primary ? "none" : "1px solid #ccc")};
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0747a6" : "#f1f1f1")};
  }

  &:disabled {
    background-color: ${(props) => (props.primary ? "#6699ff" : "#ffffff")};
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  border: 3px solid #ffffff;
  border-top: 3px solid transparent;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SmallText = styled.p`
  margin: 1rem 0 0.5rem;
  font-size: 0.85rem;
  color: #666;
`;

const LoginLink = styled.p`
  font-size: 0.85rem;
  color: #0052cc;
  cursor: pointer;
  margin-top: 0.5rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 1.5rem 0;
`;

const FooterNote = styled.p`
  font-size: 0.75rem;
  color: #999;
  line-height: 1.4;
`;

const LogoSmall = styled.img`
  width: 80px;
  margin: 0 auto 0.5rem;
`;

const SideImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 250px;

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;