import React from 'react'
import Layout from '../Layout'
import DashInfoBar from '../components/Dashboard/DashInfoBar'
import DashSchoolPerfomance from '../components/Dashboard/DashSchoolPerfomance'
import styled from 'styled-components'

const Size = styled.div`
  padding-left: 3rem;
`
const Dashboard = () => {
  return (
    <Layout>
      <Size>
        <DashInfoBar />
        <DashSchoolPerfomance />
      </Size>
    </Layout>
  )
}

export default Dashboard
