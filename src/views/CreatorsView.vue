<template>
  <section class="container py-4">
    <h2 class="mb-3">FoodTok Creators to Follow</h2>
    <p class="text-muted mb-4">
      A few sample creators that represent different cooking styles across TikTok.
    </p>

    <div class="row g-3">
      <article
        v-for="creator in creators"
        :key="creator.id"
        class="col-md-4"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ creator.name }}</h5>
            <p class="card-subtitle mb-1 text-muted">
              {{ creator.handle }} · {{ creator.niche }}
            </p>
            <p class="card-text flex-grow-1">
              {{ creator.vibe }}
            </p>
            <a
              :href="creator.url"
              class="btn btn-sm btn-outline-primary mt-auto"
              target="_blank"
              rel="noopener"
            >
              View profile
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const creators = [
  {
    id: 1,
    name: 'Lena Nguyen',
    handle: '@lenacooksfast',
    niche: '15-minute meals',
    vibe:
      'Quick, realistic weeknight meals using pantry staples and simple techniques.',
    url: 'https://www.tiktok.com/'
  },
  {
    id: 2,
    name: 'Marco Rossi',
    handle: '@marcobakes',
    niche: 'Baking & desserts',
    vibe:
      'Step-by-step baking tutorials with detailed texture close-ups.',
    url: 'https://www.tiktok.com/'
  },
  {
    id: 3,
    name: 'Jules Carter',
    handle: '@brokeandhungry',
    niche: 'Budget cooking',
    vibe:
      'Grocery hauls, cost breakdowns, and cheap meal ideas for students.',
    url: 'https://www.tiktok.com/'
  }
]
</script>
