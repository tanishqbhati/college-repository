/* ========================================
   ZestyZen — Shared JavaScript
   ======================================== */

// --- Navbar scroll effect ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Mobile hamburger menu ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// --- Active nav link highlighting ---
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    }
});

// --- Utility: Create a recipe card HTML ---
function createRecipeCard(recipe) {
    const card = document.createElement('a');
    card.className = 'recipe-card';
    card.href = `recipe.html?id=${recipe.id}`;

    card.innerHTML = `
        <div class="recipe-card-image">
            <div class="placeholder-img">${recipe.emoji}</div>
            <span class="recipe-card-badge">${recipe.difficulty}</span>
        </div>
        <div class="recipe-card-body">
            <h3>${recipe.name}</h3>
            <div class="recipe-card-meta">
                <span>\u23f1 ${recipe.cookTime}</span>
                <span>\ud83d\udd25 ${recipe.calories} cal</span>
                <span>\ud83c\udf7d\ufe0f ${recipe.servings} serving${recipe.servings > 1 ? 's' : ''}</span>
            </div>
        </div>
    `;

    return card;
}

// --- Utility: Get query parameter ---
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
