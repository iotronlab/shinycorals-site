export default function ({ $gtm, route }) {
  window.onNuxtReady(() => {
    setTimeout(function () {
      // Pass the component definition to the resolve callback
      $gtm.init('GTM-MXFM35K')
    }, 7000)
  })
}
