import { createStyles, Header, Navbar, Text, } from '@mantine/core';
import { Autocomplete, Button, Card, Grid, Slider, Switch, TextInput } from '@mantine/core';
// import {List} from '../List/list';
// import {toggleComplete} from '../Components/ToDo';

// import '../Header/header.scss';

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { fa-Cog } from '@fortawesome/free-solid-svg-icons'
// const element = <FontAwesomeIcon icon="fas fa-cog" />

// ReactDOM.render(element, document.body)

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
  },
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  }
}))

const Settings = () => {
  // const { classes } = useStyles();

  return (
    // <>
      {/* <Navbar className={classes.navbar} style={{
        display: 'inline-block'
      }}>
        <Text
          style={{
            display: 'inline-block',
            padding: 5,
          }}
        >Home
        </Text>
        <Text
          style={{
            display: 'inline-block',
            padding: 5,
          }}
        >Settings
        </Text>
      </Navbar> */}

      // <h1 
      // className={classes.h1} data-testid="todo-h1"
      <h1>Manage Settings</h1>

      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Card>
            <Text 
            // className={classes.formHeading}
            >Update Settings</Text>

            <form
            // onSubmit={handleSubmit}
            >

              <Switch
                label="Show Completed ToDos"
              />

              <Autocomplete
                label='Items Per page'
                placeholder="pick one"
                data={[1, 2, 3, 4, 5]}
              />

              <TextInput
                placeholder="difficulty"
                name="sortKeyword"
                // onClick={handleClick}
                label="sortKeyword"
              />

              <Button type="submit">Show New Settings</Button>

            </form>

          </Card>
        </Grid.Col>


        <Grid.Col xs={12} sm={8}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Grid.Col>
      </Grid>
    // </>
  )
}

export default Settings;