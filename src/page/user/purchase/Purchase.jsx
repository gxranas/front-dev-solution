import React from 'react'
import styled from 'styled-components'
import {Tab, Box} from '@mui/material'
import {TabContext, TabList , TabPanel} from '@mui/lab'
import AllPurchase from './AllPurchase'
import ToPay from './ToPay'
import ToReceived from './ToReceived'
import Completed from './Completed'
import Cancelled from './Cancelled'
import Refund from './Refund'


const Page = styled.div`
  flex: 4;
  border: solid 1px  #dfdfdf;
  max-width: 75%;
  border-radius: 5px;
`

const Content = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
`

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`


function Purchase() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <>
    <Page>
      <Content>
        <Body>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} variant="fullWidth" textColor='tertiary' indicatorColor='#FEFEFE'>
                <Tab label="All" value="1" />
                <Tab label="To Pay" value="2" />
                <Tab label="To Receive" value="3" />
                <Tab label="Completed" value="4" />
                <Tab label="Cancelled" value="5" />
                <Tab label="Refund" value="6" />
            </TabList>
            </Box>
            <TabPanel value="1"><AllPurchase/></TabPanel>
            <TabPanel value="2"><ToPay/></TabPanel>
            <TabPanel value="3"><ToReceived/></TabPanel>
            <TabPanel value="4"><Completed/></TabPanel>
            <TabPanel value="5"><Cancelled/></TabPanel>
            <TabPanel value="6"><Refund/></TabPanel>

        </TabContext>
        </Body>
      </Content>
    </Page>
    </>
  )
}

export default Purchase
