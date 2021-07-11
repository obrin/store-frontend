import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link as RouterLink } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>

        <Link component={RouterLink} to="/">
          Shop.com
        </Link>
        <Link component={RouterLink} to="/profile">
          Profile
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
