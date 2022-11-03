import { createStyles, Header, Navbar } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
  },
  link: {
      textDecoration: 'none',
      color: theme.colors.gray[0],
  },
  // h1: {
  //   backgroundColor: theme.colors.gray[8],
  //   color: theme.colors.gray[0],
  //   width: '80%',
  //   margin: 'auto',
  //   fontSize: theme.fontSizes.lg,
  //   padding: theme.spacing.md,
  //   marginBottom: theme.spacing.md,
  //   marginTop: theme.spacing.md,
  // }
}))


const AppHeader = ({ incomplete }) => {
  const { classes } = useStyles();

  return (
    <Header data-testid="todo-header">
      <Navbar className={classes.navbar} style={{
        display: 'inline-block'
      }}>
          <div
            style={{
              display: 'inline-block',
              padding: 10,
            }}>
            <Link className={classes.link} to="/">Home</Link>
          </div>

          <div
            style={{
              display: 'inline-block',
              padding: 10,
              color: 'white',
            }}>
            <Link className={classes.link} to="/settings">Settings</Link>
          </div>
      </Navbar>
    </Header>
  )
}

export default AppHeader;