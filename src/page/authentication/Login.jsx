import { Divider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { textColor } from '../../component/styles/Components.styled'
import { Facebook, Google } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: calc(100vh - 100px);
`
const Content = styled.div`
  height: 400px;
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Header = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

const Title = styled.p`
   ${textColor.value};
   font-weight: 600;
   font-size: 25px;
`

const Body = styled.div`
   display: flex;
   justify-content: center;
   align-items: center; 
   flex-direction: column;
`
const TextBox = styled.input`
    width: 250px;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    background-color: #fff;
    color: rgba(0,0,0,0.7);
    transition: .3s ease;
    border-color: #e2e8ec;
    margin-top: 20px;

    ::placeholder{
      color: #9e9ea7;
    }

    :focus , :hover {
    outline: none;
    border-color: rgba(0,0,0,0.7);
    background-color: #fff;
    }
`

const Button = styled.button`
    background-color: rgba(0,0,0,0.9);
    ${textColor.transparent};
    border: none;
    cursor: pointer;
    padding: 10px;
    width: 250px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.marginBottom};
`

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Links = styled(Link)`
    text-decoration: none;
    font-weight: 400;
    margin-right: ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
    ${textColor.value};
    font-size: 12px;
`

const Label = styled.p`
   ${textColor.value};
   font-weight: 400;
   font-size: 12px;
`

const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Forgot = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
    
`

function Login() {
  return (
    <>
      <Container>
        <Content>
          <Header>
            <Title>Login</Title>
          </Header>
          <Body>
            <TextBox type="text" placeholder='Enter your email'/>
            <TextBox type="text" placeholder='Enter your password'/>
            <Button marginBottom="20px">Sign In</Button>
          </Body>
          <Forgot>
          <Label>Forgot password?</Label><Links marginLeft="5px" to="/recover">Recover password</Links>
          </Forgot>
          <Divider variant="middle">OR</Divider>
          <Socials>
            <Button><Facebook/> Facebook</Button>
            <Button><Google/> Google</Button>
          </Socials>
          <Footer>
          <Label>Have an account?</Label><Links marginLeft="5px" to="/signup">Sign up</Links>
          </Footer>
        </Content>
      </Container>
    </>
  )
}

export default Login
