import React from 'react';

import { NumberInput, Button, Card, createStyles, Grid, Switch, Text, TextInput } from '@mantine/core';

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

  return (
    <>
      <h1>Manage Settings</h1>

      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Card>
            <Text>Update Settings</Text>

            <form>
              <Switch
                label="Show Completed ToDos"
              />

              <NumberInput
                label='Items Per page'
                placeholder="pick one"
                max={10}
                min={1}
              />

              <TextInput
                placeholder="difficulty"
                name="sortKeyword"
                // onClick={handleClick}
                label="sortKeyword"
              />

              <Button 
                type="submit"
                >Show New Settings
              </Button>

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
    </>
  )
}

export default Settings;