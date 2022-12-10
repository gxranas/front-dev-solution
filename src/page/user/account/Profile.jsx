import { Divider } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {textColor} from '../../../component/styles/Components.styled'
import { Context } from '../../../Users'


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

const Body = styled.div`
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
`

const Value = styled.p`
  font-size: 15px;
  font-weight: 600;
  ${textColor.value};
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
`

const Container = styled.div`
  flex: 1;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`

function Profile() {

  const navigate = useNavigate()
  const [state, setState] = useContext(Context);
  return (
    <>
    <Page>
      <Content>
        <Header>
          <Title>
            Profile
          </Title>
          <Subtitle>
            Manage and protect your account.
          </Subtitle>
        </Header>
        <Divider/>
        <Body>
          <Container>
            <Label>
              Username
            </Label>
            <Value marginLeft="45px">
              {state.username}
            </Value>
          </Container>

          <Container>
            <Label>
              Name
            </Label>
            <Value marginLeft="75px">
              {state.name}
            </Value>
          </Container>

          <Container>
            <Label>
              Email
            </Label>
            <Value marginLeft="80px">
            {state.email}
            </Value>
          </Container>

          <Container>
            <Label>
              Phone Number
            </Label>
            <Value marginLeft="20px">
            {state.phone}
            </Value>
          </Container>

          <Container>
            <Label>
              Gender
            </Label>
            <Value marginLeft="70px">
            {state.gender}
            </Value>
          </Container>

          <Container>
            <Label>
              Birthday
            </Label>
            <Value marginLeft="65px">
            {state.birthday}
            </Value>
          </Container>
          

          <Container>
            <Button onClick={() => {navigate('/user/account/profile/edit')}}>Edit</Button>
          </Container>
        </Body>
      </Content>
    </Page>
    </>
  )
}

export default Profile
