// src/components/SchoolPerformanceGraph.js
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import styled from 'styled-components'

const ChartContainer = styled.div`
  width: 90%; /* Increased width */
  margin: auto;
`

const gradientColor = (opacity = 1) => `rgba(66, 165, 245, ${opacity})`

const SchoolPerformanceGraph = ({ data }) => {
  return (
    <ChartContainer>
      <LineChart
        width={900}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' angle={-45} interval={0} textAnchor='end' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='performance'
          stroke={gradientColor(1)}
          fill={gradientColor(0.2)}
        />
      </LineChart>
    </ChartContainer>
  )
}

export default SchoolPerformanceGraph
