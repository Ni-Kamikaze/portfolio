import styled, { keyframes } from 'styled-components'
import { mobile } from './responsible'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'

const breatheAnimation = keyframes`
  0% { opacity:0.05}
  100% { opacity:1}
`

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  height: 100vh;
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
`
const Text = styled.h1`
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  color: #f2aa4cff;
  ${mobile({
    fontSize: '1.4em',
  })}
  padding: 5%;
`
const Wrapper = styled.div`
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
  align-items: center;
  height: 70vh;
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
  height: 20vh;
`
const About = () => {
  return (
    <Container>
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
            <FacebookRoundedIcon />
            <InstagramIcon style={{ paddingLeft: '10px' }} />
            <EmailIcon style={{ paddingLeft: '10px' }} />
          </Icons>
        </Left>
        <Right>
          <Text>
            Hi, I'm Nika 15 years old, progressive and motivated begginer react
            developer
          </Text>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default About
