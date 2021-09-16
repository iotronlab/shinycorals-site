<template>
  <v-container fluid class="pa-0">
    <v-sheet style="margin-top: -7rem" width="100%" color="transparent">
      <v-img
        :lazy-src="require('@/assets/img/loader.jpg')"
        :src="require('@/assets/img/loader.jpg')"
        max-height="800"
      ></v-img>
    </v-sheet>

    <IndexAbout />

    <v-row no-gutters align="center" justify="center" class="text-center pa-4">
      <v-col cols="12" lg="7">
        <h1 class="warning--text text-h5">
          "Early childhood education is a very important aspect of a child’s
          life. Human brain is always receptive
          <span><strong>no matter how it learns</strong></span> ."
        </h1>
        <p>Sampa Bhowmick - Founder.</p>
      </v-col>
      <v-col cols="12" lg="3">
        <v-btn color="accent">Find Out More</v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-container id="ClassroomProgrammes">
      <h1 class="text-h4 text-center">Classroom Programmes</h1>
      <p class="text-center">
        Designed to develope a child's seven areas of learning.
      </p>

      <v-card rounded="lg" color="primary" elevation="10">
        <IndexProgramDetail />
      </v-card>
    </v-container>

    <section class="pa-5">
      <IndexReview />
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
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

