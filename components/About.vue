<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12">
          <h1 class="text-h3 text-center pa-2"><strong>Corals - a revolution in PreSchool education.</strong></h1>
          <p class="text-h5 text-center ">One of the very best for your child, nurturing curiosity with technology!</p>
      </v-col>
      <v-col cols="4">
          <h1>Why Choose US?</h1>
          <p><span><strong>Education through play.</strong></span>Think of us as a playschool with a well structured curriculum full of activities that teaches children in a innovative and enjoyable manner. Our goal is to develope a child's overall skill set to make them ready for our society.</p>
           <v-btn>Discover More</v-btn>
      </v-col>
      <v-col cols="4">
      <v-row
      v-for="n in 1"
      :key="n"
      no-gutters
    >
      <v-col
        v-for="(Detail , i) in Details"
        :key="i"
        class="pa-6"
      >
      <h1>{{Detail.header}}</h1>
      <p>{{ Detail.id }}</p>

      </v-col>

    </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

export default ({
  data() {
    return{
      Details:[
        {
          header:'Safe and Secure environment',
          id:'At Shiny Corals PreSchool, we think of childrens safety above all. We have CCTV installed in our premises and our teachers are trained to handle medical emergencies. We also have safety kits like fire extinguishers and first aids.'
        },
        {
          header:'Smart Digital Classrooms',
          id:'Our classrooms are fitted with digital interactive boards, which introduces the children to the world of computers and technology. As high schools have already adopted smart classrooms, we intend to give the kids an early advantage.'
        },
        {
          header:'Concept of PlaySchool',
          id:'Our Curriculum is expertly designed to develope a child 7 areas of learning through yoga, craft, educational toys, field trips and a library.'
        },
        {
          header:'Student-Parent-Teacher',
          id:'For the overall developement of children, our staffs are always helpful via conferences and monthly meetings throughout the school year.'
        },

      ]

    }
  },
})
</script>
