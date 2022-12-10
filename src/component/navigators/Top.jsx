import React, { useState } from 'react'
import styled from 'styled-components'
import {Dehaze , Notifications, Search, Settings, ShoppingBag, Logout, Store, LocalGroceryStore, AccountCircle} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { Device, textColor } from '../styles/Components.styled'
import {Menu,MenuItem,ListItemIcon,Divider,Modal} from '@mui/material'
import Popup from './Popup'

const Container = styled.div`
    background-color: #fff;
    height: 100px;
    position: sticky;
    z-index: 999;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    padding: 20px;

    @media ${Device.laptop}{
        padding: -20px;
    } 
`

const Left = styled.div`
    flex: 1;
    display: none;
    align-items: center;
    justify-content: left;
    @media ${Device.laptop}{
        display: flex;
        align-items: center;
        justify-content: left;
        flex: 1;
    }
    @media screen and (max-width: 325px){
        margin-right: 5px;
        flex: .5;
    }
`

const SidebarButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-left: 20px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    ${textColor.value};
    cursor: pointer;

    @media screen and (max-width: 325px){
        margin-right: 5px;
    }
`

const Center = styled.div`
    flex: .5;
    display: flex;
    align-items: center;
    justify-content: left;
    @media ${Device.laptop}{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
    }   

    @media screen and (max-width: 680px){
        
    }
`

const Image = styled.img`
    width: 150px;
    height: 50px;

    @media ${Device.laptop}{
        width: 150px;
        height: 50px;
    } 

    @media screen and (max-width: 315px){
        width: 100px;
        height: 30px;
    }
    @media screen and (max-width: 250px){
        width: 50px;
        height: 10px;
    }

    @media screen and (max-width: 200px){
        display: none;
    }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: right;
    color: #9e9ea7;
`

const Links = styled(Link)`
    text-decoration: none;
    font-weight: 400;
    margin-right: ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
    ${textColor.value};
    @media ${Device.laptop}{
      display: none;
    }
`

const SearchContainer = styled.div`
    display: flex;
    line-height: 28px;
    align-items: center;
    justify-content: right;
    position: relative;
    margin-left: 20px;
    @media ${Device.laptop}{
      display: none;
    }
`

const Textbox = styled.input`
    width: 200px;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #fff;
    color: rgba(0,0,0,0.7);
    transition: .3s ease;
    border-color: #e2e8ec;

    ::placeholder{
      color: #9e9ea7;
    }

    :focus , :hover {
    outline: none;
    border-color: rgba(0,0,0,0.7);
    background-color: #fff;
    }
`

const SearchButton = styled.button`
    position:absolute;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    ${textColor.value};
    cursor: pointer;
`

const Label = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    ${textColor.value};
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${textColor.value};
`


const Buttons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-right: 20px;
    margin-left: ${props => props.marginLeft};
    border-radius: 50%;
    border: none;
    background-color: transparent;
    ${textColor.value};
    cursor: pointer;


    @media ${Device.laptop}{
      display: flex;
    }

    @media screen and (max-width: 450px){
        margin-right:10px;
    }

    @media screen and (max-width: 325px){
        margin-right: 5px;
    }

`

const SettingButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-right: 20px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    ${textColor.value};
    cursor: pointer;

    @media ${Device.laptop}{
      display: flex;
    }

    @media screen and (max-width: 450px){
        margin-right:10px;
    }

    @media screen and (max-width: 325px){
        margin-right: 5px;
    }

    
`
function Top() {

  const user = false;

  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [popper, setPopper] = useState(false)
  const handleOpenPopper = () =>{
    setPopper(!popper)
  }

  const handleClosePopper = () =>{
    setPopper(false);
  }

  return (
    <>
      <Container>
        <Content>
            <Left>
                <SidebarButton onClick={handleOpenPopper}><Dehaze/></SidebarButton>
            </Left>
            <Modal open={popper} onClose={handleClosePopper} anchor="left">
             <Popup/>
             </Modal>
            <Center>
                <Image src='/./images/logo12.jpg' alt=''/>
            </Center>
            <Right>
                <SearchContainer>
                <Textbox placeholder='Search'/>
                <SearchButton><Search/></SearchButton>
                </SearchContainer>
                {user ? (
                <>
                <Links marginLeft="20px" marginRight="20px" to="/">Home</Links>
                <Links marginRight="20px" to="/seller-guide">Become a Seller</Links>
                <Links marginRight="20px" to="/faqs" >FAQs</Links>
                <Links marginRight="20px" to="/contact">Contact</Links>
                <Buttons><ShoppingBag/></Buttons>
                <Buttons><AccountCircle/></Buttons>
                </>
                )
                :
                (
                <>
                <Buttons marginLeft="20px"><ShoppingBag/></Buttons>
                <Buttons><Notifications/></Buttons>
                <SettingButton onClick={handleOpen}><Settings/></SettingButton>
                <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={()=>{
                    navigate('/user/account/profile')
                }}>
                <ListItemIcon>
                    <Icons><AccountCircle fontSize="medium"/></Icons>
                </ListItemIcon> 
                    <Label>Manage Account</Label>
                </MenuItem>

                <MenuItem>
                <ListItemIcon>
                <Icons><LocalGroceryStore fontSize="medium" /></Icons>
                </ListItemIcon> 
                <Label>Orders</Label>
                </MenuItem>

                <MenuItem>
                <ListItemIcon>
                <Icons><Store fontSize="medium" /></Icons>
                </ListItemIcon> 
                <Label>Store</Label>
                </MenuItem>

                <Divider />

                <MenuItem>
                <ListItemIcon>
                <Icons><Logout fontSize="medium" /></Icons>   
                </ListItemIcon>
                <Label>Logout</Label>
                </MenuItem>

            </Menu>
                </>
                )
                }
                
            </Right>
        </Content>
      </Container>
    </>
  )
}

export default Top
