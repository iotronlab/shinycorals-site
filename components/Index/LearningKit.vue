<template>
  <v-container>
    <h3 class="text-body-1 text-center mb-4">
      We strongly believe that the school’s goal is to extend and develops the
      process in a spirit of cooperation among students, teachers, and parents.
      The teaching philosophy & proper educational environment can grow a child
      physically, mentally, emotionally, and socially.
    </h3>
    <v-row no-gutters>
      <v-col
        v-for="(Program, i) in Programs"
        :key="i"
        cols="12"
        lg="4"
        class="pa-1"
      >
        <v-card rounded="xl" class="card-overlap fill-height">
          <v-img
            height="250"
            :src="Program.img"
            dark
            gradient="to bottom, rgba(0,0,0,.0), rgba(0,0,0,.4)"
            class="align-end"
          >
            <h1 class="text-h6 font-weight-bold text-center">
              {{ Program.header }}
            </h1>
          </v-img>
          <div class="pa-2">
            <h2 class="text-h5 text-center accent--text">
              <strong>{{ Program.subtitle }}</strong>
            </h2>
            <v-divider class="my-1"></v-divider>
            <h3 class="text-subtitle-1 text--secondary">
              {{ Program.subheader }}
            </h3>
            <ul v-for="(data, i) in Program.sub" :key="i">
              {{
                data.p
              }}
            </ul>
          </div>
        </v-card>
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
          header: 'Premium Kit',
          subtitle: '₹ 12999',

          img: require('@/assets/img/kits/premium.jpg'),
          sub: [
            {
              p: '➢ Specially designed Study materials depending on age groups',
            },
            { p: '➢ Scientific Curriculum Guidance' },
            { p: '➢ School Dress (2 Set)' },
            { p: '➢ School Bag' },
            { p: '➢ Online Class for Full Season with highly trained teacher' },
          ],
        },
        {
          header: 'Popular Kit',
          subtitle: '₹ 4499',

          img: require('@/assets/img/kits/popular.jpg'),
          sub: [
            {
              p: '➢ Specially designed Study materials depending on age groups',
            },
            { p: '➢ Scientific Curriculum Guidance' },
            { p: '➢ School Dress (2 Set)' },
          ],
        },
        {
          header: 'Basic Kit',
          subtitle: '₹ 2499',

          img: require('@/assets/img/kits/basic.jpg'),
          sub: [
            {
              p: '➢ Specially designed Study materials depending on age groups',
            },
            { p: '➢ Scientific Curriculum Guidance' },
          ],
        },
      ],
    }
  },
}
</script>

