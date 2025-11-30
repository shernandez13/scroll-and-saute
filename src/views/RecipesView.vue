<template>
  <section class="container py-4">
    <h2 class="mb-3">TikTok Recipe Recommendations</h2>
    <p class="text-muted mb-4">
      These are example recipes that blew up on “FoodTok”. You can replace the links
      with real videos you like later if you want.
    </p>

    <div class="row g-3">
      <article
        v-for="recipe in recipes"
        :key="recipe.id"
        class="col-md-4"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ recipe.title }}</h5>
            <p class="card-subtitle mb-2 text-muted">
              by {{ recipe.creator }} · {{ recipe.platform }}
            </p>
            <p class="card-text flex-grow-1">
              {{ recipe.description }}
            </p>
            <div class="mb-2">
              <span class="badge bg-info me-2">{{ recipe.difficulty }}</span>
              <span class="badge bg-secondary">{{ recipe.time }}</span>
            </div>
            <a
              :href="recipe.url"
              class="btn btn-sm btn-primary mt-auto"
              target="_blank"
              rel="noopener"
            >
              Watch on TikTok
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const recipes = [
  {
    id: 1,
    title: 'Baked Feta Pasta',
    creator: '@cheesyweeknights',
    platform: 'TikTok',
    description:
      'Sheet-pan cherry tomatoes and feta baked into a creamy sauce, tossed with pasta.',
    difficulty: 'Easy',
    time: '30 min',
    url: 'https://www.tiktok.com/'
  },
  {
    id: 2,
    title: 'Crispy Rice Salmon Bowls',
    creator: '@salmonSundays',
    platform: 'TikTok',
    description:
      'Crispy rice squares topped with spicy salmon, avocado, and sriracha mayo.',
    difficulty: 'Medium',
    time: '40 min',
    url: 'https://www.tiktok.com/'
  },
  {
    id: 3,
    title: '3-Ingredient Oreo Mug Cake',
    creator: '@sweettoothstudio',
    platform: 'TikTok',
    description:
      'Microwave-only dessert using Oreos, milk, and baking powder — classic late-night snack.',
    difficulty: 'Super easy',
    time: '5 min',
    url: 'https://www.tiktok.com/'
  }
]
</script>
