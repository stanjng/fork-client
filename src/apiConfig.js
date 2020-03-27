let apiUrl
const apiUrls = {
  production: 'https://api.spoonacular.com/recipes/random',
  development: 'https://api.spoonacular.com/recipes/random'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
