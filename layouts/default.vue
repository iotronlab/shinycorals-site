<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app temporary>
      <LazyNavDrawer :socialLinks="socialLinks" :navLinks="navLinks" />
    </v-navigation-drawer>
    <v-app-bar id="nav" fixed app flat class="nav-transparent" extended>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        aria-label="nav-button"
      >
        <v-icon slot="default">{{ icons.menu }}</v-icon></v-app-bar-nav-icon
      >
      <nuxt-link :to="{ name: 'index' }">
        <v-img
          v-if="$vuetify.breakpoint.mdAndDown"
          :src="require('@/assets/img/shiny_logo.png')"
          width="50"
        ></v-img>
      </nuxt-link>
      <v-row
        no-gutters
        justify="center"
        align="center"
        class="fill-height"
        v-if="!$vuetify.breakpoint.mdAndDown"
      >
        <nuxt-link :to="{ name: 'index' }">
          <v-img
            :src="require('@/assets/img/shiny_logo.png')"
            width="100"
            class="mr-6"
          ></v-img>
        </nuxt-link>
        <v-btn
          v-for="(item, i) in navLinks"
          :key="i"
          color="accent"
          text
          class="mx-2"
          router
          exact
          :to="item.to"
          ><strong>{{ item.title }}</strong></v-btn
        >
      </v-row>
      <v-btn
        color="accent"
        class="ml-auto font-weight-bold"
        rounded
        href="tel:+919903067468 "
        target="_blank"
        rel="noreferrer"
        ><v-icon left>{{ icons.call }}</v-icon
        >Call</v-btn
      >
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <!--
   <section class="mt-5">
      <Social/>
    </section> -->

    <LazyFooter
      :socialLinks="socialLinks"
      :navLinks="navLinks"
      :icons="icons"
    />
  </v-app>
</template>

<script>
import {
  mdiMenu,
  mdiPhone,
  mdiEmail,
  mdiFacebook,
  mdiWhatsapp,
  mdiGoogle,
} from '@mdi/js'

export default {
  data() {
    return {
      drawer: false,
      icons: {
        menu: mdiMenu,
        call: mdiPhone,
        email: mdiEmail,
        whatsapp: mdiWhatsapp,
      },
      navLinks: [
        // {
        //   title: 'Home',
        //   to: '/',
        // },
        {
          title: 'About US',
          to: '/about-us',
        },
        {
          title: 'CLASSROOM PROGRAMMES',
          to: '/#ClassroomProgrammes',
        },
        {
          title: 'Gallery',
          to: '/gallery',
        },

        {
          title: 'Contact US',
          to: '/contact-us',
        },
      ],
      socialLinks: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/',
          icon: mdiFacebook,
        },
        {
          name: 'Whatsapp',
          url: 'https://www.Whatsapp.com/',
          icon: mdiWhatsapp,
        },

        { name: 'Google', url: 'https://www.google.com/', icon: mdiGoogle },
      ],
    }
  },
  mounted() {
    let myNav = document.getElementById('nav')
    window.onscroll = function () {
      'use strict'
      if (document.body.scrollTop >= 200) {
        myNav.classList.add('nav-transparent')
      } else {
        myNav.classList.remove('nav-transparent')
      }
    }
    // this.tawk()
    console.log(this.$icon)
  },
}
</script>
<style scoped>
.nav-transparent {
  transition: opacity 0.2s ease-in-out;
  background-color: transparent !important;
}
</style>
