import {
  AccountBalance,
  Chat,
  CoPresent,
  Dashboard,
  ExitToApp,
  Face6,
  NotificationsActive,
  Person,
  Report,
} from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '/icons/logo.png'
const Bar = styled.div`
  /* background: rgb(37, 38, 95); */
  /* background: linear-gradient(
    153deg,
    rgba(37, 38, 95, 1) 58%,
    rgba(58, 169, 51, 1) 96%
  ); */
  color: #3aa933;
  height: 100%;
  width: 100%;
`

const Name = styled.div`
  font-size: 3rem;
  font-weight: 600;
  /* color: #3aa933; */
  letter-spacing: 0.3rem;
  /* background-color: #25265f; */

  display: flex;
  justify-content: center;
  align-items: center;
`
const NameIcon = styled.img`
  width: 120px;
  object-fit: cover;
  display: flex;
  padding-top: 1rem;
`
const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  padding-top: 2rem;
  color: white;
  /* background-color: #013701; */
`
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  color: #ffffff;
  width: 100%;
  border-radius: 20px;
  transition: all 0.1s ease;
  margin-bottom: 5px;
  cursor: pointer;
`
const ItemEnd = styled(Item)`
  position: absolute;
  bottom: 10px;
`
const ItemName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  /* text-align: left; */
`
const ItemIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`
const Linker = styled(Link)`
  text-decoration: none;
  width: 100%;
`
const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState()

  const items = [
    { name: 'Dashboard', icon: <Dashboard />, key: 'Dashboard', path: '/' },

    { name: 'Students', icon: <Face6 />, key: 'Students', path: '/students' },
    {
      name: 'Teachers',
      icon: <CoPresent />,
      key: 'Teachers',
      path: '/teachers',
    },
    {
      name: 'Finance',
      icon: <AccountBalance />,
      key: 'Finance',
      path: '/finances',
    },
    { name: 'Users', icon: <Person />, key: 'Users', path: '/users' },
    {
      name: 'Chat',
      icon: <Chat />,
      key: 'Chat',
      path: '/chats',
    },
  ]
  let filteredItems = items

  // if (currentUser.username === 'admin') {
  //   filteredItems = items.filter(
  //     (item) => item.name !== 'Stats' && item.name !== 'Booking'
  //   )
  // } else {
  //   filteredItems = items.filter(
  //     (item) => item.name !== 'Report' && item.name !== 'Accounts'
  //   )
  // }

  useEffect(() => {
    const currentKey = items.find(
      (item) => item.path === location.pathname
    )?.key
    if (currentKey) {
      setSelectedItem(currentKey)
    }
  }, [location.pathname, items])

  const handleClick = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
      <Bar>
        <IconBox>
          <NameIcon src={Logo} />
        </IconBox>
        <ItemsWrapper>
          {filteredItems.map((item) => (
            <Linker
              to={item.path}
              key={item.key}
              style={{ textDecoration: 'none' }}
            >
              <Item
                onClick={() => setSelectedItem(item.key)}
                style={{
                  backgroundColor:
                    selectedItem === item.key ? '#3aa933' : 'transparent',
                  color: selectedItem === item.key ? '#25265f' : '#ffffff',
                }}
              >
                <ItemIcon>{item.icon}</ItemIcon>
                <ItemName>{item.name}</ItemName>
              </Item>
            </Linker>
          ))}
          <Item
            onClick={handleClick}
            style={{
              color: '#3aa933',
              border: '1px solid #3aa933',
            }}
          >
            <ItemIcon>
              <ExitToApp />
            </ItemIcon>
            <ItemName>Logout</ItemName>
          </Item>
        </ItemsWrapper>
      </Bar>
    </>
  )
}

export default Sidebar
