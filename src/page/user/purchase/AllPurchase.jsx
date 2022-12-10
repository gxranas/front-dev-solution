import React from 'react'
import styled from 'styled-components'
import {textColor} from '../../../component/styles/Components.styled'
import {Store} from '@mui/icons-material'
import {Link, useNavigate} from 'react-router-dom'
import {Divider} from '@mui/material'
const Page = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    cursor: pointer;
`

const Header = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: space-between;
`

const Shop = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
`

const ShopName = styled(Link)`
    ${textColor.value};
    text-decoration: none;
    font-size: 15px;
`

const OrderStatus = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: right;
`

const Status = styled.p`
    ${textColor.value};
    font-size: 12px;
`

const Body = styled.div`
    flex: 1;
    display: flex;
    margin-top: 10px;
`

const Image = styled.div`
    flex: .5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:10px;
`

const ProductImage = styled.img`
    height: 100px;
    width: 100px;
`

const Product = styled.div`
    flex: 2;
    display: flex;
    justify-content: left;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
`

const ProductName = styled.p`
    ${textColor.value};
    font-size: 15px;
    font-weight: 600;
`

const ProductVariation = styled.p`
     ${textColor.default};
    font-size: 12px;
    font-weight: 400;
`

const Price = styled.div`
    flex: .5;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProductPrice = styled.p`
       ${textColor.value};
    font-size: 15px;
    font-weight: 600;
`

const Quantity = styled.div`
    flex: .5;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProductQuantity = styled.p`
    ${textColor.value};
    font-size: 15px;
    font-weight: 600;
` 
const QuantityLabel = styled.p`
    ${textColor.default};
    font-size: 12px;
    font-weight: 400;
    margin-right: 5px;
`


function AllPurchase() {
    const navigate = useNavigate();
  return (
    <>
      <Page>
        <Container onClick={()=>{
            navigate('/user/account/purchase/details')
        }}>
        <Header>
            <Shop>
                <Store/><ShopName>All in Good</ShopName>
            </Shop>
            <OrderStatus>
                <Status>
                  Completed
                </Status>
            </OrderStatus>
        </Header>
        <Divider/>
        <Body>
            <Image>
                <ProductImage src="/./images/logo12.jpg" alt=''/>
            </Image>
            <Product>
                <ProductName>
                    Brown Wood
                </ProductName>
                <ProductVariation>
                    Width: 1 Meter
                </ProductVariation>
            </Product>
            <Price>
                <ProductPrice>
                    P1150.00
                </ProductPrice>
            </Price>
            <Quantity>
                <QuantityLabel>
                    Qty: 
                </QuantityLabel>
                <ProductQuantity>
                    1
                </ProductQuantity>
            </Quantity>
        </Body>
        </Container>
      </Page>
    </>
  )
}

export default AllPurchase
