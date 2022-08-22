<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button @tap="cfxLogin">Anyweb登入</button>
    <button @tap="cfxLogout">Anyweb登出</button>
  </view>
</template>

<script>
import './index.scss'
import { cfx_login, cfx_logout } from '../../utils/anyweb'

export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  methods: {
    cfxLogin() {
      console.log('!!!!!')
      cfx_login()
    },
    cfxLogout() {
      cfx_logout()
    }
  }
}
</script>
