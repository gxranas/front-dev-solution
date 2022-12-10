import React, { useState } from 'react'
import styled from 'styled-components'
import { Person, ShoppingBag, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { textColor } from '../styles/Components.styled'
import { Paper, ClickAwayListener } from '@mui/material'

const Container = styled.div`
    display: flex;
    width: 150px;
    padding: 10px;
    margin-right: 100px;
`

const Content = styled.div`
    flex:1;
    display: flex;
    justify-content: right;
    flex-direction: column;
    position: relative;
`

const Menu = styled.div`
    display: flex;
    justify-content: left;

`
const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: right;
    padding: 10px;
`

const Links = styled(Link)`
    text-decoration: none;
    ${textColor.value};
    margin-bottom: ${props => props.marginBottom};
`

const AccountMenu = styled(Paper)`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 160px;
    top:10px;
    width: 180px;
`

const AccountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const AccountContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    padding: 10px;
`

function Side() {

    const [account,setAccount] = useState(false);
    const onClickOpenAccount = () => {
        setAccount(!account);
    }

    const onClickAwayEvent = () =>{
        setAccount(false);
    }

  return (
    <Container>
     <Content>

        <Menu>
        <IconsContainer>
          <Person/>
        </IconsContainer>
        <LinkContainer>
           <Links onClick={onClickOpenAccount}>Account</Links>
        </LinkContainer>
        </Menu>

        {account &&
            <>
            <ClickAwayListener onClickAway={onClickAwayEvent}>
                    <AccountMenu>
                    <AccountContainer>
                        <AccountContent>
                            <Links marginBottom="10px" to="/user/account/profile">Profile</Links>
                            <Links marginBottom="10px"  to="/user/account/address">Address</Links>
                            <Links  to="/user/account/password">Change Password</Links>
                    </AccountContent>
                    </AccountContainer> 
                    </AccountMenu>
            </ClickAwayListener>
            </>
        }

        <Menu>
        <IconsContainer>
          <ShoppingBag/>
        </IconsContainer>
        <LinkContainer>
           <Links to="/user/account/purchase">Purchase</Links>
        </LinkContainer>
        </Menu>

        <Menu>
        <IconsContainer>
          <Notifications/>
        </IconsContainer>
        <LinkContainer>
           <Links to="/user/account/notification">Notifications</Links>
        </LinkContainer>
        </Menu>

        <Menu>
        <IconsContainer>
          <Person/>
        </IconsContainer>
        <LinkContainer>
           <Links>Voucher</Links>
        </LinkContainer>
        </Menu>

     </Content>
    </Container>
  )
}

export default Side
