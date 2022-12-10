import { Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
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

const SelectionContainer = styled.label`
display: flex;
align-items: center;
justify-content: center;
margin-left: ${props => props.marginLeft};
`

const Selection = styled.input`
    margin-left: 10px;
    font-size: 12px;
    color: rgba(0,0,0,0.7);
`

function EditProfile() {

  const navigate = useNavigate()

  return (
    <>
    <Page>
      <Content>
        <Header>
          <Title>
            Edit Profile
          </Title>
          <Subtitle>
            Update your profile
          </Subtitle>
        </Header>
        <Divider/>
        <Body>
          <Container>
            <Label>
              Username
            </Label>
            <TextBox type="text" marginLeft="45px"/>
          </Container>

          <Container>
            <Label>
              Name
            </Label>
            <TextBox marginLeft="75px" type="text" />
          </Container>

          <Container>
            <Label>
              Email
            </Label>
            <TextBox marginLeft="80px" type="text"/>
          </Container>

          <Container>
            <Label>
              Phone Number
            </Label>
            <TextBox marginLeft="20px" type="text"/>
          </Container>

          
          <Container>
          <Label>Gender</Label>
          <SelectionContainer htmlFor="field-male" marginLeft="65px">
                <Selection name="gender" type="radio" value="Male" checked/> <Label marginLeft="5px">Male</Label>
          </SelectionContainer>
          <SelectionContainer htmlFor="field-female">
                <Selection name="gender" type="radio" value="Female"/> <Label marginLeft="5px">Female</Label>
          </SelectionContainer>
          </Container>

          <Container>
            <Label>
              Birthday
            </Label>
            <TextBox type="date" marginLeft="65px"/>
          </Container>

          <Container>
            <Button onClick={() => {
                navigate("/user/account/profile");
            }}>Back</Button>
            <Button marginLeft="20px" type='submit'>Save</Button>
          </Container>
        </Body>
      </Content>
    </Page>
    </>
  )
}

export default EditProfile
