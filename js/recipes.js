/* ========================================
   ZestyZen — Recipes Page Logic
   ======================================== */

const recipesGrid = document.getElementById('recipesGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');

let activeCategory = 'all';

// --- Render recipes to grid ---
function renderRecipes(recipes) {
    recipesGrid.innerHTML = '';

    if (recipes.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    recipes.forEach(recipe => {
        recipesGrid.appendChild(createRecipeCard(recipe));
    });
}

// --- Filter recipes based on current search + category ---
function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    let filtered = recipesData;

    // Category filter
    if (activeCategory !== 'all') {
        filtered = filtered.filter(r => r.category === activeCategory);
    }

    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(r =>
            r.name.toLowerCase().includes(searchTerm) ||
            r.description.toLowerCase().includes(searchTerm) ||
            r.category.toLowerCase().includes(searchTerm)
        );
    }

    renderRecipes(filtered);
}

// --- Category button click handlers ---
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        activeCategory = btn.dataset.category;
        filterRecipes();
    });
});

// --- Search input handler ---
searchInput.addEventListener('input', filterRecipes);

// --- Read URL params and apply on load ---
const categoryParam = getQueryParam('category');
const searchParam = getQueryParam('search');

if (categoryParam) {
    activeCategory = categoryParam;
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === categoryParam) {
            btn.classList.add('active');
        }
    });
}

if (searchParam) {
    searchInput.value = searchParam;
}

// Initial render
filterRecipes();
