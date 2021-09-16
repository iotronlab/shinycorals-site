<template>
  <v-row justify="center" align="center" class="mt-15">
    <v-card
      v-for="(social, i) in socialLinks"
      :key="i"
      icon
      :color="social.color"
      :href="social.url"
      target="_blank"
      :aria-label="social.name"
      class="ml-2"
      height="150"
      width="420"
      ><v-icon x-large>{{ social.icon }}</v-icon>
      <v-card-text>{{ social.text }}</v-card-text>
    </v-card>
  </v-row>
</template>


<script>
import { mdiFacebook, mdiWhatsapp, mdiGoogle } from '@mdi/js'

export default {
  data() {
    return {
      icons: {
        facebook: mdiFacebook,
        whatsapp: mdiWhatsapp,
        google: mdiGoogle,
      },
      socialLinks: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
          icon: mdiFacebook,
          color: 'blue',
          text: 'LIKE OUR PAGE',
        },
        {
          name: 'Whatsapp',
          url: 'https://wa.me/9903067468',
          icon: mdiWhatsapp,
          color: 'green',
          text: 'CONTACT US',
        },

        {
          name: 'Google',
          url: 'https://www.google.com/',
          icon: mdiGoogle,
          color: 'red',
          text: 'CIRCLE US',
        },
      ],
    }
  },
}
</script>

