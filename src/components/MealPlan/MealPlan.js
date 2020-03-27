// import React, { useEffect, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import {
  Button,
  Grid
} from '@material-ui/core'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import apiKey from '../../apiKey.js'
import Recipe from '../Recipe/Recipe.js'
import ReactHtmlParser from 'react-html-parser'

const MealPlan = props => {
  const [recipes, setRecipes] = useState([])

  const get = () => {
    axios(`${apiUrl}?number=4&tags=${props.mealtype}${apiKey}`)
      .then((res) => {
        console.log(res.data.recipes)
        setRecipes(res.data.recipes)
      })
      .catch(console.error)
  }

  const recipesJsx = recipes.map(recipe => (
    <Grid item xs={6} key={recipe.id}>
      <Recipe
        recipeTitle={recipe.title}
        recipeAuthor={recipe.author}
        image={recipe.image}
        recipeSummary={ReactHtmlParser(recipe.summary)}
        recipeIngredients={recipe.extendedIngredients.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.name.toUpperCase()}
          </li>
        ))}
        recipeInstructions={recipe.analyzedInstructions[0].steps.map(step => (
          <li key={step.number}>
            {step.step}
          </li>
        ))}
      />
    </Grid>
  ))

  return (
    <Fragment>
      <Grid item xs={12} justify="center">
        <Button variant="contained" color="primary" onClick={get}>
          {props.meal}
        </Button>
      </Grid>
      {recipesJsx}
    </Fragment>
  )
}

export default MealPlan
