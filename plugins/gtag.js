import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ isDev, app }) => {
  if (!isDev) {
    window.onNuxtReady(() => {
      setTimeout(function () {
        // Pass the component definition to the resolve callback
        Vue.use(
          VueGtag,
          {
            config: { id: 'G-93DHV3V5ME' },
          },
          app.router
        )
      }, 8000)
    })
  } else {
    console.log('Skipping GA in development')
  }
}
