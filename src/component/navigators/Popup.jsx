import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

const Content = styled.div`
  
`
function Popup() {
  return (
    <>
      <Box p={2} width='250px' height="100vh" textAlign='center' role='presentation' bgcolor="red">
        <Container>
          <Content>
            1
          </Content>
        </Container>
      </Box>
    </>
  )
}

export default Popup
