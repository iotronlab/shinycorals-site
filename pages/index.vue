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

    <section>
      <About />
    </section>

    <section id="upper-classroom" class="upper-classroom pa-8 text-center">
      <v-row class="mt-15">
        <v-col cols="12" sm="6" md="8">
          <h1 class="text-h5 red--text">
            "Early childhood education is a very important aspect of a child’s
            life. Human brain is always receptive
            <span><strong>no matter how it learns</strong></span> ."
          </h1>
          <p>Sampa Bhowmick ~ Founder.</p>
        </v-col>
        <v-col cols="6" md="4">
          <v-btn class="button_More pink" fab x-large dark>Find Out<br>More</v-btn>
        </v-col>
      </v-row>
    </section>

    <section class="Classroom mt-20 mb-6 pt-4"  id="ClassroomProgrammes">
      <h1 class="text-h3 text-center ma-4">Classroom Programmes</h1>
      <p class="text--disabled text-center ma-4">
        Designed to develope a child's seven areas of learning.
      </p>

      <section class="Programdetail">
        <ProgramDetail/>
      </section>
    </section>

    <v-container class="ma-15">
      <Review/>
    </v-container>


  </v-container>
</template>

<script>
import { mdiCheckDecagram } from '@mdi/js'

export default {
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
.Classroom
{
   background-image: linear-gradient(to right,#d9a7c7, #fffcdc);

}
.Programdetail
{
   background-image: linear-gradient(to right,#ffc3a0, #ffc3a0);
}

.button_More
{
    width:30%;
    height:110%;
}

.upper-classroom
{
  border-top: 2px solid #f1f1f1;
  margin-top:7%;
  margin-bottom:7%;
}

</style>
