<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      color="rgba(0, 0, 0, 0)"
    >
      <LazyNavDrawer
        :socialLinks="socialLinks"
        :navLinks="navLinks"
      />
    </v-navigation-drawer>
    <v-app-bar id="nav" fixed app flat class="nav-transparent">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        aria-label="nav-button"
      >
        <v-icon slot="default" color="primary">{{
          icons.menu
        }}</v-icon></v-app-bar-nav-icon
      >
      <v-row
        no-gutters
        justify="center"
        align="center"
        v-if="!$vuetify.breakpoint.mdAndDown"
      >
        <v-btn
          v-for="item in navLinks"
          :key="item.title"
          color="purple"
          class="mx-2"
          router
          exact
          :to="item.to"
          ><strong>{{ item.title }}</strong></v-btn
        >
      </v-row>
      <v-btn
        color="secondary"
        class="ml-auto font-weight-bold"
        rounded
        href="tel:+919903067468 "
        target="_blank"
        ><v-icon left>{{ icons.call }}</v-icon> Call</v-btn
      >
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>

     <LazyFooter
      :socialLinks="socialLinks"
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
        {
          title: 'About US',
          to: '/#about-us',
        },
        {
          title: 'CLASSROOM PROGRAMMES',
          to: '/#CLASSROOM PROGRAMMES',
        },
        {
          title: 'Gallery',
          to: '/gallery',
        },

        {
          title:'Contact US',
          to: '/contact',
        },

        {
          title: 'Notices',
          to: '/notices',
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
    console.log(this.$icon)
  },
}
</script>
<style scoped>
.nav-transparent {
  transition: opacity 0.9s ease-in-out;
  background-color: transparent !important;
}
</style>
