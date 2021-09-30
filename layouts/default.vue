<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      class="card-overlap ma-2"
    >
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
          src="/icon.png"
          width="55"
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
          <v-img src="/icon.png" width="100" class="mr-6"></v-img>
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
    <v-btn
      fab
      fixed
      bottom
      right
      color="accent"
      href="https://wa.me/919903067468"
      target="_blank"
      rel="noreferrer"
    >
      <v-icon x-large>{{ icons.whatsapp }} </v-icon>
    </v-btn>
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
          sublinks: [
            {
              title: 'FAQ',
              to: '/about-us#faq',
            },
            {
              title: 'FAQ',
              to: '/about-us#faq',
            },
          ],
        },
        {
          title: 'CLASSROOM PROGRAMMES',
          to: '/#classroom-programmes',
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
          url: 'https://wa.me/919903067468',
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
  },
  myFunction(elmnt, link) {
    elmnt.windows.href = link
  },
}
</script>
<style scoped>
.nav-transparent {
  transition: opacity 0.2s ease-in-out;
  background-color: transparent !important;
}
</style>
