import { Divider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {textColor} from '../../../component/styles/Components.styled'

const Page = styled.div`
  flex: 4;
  border: solid 1px  #dfdfdf;
  padding: 10px;  
  max-width: 75%;
  border-radius: 5px;
`

const Content = styled.div`
  display: flex;
  padding: 10px;
  background-color: #fff;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:10px;

`

const Title = styled.p`
  font-size: 20px;
  ${textColor.value};
  font-weight: 600;
`

const Subtitle = styled.p`
  font-size: 12px;
  ${textColor.default};
  font-weight: 400;
`

const Body = styled.form`
  margin-top:10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding:20px;
`

const Label = styled.p`
  font-size: 13px;
  font-weight: 600;
  ${textColor.default};
  margin-left: ${props => props.marginLeft};
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
    margin-left: ${props => props.marginLeft};
`

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
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

    margin-left: ${props => props.marginLeft};
    ::placeholder{
      color: #9e9ea7;
    }

    :focus , :hover {
    outline: none;
    border-color: rgba(0,0,0,0.7);
    background-color: #fff;
    }
`

function ChangePassword() {


  return (
    <>
    <Page>
      <Content>
        <Header>
          <Title>
            Change Password
          </Title>
          <Subtitle>
            Change your password to secure your account.
          </Subtitle>
        </Header>
        <Divider/>
        <Body>
          <Container>
            <Label>
              Current Password
            </Label>
            <TextBox type="text" marginLeft="45px" placeholder='Enter your current password'/>
          </Container>

          <Container>
            <Label>
              New Password
            </Label>
            <TextBox marginLeft="68px" type="text" placeholder='Enter your new password' />
          </Container>

          <Container>
            <Label>
            Confirm Password
            </Label>
            <TextBox marginLeft="43px" type="text" placeholder='Enter your new password'/>
          </Container>

          <Container>
            <Button type='submit'>Save</Button>
          </Container>
        </Body>
      </Content>
    </Page>
    </>
  )
}

export default ChangePassword
