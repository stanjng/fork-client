import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import spoonacularApiUrl from '../../spoonacularApi'
import apiUrl from '../../apiConfig'
import apiKey from '../../apiKey.js'
import Recipe from '../Recipe/Recipe.js'
import ReactHtmlParser from 'react-html-parser'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexDirection: 'row',
    minHeight: '31rem',
    background: theme.palette.primary.main
  },
  button: {
    width: '100%'
  }
}))

const ChooseMeal = props => {
  const classes = useStyles()
  const [recipes, setRecipes] = useState([])
  const [mealId, setMealId] = useState(null)
  // const [mealPlan, setMealPlan] = useState([])

  const newPlan = () => {
    axios(`${spoonacularApiUrl}?number=3&tags=${props.mealtype}${apiKey}`)
      .then((res) => {
        console.log(res.data.recipes)
        setRecipes(res.data.recipes)
      })
      .catch(console.error)

    axios({
      url: `${apiUrl}/mealplans`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: {
        type: props.meal,
        recipes: []
      }
    })
      .then(response => {
        setMealId(response.data.mealplan._id)
        props.alert({ heading: 'Success', message: 'New mealplan created!', variant: 'success' })
      })
      .catch(() => props.alert({ heading: 'Errr...', message: 'Something went wrong', variant: 'danger' }))
  }

  const getMealplan = () => {
    axios({
      url: `${apiUrl}/mealplans?type=${props.meal}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      // .then(mealplans => mealplans.filter(mealplan => mealplan.owner !== props.user.id))
      .then(mealplan => console.log(mealplan.data))
  }

  const recipesJsx = recipes.map(recipe => (
    <Grid
      justify="center"
      item
      xs={4}
      key={recipe.id}
    >
      <Recipe
        alert={props.alert}
        user={props.user}
        mealId={mealId}
        recipeType={props.meal}
        recipeTitle={recipe.title}
        recipeAuthor={recipe.author}
        recipeSummary={recipe.summary}
        image={recipe.image}
        summary={ReactHtmlParser(recipe.summary)}
        recipeIngredients={recipe.extendedIngredients.map(ingredient => {
          console.log(ingredient)
          return {
            ingredientName: ingredient.name,
            ingredientAmount: ingredient.amount,
            ingredientUnit: ingredient.unit ? ingredient.unit : 'units'
          }
        })}
        recipeSteps={recipe.analyzedInstructions[0].steps.map(step => {
          return {
            stepNumber: step.number,
            stepText: step.step
          }
        })}
      />
    </Grid>
  ))

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={newPlan} disabled={!props.user} className={classes.button}>
            New {props.meal} Plan
          </Button>
          <Button variant="contained" color="primary" onClick={getMealplan} disabled={!props.user} className={classes.button}>
            {'View This Week\'s'} {props.meal}{props.meal === 'Lunch' ? 'es' : 's'}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} flexGrow={1}>
            {recipesJsx}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default ChooseMeal
