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
    name: 'Lisa Thao',
    handle: '@withngocthao',
    niche: 'Rice cooker meals',
    vibe:
      'Quick, realistic weeknight meals using pantry staples and a rice cooker.',
    url: 'https://www.tiktok.com/@withngocthao?is_from_webapp=1&sender_device=pc'
  },
  {
    id: 2,
    name: 'Broma Bakery',
    handle: '@bromabakery',
    niche: 'Baking & desserts',
    vibe:
      'Step-by-step baking tutorials with detailed texture close-ups.',
    url: 'https://www.tiktok.com/@bromabakery?is_from_webapp=1&sender_device=pc'
  },
  {
    id: 3,
    name: 'Kiki Rough',
    handle: '@kikirough',
    niche: 'Budget cooking',
    vibe:
      'Grocery hauls, cost breakdowns, and cheap meal ideas for students.',
    url: 'https://www.tiktok.com/@kikirough?is_from_webapp=1&sender_device=pc'
  },
  {
    id: 4,
    name: 'Kristina Cho',
    handle: '@eatchofood',
    niche: 'Asian comfort food',
    vibe:
      'Cozy Chinese- and Asian-inspired comfort recipes that are easy to make at home.',
    url: 'https://www.tiktok.com/@eatchofood?is_from_webapp=1&sender_device=pc'
  },
  {
    id: 5,
    name: 'Cherie Brooks',
    handle: '@thrivingonplants',
    niche: 'Potatoes & comfort food',
    vibe:
      'Michelin-trained chef known for creative potato dishes and comforting mains.',
    url: 'https://www.tiktok.com/@thrivingonplants?is_from_webapp=1&sender_device=pc'
  },
  {
    id: 6,
    name: 'Alethea Hemming',
    handle: '@aletheatodaro',
    niche: 'Vegan & wellness',
    vibe:
      'Plant-based recipes, meal ideas, and wellness-focused cooking content.',
    url: 'https://www.tiktok.com/@aletheatodaro?is_from_webapp=1&sender_device=pc'
  }
]

</script>
