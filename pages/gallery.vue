<template>
  <v-container>
    <!-- <v-sheet class="mt-n16" color="transparent">
      <video
        autoplay
        muted
        loop
        playsinline
        class="landing-video"
        :poster="require('@/assets/image/download.png')"
      >
        <source src="@/assets/image/Gravity.mp4" type="video/mp4" />
      </video>
    </v-sheet> -->

    <v-row no-gutters>
      <v-col
        cols="12"
        sm="4"
        v-for="(image, i) in gallery"
        :key="i"
        class="pa-1"
      >
        <v-img :src="image.img" height="400" @click="openSlider(i)" />
      </v-col>
    </v-row>

    <v-dialog v-model="dialog">
      <v-btn class="mx-2" fab small color="pink" @click="dialog = false">
        <v-icon>{{ icons.cross }}</v-icon>
      </v-btn>

      <v-carousel height="500" hide-delimiter-background v-model="activeImage">
        <template v-slot:prev="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on">{{ icons.left }}</v-icon>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on">{{ icons.right }}</v-icon>
        </template>
        <v-carousel-item v-for="(slide, i) in gallery" :key="i">
          <v-row align="center" justify="center">
            <v-img :src="slide.img" contain height="500" />
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </v-container>
</template>

<script>
import { mdiClose, mdiChevronDoubleRight, mdiChevronDoubleLeft } from '@mdi/js'

export default {
  data() {
    return {
      dialog: false,

      icons: {
        cross: mdiClose,
        right: mdiChevronDoubleRight,
        left: mdiChevronDoubleLeft,
      },

      activeImage: null,
      gallery: [
        {
          img: { src: require('@/assets/image/1.jpeg') },
          // img: "https://tse2.mm.bing.net/th?id=OIP.DILJbSgRgSeFoYyERLiXtQHaDt&pid=Api&P=0&w=357&h=179"
        },
        {
          img: { src: require('@/assets/image/2.jpeg') },

          // img: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/44872/s960_IS_38272018_early_years.jpg",
        },
        {
          img: { src: require('@/assets/image/3.jpeg') },
          // img: "https://tse2.mm.bing.net/th?id=OIP.TQuqFBPwyaUh-t9bYft3XQHaEK&pid=Api&P=0&w=268&h=152",
        },
        {
          img: { src: require('@/assets/image/4.jpeg') },
          // img: "https://tse4.mm.bing.net/th?id=OIP.QFO45l5kZ-gKZFqDLF7DgwHaEK&pid=Api&P=0&w=283&h=160",
        },
        {
          img: { src: require('@/assets/image/5.jpeg') },
          // img: "https://tse3.mm.bing.net/th?id=OIP.N-VE0cuEdSEFJIGc5qpJ4gHaDv&pid=Api&P=0&w=316&h=160",
        },
        {
          img: { src: require('@/assets/image/6.jpeg') },
          // img: "https://tse4.mm.bing.net/th?id=OIP.UbyOe1XoP4YkgDFNFxsldwHaE8&pid=Api&P=0&w=251&h=168",
        },
        {
          img: { src: require('@/assets/image/7.jpeg') },
          // img: "https://tse2.mm.bing.net/th?id=OIP.HlAFnNHryHY6CTKosPMZCQHaEK&pid=Api&P=0&w=274&h=155",
        },
        {
          img: { src: require('@/assets/image/8.jpeg') },
          // img: "https://tse1.mm.bing.net/th?id=OIP.mmfi2tqK0X3fg7ZSMbrF6QHaE7&pid=Api&P=0&w=241&h=161",
        },
        {
          img: { src: require('@/assets/image/9.jpeg') },
          // img: "https://tse1.mm.bing.net/th?id=OIP._d1ZGyzpQ7XnitSeLXcOQAHaDv&pid=Api&P=0&w=324&h=164"
        },
        {
          img: { src: require('@/assets/image/10.jpeg') },
          // img: "https://tse4.mm.bing.net/th?id=OIP.YaY-19WYjMafXqQNMXsgZwHaFj&pid=Api&P=0&w=202&h=152",
        },
        {
          img: { src: require('@/assets/image/11.jpeg') },
          // img: "https://images.theconversation.com/files/56307/original/d8j7cx95-1407852237.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        },
        {
          img: { src: require('@/assets/image/12.jpeg') },
          // img: "https://tse3.mm.bing.net/th?id=OIP.dqPx77qkXI6uukFdnv2kZgHaEK&pid=Api&P=0&w=306&h=173",
        },
        {
          img: { src: require('@/assets/image/13.jpeg') },
          // omg: "https://tse2.mm.bing.net/th?id=OIP.lSTyDX2bknBwd4qRI8SHgwHaEd&pid=Api&P=0&w=263&h=159",
        },
        {
          img: { src: require('@/assets/image/14.jpeg') },
          // img: "http://c7.alamy.com/comp/FX0966/city-hall-london-uk-9-april-2016-school-children-from-british-sikh-FX0966.jpg",
        },
        {
          img: { src: require('@/assets/image/15.jpeg') },
          // img: "https://tse1.mm.bing.net/th?id=OIP.5tNQ6ELHCcd-yNpMRV6-jAHaFW&pid=Api&P=0&w=258&h=187",
        },
        {
          img: { src: require('@/assets/image/16.jpeg') },
          // img: "https://c8.alamy.com/comp/CY2CRC/teacher-takes-a-class-at-pimlico-academy-a-modern-secondary-school-CY2CRC.jpg",
        },
        {
          img: { src: require('@/assets/image/17.jpeg') },
          // img: "https://tse2.mm.bing.net/th?id=OIP.ARqon77lyIMFLXi3f08-HAHaFj&pid=Api&P=0&w=231&h=174",
        },
        {
          img: { src: require('@/assets/image/18.jpeg') },
          // img: "https://tse4.mm.bing.net/th?id=OIP.FadBIrv1jys4rIFUPYeuzAHaE8&pid=Api&P=0&w=243&h=163",
        },
      ],
    }
  },
  methods: {
    openSlider(i) {
      this.activeImage = i
      this.dialog = true
    },
  },
}
</script>

