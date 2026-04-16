# ZestyZen — Healthy Recipe Website

## Overview

A healthy food recipe website for a BCA 6th semester college project. Users can browse, search, and filter healthy recipes by category, view detailed recipe pages with ingredients, steps, and nutrition info. Built with HTML/CSS/JS — no frameworks, no backend.

## Tech Stack

- **HTML5** — page structure (5 pages)
- **CSS3** — styling, animations, responsive design (single shared stylesheet)
- **Vanilla JavaScript** — interactivity, search, filter, dynamic rendering
- **JSON** — recipe data stored in a separate `recipes.json` file

## Visual Style — Bold & Vibrant

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#e74c3c` | Buttons, active states, highlights |
| Secondary | `#ff6b6b` | Hover states, accents |
| Accent | `#f39c12` | Tags, badges, star ratings |
| Dark | `#2c3e50` | Body text, headings |
| Light BG | `#fff5f5` | Page background |
| White | `#ffffff` | Cards, sections |

Typography: Google Fonts — `Poppins` for headings, `Open Sans` for body text.

## Pages

### 1. Home — `index.html`

- **Navbar** (sticky): Logo ("ZestyZen") on left, nav links (Home, Recipes, About, Contact) on right. Hamburger menu on mobile.
- **Hero Section**: Full-width background image with dark overlay. Headline: "Eat Clean, Live Healthy". Subtitle: "Discover delicious healthy recipes for every meal." Centered search bar.
- **Categories Row**: 6 circular/rounded cards — Breakfast, Lunch, Dinner, Snacks, Smoothies, Desserts. Each with an icon/emoji and label. Clickable — links to recipes page filtered by that category.
- **Featured Recipes**: Section heading "Popular Recipes". Grid of 6-8 recipe cards. Each card: food image, recipe name, cook time, calorie count, difficulty badge.
- **Footer**: Logo, quick links, copyright notice.

### 2. Recipes — `recipes.html`

- **Search Bar**: Text input at the top, filters recipes in real-time as user types.
- **Filter Buttons**: Horizontal row of category buttons (All, Breakfast, Lunch, Dinner, Snacks, Smoothies, Desserts). Active button is highlighted. Clicking filters the grid.
- **Recipe Grid**: Responsive card grid. Each card shows:
  - Food image (top)
  - Recipe name
  - Cook time icon + value
  - Calorie icon + value
  - Difficulty tag (Easy / Medium / Hard)
  - Hover effect: slight lift + shadow increase
- Clicking a card navigates to `recipe.html?id=<recipeId>`.

### 3. Recipe Detail — `recipe.html`

- **Hero Image**: Large image of the dish at the top.
- **Info Bar**: Recipe title, prep time, cook time, servings, calories — displayed as icon badges in a row.
- **Two-Column Layout**:
  - Left column: Ingredients list with checkboxes
  - Right column: Numbered step-by-step instructions
- **Nutrition Table**: Calories, Protein, Carbs, Fat, Fiber — displayed in a clean table or card grid.
- **Related Recipes**: "You Might Also Like" section with 3 recipe cards from the same category.
- Recipe loaded dynamically from `recipes.json` using the `id` query parameter.

### 4. About — `about.html`

- **Mission Section**: Heading + paragraph about promoting healthy eating habits.
- **Values Cards**: 3 cards in a row — "Fresh Ingredients", "Balanced Nutrition", "Easy to Cook". Each with an icon, title, and short description.
- **Creator Section**: Simple section about the project creator (for the college report context).

### 5. Contact — `contact.html`

- **Contact Form**: Name, Email, Subject, Message fields + Submit button. Frontend only — shows a success message on submit (no backend).
- **Contact Info Cards**: 3 cards — Email, Phone, Location — with icons.

## Data Structure — `recipes.json`

```json
{
  "recipes": [
    {
      "id": 1,
      "name": "Grilled Chicken Salad",
      "category": "lunch",
      "image": "images/grilled-chicken-salad.jpg",
      "prepTime": "10 min",
      "cookTime": "15 min",
      "servings": 2,
      "calories": 320,
      "difficulty": "Easy",
      "description": "A fresh and protein-packed salad...",
      "ingredients": [
        "200g chicken breast",
        "2 cups mixed greens",
        "1 tomato, diced"
      ],
      "steps": [
        "Season and grill the chicken for 6-7 minutes per side.",
        "Chop the greens and vegetables.",
        "Slice the chicken and arrange over the salad."
      ],
      "nutrition": {
        "calories": 320,
        "protein": "35g",
        "carbs": "12g",
        "fat": "14g",
        "fiber": "4g"
      }
    }
  ]
}
```

The JSON file will contain 15-20 recipes across all 6 categories.

## JavaScript Features

| Feature | Description |
|---------|-------------|
| Live search | Filters recipe cards as user types in search bar |
| Category filter | Shows only recipes matching selected category button |
| Dynamic recipe detail | Reads `id` from URL query param, finds recipe in JSON, renders the page |
| Smooth scroll | Navbar anchor links scroll smoothly |
| Mobile nav toggle | Hamburger icon toggles nav menu on small screens |
| Form validation | Basic client-side validation on contact form |
| Card animations | CSS transitions on hover (transform + box-shadow) |

## File Structure

```
ZestyZen/
├── index.html
├── recipes.html
├── recipe.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js          (navbar, smooth scroll, shared utilities)
│   ├── recipes.js        (search, filter, card rendering)
│   └── recipe-detail.js  (single recipe page logic)
├── data/
│   └── recipes.json
└── images/
    ├── hero.jpg
    ├── categories/       (category icons/images)
    └── recipes/          (recipe food photos)
```

## Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| >1024px (Desktop) | 3-4 cards per row, full navbar |
| 768-1024px (Tablet) | 2 cards per row, full navbar |
| <768px (Mobile) | 1 card per row, hamburger menu |

## Images

Use royalty-free food images from Unsplash or Pexels. Download and store locally in `images/` folder so the site works offline (important for project demo/presentation).

## What This Does NOT Include

- No backend / server
- No database — all data in JSON
- No user accounts / login
- No actual form submission (frontend validation + success message only)
