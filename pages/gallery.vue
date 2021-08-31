<template>
<v-main class="main">

    <v-container fluid>
        <v-sheet class="mt-n16" width="100%" color="transparent">
            <video autoplay muted loop playsinline class="landing-video" :poster="require('@/assets/image/download.png')">
                <source src="@/assets/image/Gravity.mp4" type="video/mp4" />
            </video>
        </v-sheet>
    </v-container>
    <!-- <img src="@/assets/image/1.jpeg"> -->
    <div class="text-center bg-model">
        <v-dialog v-model="dialog" width="500" >
            <template v-slot:activator="{ on, attrs }">

                <v-row>
                    <v-col cols="12" lg="4" class="colm" v-for="image in gallery" :key="image">
                        <v-img :src="image.img" class="ma-2 image" v-bind="attrs" v-on="on" />
                    </v-col>
                </v-row>
            </template>
            <v-btn color="white" class="btn bg-mode close" dark dense text @click="dialog = false">
                <p> x </p>
            </v-btn>
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">

                    <v-carousel height="500" hide-delimiter-background show-arrows-on-hover >
                        <v-carousel-item v-for="(slide, i) in gallery" :key="i">
                            <!-- <v-sheet :color="colors[i]" height="100%"> -->
                            <v-row class="fill-height" align="center" justify="center">
                                <div>
                                    <v-img :src="slide.img" class="ma-2 image" height="100%" />
                                </div>
                            </v-row>
                            <!-- </v-sheet> -->
                        </v-carousel-item>
                    </v-carousel>

                </v-card-title>

                <v-divider></v-divider>

            </v-card>
            <!-- <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="white" class="btn" dark dense text @click="dialog = false">
                    I accept
                </v-btn>
                <v-btn color="white" class="btn" dark dense text v-on:click="close()">
                    click me
                </v-btn>
            </v-card-actions> -->
        </v-dialog>
    </div>
    <!-- first method -->
    <!-- <div>
        <v-card>
            <v-row>
                <v-col cols="12" lg="4" class="colm" v-for="image in gallery" :key="image">
                    <v-img :src="image.img" class="ma-2 image" />
                </v-col>
            </v-row>
        </v-card>
    </div> -->
    <!-- <h1>Second type</h1> -->
    <!-- Second method -->

</v-main>
</template>

<script>
// document.querySelector('.bg-model').style.display ='flex';
// document.querySelector('.close').addEventListener('click', function(){
//   document.querySelector('.bg-model').style.display = 'none';
// })
export default {
    methods: {
        close() {
            // alert("function called");
            this.dialog = "false";
        }
    },
    data() {
        return {
            // src: require('@/assets/image/1.jpeg')
            // img:    { src: require('@/assets/image/1.jpeg') } ,
            gallery: [{
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
            ]
        }
    }
}
</script>

<style scoped>
.colm {
    flex-direction: row;
    height: 500px;
    padding: 2px;
}

image {
    height: 10px;
    width: 10px;
}

.btn {
    color: white;
    background-color: rgb(61, 122, 138);
    width: 10px;
    font-size: 20px;
}

</style>
