<template>
  <v-container>
    <v-col class="right mb-10" justify="center" align="center">
      <h1 class="text-h4">
        <span class="warning--text text-h3">Seven Core</span> Areas of Learning
      </h1>

      <h2 class="font-weight-light">
        Based on the<span><strong> Core Concept of PlaySchool</strong></span>
      </h2>
    </v-col>
    <v-card class="left" rounded="xl" color="primary" elevation="10">
      <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
        <v-timeline-item
          v-for="(service, i) in services"
          :key="i"
          color="accent"
          :class="i % 2 == 0 ? 'text-left' : 'text-right'"
          large
        >
          <template v-slot:icon>
            <span class="text-h6 primary--text">{{ service.number }}</span>
          </template>
          <div class="pa-4">
            <h2 class="text-h6 mb-4">
              {{ service.heading }}
            </h2>
            <h2 v-html="service.description" class="text-body-1 mb-4"></h2>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>

    <v-row no-gutters class="pa-8"> </v-row>

    <v-row justify="center">
      <!-- <h1 class="text-h4">FOUNDER'S VISION</h1> -->
      <v-col class="left" cols="12" lg="4" align="center">
        <h1 class="text-h5 mb-5 accent--text text-right">
          WHO WE ARE AND WHAT WE DO
        </h1>
        <h2 class="text-body-1">
          SHINY CORALS PRESCHOOL is very
          <strong> methodical and new-age conceptual</strong>
          preschool of <strong>ESHANPUTRA LEARNWISE</strong>. Established in
          2019, this preschool concentrates on the overall development of
          children. With its very rich curriculum for
          <strong>children’s 7 winged developments</strong>, it introduces
          <strong>digital smart classroom</strong> for every class. We strongly
          believe that learning begins with the family; the school’s goal is to
          extend and develope that process in a
          <strong
            >spirit of cooperation among students, teachers, and parents</strong
          >. We also believe that a
          <strong>small student to teacher ratio</strong> is of utmost
          importance to give students the attention they need to reach their
          <strong>full potential</strong>. "We value trust, fairness,
          cooperation, and sensitivity, and expect students to learn to reach
          outside themselves and respect the dignity of others. Our students
          will not only graduate from SHINY CORALS PRESCHOOL with strong
          academic skills and a readiness for high school, they will also grow
          as individuals and learn about the importance of social
          responsibility." Our Teachers are
          <strong>well trained educators</strong> and having fair experience in
          education sectors. Our teaching Assistants are well groomed and very
          well behaved which will win hearts of our children. Our staffs are
          always helpful via
          <strong
            >conferences and monthly meetings throughout the school year</strong
          >.
        </h2>
      </v-col>
      <v-col col="12" lg="2" md="4" class="right pa-8">
        <v-img
          contain
          height="300"
          :lazy-src="require('@/assets/img/Sampa.jpg')"
          :src="require('@/assets/img/Sampa.jpg')"
        ></v-img>

        <h1 class="text-button accent--text">Sampa Bhowmick</h1>
        <h2 class="text-subtitle-1">Founder, Shiny Corals</h2>
      </v-col>

      <v-col class="right" col="12" lg="6" md="8">
        <h1 class="text-h4 mb-5 accent--text">FOUNDER'S VISION</h1>
        <h3 class="text-body-1">
          She is a Graduate in English from Calcutta University. She did
          Computer Diploma and CIC from IGNOU. Later, she did two diplomas in
          IELTS from British Council. She has a glittering 9 years experience in
          different sectors. Out of these, 4 years she worked and learned the
          ways of education system. Then she realized the possibilities of this
          sector and its impact on children’s lives and our society.
          <br />
          <br />
          She designed the Seven Winged Curriculum for the all round development
          of children. According to her, “Early childhood education is a very
          important aspect of a child’s life. Human brain is always receptive no
          matter how it learns. After birth, a child starts to learn whatever is
          going on around. As the brain of a child is like a blank paper and it
          writes whatever is going around, it is important for every parent to
          take care of what is scratching on that paper. Here comes the
          importance of preschools. Now a days, preschools are designed to give
          overall education to look after a child’s development. And keeping
          that in mind we, at SHINY CORALS, set a curriculum that ensures a
          child’s seven winged developments with help of audio-visual and
          practical learning with care and tenderness. To make a great nation we
          need to concentrate to make a great human being from early childhood.”
        </h3>
      </v-col>
    </v-row>

    <h1 class="text-h4 accent--text mt-10 mb-4 text-center">
      OUR UNIQUE APPROACH
    </h1>
    <v-divider></v-divider>
    <v-row class="mt-10">
      <v-col
        v-for="(service1, i) in services1"
        :key="i"
        cols="12"
        lg="4"
        class="left pa-8"
      >
        <v-img :src="service1.img" height="70" width="70"></v-img>
        <h1 class="warning--text text-h5 my-4">
          {{ service1.heading1 }}
        </h1>

        <h1 class="body">
          <h3 class="text-subtitle-1">
            {{ service1.description1 }}
          </h3>
        </h1>

        <v-row>
          <v-col
            v-for="(data, i) in service1.children"
            :key="i"
            cols="12"
            lg="12"
          >
            <ul class="text-subtitle-1">
              <li>{{ data.sub }}</li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <div class="right text-center mt-10" id="faq">
      <h1 class="text-h4 mb-4">
        <span class="warning--text font-weight-bold"> F.A.Q </span>(FREQUENTLY
        ASKED QUESTIONS)
      </h1>
      <h2 class="text-subtitle-1">
        CONTACT US DIRECTLY IF YOU DON'T FIND THE INFORMATION NEEDED BELOW.
      </h2>

      <v-expansion-panels inset>
        <v-expansion-panel v-for="(query, i) in faq" :key="i">
          <v-expansion-panel-header>
            {{ query.question }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ query.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      services: [
        {
          heading: 'COMMUNICATION AND LANGUAGE',
          description: `Children are encouraged to extend their <b>vocabulary</b> and <b>fluency</b> by <b>talking, listening</b> and <b>responding</b> to <b>stories, songs</b> and <b>rhymes</b> in small and large groups.  Children learn the purpose of <b>writing</b> and how to <b>draw</b> and <b>write symbols</b> for themselves.  Children are encouraged to give their attention to what others say and respond appropriately.  Children are also encouraged to follow simple instructions and answer <b>‘how’ and ‘why’ questions</b> at group discussions.`,
          number: '1',
        },
        {
          heading: 'PHYSICAL DEVELOPMENT',
          description: `Children learn how to stay <b>healthy</b> by everyday morning <b>yoga</b> which will develope their <b>mental calmness, physical and mental balance</b>. They also develop the <b>fine motor skills</b> they will need to use <b>tools, including pens, pencils</b> and <b>scissors</b> and to handle <b>small objects safely</b> and with <b>increasing control</b>. They understand about the importance of, and how to look after, their bodies when we discuss <b>health</b> and <b>safe-care</b> with them. At snack times, we discuss about <b>good and healthy food</b>.`,
          number: '2',
        },
        {
          heading: 'PERSONAL, EMOTIONAL AND SOCIAL DEVELOPMENT',
          description: `Children are individually supported in developing <b>confidence, autonomy and self respect</b>. They are encouraged to work and concentrate independently and also to take part in the life of the Pre-School, sharing and cooperating with other children and adults. They learn to <b>express their feelings</b> for others, <b>make choices</b> and <b>respect each other</b>. All children are given the opportunity to take <b>responsibility</b> for themselves, for other people and for the building and equipment. The children are encouraged to <b>play co-operatively</b> and <b>show sensitivity</b> to others around them when <b>playing with toys</b>.`,
          number: '3',
        },
        {
          heading: 'LITERACY',
          description: `Children are encouraged to link sounds and letters, and to begin to read and write. The children have access to a wide range of reading materials (books, poems) to ignite their interest. Our small library gives every child the opportunity to become familiar with books`,
          number: '4',
        },
        {
          heading: 'MATHEMATICS',
          description: `Children become familiar with <b>counting, understanding and using numbers, to describe shapes, spaces and measure</b>. We use <b>songs, games, digital board and picture books</b> to help children to become aware of <b>number sequences and simple mathematical operations</b>. We also use <b>educational toys</b> such as shape sorters to help with their understanding.`,
          number: '5',
        },
        {
          heading: 'UNDERSTANDING THE WORLD',
          description: `Children learn to observe the <b>features of objects, substances and living things, recognising differences, patterns and similarities</b>, then share and record what they find. Children <b>explore past and present events</b> in their own lives and in the lives of their families and other people they know. They begin to gain an awareness of the <b>cultures and beliefs</b> of others.
                    Children learn about the world in which they live, their community and environment by assisting with <b>seasonal planting and visiting local areas</b>. This aids their understanding of caring for their local environment.
                    They learn how to use the right tool for the task.  They can also learn how to <b>use computers through various games</b> we have, aided by a <b>child-friendly mouse</b> to navigate around the page.
                    Children also will celebrate different <b>important days of the year</b> to become an <b>Indian as well as a World Citizen</b>.`,
          number: '6',
        },
        {
          heading: 'EXPRESSIVE ARTS AND DESIGN',
          description: `Children are encouraged to use <b>creativity</b> to express their ideas and feelings. <b>Paint, glue, crayons and pencils</b> as well as natural and recycled resources help them to <b>explore colour, shape and texture</b>.  Children act out <b>stories, sing, dance, and play musical instruments</b> and there are many opportunities for <b>imaginative role-play</b>. We will use different stories to teach role play to the children.`,
          number: '7',
        },
      ],

      services1: [
        {
          heading1: 'What Makes US different?',
          description1: `We, at Shiny Corals PreSchool, believe education must come in a colourful and playful manner. Kids learn things easily when anything is taught through activities. Considering the possibilities of the tender age that our kids are at, we designed a curriculum full of both indoor and outdoor activities. Shiny Corals Preschool will provide Internet (World Wide Web) or an intranet. Early writing, reading and number work are all done in the context of play and exercise books and copies, which are as nominal as could be possible.`,
          img: require('@/assets/img/think.png'),
          children: [
            {
              sub: ' Activities throughout the year as per calender programs and as per academics.',
            },
            {
              sub: 'Field trips for Nursery, Jr. KG and Sr. KG classes to make kids street smart.',
            },
            {
              sub: 'Smart Digital class with curriculum based content to make kids smart class ready for future.',
            },
            {
              sub: ' Good teacher-student ratio to concentrate on every student equally.',
            },
            {
              sub: ' Qualified and experienced teachers.',
            },
            {
              sub: 'Strong study materials with renowned publishing house.',
            },
            {
              sub: 'Small library for story time to encourage student for reading habits.',
            },
            {
              sub: ' AC classrooms with plenty of natural light.',
            },
          ],
        },
        {
          heading1: 'Learning through Play',
          description1: `Learning through play is important as this is the natural way that children learn. Sometimes their play will be boisterous; sometimes they will describe and discuss what they are doing. Sometimes they will be quiet and reflective as they play. At the Pre-School we create a challenging environment and support children’s learning through planned play activities. We value, support and extend children’s spontaneous play, extending and developing their language and communication during their play. Through different forms of play and field trips the children can`,
          img: require('@/assets/img/laugh.png'),
          children: [
            {
              sub: 'Explore, develope and go through learning experiences that help them make sense of the world.',
            },
            {
              sub: 'Practise and build up ideas, concepts and skills.',
            },
            {
              sub: 'Learn how to control impulses and understand the need for rules.',
            },
            {
              sub: 'Be alone, be alongside others, or cooperate as they talk or rehearse their feelings.',
            },
            {
              sub: 'Take risks and make mistakes.',
            },
            {
              sub: ' Think creatively and imaginatively.',
            },
            {
              sub: 'Communicate with others as they investigate or solve problems.',
            },
            {
              sub: 'Express fears or re-live anxious experiences in controlled and safe situations',
            },
          ],
        },
        {
          heading1: 'Our Vision',
          description1: `Equipped with a well researched curriculum based on the seven areas of learning, our grand vision is for our children to grow up into responsible individuals and:`,
          img: require('@/assets/img/perspective.png'),
          children: [
            {
              sub: 'To enhance the development and education of children under school age in a way that involves parents.',
            },
            {
              sub: 'To provide a safe, secure and stimulating environment which offers a range of challenging and well structured experiences that meet the needs of young children.',
            },
            {
              sub: 'To enable children to learn and develop skills, attitudes, and understanding appropriate to their stage of development, and to build on what he or she can already do.',
            },
            {
              sub: 'To create an atmosphere in which children feel valued, confident, and where they are motivated, become independent and learn how to socialise with other children and adults.',
            },
            {
              sub: 'To ensure that children have equal access to the curriculum.',
            },
            {
              sub: 'To enable children to make progress according to their developing abilities, irrespective of their gender, ethnic, religious, social background, or additional support needs.',
            },
            {
              sub: 'To support parents and direct ways to find out possilibilities of their children.',
            },
          ],
        },
      ],
      faq: [
        {
          question: '1. What are the eligible age groups?',
          answer: `Children of 1.5 years to 4.5 years can take admission in Shiny Corals Preschool.`,
        },
        {
          question: '2. What are the classes?',
          answer: `Shiny Corals has following classes -
                             PLAYGROUP - 1.5 TO 2.5 YEARS.
                             NURSERY - 2.5 TO 3.5 YEARS
                             JR. KG - 3.5 TO 4 YEARS
                             SR. KG - 4 TO 4.5 YEARS.`,
        },
        {
          question: '3. Which accreditation does the school follow?',
          answer: `Shiny Corals follows a combination method of Montessori and play way with different activities to open up children's brains to a curious world.`,
        },
        {
          question: '4. What are the school fees?',
          answer: `Kindly contact the school authorities for the fee structure.`,
        },
        {
          question: '5. What is the student teacher ratio in the school?',
          answer: `The student-teacher-attendant ratio is 12:1:1.`,
        },
        {
          question:
            '6. Are the teachers and attendant aunties qualified enough?',
          answer: `We hire teachers after a series of interviews and activities. The best among those who apply are our teachers right now. We also train our attendant aunties regularly about hygiene and safety of children.`,
        },
        {
          question: '7. Does the school provide snacks?',
          answer: `No, as different children can be allergic to different food items, Shiny Corals does not provide any kind of food item.`,
        },
        {
          question: `8. When and how are children's skills evaluated?`,
          answer: `Every month a PTM will be held on last Saturday of the month where parents will be acknowledged about their children's progress. Three evaluation tests will be taken for three terms for Nursery, Jr. KG and Sr. KG. There will be no evaluation for Playgroup students.`,
        },
        {
          question: '9. Will there be any activities in the school?',
          answer: `Yes. There will be a huge number of activities for children. There will be activities for their developmental skills. Then they will be taught Indian ways of living by celebrating Indian festivals and special days for Indian scholars. They will also celebrate international important days to be familiar being world citizen.`,
        },
        {
          question: '10. Will the parents have to pay for these activities?',
          answer: `For most of them, the parents need not to pay anything as it's included in the curriculum. But there are few activities which will be organized in partnership with other organizations for which parents may have to pay a nominal amount. Participating in all the activities are compulsory for each child.`,
        },
        {
          question: '11. Is the school secure?',
          answer: `Shiny Corals is very keen for the safety and security of it's students and staffs.
                            * Two doors for entrance/exit during emergency.
                            * Fire Extinguisher (applied for)
                            * CCTV
                            * Non-edgy furniture suitable for children.
                            * Non-toxic blocks for children.
                            * Non-slippery floor mat in whole classrooms.`,
        },
        {
          question: '12. What are the paying methods?',
          answer: `Right now we accept cash only.`,
        },
        {
          question: '13. What is the withdrawal process?',
          answer: `In case of mid session withdrawal, parents must give 30 days' notice and pay the whole year's fee to get a transfer certificate from the school.`,
        },
        {
          question:
            '14. In case of crying babies, are parents allowed to sit with them for first few days?',
          answer: `Our teachers and attendants are very loving and playful with the children. Yet, if a child needs her/his parents can play with her/him for 10 minutes after 30 minutes in class. This will be allowed only 1st week of admission for persistently crying children only.`,
        },
      ],

      // achievements: [
      //   {
      //     img: require('@/assets/img/girl.png'),
      //     number: 520,
      //     title: 'NUMBER OF CHILDREN',
      //   },
      //   {
      //     img: require('@/assets/img/teacher.png'),
      //     number: 700,
      //     title: 'EXPERIENCED TEACHERS',
      //   },
      //   {
      //     img: require('@/assets/img/family.png'),
      //     number: 180,
      //     title: 'SATISFIED PARENTS',
      //   },
      //   {
      //     img: require('@/assets/img/presentation.png'),
      //     number: 59,
      //     title: 'CLASSES CONDUCTED',
      //   },
      // ],

      // media: [{
      //         title: 'LIKE OUR PAGE',
      //     },
      //     {
      //         title: 'CONTACT US ',
      //     },
      //     {
      //         //  img: ,
      //         title: 'CIRCLE US',
      //     },
      // ],
      // footer: [{
      //         heading: 'Shiny Corals Pre-School',
      //         description: 'HOME ABOUT US CLASSROOM PROGRAMES GALLERY CONTACT US NOTICES',
      //     },
      //     {
      //         heading: 'NEWSLETTER SIGNUP',
      //         description: 'By subscribing to our mailing list you will always be update with the latest news from us.',
      //     },
      //     {
      //         heading: 'GET IN TOUCH',
      //         description: 'Shiny Corals PreSchool West Bankim Pally, MADHYAMGRAM - 700129. contact@shinycorals.com QUESTIONS? CALL:9903067468 Open in Google Maps',
      //     },
      // ],
      // achievements: [
      // {
      //     img: require('@/assets/image/girl.png'),
      //     number: 520,
      //      title: 'NUMBER OF CHILDREN',
      //    },
      //    {
      //      img:require('@/assets/image/teacher.png') ,
      //     number: 700,
      //     title: 'EXPERIENCED TEACHERS',
      //    },
      //  {
      //     img:require('@/assets/image/family.png'),
      //     number: 180,
      //     title: 'SATISFIED PARENTS',
      //    },
      //    {
      //     img:require('@/assets/image/presentation.png'),
      //     number: 59,
      //      title: 'CLASSES CONDUCTED',
      // },
      //  ],
    }
  },
  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
      const gsap = this.$gsap
      gsap.utils.toArray('.right').forEach((demo) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: demo,
            toggleActions: 'restart none none reverse',
            // markers: true,
            start: '-150px center',
          },
        })

        tl.from(demo, {
          y: 150,
          ease: 'Power2.easeInOut',
          duration: 1,
          opacity: 0,
        })
      })
      gsap.utils.toArray('.left').forEach((demo) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: demo,
            toggleActions: 'restart none none reverse',
            // markers: true,
            start: '-150px center',
          },
        })

        tl.from(demo, {
          x: -150,
          ease: 'Power2.easeInOut',
          duration: 1,
          opacity: 0,
        })
      })
    },
  },
}
</script>



