<template>
  <header>
    <Navbar1 />
  </header>
  <main>
    <router-view />
  </main>
   <footer class="bg-dark text-light text-uppercase container-fluid">
    <div class="row">

      <div class="col-6">
        
        <div>
          Hitch Trailer Now
        </div>
        <div>
          FACEBOOK
          <i class="mdi mdi-facebook"></i>
        </div>
        <div>
          TWITTER
          <i class="mdi mdi-twitter"></i>
        </div>
        <div>
          instagram
          <i class="mdi mdi-instagram"></i>
        </div>
      </div>
      <div class="col-6">
        <div>
          terms
        </div>
        <div>
          privacy
        </div>
        <div>
          site map
        </div>
        <div>
          company / support
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Navbar1 from './components/Navbar1.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Navbar1 }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";



footer {
  display: grid;
  // place-content: center;
  // height: 32px;
}
</style>
