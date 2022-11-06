// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

// Webページの動作を実装 ...（1）
const MyFirstVue = {
  data() { // データ ...（2）
    return {
      name: ''
    }
  },
  methods: { // メソッド ...（3）
    onButtonClicked() {
    alert(`${this.name} さん、Vue.jsの世界にようこそ!`)
    }
  }
}
// Vue.jsを初期化 ...（4）
Vue.createApp(MyFirstVue).mount('#my-first-vue')