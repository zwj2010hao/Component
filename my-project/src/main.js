import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import hello from './components/Hello'
import button from './components/ButtonView.vue'
//import ButtonView from './components/ButtonView'
/* eslint-disable no-new */
// install router
Vue.use(Router)

// register filters globally

// routing
var router = new Router()
router.map({
  '/': {
    component: hello
  },
  '/button': {
    component: button
  }
  // '/dialog': {
  //   component: DialogView
  // },
  // '/actionsheet': {
  //   component: ActionSheet
  // },
  // '/msg': {
  //   component: MsgView
  // },
  // '/article': {
  //   component: ArticleView
  // },
  // '/cell': {
  //   component: CellView
  // },
  // '/progress': {
  //   component: ProgressView
  // },
  // '/icons': {
  //   component: IconsView
  // }
})

router.redirect({
  '*': '/'
})
router.start(App, 'app');