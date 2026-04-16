/* ========================================
   ZestyZen — Recipe Detail Page Logic
   ======================================== */

const recipeId = parseInt(getQueryParam('id'));
const recipe = recipesData.find(r => r.id === recipeId);

if (!recipe) {
    // Recipe not found
    document.getElementById('recipeHero').innerHTML = `
        <div class="placeholder-img" style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:16px;">
            <span style="font-size:4rem;">😕</span>
            <h2 style="color:white;font-size:1.5rem;">Recipe not found</h2>
            <a href="recipes.html" class="btn" style="margin-top:8px;">Browse All Recipes</a>
        </div>
    `;
    document.getElementById('recipeInfoBar').style.display = 'none';
    document.getElementById('recipeColumns').style.display = 'none';
    document.getElementById('nutritionSection').style.display = 'none';
    document.getElementById('relatedSection').style.display = 'none';
} else {
    // Update page title
    document.title = `${recipe.name} — ZestyZen`;

    // Hero
    document.getElementById('recipeHero').innerHTML = `
        <div class="placeholder-img">${recipe.emoji}</div>
        <div class="recipe-detail-hero-overlay">
            <h1>${recipe.name}</h1>
        </div>
    `;

    // Info Bar
    document.getElementById('recipeInfoBar').innerHTML = `
        <div class="container">
            <div class="info-badge">
                <div class="icon">⏱</div>
                <div>
                    <div class="label">Prep Time</div>
                    <div class="value">${recipe.prepTime}</div>
                </div>
            </div>
            <div class="info-badge">
                <div class="icon">🍳</div>
                <div>
                    <div class="label">Cook Time</div>
                    <div class="value">${recipe.cookTime}</div>
                </div>
            </div>
            <div class="info-badge">
                <div class="icon">🍽️</div>
                <div>
                    <div class="label">Servings</div>
                    <div class="value">${recipe.servings}</div>
                </div>
            </div>
            <div class="info-badge">
                <div class="icon">🔥</div>
                <div>
                    <div class="label">Calories</div>
                    <div class="value">${recipe.calories} cal</div>
                </div>
            </div>
            <div class="info-badge">
                <div class="icon">📊</div>
                <div>
                    <div class="label">Difficulty</div>
                    <div class="value">${recipe.difficulty}</div>
                </div>
            </div>
        </div>
    `;

    // Ingredients + Steps
    const ingredientsHTML = recipe.ingredients.map(ing => `
        <div class="ingredient-item" onclick="this.classList.toggle('checked')">
            <div class="ingredient-checkbox">✓</div>
            <span>${ing}</span>
        </div>
    `).join('');

    const stepsHTML = recipe.steps.map((step, i) => `
        <div class="step-item">
            <div class="step-number">${i + 1}</div>
            <div class="step-text">${step}</div>
        </div>
    `).join('');

    document.getElementById('recipeColumns').innerHTML = `
        <div class="ingredients-card">
            <h2>🛒 Ingredients</h2>
            ${ingredientsHTML}
        </div>
        <div class="steps-section">
            <h2>📝 Instructions</h2>
            ${stepsHTML}
        </div>
    `;

    // Nutrition
    const nutrition = recipe.nutrition;
    document.getElementById('nutritionGrid').innerHTML = `
        <div class="nutrition-card">
            <div class="value">${nutrition.calories}</div>
            <div class="label">Calories</div>
        </div>
        <div class="nutrition-card">
            <div class="value">${nutrition.protein}</div>
            <div class="label">Protein</div>
        </div>
        <div class="nutrition-card">
            <div class="value">${nutrition.carbs}</div>
            <div class="label">Carbs</div>
        </div>
        <div class="nutrition-card">
            <div class="value">${nutrition.fat}</div>
            <div class="label">Fat</div>
        </div>
        <div class="nutrition-card">
            <div class="value">${nutrition.fiber}</div>
            <div class="label">Fiber</div>
        </div>
    `;

    // Related Recipes (same category, exclude current, pick 3)
    const related = recipesData
        .filter(r => r.category === recipe.category && r.id !== recipe.id)
        .slice(0, 3);

    const relatedGrid = document.getElementById('relatedGrid');
    if (related.length > 0) {
        related.forEach(r => relatedGrid.appendChild(createRecipeCard(r)));
    } else {
        document.getElementById('relatedSection').style.display = 'none';
    }
}
