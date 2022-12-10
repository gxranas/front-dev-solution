import { Divider } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {textColor} from '../../../component/styles/Components.styled'
import { Context } from '../../../Addresses.js'
import { Edit } from '@mui/icons-material'


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
  font-weight: ${props => props.weight};
  ${textColor.default};
  text-align: justify;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
`

const Value = styled.p`
  font-size: ${props => props.size};
  font-weight: 600;
  ${textColor.value};
  text-align: justify;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
`

const Button = styled.button`
    background-color: rgba(0,0,0,0.9);
    ${textColor.transparent};
    border: none;
    cursor: pointer;
    padding: 5px;
    width: ${props => props.width};
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.marginBottom};
    font-size:${props => props.size}; 
`

const EditButton = styled(Edit)`
    ${textColor.default};
    cursor: pointer;
`

const Table = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const TableHeaderContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
`

const TableHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TableControl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TableBodyContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex: 1;
`

const TableBody = styled.div`
    display: flex;
    align-items: center;
`

const TableFooterContainer = styled.div`
    display: flex;
    flex: 1;
`

const TableFooter = styled.div`
    display: flex;
    align-items: center;
`

function Addresses() {

  const navigate = useNavigate()
  const [state, setState] = useContext(Context);
  return (
    <>
    <Page>
      <Content>
        <Header>
          <Title>
            Addresses
          </Title>
          <Subtitle>
            Manage your account shipping address.
          </Subtitle>
        </Header>
        <Divider/>
        <Body>
          <Table>
            <TableHeaderContainer>
                <TableHeader>
                <Value size="20"marginRight="5px">{state.name}</Value>
                <Divider orientation='vertical' variant='middle'/>
                <Label size="10px" marginLeft="5px">{state.phone}</Label>
                </TableHeader>
                <TableControl>
                    <EditButton fontSize='small' onClick={() => {
                navigate("/user/account/address/edit");
            }}/>
                </TableControl>
            </TableHeaderContainer>
            <TableBodyContainer>
                <TableBody>
                <Label size="10px" >{state.address}</Label>
                </TableBody>
            </TableBodyContainer>
            <TableFooterContainer>
                <TableFooter>
                <Label size="10px" weight="600">Default</Label>
                </TableFooter>
            </TableFooterContainer>
            <Divider/>
          </Table>
          <Button width="150px" onClick={() => {
                navigate("/user/account/address/add");
            }}>New Address</Button>
        </Body>
      </Content>
    </Page>
    </>
  )
}

export default Addresses
