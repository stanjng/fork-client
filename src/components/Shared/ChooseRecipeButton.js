import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import apiUrl from '../../apiConfig'
import axios from 'axios'

const ChooseRecipeButton = props => {
  const [selected, setSelected] = useState(false)

  const clickSelect = () => {
    setSelected(!selected)
    // axios call
    axios({
      url: `${apiUrl}/mealplans/${props.mealId}/recipes`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: {
        mealType: props.chosenRecipe.mealType,
        recipeTitle: props.chosenRecipe.recipeTitle,
        recipeImage: props.chosenRecipe.recipeImage,
        recipeSummary: props.chosenRecipe.recipeSummary,
        recipeAuthor: props.chosenRecipe.recipeAuthor,
        recipeIngredients: props.chosenRecipe.recipeIngredients,
        recipeSteps: props.chosenRecipe.recipeSteps
      }
    })
      .then(response => {
        props.alert({ heading: 'Success', message: '\'You added a recipe to this week\'s mealplan!', variant: 'success' })
      })
      .catch(() => props.alert({ heading: 'Errr...', message: 'Something went wrong', variant: 'danger' }))
  }

  return (
    <Button onClick={clickSelect} color={selected === true ? 'primary' : 'secondary'}>
      Click This!
    </Button>
  )
}

export default ChooseRecipeButton
