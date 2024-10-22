import { recipes } from "./recipes.js";

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry() {
	const listLength = recipes.length;
	const randomNum = random(listLength);
	return recipes[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));

function tagsTemplate(tags) {
	let html = `<ul class="tags">`;
	// <ul>
	//    <li>tag</li>
	//    <li>another tag</li>
	//    more tags if needed ...
	// </ul>
	function createLi(tag) {
		html += `<li>${tag}</li>`

	}
	// loop through the tags list and transform the strings to HTML
	tags.forEach(createLi)
	html += `</ul>`;
	return html
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">`;
	// our ratings are always out of 5, so create a for loop from 1 to 5
	for (let index = 0; index < 5; index++) {
		if (index < rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`
		}
		else {
			html += `<span aria-hidden="true" class="icon-star-empty"></span>`
		}
	}
	// check to see if the current index of the loop is less than our rating
	// if so then output a filled star

	// else output an empty star
	
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function recipeTemplate(recipe) {
	return `<figure>
	<img src="${recipe.image}" alt="image of ${recipe.name}" />
	<figcaption>
		${tagsTemplate(recipe.tags)}
		<h2><a href="#">${recipe.name}</a></h2>
		${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">
        	${recipe.description}
		</p>
	</figcaption>
</figure>`;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
	const mainRecipe = document.body.querySelector(".recipe")
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings

	// Set the HTML strings as the innerHTML of our output element.
	recipes.forEach((recipe) => {
		const newRecipe = document.createElement('div');
		newRecipe.classList.add('recipe');
		newRecipe.innerHTML = recipeTemplate(recipe);
		mainRecipe.appendChild(newRecipe);
	});
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

// function filter(query) {
// 	const filtered = recipes.filter(filterFunction)
// 	// sort by name
// 	const sorted = filtered.sort(sortFunction)
// 		return sorted

// }

// function searchHandler(e) {
// 	e.preventDefault()
// 	// get the search input
//   // convert the value in the input to lowercase
//   // use the filter function to filter our recipes
//   // render the filtered list

// }
