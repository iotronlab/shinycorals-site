<template>
<v-container>
      <v-row >
      <v-col
         v-for="(Programs,i) in Program"
        :key="i"
        cols="12"
        sm="4"
      >
      <v-timeline
      dense
      clipped

    >
      <v-timeline-item
        fill-dot
        class="mb-4"
        color="red"
        large
        >

        <template v-slot:icon>
          <span>Image</span>
        </template>

         <v-row justify="space-between">
          <v-col cols="12">
           <h2>{{Programs.header}}</h2>
           <p>{{Programs.subheader}}</p>

          </v-col>
        </v-row>

      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="red"
        icon-color="grey lighten-2"
        small
      >
        <v-row justify="space-between">
          <v-col cols="12">
          {{Programs.p1}}
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="red"
        small
      >
        <v-row justify="space-between">
          <v-col cols="12">
          {{Programs.p2}}
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="red"
        small
      >
        <v-row justify="space-between">
          <v-col cols="12">
           {{Programs.p3}}
          </v-col>

        </v-row>
      </v-timeline-item>

      <v-timeline-item
        color="red"
        small
      >
        <v-row justify="space-between">
          <v-col cols="12">
           {{Programs.p4}}
          </v-col>
        </v-row>
      </v-timeline-item>

       <v-timeline-item
        color="red"
        small
      >
        <v-row justify="space-between">
          <v-col cols="12">
            {{Programs.p5}}
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
   </v-col>
    </v-row>
  </v-container>
</template>


<script>

export default ({
  data() {
    return{
        Program:[
          {
            header:'PLAY GROUP: 1 year 6 months to 2 years 5 months',
            subheader:'In PG, children will learn some basic aspects that will help them to grow. Everything will be taught both digitally and physically and will eventually make them ready to transcend to Nursery class. The curriculum includes',
            p1:' motor and cognitive developments.',
            p2:'basic concept of language and mathematics.',
            p3:'concept of society and surroundings.',
            p4:' peer interaction.',
            p5:'communication skills.',
          },
          {
            header:'NURSERY: 2 years 6 months to 3 years 5 months',
            subheader:'Nursery is very important because from this class many children will go directly to high schools. So, the curriculum is set as per the requirement of those children. In Nursery, children will be skilled in',
            p1:'language and mathematics.',
            p2:'more expressive communication skills.',
            p3:'concept of society and surroundings.',
            p4:'more stretch on motor and cognitive skills with finding solution of problems',
          },
          {
            header:'KINDERGARTEN: 3 years 6 months to 4 years 5 months',
            subheader:'Phonics will be taught at this age. In Kindergarten, children will be ready for',
            p1:'basic high school mathematics and language.',
            p2:'talking specifically in public places.',
            p3:'improving their motor skills.',
            p4:'learning qualities like social involvements.',
            p5:'extended concept of society and surroundings.',
          },
        ]
    }
  },
})
</script>
