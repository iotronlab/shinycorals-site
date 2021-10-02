<template>
  <v-footer color="primary" class="footer-image">
    <v-container fluid>
      <nuxt-link :to="{ name: 'index' }">
        <v-img
          src="/icon.png"
          :max-width="$vuetify.breakpoint.lgAndUp ? 120 : 100"
          class="mx-auto"
          alt="shiny Coral Logo"
        ></v-img>
      </nuxt-link>

      <v-row justify="center" class="my-2">
        <v-col col="12" lg="4" class="text-md-right grey--text">
          <h1 class="text-h6 mt-2">Shiny Corals Pre-School</h1>
          <p>West Bankim Pally, Madhyamgram - 700129.</p>
          <v-btn
            text
            class="caption"
            href="mailto:contact@shinycorals.com"
            target="_blank"
          >
            <v-icon class="mr-1">{{ icons.email }}</v-icon
            ><strong>Mail US</strong>
          </v-btn>
          <br />

          <v-btn text class="text-h6" href="tel:+919903067468" target="_blank">
            <v-icon>{{ icons.call }}</v-icon
            >+91-9903067468
          </v-btn>

          <v-row no-gutters class="mb-2 justify-end">
            <v-btn
              icon
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              rel="noreferrer"
              ><v-icon v-html="social.icon"></v-icon
            ></v-btn>
          </v-row>
        </v-col>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9184876688014!2d88.45731401540276!3d22.694078134218962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f1b3ced2d51%3A0x3971963ec3026cf!2sShiny%20Corals%20Preschool!5e0!3m2!1sen!2sin!4v1633108893475!5m2!1sen!2sin"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <v-col col="12" lg="4">
          <v-list-item
            class="gray--text"
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
    icons: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style>
.footer-image {
  background-image: url('@/assets/image/bg/footer.svg');
  background-size: cover;
}
</style>
