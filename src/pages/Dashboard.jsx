import React from 'react'
import Layout from '../Layout'
import DashInfoBar from '../components/Dashboard/DashInfoBar'
import DashSchoolPerfomance from '../components/Dashboard/DashSchoolPerfomance'
import styled from 'styled-components'
import DashCalander from '../components/Dashboard/DashCalander'
import RightBar from '../components/Dashboard/RightBar'

const Size = styled.div`
  padding-left: 3rem;
  position: relative;
`
const BarSet = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`
const Dashboard = () => {
  return (
    <Layout>
      <Size>
        <DashInfoBar />
        <DashSchoolPerfomance />
        <DashCalander />
        <BarSet>
          <RightBar />
        </BarSet>
      </Size>
    </Layout>
  )
}

export default Dashboard
