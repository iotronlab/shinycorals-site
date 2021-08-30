<template>
<v-container>
    <v-row justify="center">
        <v-col cols="12" lg="11">
            <h1>Seven Core Areas of Learning</h1>
            <h3>Based on the Core Concept of PlaySchool</h3>
        </v-col>
    </v-row>

    <div>
        <v-timeline :reverse="reverse" dense>
            <v-timeline-item v-for="(service, i) in services" :key="i">
                <v-card class="elevation-2">
                    <v-card-title class="text-h5 head">
                        {{ service.heading }}
                    </v-card-title>
                    <v-card-text class="body">
                        {{ service.description }}
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
    <v-card>
        <v-card-title class="text-h5 head">
            {{ heading }}
        </v-card-title>

        <v-card-subtitle class="body">
            <h3>{{ description }}</h3>
        </v-card-subtitle>
    </v-card>

    <v-row>
        <v-col cols="12" lg="11"> </v-col>
    </v-row>
    <h1>OUR UNIQUE APPROACH</h1>
    <v-timeline>
        <v-timeline-item v-for="service in services1" :key="service" cols="11" lg="4">
            <v-card>
                <v-card-title class="text-h5 head">
                    {{ service.heading }}
                </v-card-title>

                <v-card-subtitle class="body">
                    <h3>{{ service.description }}</h3>
                </v-card-subtitle>

                <v-row>
                    <v-col v-for="data in service.children" :key="data" cols="11" lg="11">
                        <ul>
                            <li>{{ data.sub }}</li>
                        </ul>
                    </v-col>
                </v-row>
            </v-card>
        </v-timeline-item>
    </v-timeline>

    <h1>OUR UNIQUE APPROACH</h1>
    <v-row>
        <v-col v-for="service in services1" :key="service" cols="11" lg="4">
            <v-card>
                <v-card-title class="text-h5 head">
                    {{ service.heading }}
                </v-card-title>

                <v-card-subtitle class="body">
                    <h3>{{ service.description }}</h3>
                </v-card-subtitle>

                <v-row>
                    <v-col v-for="data in service.children" :key="data" cols="11" lg="11">
                        <ul>
                            <li>{{ data.sub }}</li>
                        </ul>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="11" lg="4">
            <v-card>
                <v-card-title class="head"> Our Gallery </v-card-title>
                <v-card-subtitle class="body">
                    <h3>
                        These are the pictures from our school and field trips.Don't
                        forget to check our entire gallery!
                    </h3>
                    <v-btn class="btn">View All </v-btn>
                </v-card-subtitle>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-row>
                <h1 class="mx-5">Our Achievements</h1>
            </v-row>
            <v-row v-for="service in achievements" :key="service">
                <v-col v-for="service1 in service.img" :key="service1" cols="11" lg="3" class="imgcol">
                    <v-img :src="service1.src" class="ma-2 image" />
                    <h1>{{ service.number }}</h1>
                    <h3 class="archi">{{ service.title }}</h3>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <h1 class="red mt-5">F.A.Q (FREQUENTLY ASKED QUESTIONS)</h1>
    <v-expansion-panels>
        <v-expansion-panel v-for="service in faq" :key="service" cols="12" lg="11">
            <v-expansion-panel-header class="head">
                {{ service.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                {{ service.answer }}
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>

    <v-row>
        <v-col v-for="service in media" :key="service" cols="12" lg="4">
            <v-img :src="service.src" contain class="ma-2" />
            <h3>{{ service.title }}</h3>
        </v-col>
    </v-row>
    <v-row>
        <v-col v-for="service in footer" :key="service" cols="11" lg="4">
            <v-card>
                <v-card-title class="head">
                    {{ service.heading }}
                </v-card-title>
                <v-card-sub-title class="body">
                    {{ service.description }}
                </v-card-sub-title>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    methods: {},
    data() {
        return {
            services: [{
                    heading: 'COMMUNICATION AND LANGUAGE',
                    description: `Children are encouraged to extend their vocabulary and fluency by talking, listening and responding to stories, songs and rhymes in small and large groups.  Children learn the purpose of writing and how to draw and write symbols for themselves.  Children are encouraged to give their attention to what others say and respond appropriately.  Children are also encouraged to follow simple instructions and answer ‘how’ and ‘why’ questions at group discussions.`,
                    number: 1,
                },
                {
                    heading: 'PHYSICAL DEVELOPMENT',
                    description: `Children learn how to stay healthy by everyday morning yoga which will develope their mental calmness, physical and mental balance. They also develop the fine motor skills they will need to use tools, including pens, pencils and scissors and to handle small objects safely and with increasing control. They understand about the importance of, and how to look after, their bodies when we discuss health and safe-care with them. At snack times, we discuss about good and healthy food.`,
                    number: 2,
                },
                {
                    heading: 'PERSONAL, EMOTIONAL AND SOCIAL DEVELOPMENT',
                    description: `Children are individually supported in developing confidence, autonomy and self respect. They are encouraged to work and concentrate independently and also to take part in the life of the Pre-School, sharing and cooperating with other children and adults. They learn to express their feelings for others, make choices and respect each other. All children are given the opportunity to take responsibility for themselves, for other people and for the building and equipment. The children are encouraged to play co-operatively and show sensitivity to others around them when playing with toys.`,
                    number: 3,
                },
                {
                    heading: 'LITERACY',
                    description: `Children are encouraged to link sounds and letters, and to begin to read and write. The children have access to a wide range of reading materials (books, poems) to ignite their interest. Our small library gives every child the opportunity to become familiar with books`,
                    number: 4,
                },
                {
                    heading: 'MATHEMATICS',
                    description: `Children become familiar with counting, understanding and using numbers, to describe shapes, spaces and measure. We use songs, games, digital board and picture books to help children to become aware of number sequences and simple mathematical operations. We also use educational toys such as shape sorters to help with their understanding.`,
                    number: 5,
                },
                {
                    heading: 'UNDERSTANDING THE WORLD',
                    description: `Children learn to observe the features of objects, substances and living things, recognising differences, patterns and similarities, then share and record what they find. Children explore past and present events in their own lives and in the lives of their families and other people they know. They begin to gain an awareness of the cultures and beliefs of others.
                    Children learn about the world in which they live, their community and environment by assisting with seasonal planting and visiting local areas. This aids their understanding of caring for their local environment.
                    They learn how to use the right tool for the task.  They can also learn how to use computers through various games we have, aided by a child-friendly mouse to navigate around the page.
                    Children also will celebrate different important days of the year to become an Indian as well as a World Citizen.`,
                    number: 6,
                },
                {
                    heading: 'EXPRESSIVE ARTS AND DESIGN',
                    description: `Children are encouraged to use creativity to express their ideas and feelings. Paint, glue, crayons and pencils as well as natural and recycled resources help them to explore colour, shape and texture.  Children act out stories, sing, dance, and play musical instruments and there are many opportunities for imaginative role-play. We will use different stories to teach role play to the children.`,
                    number: 7,
                },
            ],

            heading: 'WHO WE ARE AND WHAT WE DO',
            description: `SHINY CORALS PRESCHOOL is very methodical and new-age conceptual preschool of ESHANPUTRA LEARNWISE. Established in 2019, this preschool concentrates on the overall development of children. With its very rich curriculum for children’s 7 winged developments, it introduces digital smart classroom for every class.
                We strongly believe that learning begins with the family; the school’s goal is to extend and develope that process in a spirit of cooperation among students, teachers, and parents. We also believe that a small student to teacher ratio is of utmost importance to give students the attention they need to reach their full potential.
                "We value trust, fairness, cooperation, and sensitivity, and expect students to learn to reach outside themselves and respect the dignity of others. Our students will not only graduate from SHINY CORALS PRESCHOOL with strong academic skills and a readiness for high school, they will also grow as individuals and learn about the importance of social responsibility."
                Our Teachers are well trained educators and having fair experience in education sectors. Our teaching Assistants are well groomed and very well behaved which will win hearts of our children. Our staffs are always helpful via conferences and monthly meetings throughout the school year.`,
            services1: [{
                    heading: 'What Makes US different?',
                    description: `We, at Shiny Corals PreSchool, believe education must come in a colourful and playful manner. Kids learn things easily when anything is taught through activities. Considering the possibilities of the tender age that our kids are at, we designed a curriculum full of both indoor and outdoor activities. Shiny Corals Preschool will provide Internet (World Wide Web) or an intranet. Early writing, reading and number work are all done in the context of play and exercise books and copies, which are as nominal as could be possible.`,
                    children: [{
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
                    heading: 'Learning through Play',
                    description: `Learning through play is important as this is the natural way that children learn. Sometimes their play will be boisterous; sometimes they will describe and discuss what they are doing. Sometimes they will be quiet and reflective as they play. At the Pre-School we create a challenging environment and support children’s learning through planned play activities. We value, support and extend children’s spontaneous play, extending and developing their language and communication during their play. Through different forms of play and field trips the children can`,
                    children: [{
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
                    heading: 'Our Vision',
                    description: `Equipped with a well researched curriculum based on the seven areas of learning, our grand vision is for our children to grow up into responsible individuals and:`,
                    children: [{
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
            faq: [{
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
                    answer: `Shiny Corals follows a combination method of Montessori and play way with         different activities to open up children's brains to a curious world.`,
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
                    question: '6. Are the teachers and attendant aunties qualified enough?',
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
                    question: '14. In case of crying babies, are parents allowed to sit with them for first few days?',
                    answer: `Our teachers and attendants are very loving and playful with the children. Yet, if a child needs her/his parents can play with her/him for 10 minutes after 30 minutes in class. This will be allowed only 1st week of admission for persistently crying children only.`,
                },
            ],
            media: [{
                    title: 'LIKE OUR PAGE',
                },
                {
                    title: 'CONTACT US ',
                },
                {
                    //  img: ,
                    title: 'CIRCLE US',
                },
            ],
            footer: [{
                    heading: 'Shiny Corals Pre-School',
                    description: 'HOME ABOUT US CLASSROOM PROGRAMES GALLERY CONTACT US NOTICES',
                },
                {
                    heading: 'NEWSLETTER SIGNUP',
                    description: 'By subscribing to our mailing list you will always be update with the latest news from us.',
                },
                {
                    heading: 'GET IN TOUCH',
                    description: 'Shiny Corals PreSchool West Bankim Pally, MADHYAMGRAM - 700129. contact@shinycorals.com QUESTIONS? CALL:9903067468 Open in Google Maps',
                },
            ],
            // achievements: [
            //   {
            //     img: [{ src: require('@/assets/image/girl.png') }],
            //     number: 520,
            //     title: 'NUMBER OF CHILDREN',
            //   },
            //   {
            //     img: [{ src: require('@/assets/image/teacher.png') }],
            //     number: 700,
            //     title: 'EXPERIENCED TEACHERS',
            //   },
            //   {
            //     img: [{ src: require('@/assets/image/family.png') }],
            //     number: 180,
            //     title: 'SATISFIED PARENTS',
            //   },
            //   {
            //     img: [{ src: require('@/assets/image/presentation.png') }],
            //     number: 59,
            //     title: 'CLASSES CONDUCTED',
            //   },
            // ],
        }
    },
}
</script>
