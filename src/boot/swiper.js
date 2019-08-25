import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
export default async ({ Vue /* app, router, Vue, ... */ }) => {
  Vue.use(VueAwesomeSwiper, /* { default global options } */)
}
