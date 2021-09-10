<template>
  <v-footer color="primary">
    <v-container fluid>
      <v-row justify="center">
        <v-col col="12" lg="6">
          <v-row justify="center">
            <v-col col="12" lg="2" justify="center">
              <nuxt-link :to="{ name: 'index' }">
                <v-img
                  :src="require('@/assets/img/shiny_logo.png')"
                  :max-width="$vuetify.breakpoint.lgAndUp ? 45 : 35"
                ></v-img> </nuxt-link
            ></v-col>
            <v-col col="12" lg="10" justify="center">
              <h1 class="text-h6">Shiny Corals Pre-School</h1>
              <h1 class="text-h5">GET IN TOUCH</h1>
              <!-- <h1 class="text-h6">Shiny Corals PreSchool</h1> -->
              <p>
                West Bankim Pally, MADHYAMGRAM - 700129.<br />contact@shinycorals.com
              </p>

              <p>QUESTIONS? <br />CALL:9903067468</p>
              <p>
                <v-btn
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Open in Google Maps</v-btn
                >
              </p></v-col
            >
          </v-row>
        </v-col>

        <v-col col="12" lg="6">
          <v-list-item
            v-for="item in navLinks"
            :key="item.title"
            :to="item.to"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title" class="font-weight-bold" />
            </v-list-item-content>
          </v-list-item>

          <v-row no-gutters justify="space-around">
            <p class="overline text-h5 text--disabled">GET SOCIAL</p>
            <v-btn
              icon
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener"
              :aria-label="social.name"
              ><v-icon v-html="social.icon"></v-icon
            ></v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col class="text-center grey--text" cols="12" lg="12">
          <span>&copy;{{ new Date().getFullYear() }}</span> —
          <strong>All rights reserved.</strong>
        </v-col>
        <v-col cols="12" lg="12" class="text-center" justify="space-around">
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>


<script>
export default {
  props: {
    navLinks: {
      type: Array,
      required: true,
    },
    socialLinks: {
      type: Array,
      required: true,
    },
  },
}
</script>

