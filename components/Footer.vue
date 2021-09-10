<template>
  <v-footer color="primary">
    <v-container fluid>
      <nuxt-link :to="{ name: 'index' }">
        <v-img
          :src="require('@/assets/img/shiny_logo.png')"
          :max-width="$vuetify.breakpoint.lgAndUp ? 120 : 100"
          class="mx-auto"
        ></v-img>
      </nuxt-link>
      <v-row justify="center">
        <v-col col="12" lg="4" class="text-md-right">
          <h1 class="text-h6 mt-2">Shiny Corals Pre-School</h1>

          <!-- <h1 class="text-h6">Shiny Corals PreSchool</h1> -->
          <p>
            West Bankim Pally, MADHYAMGRAM - 700129.<br />contact@shinycorals.com
          </p>

          <p>QUESTIONS? <br />CALL:9903067468</p>

          <v-row no-gutters justify="end" class="mb-2">
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

        <v-col col="12" lg="4">
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
        </v-col>
      </v-row>

      <v-row no-gutters justify="center">
        <span>&copy;{{ new Date().getFullYear() }}</span> —
        <strong>All rights reserved.</strong>
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

