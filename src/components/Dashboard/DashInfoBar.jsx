import { CalendarMonth, Face2, Fastfood, Person4 } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const InfoBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`
const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  padding-top: 1rem;
`
const Box = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: white;
  border-radius: 1rem;
  background: rgb(37, 38, 95);
  background: linear-gradient(
    153deg,
    rgba(37, 38, 95, 1) 2%,
    rgba(58, 169, 51, 1) 100%
  );
  border: 1px solid #3aa933;
`
const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3;
  padding: 1.5rem;
`

const ItemIcon = styled.div`
  flex: 1;
  background-color: ${(props) => props.bg || 'transparent'};
  padding: 1rem;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ItemDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
`
const ItemDetailsName = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
`
const ItemDetailsValue = styled.p`
  font-size: 2.2rem;
  font-weight: 800;
`
const Person4Icon = styled(Person4)`
  font-size: 2rem;
`
const DashInfoBar = () => {
  return (
    <InfoBar>
      <Title>DASHBOARD</Title>
      <Box>
        <ItemWrap>
          <ItemIcon bg='#3aa933'>
            <Person4 style={{ fontSize: '3rem' }} />
          </ItemIcon>
          <ItemDetails>
            <ItemDetailsName>Students</ItemDetailsName>
            <ItemDetailsValue>400</ItemDetailsValue>
          </ItemDetails>
        </ItemWrap>
        <ItemWrap>
          <ItemIcon bg='#25265f'>
            <Face2 style={{ fontSize: '3rem' }} />
          </ItemIcon>
          <ItemDetails>
            <ItemDetailsName>Teachers</ItemDetailsName>
            <ItemDetailsValue>50</ItemDetailsValue>
          </ItemDetails>
        </ItemWrap>
        <ItemWrap>
          <ItemIcon bg='#3aa933'>
            <CalendarMonth style={{ fontSize: '3rem' }} />
          </ItemIcon>
          <ItemDetails>
            <ItemDetailsName>Events</ItemDetailsName>
            <ItemDetailsValue>0</ItemDetailsValue>
          </ItemDetails>
        </ItemWrap>
        <ItemWrap>
          <ItemIcon bg='#25265f'>
            <Fastfood style={{ fontSize: '3rem' }} />
          </ItemIcon>
          <ItemDetails>
            <ItemDetailsName>Food</ItemDetailsName>
            <ItemDetailsValue>0</ItemDetailsValue>
          </ItemDetails>
        </ItemWrap>
      </Box>
    </InfoBar>
  )
}

export default DashInfoBar
