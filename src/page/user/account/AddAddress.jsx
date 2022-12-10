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

function AddAddress() {

  const navigate = useNavigate()

  return (
    <>
    <Page>
      <Content>
        <Header>
          <Title>
            Add Address
          </Title>
          <Subtitle>
            Add new shipping address
          </Subtitle>
        </Header>
        <Divider/>
        <Body>
          <Container>
            <Label>
              Name
            </Label>
            <TextBox marginLeft="100px" type="text" placeholder='Enter your name'/>
          </Container>

          <Container>
            <Label>
              Phone Number
            </Label>
            <TextBox marginLeft="40px" type="text" placeholder='Enter your phone number'/>
          </Container>

          <Container>
            <Label>
              House/Unit/Flr #..
            </Label>
            <TextBox marginLeft="20px" type="text" placeholder='Enter your address' />
          </Container>

          <Container>
            <Label>
              Province
            </Label>
            <TextBox marginLeft="80px" type="text" placeholder='Enter your province'/>
          </Container>

          <Container>
            <Label>
              City/Municipality
            </Label>
            <TextBox marginLeft="20px" type="text" placeholder='Enter your city/municipality'/>
          </Container>

          <Container>
            <Label>
              Barangay
            </Label>
            <TextBox marginLeft="70px" type="text" placeholder='Enter your barangay'/>
          </Container>
       
          <Container>
          <Label>Select a label for effective delivery:</Label>
          <SelectionContainer htmlFor="field-home" marginLeft="65px">
                <Selection name="type" type="radio" value="Home" checked/> <Label marginLeft="5px">Home</Label>
          </SelectionContainer>
          <SelectionContainer htmlFor="field-work">
                <Selection name="type" type="radio" value="Work"/> <Label marginLeft="5px">Work</Label>
          </SelectionContainer>
          </Container>

          <Container>
            <Button onClick={() => {
                navigate("/user/account/address");
            }}>Back</Button>
            <Button marginLeft="20px" type='submit'>Save</Button>
          </Container>
        </Body>
      </Content>
    </Page>
    </>
  )
}

export default AddAddress
