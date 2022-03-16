import styled, { keyframes } from 'styled-components'
import { mobile } from './responsible'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
const breatheAnimation = keyframes`
  0% { opacity:0.05}
  100% { opacity:1}
`
const iconhover = keyframes`
  0% {
    transform:translateY(0) scale(1);
  }
  100% { 
    transform:translateY(-20%) scale(1.1);
  }
`

const Container = styled.div`
  width: 100%;
  background-color: #101820ff;
  height: 100% !important;
`
const Text = styled.h1`
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #f2aa4cff;
  ${mobile({
    fontSize: '1.4em',
  })}
  padding: 5%;
`
const Wrapper = styled.div`
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const Left = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 2%;
  width: 20%;
  ${mobile({
    width: '30%',
  })}
  height: 100vh;
`
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100vh;
`
const Skillscont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 60%;
`
const Skills = styled.div`
  ${mobile({
    fontSize: '13px',
    marginTop: '100%',
  })}
  color: white;
  line-height: 0.7;
`
const Bord = styled.h2`
  width: 100%;
  line-height: 1.4;
  color: white;
  border-bottom: 5px solid white;
`
const Icons = styled.div`
  color: white;
  display: flex;
  align-items: flex-end;
  height: 40%;
  margin-bottom: 20px;
`
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    animation-name: ${iconhover};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`
const About = () => {
  return (
    <Container>
      <div class='lines'>
        <div class='line'></div>
        <div class='line'></div>
        <div class='line'></div>
      </div>
      <Wrapper>
        <Left>
          <Skillscont>
            <Skills>
              <b>
                <Bord>Skill</Bord>
              </b>
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>JS</h4>
              <h4>BOOTSTRAP</h4>
              <h4>REACT</h4>
            </Skills>
          </Skillscont>
          <Icons>
            <Link
              target='_blank'
              href='https://www.facebook.com/nikausha.mikadze'
            >
              <FacebookIcon />
            </Link>
            <Link
              target='_blank'
              href='https://www.instagram.com/mikadze_nika/'
            >
              <InstagramIcon style={{ paddingLeft: '10px' }} />
            </Link>
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/nika-mikadze-626507234/'
            >
              <LinkedInIcon style={{ paddingLeft: '10px' }} />
            </Link>
          </Icons>
        </Left>
        <Right>
          <Text>
            I'm Nika 15 years old , fast learner and motivated junior react
            developer with no experience. I have created several projects with
            react that you can view in projects page. I'm looking for my first
            job to get some experience.
          </Text>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default About
