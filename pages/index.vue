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
    </v-row>

    <v-container>
      <About />
    </v-container>

    <section id="upper-classroom" class="upper-classroom text-center pa-8">
      <v-row no-gutters>
        <v-col cols="12" lg="8">
          <h1 class="warning--text text-h5">
            "Early childhood education is a very important aspect of a child’s
            life. Human brain is always receptive
            <span><strong>no matter how it learns</strong></span> ."
          </h1>
          <p>Sampa Bhowmick ~ Founder.</p>
        </v-col>
        <v-col cols="12" lg="4">
          <v-btn color="lightgray">Find Out More</v-btn>
        </v-col>
      </v-row>
    </section>
    <v-divider></v-divider>

    <v-container class="mt-10 mb-8" id="ClassroomProgrammes">
      <h1 class="text-h4 text-center">Classroom Programmes</h1>
      <p class="lightgray--text text-center">
        Designed to develope a child's seven areas of learning.
      </p>

      <v-card rounded="lg" color="primary">
        <ProgramDetail />
      </v-card>
    </v-container>

    <v-container class="mb-10">
      <Review />
    </v-container>
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


<!--<style scoped>
.upper-classroom {
  border-top: 2px solid #f1f1f1;
  margin-top: 7%;
  margin-bottom: 7%;
}
</style>
-->
