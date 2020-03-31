import React, { useState, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import spoonacularApiUrl from '../../spoonacularApi'
import apiUrl from '../../apiConfig'
import apiKey from '../../apiKey.js'
import Recipe from '../Recipe/Recipe.js'
import ReactHtmlParser from 'react-html-parser'
import Divider from '@material-ui/core/Divider'

const ChooseMeal = props => {
  const [recipes, setRecipes] = useState([])
  const [mealId, setMealId] = useState(null)

  const get = () => {
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

  const recipesJsx = recipes.map(recipe => (
    <Grid
      justify="center"
      item xs={4}
      spacing={2}
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
    <Fragment>
      <Button variant="contained" justify="center" color="primary" onClick={get} disabled={!props.user}>
        {props.meal}
      </Button>
      <Divider />
      <Grid container item xs={12}>
        {recipesJsx}
      </Grid>
    </Fragment>
  )
}

export default ChooseMeal
