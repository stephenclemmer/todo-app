import React from 'react';


import { NumberInput, Button, Card, createStyles, Grid, Switch, Text, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
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

  const { classes } = useStyles();

  return (
    <>
    <h1 className={classes.h1}>Manage Settings</h1>

      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={6}>
          <Card withBorder p="xs">
            <Text>Update Settings</Text>

            <form>
              <Switch
                label="Show Completed ToDos"
              />


{/* On change -> setItems() */}
              <NumberInput
                // onChange={(value) => setPageItems(value)}
                label='Items per Page'
                placeholder="pick one"
                max={10}
                min={1}
              />

              <TextInput
                placeholder="difficulty"
                // name="sortKeyword"
                // onChange={(e) => setSort(e.target.value)}
                label="Sort Keyword"
              />

              <Button 
                type="submit"
                >Show New Settings
              </Button>

            </form>

          </Card>
        </Grid.Col>


        <Grid.Col xs={12} sm={6}>
        <Card withBorder p="xs">
            <Text> Updated Settings</Text>

            {/* if (toggle is on){ */}
              <Text> Show Completed ToDos</Text>
            {/* } else { */}
              <Text> Do Not Show Completed ToDos</Text>
            {/* } */}
            
            <Text>Sort Keyword difficulty</Text>
            </Card>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default Settings;