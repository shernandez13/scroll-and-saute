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
    title: 'Tteokbokki',
    creator: '@withngocthao',
    platform: 'TikTok',
    description:
      'Korean inspired dish ',
    difficulty: 'Easy',
    time: '30 min',
    url: 'https://www.tiktok.com/@withngocthao/video/7535909775540882694?is_from_webapp=1&sender_device=pc&web_id=7547527214976239117'
  },
  {
    id: 2,
    title: 'Apple Pie',
    creator: '@bromabakery',
    platform: 'TikTok',
    description:
      'thick, tender apples with that perfect structure and bite, a warm brown sugar filling flavored with cinnamon, nutmeg, and ginger, and a buttery flaky crust that stays crisp over all that goodness.',
    difficulty: 'hard',
    time: '2 hours',
    url: 'https://www.tiktok.com/@bromabakery/video/7571840803467824414?is_from_webapp=1&sender_device=pc&web_id=7547527214976239117'
  },
  {
    id: 3,
    title: 'Cheap Mozzareella Sticks',
    creator: '@kikirough',
    platform: 'TikTok',
    description:
      'Cheesy simple appetizier',
    difficulty: 'Super easy',
    time: '2 hours',
    url: 'https://www.tiktok.com/@kikirough/video/7555300404095913229?is_from_webapp=1&sender_device=pc&web_id=7547527214976239117'
  }
]
</script>
