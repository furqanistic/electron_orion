import { Dashboard, Face6 } from '@mui/icons-material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Bar = styled.div`
  width: 100%;
  height: 100%;
`
const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const items = [
    { name: 'Dashboard', icon: <Dashboard />, key: 'Dashboard', path: '/new' },

    { name: 'Students', icon: <Face6 />, key: 'Students', path: '/find' },
    {
      name: 'Teachers',
      icon: <GraphicEq />,
      key: 'Teachers',
      path: '/stats',
    },
    {
      name: 'Finance',
      icon: <Report />,
      key: 'Finance',
      path: '/reports',
    },
    { name: 'Users', icon: <Person />, key: 'Users', path: '/register' },
    {
      name: 'Chat',
      icon: <NotificationsActive />,
      key: 'Chat',
      path: '/reminder',
    },
  ]
  let filteredItems = items

  if (currentUser.username === 'admin') {
    filteredItems = items.filter(
      (item) => item.name !== 'Stats' && item.name !== 'Booking'
    )
  } else {
    filteredItems = items.filter(
      (item) => item.name !== 'Report' && item.name !== 'Accounts'
    )
  }

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
  return <Bar>Sidebar</Bar>
}

export default Sidebar
