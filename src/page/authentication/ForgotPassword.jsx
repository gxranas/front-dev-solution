import React from 'react'
import styled from 'styled-components'
import { textColor } from '../../component/styles/Components.styled'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: calc(70vh - 100px);
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
   flex-direction: column;
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

function ForgotPassword() {
  return (
    <>
      <Container>
        <Content>
          <Header>
            <Title>Recover Password</Title>
            <Label>Please enter your email and we will send you a password reset link.</Label>
          </Header>
          <Body>
            <TextBox type="text" placeholder='Enter your email'/>
            <Button marginBottom="20px">Reset Password</Button>
          </Body>
          <Footer>
          <Links to="/login">Back</Links>
          </Footer>
        </Content>
      </Container>
    </>
  )
}

export default ForgotPassword
