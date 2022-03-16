import styled, { keyframes } from 'styled-components'
import 'aos/dist/aos.css'
import { mobile } from './responsible'
import curr from './images/currexch.png'
import calc from './images/calc.png'
import tic from './images/tic.png'
import ecom from './images/ecomm.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const breatheAnimation = keyframes`
  0% { transform:translateX(-100%)}
  100% { transform:translateX(0)}
`
const visitL = keyframes`
  0% { 
    opacity: 0;
    transform:translateX(-150%)
  }
  100% {
    opacity: 1;
    transform:translateX(0)
  }
`
const visitR = keyframes`
  0% { 
    opacity: 0;
    transform:translateX(150%)
  }
  100% {
    opacity: 1;
    transform:translateX(0)
  }
`
const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background-color: transparent;
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  width: 20%;
  ${mobile({
    width: '80%',
    fontSize: '1.5em',
  })}
  z-index: 0;
`
const ProjectsCont = styled.ul`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
`
const Image = styled.img`
  width: 75%;
  border-radius: 15px;
  ${mobile({
    width: '100%',
  })}
  perspective: 100px;
`
const Oddproject = styled.li`
  &:hover {
    ${Button} {
      animation-name: ${(props) => (props.left ? visitL : visitR)};
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
    }
  }
  ${mobile({
    width: '100%',
    height: '45vh',
  })}
  width: 100%;
  height: 75vh;
  background-color: #101820ff !important;
  margin-bottom: 20px;
  margin-right: 3rem;
  display: flex;
  align-items: flex-start;
`

const Descr = styled.h3`
  color: #f2aa4cff;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${mobile({
    marginTop: '35px',
  })}
  width: 100%;
  height: 100%;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${mobile({
    justifyContent: 'center',
  })}
  width: 100%;
  height: 100%;
  text-align: center;
  color: #f2aa4cff;
`
const EvenLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: 'center',
  })}
  width: 100%;
  height: 100%;
`
const EvenRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  ${mobile({
    marginTop: '35px',
  })}
  width: 100%;
  height: 100%;
  text-align: center;
  color: #f2aa4cff;
`

const Projects = () => {
  return (
    <ProjectsCont>
      <Oddproject left={true}>
        <Left>
          <Image src={curr} photo={70} />
          <div>
            <Descr>Currency API project built with React</Descr>
          </div>
        </Left>
        <Right>
          <Button target='_blank' href='https://calculatecurrency.netlify.app'>
            Visit
            <ArrowForwardIcon />
          </Button>
        </Right>
      </Oddproject>

      <Oddproject left={false}>
        <EvenLeft>
          <Button target='_blank' href='https://nikos-calculator.netlify.app'>
            <ArrowBackIcon />
            Visit
          </Button>
        </EvenLeft>
        <EvenRight>
          <Image src={calc} photo={90} />
          <div>
            <Descr>Simple Calculator built with React</Descr>
          </div>
        </EvenRight>
      </Oddproject>

      <Oddproject left={true}>
        <Left>
          <Image src={ecom} photo={80} />
          <div>
            <Descr>E-commerce project built with React.</Descr>
          </div>
        </Left>
        <Right>
          <Button target='_blank' href='https://nikos-accessories.netlify.app'>
            Visit
            <ArrowForwardIcon />
          </Button>
        </Right>
      </Oddproject>

      <Oddproject left={false}>
        <EvenLeft>
          <Button target='_blank' href='https://nikos-tictactoe.netlify.app'>
            <ArrowBackIcon />
            Visit
          </Button>
        </EvenLeft>
        <EvenRight>
          <Image src={tic} photo={80} />
          <div>
            <Descr>Tic Tac Toe game built with React</Descr>
          </div>
        </EvenRight>
      </Oddproject>
    </ProjectsCont>
  )
}

export default Projects
