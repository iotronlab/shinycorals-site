<template>
  <v-container fluid class="pa-0">
    <v-sheet style="margin-top: -7rem" width="100%" color="transparent">
      <v-img
        :lazy-src="require('@/assets/image/bg/landing.webp')"
        :src="require('@/assets/image/bg/landing.webp')"
        max-height="800"
        eager
      ></v-img>
    </v-sheet>

    <div class="left">
      <LazyIndexAbout />
    </div>
    <LazyIndexQuote />
    <v-divider class="my-4"></v-divider>
    <!-- <h1 class="text-h3 text-center accent--text" id="ClassroomProgrammes">
      Classroom Programmes
    </h1>
    <h2 class="text-center mb-8 font-weight-light">
      Designed to develope a child's seven areas of learning.
    </h2> -->

    <v-container class="ma-0 bg-image" fluid>
      <v-row no-gutters>
        <v-col cols="12" lg="10" class="right mx-auto">
          <LazyIndexProgramDetail
        /></v-col>
      </v-row>
    </v-container>
    <v-row no-gutters class="mb-4">
      <v-col cols="12" lg="10" class="left mx-auto"> <LazyIndexReview /></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.animateOnScroll()
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
    animateOnScroll() {
      const gsap = this.$gsap
      gsap.utils.toArray('.right').forEach((demo) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: demo,
            toggleActions: 'restart none none reverse',
            // markers: true,
            start: '-150px center',
          },
        })

        tl.from(demo, {
          y: 150,
          ease: 'Power2.easeInOut',
          duration: 1,
          opacity: 0,
        })
      })
      gsap.utils.toArray('.left').forEach((demo) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: demo,
            toggleActions: 'restart none none reverse',
            // markers: true,
            start: '-150px center',
          },
        })

        tl.from(demo, {
          x: -150,
          ease: 'Power2.easeInOut',
          duration: 1,
          opacity: 0,
        })
      })
    },
  },
}
</script>
<style scoped>
.bg-image {
  background-image: url('@/assets/image/bg/class-bg.jpg');
  background-size: cover;
}
.card-overlap {
  border-radius: 1rem !important;
  background-color: rgba(253, 242, 248, 0.8) !important;
  backdrop-filter: blur(10px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(10px) saturate(180%) !important;
}
</style>
