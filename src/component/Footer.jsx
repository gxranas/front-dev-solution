import React from 'react'
import styled from 'styled-components'
import { textColor } from './styles/Components.styled'
import { Link} from 'react-router-dom'
import { Facebook, Twitter, Instagram } from '@mui/icons-material'

const Container = styled.div`
    height: 200px;
    display: flex;
`

const Content = styled.div`
    display: flex;
    flex: 1;
    padding: 20px;
    @media screen and (max-width: 925px){
        flex-direction: column;
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 925px){
        margin-top: 30px;
    }
`

const Image = styled.img`
    width: 180px;
    height: 70px;
`

const TagLine = styled.p`
    ${textColor.default};
    font-size: 11px;
    font-weight: 400;
    text-align: center;
    max-width: 70%;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction:column;
    @media screen and (max-width: 975px){
        justify-content: center;
    }

    @media screen and (max-width: 925px){
        margin-top: 30px;
    }
`

const Links = styled(Link)`
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;
    margin-right: ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
    ${textColor.value};
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 975px){
        display: none;
    }
`

const CopyrightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Copyright = styled.p`
    font-weight: 400;
    font-size: 13px;
    ${textColor.default};
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 925px){
        margin-top: 30px;
        padding: 20px;
    }
`

const Label = styled.p`
    ${textColor.default};
    font-size: 15px;
    font-weight: 400;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${textColor.default};
`

const FacebookButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    text-decoration: none;
    ${textColor.default};
`
const InstagramButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    ${textColor.default};
`
const TwitterButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    text-decoration: none;
    ${textColor.default};
`

function Footer() {

  return (
    <>
      <Container>
        <Content>
            <Left>
                <Image src='/./images/logo12.jpg' alt=''/>
                <TagLine>The shop could offer a wide range of fabrics, patterns, and hardware, as well as tips, tutorials, and inspiration to help customers turn their ideas into reality.</TagLine>
          </Left>
            <Center>
                <LinkContainer>
                <Links marginLeft="20px" marginRight="20px" to="/">Home</Links>
                <Links marginRight="20px" to="/seller">Become a Seller</Links>
                <Links marginRight="20px" to="/faqs" >FAQs</Links>
                <Links marginRight="20px" to="/contact">Contact</Links>
                </LinkContainer>
                <CopyrightContainer>
                    <Copyright>rtcu.shop © 2022</Copyright>
                </CopyrightContainer>
            </Center>
            <Right>
                <Label>Follow Us</Label>
                <Icons>
                    <FacebookButton href="https://www.facebook.com/profile.php?id=100088682733795"><Facebook/></FacebookButton>
                    <TwitterButton href="https://twitter.com/rtcu_22?t=IHtraixPJDDHaFtQ4zadvg&s=09"><Twitter/></TwitterButton>
                    <InstagramButton href="https://www.instagram.com/rtcu_22/"><Instagram/></InstagramButton>
                </Icons>
            </Right>
        </Content>
      </Container>
    </>
  )
}

export default Footer
