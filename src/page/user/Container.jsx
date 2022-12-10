import React from 'react'
import styled from 'styled-components'
import Side from '../../component/navigators/Side'
import {  Outlet } from 'react-router-dom'

const Page = styled.div`
  display: flex;
  justify-content: center;
`

export default function Container() {
  return (
    <>
      <Page>
      <Side/>
      <Outlet/>
      </Page>
    </>
  )
}
