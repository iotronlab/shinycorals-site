<!---
<template>
 <v-row >
    <v-col
      v-for="(Review,i) in Reviews"
      :key="i"
      cols="12"
      sm="4"
    >
      <template>
        <v-avatar>
          <img src="https://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template >
        <span>{{Review.name}}</span><br> <span>{{Review.detail}}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-text>{{Review.para}}</v-card-text>
      </v-card>
      </v-col>
 </v-row>
</template>

<script>

export default ({
  data() {
    return{
        Reviews:[
          {
            name:'MRS. SHILPI GOSWAMI SAHA',
            detail:'M/o, Ashmita Saha',
            para:"Thank you for caring for my child each and every day. I’ll never forget the difference you've have made in her life. I feel extremely grateful to have you as my child’s early childhood education teacher. Thanks for your patience and for the quality care you provide each and every day. Ashmita like you so much.",
          },
           {
            name:'MS. AMRITA BANERJEE',
            detail:'M/o, Gunjavni Banerjee',
            para:"Sampa madam was the first mentor cum guide for my daughter Gunjavni. I have come across very few ladies of her acumen and skill set. She passes her positive energy not only to her students but to her teachers as well.Her management skills are awesome as she communicated with the parents, listened to their problems and addressed them meticulously.",
          },
           {
            name:'MRS. SUCHARITA GOSWAMI',
            detail:'M/o, Shraman Goswami',
            para:"I know Sampa Ma'am last few years. The first thing I noticed is her personality. My son loved to talk to her. She always smiles which had a good impact on my son's mind. I am really thankful to her. She always focused on not only student's learning but also their mental development. She has so much innovative ideas for babies to make them interest on their learning.",
          },
        ]
    }
  },
})

</script>
-->

<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="12" lg="4">
        <template>
          <v-avatar>
            <v-img
              :lazy-src="require('@/assets/img/review1.jpeg')"
              :src="require('@/assets/img/review1.jpeg')"
            ></v-img>
          </v-avatar>
        </template>
        <template>
          <span>MRS. SHILPI GOSWAMI SAHA</span><br />
          <span class="ml-15">M/o, Ashmita Saha</span>
        </template>
        <v-card class="elevation-2">
          <v-card-text
            >Thank you for caring for my child each and every day. I’ll never
            forget the difference you've have made in her life. I feel extremely
            grateful to have you as my child’s early childhood education
            teacher. Thanks for your patience and for the quality care you
            provide each and every day. Ashmita like you so much.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card class="elevation-2">
          <v-card-text
            >Thank you for caring for my child each and every day. I’ll never
            forget the difference you've have made in her life. I feel extremely
            grateful to have you as my child’s early childhood education
            teacher. Thanks for your patience and for the quality care you
            provide each and every day. Ashmita like you so much.</v-card-text
          >
        </v-card>
        <template>
          <v-avatar>
            <v-img
              :lazy-src="require('@/assets/img/review2.jpeg')"
              :src="require('@/assets/img/review2.jpeg')"
            ></v-img>
          </v-avatar>
        </template>
        <template>
          <span>MRS. SHILPI GOSWAMI SAHA</span><br />
          <span class="ml-15">M/o, Ashmita Saha</span>
        </template>
      </v-col>
      <v-col cols="12" lg="4">
        <template>
          <v-avatar>
            <v-img
              :lazy-src="require('@/assets/img/review3.jpeg')"
              :src="require('@/assets/img/review3.jpeg')"
            ></v-img>
          </v-avatar>
        </template>
        <template>
          <span>MRS. SHILPI GOSWAMI SAHA</span><br /><span class="ml-15"
            >M/o, Ashmita Saha</span
          >
        </template>
        <v-card class="elevation-2">
          <v-card-text
            >Thank you for caring for my child each and every day. I’ll never
            forget the difference you've have made in her life. I feel extremely
            grateful to have you as my child’s early childhood education
            teacher. Thanks for your patience and for the quality care you
            provide each and every day. Ashmita like you so much.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
.elevation-2 {
  background-image: linear-gradient(to bottom, #f0eeee, #f0eeee);
}
</style>
