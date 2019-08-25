// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
const API = 'http://bigdata.ipguide.com.cn/intelligenttourguide_api/'
module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'axios',
      'swiper'
    ],

    css: [
      'app.styl'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v3',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'ionicons-v4',
      // lang: 'de', // Quasar language

      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QImg',
        'QInput',
        'QSpinnerHourglass',
        'QAvatar',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QRadio',        
        'QMenu',
        'QSelect',
        'QTimeline',
        'QTimelineEntry'
      ],

      directives: [
        'Ripple',
        'ClosePopup'
      ],

      // Quasar plugins
      plugins: [
        'Notify',
        'Dialog'
      ]
    },

    supportIE: false,

    build: {
      scopeHoisting: true,
      publicPath: 'summit',
      env: ctx.dev ? {
        API: JSON.stringify(API),
        mchId: JSON.stringify('1494875402'),
        key: JSON.stringify('AAAAAAAABBBBBBBB1111111122222222'),
        AppSecret: JSON.stringify('d2923bc1dc0988a0bfe46c7d0fe52319'),
        //https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
        APPID: JSON.stringify('wxe415ca4cab63133b'),
        redirect_uri: JSON.stringify(encodeURIComponent(API + '/user/setCodeView')),
        response_type: JSON.stringify('code'),
        scope: JSON.stringify('snsapi_userinfo'), //应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且， 即使在未关注的情况下，只要用户授权，也能获取其信息 ）

        fileURL: JSON.stringify('http://212.64.77.196:8082/'),

      } : {
        API: JSON.stringify(API),
        mchId: JSON.stringify('1494875402'),
        key: JSON.stringify('AAAAAAAABBBBBBBB1111111122222222'),
        AppSecret: JSON.stringify('d2923bc1dc0988a0bfe46c7d0fe52319'),
        //https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
        APPID: JSON.stringify('wxe415ca4cab63133b'),
        redirect_uri: JSON.stringify(encodeURIComponent(API + '/user/setCodeView')),
        response_type: JSON.stringify('code'),
        scope: JSON.stringify('snsapi_userinfo'), //应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且， 即使在未关注的情况下，只要用户授权，也能获取其信息 ）

        fileURL: JSON.stringify('http://212.64.77.196:8082/'),

      },
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack(cfg) {
        cfg['externals'] = {
          'AMap': 'window.AMap',
          'AMapUI': 'AMapUI',
        }
      }
    },

    devServer: {
      proxy: {
        // 将所有以/api开头的请求代理到jsonplaceholder
        '/api': {
          target: process.env.API,
        },

      },
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },


    cordova: {
      // id: 'org.cordova.quasar.app',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack(cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'invitation'
      }
    }
  }
}
