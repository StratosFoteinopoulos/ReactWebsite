import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/logo.svg";
import IconTwitter from "./images/icon-twitter2.svg";
import IconLaptop from "./images/icon-laptop.svg";
import IconLinkedin from "./images/icon-linkedin2.svg";
import IconGithub from "./images/icon-github2.svg";
import Resume from "./Resume/STRATOS FOTEINOPOULOS RESUME.pdf";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/4Ngjxn3DQ5Gm0RfX/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            {" "}
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <a href="/ReactWebsite">Home</a>
          </li>
          <li>
            <a href="/ReactWebsite">Skills</a>
          </li>
          <li>
            <a href="/ReactWebsite">Apps</a>
          </li>
          <li>
            <a href="/ReactWebsite">Contact</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </Menu>
        <h1>Stratos Foteinopoulos</h1>
        <p>
        Full stack Developer with multiple skills including multitasking,
        organization, and collaboration. Motivated, enthusiastic, eager to
        learn and great team player.
        </p>
        <button>
        <a href={Resume} download target="_blank" rel="noreferrer"><img src={IconLaptop} alt="Download" /> Download Resume</a>
        </button>
      </Content>
      <Social>
        <div />
        <a href="https://twitter.com/StratosFoteino"><img src={IconTwitter} alt="twitter"></img></a>
        <a href="https://www.linkedin.com/in/stratos-foteinopoulos-1800ab131/"><img src={IconLinkedin} alt="linkedin"></img></a>
        <a href="https://github.com/StratosFoteinopoulos"><img src={IconGithub} alt="github"></img></a>
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  margin: 0 auto;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    width: 1200px;
    height: 1000px;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    color: white;
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    pointer-events: auto;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: 1s;
    :hover {
      border: 1px solid rgba(155, 155, 155, 0.8);
      transform: translateY(-3px);
    }

    

    a{
        text-decoration: none;
        color:white;
        font-size: 16px;
        font-weight: 600;
        display: flex;
        gap: 12px;
        justify-content: center;
        align-items: center;
        
    }
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;
  pointer-events: auto;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media (max-width: 800px) {
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }

  a{

    :hover{
      cursor: pointer;
    }
    
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
