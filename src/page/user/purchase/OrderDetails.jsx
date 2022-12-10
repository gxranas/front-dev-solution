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


function OrderDetails() {


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
          </Container>
        </Body>
      </Content>
    </Page>
    </>
  )
}

export default OrderDetails
