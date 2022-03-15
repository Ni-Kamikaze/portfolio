import styled, { keyframes } from 'styled-components'
import { mobile, pc } from './responsible'
const breatheAnimation = keyframes`
  0% { transform:translateY(-100%)}
  100% { transform:translateY(0)}
`
const open = keyframes`
  0% {
    width:40vw;
    }
  100% {
    ${mobile({ width: '85vw' })};
    ${pc({ width: '70vw' })};
  } 
  
`
const float = keyframes`	
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-15px);
	}
	100% {
		transform: translatey(0px);
	}
`

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
`
const Box = styled.div`
  ${mobile({
    width: '85vw',
    height: '60vh',
  })}
  width: 70vw;
  background-color: transparent;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection: 'column',
  })}
  border: 2px solid white;
  animation-name: ${open};
  animation-duration: 1s;
`
const Photo = styled.image`
  width: 190px;
  border-radius: 50%;
  z-index: 3;
`
const Hi = styled.h1`
  font-family: 'Merriweather', serif;
  font-size: 5em;
  margin: 0;
  color: #f2aa4cff;
`
const Descr = styled.h3`
  font-size: 20px;
  font-family: 'Merriweather', serif;
  color: #f2aa4cff;
`
const Blob = styled.svg`
  width: 35%;
  ${mobile({
    width: '60%',
  })}
  animation-name: ${float};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`
const TextContainer = styled.div`
  ${mobile({
    padding: '0 10px 0 10px',
    textAlign: 'center',
  })}
  margin-bottom: 0px;
`
const Home = () => {
  return (
    <Container>
      <Box>
        <Blob viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <mask id='mask0' mask-type='alpha'>
            <path
              fill='#61892f'
              d='M57.4,-47.6C69.1,-31.1,69.6,-7.5,63.8,13.2C58,33.9,45.8,51.9,28.9,60.1C11.9,68.3,-9.8,66.9,-27.5,58C-45.3,49.2,-59,32.9,-66.5,11.8C-73.9,-9.2,-75.1,-35,-63,-51.6C-50.9,-68.2,-25.4,-75.6,-1.3,-74.6C22.8,-73.6,45.7,-64.1,57.4,-47.6Z'
              transform='translate(100 100)'
            />
          </mask>
          <g mask='url(#mask0)'>
            <path
              fill='#f0aa4cff'
              d='M57.4,-47.6C69.1,-31.1,69.6,-7.5,63.8,13.2C58,33.9,45.8,51.9,28.9,60.1C11.9,68.3,-9.8,66.9,-27.5,58C-45.3,49.2,-59,32.9,-66.5,11.8C-73.9,-9.2,-75.1,-35,-63,-51.6C-50.9,-68.2,-25.4,-75.6,-1.3,-74.6C22.8,-73.6,45.7,-64.1,57.4,-47.6Z'
              transform='translate(100 100)'
            />
            <Photo
              xlinkHref={'https://i.ibb.co/Xjs7dtw/me1.png'}
              x='-10'
              y='40'
            />
          </g>
        </Blob>

        <TextContainer>
          <Hi>Hello</Hi>
          <h1
            style={{
              color: '#f2aa4cff',
              fontFamily: 'Hubballi',
              fontSize: '45px',
            }}
          >
            I'm Nika
          </h1>
          <Descr>
            I'm Junior React Developer and i'm looking for my first job
          </Descr>
        </TextContainer>
      </Box>
    </Container>
  )
}

export default Home
