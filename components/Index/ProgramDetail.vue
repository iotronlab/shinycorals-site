<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="(Program, i) in Programs" :key="i" cols="12" lg="4">
        <v-timeline dense clipped>
          <v-timeline-item fill-dot class="mb-4" color="info" large>
            <template v-slot:icon>
              <v-avatar>
                <v-img :src="Program.img"></v-img>
              </v-avatar>
            </template>

            <v-row justify="space-between">
              <v-col cols="12">
                <h2>{{ Program.header }}</h2>
                <h3>{{ Program.subtitle }}</h3>
                <p>{{ Program.subheader }}</p>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-row justify="space-between">
            <v-col v-for="(data, i) in Program.sub" :key="i" cols="12">
              <v-timeline-item
                class="mb-4"
                color="info"
                icon-color="secondary"
                small
              >
                {{ data.p }}
              </v-timeline-item>
            </v-col>
          </v-row>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      Programs: [
        {
          header: 'PLAY GROUP',
          subtitle: '1 year 6 months to 2 years 5 months',
          subheader:
            'In PG, children will learn some basic aspects that will help them to grow. Everything will be taught both digitally and physically and will eventually make them ready to transcend to Nursery class. The curriculum includes',
          img: require('@/assets/img/baby-boy.png'),
          sub: [
            { p: ' motor and cognitive developments.' },
            { p: 'basic concept of language and mathematics.' },
            { p: 'concept of society and surroundings.' },
            { p: ' peer interaction.' },
            { p: 'communication skills.' },
          ],
        },
        {
          header: 'NURSERY',
          subtitle: '2 years 6 months to 3 years 5 months',
          subheader:
            'Nursery is very important because from this class many children will go directly to high schools. So, the curriculum is set as per the requirement of those children. In Nursery, children will be skilled in',
          img: require('@/assets/img/baby.png'),
          sub: [
            { p: 'language and mathematics.' },
            { p: 'more expressive communication skills.' },
            { p: 'concept of society and surroundings.' },
            {
              p: 'more stretch on motor and cognitive skills with finding solution of problems',
            },
          ],
        },
        {
          header: 'KINDERGARTEN',
          subtitle: '3 years 6 months to 4 years 5 months',
          subheader:
            'Phonics will be taught at this age. In Kindergarten, children will be ready for',
          img: require('@/assets/img/girlf.png'),
          sub: [
            { p: 'basic high school mathematics and language.' },
            { p: 'talking specifically in public places.' },
            { p: 'improving their motor skills.' },
            { p: 'learning qualities like social involvements.' },
            { p: 'extended concept of society and surroundings.' },
          ],
        },
      ],
    }
  },
}
</script>

