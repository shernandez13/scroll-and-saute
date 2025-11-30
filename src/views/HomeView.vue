<template>
  <section class="container py-5">
    <div class="text-center mb-5">
      <h1 class="display-5 mb-3">Scroll &amp; Sauté</h1>
      <p class="lead">
        Social media isn’t just for memes — it’s one of the easiest ways to discover
        new recipes, cooking hacks, and food creators that actually match your vibe.
      </p>
      <div class="d-flex justify-content-center gap-3 mt-3 flex-wrap">
        <router-link to="/recipes" class="btn btn-primary btn-lg">
          Explore TikTok Recipes
        </router-link>
        <router-link to="/creators" class="btn btn-outline-light btn-lg">
          Meet the Creators
        </router-link>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Fast &amp; Visual</h5>
            <p class="card-text">
              Short videos show every step in seconds, so you can see texture, timing,
              and techniques instead of guessing from a wall of text recipe.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Real Feedback</h5>
            <p class="card-text">
              Comments, stitches, and duets make it easy to see what worked, what failed,
              and how people tweak recipes to fit their own kitchens or budgets.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Endless Inspiration</h5>
            <p class="card-text">
              Your algorithm slowly learns if you’re more “15-minute college dinner”
              or “all-day baking project” and serves recipes that match that energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
