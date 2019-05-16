<template>
  <div id="app-header">

    <!-- Nav Bar Stuff -->
    <nav class="navbar is-light is-transparent" role="navigation" aria-label="main-nav">
      <div class="navbar-start">
        <div class="navbar-item">
          <h4 class="subtitle is-4">ashankv</h4>
        </div>
      </div>
    </nav>

    <!-- Hero Stuff -->
    <section class="hero is-info is-small">
        <div class="hero-body">

          <div class="level">
            <div class="level-item">
              <figure class="image is-128x128">
                <img class="is-rounded" :src="image" />
              </figure>
            </div>
          </div>

          <div class="container has-text-centered">
              <h1 class="title has-text-weight-light">Hi, my name is <b>Ashank Verma</b>.</h1>
              <h2 class="subtitle">I'm a <i>software engineer</i>, <i>tech enthusiast</i>, and an <i>undergraduate student</i> <br>looking to diversify my skill set.</br></h2>
          </div>

        </div>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "src/assets/photos/ashank.jpg"
    }
  }
}
</script>
