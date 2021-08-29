<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-sheet class="mt-n16" width="100%" color="transparent">
        <v-img
          :lazy-src="require('@/assets/img/loader.jpg')"
          :src="require('@/assets/img/loader.jpg')"
          eager
          max-height="850"
        ></v-img>
      </v-sheet>
      <v-container fluid :class="{ content: $vuetify.breakpoint.lgAndUp }">
        <v-row justify="center" align="center">
          <v-btn
            class="button-right ma-1 font-weight-bold"
            dark
            :to="{ path: '/', hash: 'services' }"
            @click.native="scrollTo('#services')"
            >Learn More</v-btn
          >
        </v-row>
      </v-container>
    </v-row>

    <section>
      <about />
    </section>

    <section id="upper-classroom" class="pa-8 text-center">
      <v-row>
        <v-col cols="12" sm="6" md="8">
          <h1 class="text-h5">
            "Early childhood education is a very important aspect of a child’s
            life. Human brain is always receptive
            <span><strong>no matter how it learns</strong></span> ."
          </h1>
          <p>Sampa Bhowmick ~ Founder.</p>
        </v-col>
        <v-col cols="6" md="4">
          <v-btn color="success" fab x-large dark>Find</v-btn>
        </v-col>
      </v-row>
    </section>

    <section class="mt-4 deep-purple lighten-5" id="Classroom-program">
      <h1 class="text-h3 text-center ma-4">Classroom Programmes</h1>
      <p class="text--disabled text-center ma-4">
        Designed to develope a child's seven areas of learning.
      </p>

      <section class="deep-orange lighten-4">
        <program-detail />
      </section>
    </section>
  </v-container>
</template>

<script>
import { mdiCheckDecagram } from '@mdi/js'
import ProgramDetail from '~/components/ProgramDetail.vue'
import About from '~/components/About.vue'

export default {
  components: { ProgramDetail, About },
  data() {
    return {
      icons: {
        check: mdiCheckDecagram,
      },
    }
  },
  mounted() {
    if (this.$route.hash) {
      window.onNuxtReady(() => {
        let hash = this.$route.hash
        this.$nextTick(function () {
          setTimeout(() => this.scrollTo(hash), 500)
        })
      })
    }
  },
  methods: {
    scrollTo(hash) {
      this.$nextTick(function () {
        const el = document.querySelector(hash)
        if (el) {
          setTimeout(() => {
            if ('scrollBehavior' in document.documentElement.style) {
              return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
            } else {
              return window.scrollTo(0, el.offsetTop)
            }
          }, 500)
        }
      })
    },
  },
}
</script>
<style scoped>
.content {
  z-index: 2;
  position: absolute;
}
</style>
<style>
.button-right {
  border-radius: 15px 5px 15px 5px !important;
  background-color: #f44336 !important;
  background-image: linear-gradient(
    180deg,
    #f44336 70%,
    #b02e0c 95%
  ) !important;
  box-shadow: 0 2px 4px 0 #f44336 !important;
}
</style>
