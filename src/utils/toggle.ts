import { UnleashClient } from 'unleash-proxy-client'

const toggle = new UnleashClient({
  url: process.env.REACT_APP_UNLEASH_URI,
  clientKey: process.env.REACT_APP_UNLEASH_KEY,
  appName: 'store-frontend',
})

toggle.start()

export default toggle