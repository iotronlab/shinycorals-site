<template>
  <v-card class="pa-8" flat>
    <h1 class="text-h3 text-center">
      <strong class="accent--text">Shiny Corals</strong> a revolution in
      PreSchool education.
    </h1>
    <h2 class="text-center mb-10 font-weight-light">
      One of the very best for your child, nurturing curiosity with technology!
    </h2>
    <v-row no-gutters justify="center">
      <v-col cols="12" lg="3" md="6">
        <h1 class="text-h4 mb-4 text-center text-lg-left">
          Why<br />Choose<br />US?
        </h1>
        <p class="text--secondary">
          <span><strong>Education through play. </strong></span>Think of us as a
          playschool with a well structured curriculum full of activities that
          teaches children in a innovative and enjoyable manner. Our goal is to
          develope a child's overall skill set to make them ready for our
          society.
        </p>
        <v-btn class="mb-4" color="accent">Discover More</v-btn>
      </v-col>
      <v-col cols="12" lg="7">
        <v-row no-gutters>
          <v-col
            v-for="(Detail, i) in Details"
            :key="i"
            cols="12"
            lg="6"
            md="6"
            sm="6"
            class="pa-2"
          >
            <v-img :src="Detail.img" height="80" width="80"></v-img>
            <h1 class="text-h5 my-2">{{ Detail.header }}</h1>
            <h2 v-html="Detail.id" class="text--secondary text-subtitle-1"></h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      Details: [
        {
          header: 'Safe and Secure environment',
          id: "At Shiny Corals PreSchool, we think of children's safety above all. We have <b>CCTV</b> installed in our premises and our teachers are trained to handle medical emergencies. We also have safety kits like <b>fire extinguishers</b> and <b>first aids</b>.",
          img: require('@/assets/img/cctv.png'),
        },
        {
          header: 'Smart Digital Classrooms',
          id: 'Our classrooms are fitted with <b>digital interactive boards</b>, which introduces the children to the world of <b>computers</b> and <b>technology</b>. As high schools have already adopted smart classrooms, we intend to give the kids an early advantage.',
          img: require('@/assets/img/flipchart.png'),
        },
        {
          header: 'Concept of PlaySchool',
          id: "Our Curriculum is expertly designed to develope a child's 7 areas of learning through <b>yoga</b>, <b>craft</b>, <b>educational toys</b>, <b>field trips</b> and a <b>library</b>.",
          img: require('@/assets/img/meeting.png'),
        },
        {
          header: 'Student-Parent-Teacher',
          id: 'For the overall developement of children, our staffs are always helpful via <b>conferences</b> and <b>monthly meetings</b> throughout the school year.',
          img: require('@/assets/img/piano-keyboard.png'),
        },
      ],
    }
  },
}
</script>
