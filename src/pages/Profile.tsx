import Container from '@material-ui/core/Container'
import { useState, useEffect } from 'react'
import unleash from '../utils/toggle'

const ProfilePage = () => {
  const [toggle, setData] = useState({
    isLearnReact: unleash.isEnabled('learn-react'),
  })
  useEffect(() => {
    unleash.on('update', () => {
      setData({ isLearnReact: unleash.isEnabled('learn-react') })
    })
  }, [])

  return (
    <Container maxWidth="md">
      {toggle.isLearnReact ? 'Learn React' : 'Profile Page'}
    </Container>
  )
}

export default ProfilePage
