import { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import 'aos/dist/aos.css'
import { mobile } from './responsible'
import { Link } from 'react-router-dom'

const breatheAnimation = keyframes`
  0% { transform:translateX(100%)}
  100% { transform:translateX(0)}
`

const Container = styled.div`
  background-color: #101820ff !important;
  height: 140vh;
  ${mobile({
    height: '265vh',
  })} position: relative;
`
const ProjectsCont = styled.ul`
  position: fixed;
  top: 12rem;
  ${mobile({ left: '0' })}
  left: 5rem;
  height: 40vw;
  display: flex;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
`
const Evenproject = styled.li`
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px #f2aa4cff;
  }
  ${mobile({
    width: '13rem',
    height: '40vh',
  })}
  width: 20rem;
  height: 50vh;
  background-color: #101820ff !important;
  padding: 1.5rem 2rem;
  margin-right: 3rem;
  border-radius: 35px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h2`
  text-align: center;
  color: #f2aa4cff;
`
const Descr = styled.h3`
  text-align: center;
  color: #f2aa4cff;
`

const Button = styled.button`
  background-color: #101820ff !important;
  cursor: pointer;
  color: white;
  text-decoration: none;
  padding: 0.5rem 2.5rem;
  border: 2px solid white;
  border-radius: 20px;
  font-size: 1.5em;
  width: 100%;
`
const Visit = styled.a`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

const Projects = () => {
  useEffect(() => {
    var scroll = document.querySelector('#scroll')
    window.addEventListener('scroll', function () {
      var value = window.scrollY
      var smooth = Number(value) / 20
      scroll.style.transform = `translateX(-${smooth}%)`
      console.log(Number(value))
    })
  })
  return (
    <Container>
      <ProjectsCont id='scroll'>
        <Evenproject>
          <Title>Currency Exchanger</Title>
          <Descr>
            Currency API project built with React where you can calculate any
            currency
          </Descr>
          <Visit target='_blank' href='https://calculatecurrency.netlify.app'>
            <Button>VISIT</Button>
          </Visit>
        </Evenproject>
        <Evenproject>
          <Title>Calculator</Title>
          <Descr>Simple Calculator built with React</Descr>
          <Visit target='_blank' href='https://nikos-calculator.netlify.app'>
            <Button>VISIT</Button>
          </Visit>
        </Evenproject>
        <Evenproject>
          <Title>E-commerce</Title>
          <Descr>
            E-commerce project built with react and routes. You can filter
            products and add them to cart
          </Descr>
          <Visit target='_blank' href='https://nikos-accessories.netlify.app'>
            <Button>VISIT</Button>
          </Visit>
        </Evenproject>
        <Evenproject>
          <Title>Tic Tac Toe</Title>
          <Descr>Tic Tac Toe game built with React</Descr>
          <Visit target='_blank' href='https://nikos-tictactoe.netlify.app'>
            <Button>VISIT</Button>
          </Visit>
        </Evenproject>
      </ProjectsCont>
    </Container>
  )
}

export default Projects
