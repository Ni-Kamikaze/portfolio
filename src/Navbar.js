import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const breatheAnimation = keyframes`
  0% { transform:translateY(-100%)}
  100% { transform:translateY(0)}
`

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #101820ff;
  height: 65px;
  z-index: 5;
  justify-content: center;
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 10px;
`

const Logo = styled.img`
  width: 70px;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  text-decoration: none;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src='https://images.squarespace-cdn.com/content/v1/5efe5fe7bf12417568c17d3e/1609129165196-X46R3Y992QFXJF3SKF6I/NM_Monogram-BlackBorder-Small.png' />
        </Left>
        <Right>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <MenuItem>HOME</MenuItem>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <MenuItem>ABOUT</MenuItem>
          </Link>
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <MenuItem>PROJECTS</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
