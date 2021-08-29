<template>
  <v-list nav dense>
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
    <v-subheader class="overline font-weight-bold">Socials</v-subheader>

    <v-list-item
      ><v-btn
        icon
        v-for="social in socialLinks"
        :key="social.name"
        :href="social.url"
        target="_blank"
        :aria-label="social.name"
        ><v-icon v-html="social.icon"></v-icon></v-btn
    ></v-list-item>
    <v-subheader class="overline font-weight-bold">find us on</v-subheader>
  </v-list>
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

