import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChooseRecipeButton from '../Shared/ChooseRecipeButton.js'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const Recipe = props => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const chosenRecipe = {
    mealType: props.recipeType,
    recipeTitle: props.recipeTitle,
    recipeImage: props.image,
    recipeSummary: props.recipeSummary,
    recipeAuthor: props.recipeAuthor ? props.recipeAuthor : 'n/a',
    recipeSteps: [ ...props.recipeSteps ],
    recipeIngredients: [ ...props.recipeIngredients ]
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Hi
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.recipeTitle}
        subheader={props.recipeAuthor}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.recipeTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.summary}
          <ChooseRecipeButton
            chosenRecipe={chosenRecipe}
            recipeType={props.recipeType}
            mealId={props.mealId}
            user={props.user}
            alert={props.alert}
          />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="view instructions"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h2>Ingredients:</h2>
          <ul>{props.recipeIngredients}</ul>
          <h3>Instructions:</h3>
          <ol>
            {props.recipeInstructions}
          </ol>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Recipe
