const recipesData = [
    // === BREAKFAST (3) ===
    {
        id: 1,
        name: "Avocado Toast with Poached Egg",
        category: "breakfast",
        image: "images/recipes/avocado-toast.jpg",
        emoji: "\ud83e\udd51",
        prepTime: "5 min",
        cookTime: "10 min",
        servings: 1,
        calories: 310,
        difficulty: "Easy",
        description: "Creamy avocado spread on whole grain toast topped with a perfectly poached egg and a sprinkle of chili flakes.",
        ingredients: [
            "1 slice whole grain bread",
            "1/2 ripe avocado",
            "1 large egg",
            "1 tsp lemon juice",
            "Pinch of salt and pepper",
            "Red chili flakes to taste",
            "1 tsp olive oil"
        ],
        steps: [
            "Toast the whole grain bread until golden and crispy.",
            "Mash the avocado in a bowl with lemon juice, salt, and pepper.",
            "Bring a pot of water to a gentle simmer. Create a swirl and carefully drop in the egg. Poach for 3-4 minutes.",
            "Spread the mashed avocado evenly on the toast.",
            "Place the poached egg on top, drizzle with olive oil, and sprinkle chili flakes."
        ],
        nutrition: {
            calories: 310,
            protein: "14g",
            carbs: "24g",
            fat: "18g",
            fiber: "7g"
        }
    },
    {
        id: 2,
        name: "Greek Yogurt Parfait",
        category: "breakfast",
        image: "images/recipes/yogurt-parfait.jpg",
        emoji: "\ud83c\udf53",
        prepTime: "10 min",
        cookTime: "0 min",
        servings: 1,
        calories: 280,
        difficulty: "Easy",
        description: "Layers of creamy Greek yogurt, crunchy granola, fresh berries, and a drizzle of honey for a protein-packed start.",
        ingredients: [
            "1 cup Greek yogurt (plain, non-fat)",
            "1/3 cup granola",
            "1/2 cup mixed berries (strawberries, blueberries)",
            "1 tbsp honey",
            "1 tbsp chia seeds",
            "Fresh mint leaves for garnish"
        ],
        steps: [
            "In a glass or bowl, add a layer of Greek yogurt at the bottom.",
            "Add a layer of granola followed by a layer of mixed berries.",
            "Repeat the layers — yogurt, granola, berries.",
            "Drizzle honey on top and sprinkle chia seeds.",
            "Garnish with fresh mint leaves and serve immediately."
        ],
        nutrition: {
            calories: 280,
            protein: "18g",
            carbs: "38g",
            fat: "6g",
            fiber: "5g"
        }
    },
    {
        id: 3,
        name: "Spinach & Mushroom Omelette",
        category: "breakfast",
        image: "images/recipes/spinach-omelette.jpg",
        emoji: "\ud83e\udd5a",
        prepTime: "5 min",
        cookTime: "8 min",
        servings: 1,
        calories: 245,
        difficulty: "Easy",
        description: "A fluffy omelette loaded with sauteed spinach, mushrooms, and a touch of feta cheese for a nutritious breakfast.",
        ingredients: [
            "3 large eggs",
            "1 cup fresh spinach",
            "1/2 cup sliced mushrooms",
            "2 tbsp crumbled feta cheese",
            "1 tsp olive oil",
            "Salt and pepper to taste",
            "1/4 tsp garlic powder"
        ],
        steps: [
            "Whisk the eggs with salt, pepper, and garlic powder in a bowl.",
            "Heat olive oil in a non-stick pan over medium heat. Saute mushrooms for 2-3 minutes until golden.",
            "Add spinach and cook until wilted, about 1 minute. Remove and set aside.",
            "Pour the egg mixture into the same pan. Let it cook undisturbed for 2 minutes.",
            "Add the sauteed vegetables and feta on one half. Fold the omelette and cook for 1 more minute."
        ],
        nutrition: {
            calories: 245,
            protein: "22g",
            carbs: "4g",
            fat: "16g",
            fiber: "2g"
        }
    },

    // === LUNCH (3) ===
    {
        id: 4,
        name: "Grilled Chicken Salad",
        category: "lunch",
        image: "images/recipes/chicken-salad.jpg",
        emoji: "\ud83e\udd57",
        prepTime: "15 min",
        cookTime: "15 min",
        servings: 2,
        calories: 320,
        difficulty: "Easy",
        description: "A hearty salad with juicy grilled chicken, crisp greens, cherry tomatoes, and a tangy lemon vinaigrette.",
        ingredients: [
            "200g chicken breast",
            "4 cups mixed salad greens",
            "1 cup cherry tomatoes, halved",
            "1/2 cucumber, sliced",
            "1/4 red onion, thinly sliced",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "1 tsp Dijon mustard",
            "Salt and pepper to taste"
        ],
        steps: [
            "Season the chicken breast with salt, pepper, and a drizzle of olive oil.",
            "Grill the chicken on medium-high heat for 6-7 minutes per side until cooked through. Let rest, then slice.",
            "In a large bowl, combine the mixed greens, cherry tomatoes, cucumber, and red onion.",
            "Whisk together olive oil, lemon juice, Dijon mustard, salt, and pepper to make the vinaigrette.",
            "Top the salad with sliced chicken, drizzle the vinaigrette, and toss gently."
        ],
        nutrition: {
            calories: 320,
            protein: "35g",
            carbs: "12g",
            fat: "14g",
            fiber: "4g"
        }
    },
    {
        id: 5,
        name: "Quinoa Buddha Bowl",
        category: "lunch",
        image: "images/recipes/buddha-bowl.jpg",
        emoji: "\ud83e\udd62",
        prepTime: "10 min",
        cookTime: "20 min",
        servings: 2,
        calories: 380,
        difficulty: "Medium",
        description: "A colorful nourishing bowl with fluffy quinoa, roasted sweet potato, chickpeas, avocado, and tahini dressing.",
        ingredients: [
            "1 cup quinoa",
            "1 medium sweet potato, cubed",
            "1 can chickpeas, drained",
            "1 avocado, sliced",
            "2 cups baby spinach",
            "2 tbsp tahini",
            "1 tbsp lemon juice",
            "1 tbsp olive oil",
            "1 tsp cumin",
            "Salt and pepper to taste"
        ],
        steps: [
            "Cook quinoa according to package instructions and set aside to cool slightly.",
            "Toss sweet potato cubes and chickpeas with olive oil, cumin, salt, and pepper. Roast at 200°C (400°F) for 20 minutes.",
            "Make the dressing by whisking tahini, lemon juice, and 2 tbsp warm water until smooth.",
            "Divide quinoa into bowls. Arrange roasted sweet potato, chickpeas, avocado slices, and spinach on top.",
            "Drizzle with tahini dressing and serve."
        ],
        nutrition: {
            calories: 380,
            protein: "16g",
            carbs: "48g",
            fat: "14g",
            fiber: "10g"
        }
    },
    {
        id: 6,
        name: "Mediterranean Wrap",
        category: "lunch",
        image: "images/recipes/med-wrap.jpg",
        emoji: "\ud83c\udf2f",
        prepTime: "10 min",
        cookTime: "0 min",
        servings: 1,
        calories: 340,
        difficulty: "Easy",
        description: "A whole wheat wrap filled with hummus, crispy falafel, fresh vegetables, and a zesty tzatziki sauce.",
        ingredients: [
            "1 large whole wheat tortilla",
            "3 tbsp hummus",
            "3 falafel patties (store-bought or homemade)",
            "1/2 cup shredded lettuce",
            "1/4 cup diced tomatoes",
            "1/4 cup diced cucumber",
            "2 tbsp tzatziki sauce",
            "Pickled red onion to taste"
        ],
        steps: [
            "Warm the tortilla in a dry pan or microwave for 10 seconds to make it pliable.",
            "Spread hummus evenly across the center of the wrap.",
            "Layer the lettuce, tomatoes, cucumber, and falafel patties in a line.",
            "Drizzle with tzatziki sauce and add pickled red onion.",
            "Fold in the sides and roll tightly. Cut in half and serve."
        ],
        nutrition: {
            calories: 340,
            protein: "14g",
            carbs: "42g",
            fat: "13g",
            fiber: "8g"
        }
    },

    // === DINNER (3) ===
    {
        id: 7,
        name: "Baked Salmon with Asparagus",
        category: "dinner",
        image: "images/recipes/baked-salmon.jpg",
        emoji: "\ud83c\udf43",
        prepTime: "10 min",
        cookTime: "20 min",
        servings: 2,
        calories: 410,
        difficulty: "Medium",
        description: "Perfectly baked salmon fillets with roasted asparagus, seasoned with garlic, lemon, and fresh herbs.",
        ingredients: [
            "2 salmon fillets (150g each)",
            "1 bunch asparagus, trimmed",
            "2 cloves garlic, minced",
            "2 tbsp olive oil",
            "1 lemon (juice and zest)",
            "1 tsp dried dill",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        steps: [
            "Preheat oven to 200°C (400°F). Line a baking sheet with parchment paper.",
            "Place salmon fillets in the center and arrange asparagus around them.",
            "Mix olive oil, garlic, lemon juice, lemon zest, dill, salt, and pepper. Drizzle over salmon and asparagus.",
            "Bake for 18-20 minutes until the salmon flakes easily with a fork.",
            "Garnish with fresh parsley and serve with lemon wedges."
        ],
        nutrition: {
            calories: 410,
            protein: "38g",
            carbs: "8g",
            fat: "25g",
            fiber: "3g"
        }
    },
    {
        id: 8,
        name: "Turkey Stuffed Bell Peppers",
        category: "dinner",
        image: "images/recipes/stuffed-peppers.jpg",
        emoji: "\ud83c\udf36\ufe0f",
        prepTime: "15 min",
        cookTime: "30 min",
        servings: 4,
        calories: 290,
        difficulty: "Medium",
        description: "Colorful bell peppers stuffed with lean ground turkey, brown rice, black beans, and melted cheese.",
        ingredients: [
            "4 large bell peppers (mixed colors)",
            "300g lean ground turkey",
            "1 cup cooked brown rice",
            "1/2 cup black beans, drained",
            "1/2 cup corn kernels",
            "1 cup diced tomatoes",
            "1/2 cup shredded mozzarella",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper to taste"
        ],
        steps: [
            "Preheat oven to 190°C (375°F). Cut the tops off bell peppers and remove seeds.",
            "Brown the ground turkey in a skillet over medium heat. Drain any excess fat.",
            "Mix the turkey with brown rice, black beans, corn, diced tomatoes, cumin, paprika, salt, and pepper.",
            "Stuff each pepper with the mixture and place in a baking dish. Top with shredded mozzarella.",
            "Cover with foil and bake for 25 minutes. Remove foil and bake 5 more minutes until cheese is bubbly."
        ],
        nutrition: {
            calories: 290,
            protein: "28g",
            carbs: "26g",
            fat: "8g",
            fiber: "6g"
        }
    },
    {
        id: 9,
        name: "Lemon Herb Grilled Fish",
        category: "dinner",
        image: "images/recipes/grilled-fish.jpg",
        emoji: "\ud83d\udc1f",
        prepTime: "10 min",
        cookTime: "12 min",
        servings: 2,
        calories: 280,
        difficulty: "Easy",
        description: "Light and flaky white fish grilled with a fragrant lemon-herb marinade, served with steamed vegetables.",
        ingredients: [
            "2 white fish fillets (tilapia or cod, 150g each)",
            "2 tbsp olive oil",
            "2 tbsp lemon juice",
            "2 cloves garlic, minced",
            "1 tsp dried oregano",
            "1 tsp dried thyme",
            "Salt and pepper to taste",
            "Steamed broccoli and carrots for serving"
        ],
        steps: [
            "Mix olive oil, lemon juice, garlic, oregano, thyme, salt, and pepper to make the marinade.",
            "Coat the fish fillets with the marinade and let rest for 10 minutes.",
            "Heat a grill pan over medium-high heat. Grill the fish for 4-5 minutes per side until flaky.",
            "Meanwhile, steam broccoli and carrots until tender-crisp, about 5 minutes.",
            "Serve the grilled fish alongside steamed vegetables with a lemon wedge."
        ],
        nutrition: {
            calories: 280,
            protein: "32g",
            carbs: "10g",
            fat: "12g",
            fiber: "4g"
        }
    },

    // === SNACKS (3) ===
    {
        id: 10,
        name: "Hummus & Veggie Sticks",
        category: "snacks",
        image: "images/recipes/hummus-veggies.jpg",
        emoji: "\ud83e\udd55",
        prepTime: "15 min",
        cookTime: "0 min",
        servings: 4,
        calories: 180,
        difficulty: "Easy",
        description: "Creamy homemade hummus served with colorful crunchy vegetable sticks — the perfect healthy snack.",
        ingredients: [
            "1 can chickpeas, drained (reserve liquid)",
            "2 tbsp tahini",
            "2 tbsp lemon juice",
            "1 clove garlic",
            "2 tbsp olive oil",
            "1/2 tsp cumin",
            "Salt to taste",
            "Carrots, cucumbers, celery, bell peppers for dipping"
        ],
        steps: [
            "Add chickpeas, tahini, lemon juice, garlic, olive oil, cumin, and salt to a food processor.",
            "Blend until smooth. Add 2-3 tbsp of reserved chickpea liquid to reach desired consistency.",
            "Taste and adjust seasoning as needed.",
            "Transfer to a bowl, drizzle with olive oil, and sprinkle with paprika.",
            "Cut vegetables into sticks and arrange around the hummus bowl."
        ],
        nutrition: {
            calories: 180,
            protein: "7g",
            carbs: "18g",
            fat: "10g",
            fiber: "5g"
        }
    },
    {
        id: 11,
        name: "Energy Protein Balls",
        category: "snacks",
        image: "images/recipes/protein-balls.jpg",
        emoji: "\ud83c\udf6a",
        prepTime: "15 min",
        cookTime: "0 min",
        servings: 12,
        calories: 95,
        difficulty: "Easy",
        description: "No-bake energy balls packed with oats, peanut butter, honey, and dark chocolate chips for a quick boost.",
        ingredients: [
            "1 cup rolled oats",
            "1/2 cup peanut butter",
            "1/3 cup honey",
            "1/4 cup dark chocolate chips",
            "2 tbsp chia seeds",
            "1 tsp vanilla extract",
            "Pinch of salt"
        ],
        steps: [
            "Combine all ingredients in a large mixing bowl and stir until well mixed.",
            "Refrigerate the mixture for 15-20 minutes to firm up.",
            "Roll the mixture into 12 even-sized balls using your hands.",
            "Place on a parchment-lined tray and refrigerate for at least 30 minutes.",
            "Store in an airtight container in the fridge for up to one week."
        ],
        nutrition: {
            calories: 95,
            protein: "3g",
            carbs: "12g",
            fat: "5g",
            fiber: "2g"
        }
    },
    {
        id: 12,
        name: "Baked Sweet Potato Fries",
        category: "snacks",
        image: "images/recipes/sweet-potato-fries.jpg",
        emoji: "\ud83c\udf5f",
        prepTime: "10 min",
        cookTime: "25 min",
        servings: 2,
        calories: 165,
        difficulty: "Easy",
        description: "Crispy on the outside, soft on the inside — these baked sweet potato fries are a guilt-free treat.",
        ingredients: [
            "2 medium sweet potatoes",
            "1.5 tbsp olive oil",
            "1 tsp paprika",
            "1/2 tsp garlic powder",
            "1/2 tsp cumin",
            "Salt and pepper to taste",
            "Fresh rosemary (optional)"
        ],
        steps: [
            "Preheat oven to 220°C (425°F). Line a baking sheet with parchment paper.",
            "Peel and cut sweet potatoes into even-sized fry shapes.",
            "Toss the fries with olive oil, paprika, garlic powder, cumin, salt, and pepper.",
            "Spread in a single layer on the baking sheet — don't overcrowd.",
            "Bake for 20-25 minutes, flipping halfway, until crispy and golden."
        ],
        nutrition: {
            calories: 165,
            protein: "2g",
            carbs: "28g",
            fat: "5g",
            fiber: "4g"
        }
    },

    // === SMOOTHIES (3) ===
    {
        id: 13,
        name: "Green Detox Smoothie",
        category: "smoothies",
        image: "images/recipes/green-smoothie.jpg",
        emoji: "\ud83e\udd6c",
        prepTime: "5 min",
        cookTime: "0 min",
        servings: 1,
        calories: 190,
        difficulty: "Easy",
        description: "A refreshing green smoothie with spinach, banana, mango, and ginger to kickstart your morning.",
        ingredients: [
            "2 cups fresh spinach",
            "1 frozen banana",
            "1/2 cup frozen mango chunks",
            "1 cup almond milk",
            "1 tbsp chia seeds",
            "1/2 inch fresh ginger, peeled",
            "1 tsp honey (optional)"
        ],
        steps: [
            "Add almond milk and spinach to the blender first and blend until smooth.",
            "Add frozen banana, mango, ginger, and chia seeds.",
            "Blend on high for 60-90 seconds until completely smooth.",
            "Taste and add honey if more sweetness is desired.",
            "Pour into a glass and enjoy immediately."
        ],
        nutrition: {
            calories: 190,
            protein: "5g",
            carbs: "38g",
            fat: "4g",
            fiber: "7g"
        }
    },
    {
        id: 14,
        name: "Berry Blast Smoothie",
        category: "smoothies",
        image: "images/recipes/berry-smoothie.jpg",
        emoji: "\ud83c\udf53",
        prepTime: "5 min",
        cookTime: "0 min",
        servings: 1,
        calories: 220,
        difficulty: "Easy",
        description: "A vibrant antioxidant-rich smoothie blending strawberries, blueberries, banana, and Greek yogurt.",
        ingredients: [
            "1/2 cup frozen strawberries",
            "1/2 cup frozen blueberries",
            "1 frozen banana",
            "1/2 cup Greek yogurt",
            "1 cup oat milk",
            "1 tbsp flaxseeds",
            "1 tbsp honey"
        ],
        steps: [
            "Add oat milk and Greek yogurt to the blender.",
            "Add all frozen fruits and flaxseeds.",
            "Blend on high until smooth and creamy, about 60 seconds.",
            "Add honey and blend for 10 more seconds.",
            "Pour into a glass, top with a few fresh berries if desired."
        ],
        nutrition: {
            calories: 220,
            protein: "10g",
            carbs: "40g",
            fat: "4g",
            fiber: "6g"
        }
    },
    {
        id: 15,
        name: "Tropical Mango Lassi",
        category: "smoothies",
        image: "images/recipes/mango-lassi.jpg",
        emoji: "\ud83e\udd6d",
        prepTime: "5 min",
        cookTime: "0 min",
        servings: 2,
        calories: 195,
        difficulty: "Easy",
        description: "A creamy Indian-inspired mango lassi made with fresh mango, yogurt, and a hint of cardamom.",
        ingredients: [
            "1 large ripe mango, peeled and chopped",
            "1 cup plain yogurt",
            "1/2 cup cold milk",
            "2 tbsp honey",
            "1/4 tsp cardamom powder",
            "Ice cubes",
            "Chopped pistachios for garnish"
        ],
        steps: [
            "Add chopped mango, yogurt, milk, honey, and cardamom to a blender.",
            "Add a few ice cubes and blend until smooth and frothy.",
            "Taste and adjust sweetness with more honey if needed.",
            "Pour into tall glasses.",
            "Garnish with chopped pistachios and a pinch of cardamom."
        ],
        nutrition: {
            calories: 195,
            protein: "7g",
            carbs: "35g",
            fat: "4g",
            fiber: "2g"
        }
    },

    // === DESSERTS (3) ===
    {
        id: 16,
        name: "Chia Seed Pudding",
        category: "desserts",
        image: "images/recipes/chia-pudding.jpg",
        emoji: "\ud83c\udf68",
        prepTime: "5 min",
        cookTime: "0 min",
        servings: 2,
        calories: 210,
        difficulty: "Easy",
        description: "A creamy overnight chia pudding with coconut milk, vanilla, and fresh fruit — dessert without the guilt.",
        ingredients: [
            "1/4 cup chia seeds",
            "1 cup coconut milk",
            "1 tbsp maple syrup",
            "1/2 tsp vanilla extract",
            "Fresh berries for topping",
            "Shredded coconut for garnish",
            "Sliced almonds"
        ],
        steps: [
            "In a jar or bowl, mix chia seeds, coconut milk, maple syrup, and vanilla extract.",
            "Stir well to prevent clumps, then stir again after 5 minutes.",
            "Cover and refrigerate for at least 4 hours or overnight.",
            "When ready to serve, stir the pudding and divide into glasses.",
            "Top with fresh berries, shredded coconut, and sliced almonds."
        ],
        nutrition: {
            calories: 210,
            protein: "6g",
            carbs: "18g",
            fat: "14g",
            fiber: "10g"
        }
    },
    {
        id: 17,
        name: "Banana Oat Cookies",
        category: "desserts",
        image: "images/recipes/banana-cookies.jpg",
        emoji: "\ud83c\udf6a",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: 12,
        calories: 85,
        difficulty: "Easy",
        description: "Two-ingredient base cookies made with ripe bananas and oats — naturally sweet and perfectly chewy.",
        ingredients: [
            "2 ripe bananas, mashed",
            "1 cup rolled oats",
            "1/4 cup dark chocolate chips",
            "2 tbsp chopped walnuts",
            "1/2 tsp cinnamon",
            "1 tsp vanilla extract",
            "Pinch of salt"
        ],
        steps: [
            "Preheat oven to 180°C (350°F). Line a baking sheet with parchment paper.",
            "Mash the bananas in a bowl until smooth.",
            "Mix in oats, chocolate chips, walnuts, cinnamon, vanilla, and salt.",
            "Drop spoonfuls onto the baking sheet, spacing them 2 inches apart. Flatten slightly.",
            "Bake for 12-15 minutes until golden. Cool on the tray for 5 minutes before serving."
        ],
        nutrition: {
            calories: 85,
            protein: "2g",
            carbs: "14g",
            fat: "3g",
            fiber: "2g"
        }
    },
    {
        id: 18,
        name: "Dark Chocolate Avocado Mousse",
        category: "desserts",
        image: "images/recipes/choco-mousse.jpg",
        emoji: "\ud83c\udf6b",
        prepTime: "10 min",
        cookTime: "0 min",
        servings: 4,
        calories: 175,
        difficulty: "Easy",
        description: "A rich, velvety chocolate mousse made with ripe avocado — all the indulgence with healthy fats.",
        ingredients: [
            "2 ripe avocados",
            "1/4 cup cocoa powder",
            "1/4 cup maple syrup",
            "1/4 cup almond milk",
            "1 tsp vanilla extract",
            "Pinch of sea salt",
            "Fresh raspberries and mint for garnish"
        ],
        steps: [
            "Cut avocados in half, remove pit, and scoop the flesh into a food processor.",
            "Add cocoa powder, maple syrup, almond milk, vanilla, and sea salt.",
            "Blend until completely smooth and creamy, scraping down the sides as needed.",
            "Taste and adjust sweetness with more maple syrup if desired.",
            "Divide into serving cups, chill for 30 minutes, and garnish with raspberries and mint."
        ],
        nutrition: {
            calories: 175,
            protein: "3g",
            carbs: "18g",
            fat: "12g",
            fiber: "6g"
        }
    }
];
