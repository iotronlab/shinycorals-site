<template>
    <v-row justify="center" align="center">
        <v-card
            v-for="(social, i) in socialLinks"
            :key="i"
            icon
            :color="social.color"
            :href="social.url"
            target="_blank"
            :aria-label="social.name"
            col="12"
            sm="4"
            class="mr-4"
            height="200"
            width="350"
            ><v-icon x-large>{{ social.icon }}</v-icon>
            <v-card-text>{{social.text}}</v-card-text>
          </v-card>
    </v-row>
</template>


<script>
import {
  mdiFacebook,
  mdiWhatsapp,
  mdiGoogle,
} from '@mdi/js'

export default ({
  data() {
    return{
          icons:{
              facebook:mdiFacebook,
              whatsapp: mdiWhatsapp,
              google:mdiGoogle,
            },
            socialLinks: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
          icon: mdiFacebook,
          color:'blue',
          text:"LIKE OUR PAGE",

        },
        {
          name: 'Whatsapp',
          url: 'https://www.Whatsapp.com/',
          icon: mdiWhatsapp,
          color:'green',
          text:"CONTACT US",
        },

        {
          name: 'Google',
          url: 'https://www.google.com/',
          icon: mdiGoogle ,
          color:'red',
          text:"CIRCLE US",
          },

      ],

    }
  },
})
</script>
