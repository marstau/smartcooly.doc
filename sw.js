/* global workbox:false */

self.importScripts('/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "6e3cd62366e30b36d229cb7eb5c064ed"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "eed73af41f4e55d335b5b3fa8c78538d"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/img/favicons/smile.png",
    "revision": "7d4fe1a28048b184ec81f790d3ea9efe"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "9109c979ae60b0c5584b59ca6945d630"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "83edc01382cfd889f982162964ec374e"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "f76041345b421f7aadb49573367749f8"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "90869017810de209ad63c8787040632b"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "1de1e92867b9afc2565794f8b0a37fcb"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "835a2babc6c4c5527b903240ae69bc50"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "d33e989d62cdac1691ebd88e2958d882"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "dc407e3071bd2d54dc4a6a4d7fd17a7c"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "5a04c6618ef29d3e0d541a8cb9f4fa58"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "a3b0c5ec2f1f89e81f7f5331e9ae0d2c"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "22631a813374dc66dc8fc4f3d28d97a1"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "31521e0273e5f154fb436d77ca56c9a3"
  },
  {
    "url": "docs/1.0/about/brand/index.html",
    "revision": "3902060816a5c16c95cc8298f2334793"
  },
  {
    "url": "docs/1.0/about/denote/index.html",
    "revision": "41c680afc0c9923a855fd63f7f5c271d"
  },
  {
    "url": "docs/1.0/about/index.html",
    "revision": "06a8a5da85feaf9ee547abac39d0e983"
  },
  {
    "url": "docs/1.0/about/license/index.html",
    "revision": "1124dec50ab0f94df31a7ce04eeb1177"
  },
  {
    "url": "docs/1.0/about/overview/index.html",
    "revision": "c9005d32d2dd6d8f67366caed0457e35"
  },
  {
    "url": "docs/1.0/browser-bugs/index.html",
    "revision": "282b5e3bdb64f7d4d52f879859e7cfaa"
  },
  {
    "url": "docs/1.0/components/alerts/index.html",
    "revision": "deead053c71698c93b96390463c8e7a3"
  },
  {
    "url": "docs/1.0/components/badge/index.html",
    "revision": "fcba377474070aef7a150105592114e2"
  },
  {
    "url": "docs/1.0/components/breadcrumb/index.html",
    "revision": "3049b0949f32029be109ba0c4d9b7ac4"
  },
  {
    "url": "docs/1.0/components/button-group/index.html",
    "revision": "cac7dbb2a6b87a114b7419b2d3b8b61b"
  },
  {
    "url": "docs/1.0/components/buttons/index.html",
    "revision": "ea89cf464b286b5bec383bd6d31e0bb4"
  },
  {
    "url": "docs/1.0/components/card/index.html",
    "revision": "7570abe518a941bf73b4f3e078aee60c"
  },
  {
    "url": "docs/1.0/components/carousel/index.html",
    "revision": "3f51051561d8aa1acf482675825e667e"
  },
  {
    "url": "docs/1.0/components/collapse/index.html",
    "revision": "110871c739b104a3dac3199e4c64f0bd"
  },
  {
    "url": "docs/1.0/components/dropdowns/index.html",
    "revision": "05e42b584456e82e642d798e8500f5c5"
  },
  {
    "url": "docs/1.0/components/forms/index.html",
    "revision": "233dd50aa0bb5f374398fcfe35d5a811"
  },
  {
    "url": "docs/1.0/components/index.html",
    "revision": "596b324db1e8ea76f6095d7bcfc93730"
  },
  {
    "url": "docs/1.0/components/input-group/index.html",
    "revision": "585a2c1c056b44829d672183ff63b6a4"
  },
  {
    "url": "docs/1.0/components/jumbotron/index.html",
    "revision": "4f5b98f8de6cd179271b2afa4b2d99b8"
  },
  {
    "url": "docs/1.0/components/list-group/index.html",
    "revision": "d31bcd1468eb92ee5f72171314d7420e"
  },
  {
    "url": "docs/1.0/components/modal/index.html",
    "revision": "e69f5cb8e10ccfc5143e787ad921725b"
  },
  {
    "url": "docs/1.0/components/navbar/index.html",
    "revision": "ccacc40bd0ae3a652cc99c692acb1cfd"
  },
  {
    "url": "docs/1.0/components/navs/index.html",
    "revision": "8b61f9c5e4a9940c93be65ee71152ddd"
  },
  {
    "url": "docs/1.0/components/pagination/index.html",
    "revision": "6e24f2c1cba6a955f28591ede76f7b9f"
  },
  {
    "url": "docs/1.0/components/popovers/index.html",
    "revision": "a32d014eb8e3602b355370136fd5a03f"
  },
  {
    "url": "docs/1.0/components/progress/index.html",
    "revision": "2758a9c0737ede43b6b0224dde7aa89e"
  },
  {
    "url": "docs/1.0/components/scrollspy/index.html",
    "revision": "8d9a3a64d670413ff3d9c6b39181c8ab"
  },
  {
    "url": "docs/1.0/components/tooltips/index.html",
    "revision": "e891cb63b7152604696c90c54d0ed0fc"
  },
  {
    "url": "docs/1.0/content/code/index.html",
    "revision": "29eb282dcbeb66b4dc697f85b8981541"
  },
  {
    "url": "docs/1.0/content/figures/index.html",
    "revision": "aa102f2b4c006da6943f710b57d5519c"
  },
  {
    "url": "docs/1.0/content/images/index.html",
    "revision": "c8ca73850a1399e94494c563b888038e"
  },
  {
    "url": "docs/1.0/content/index.html",
    "revision": "68ea8ecb9ec3aff60a9a1e3aaaf5b6c2"
  },
  {
    "url": "docs/1.0/content/reboot/index.html",
    "revision": "cffa6efdf1f722203e6688076e2c9083"
  },
  {
    "url": "docs/1.0/content/tables/index.html",
    "revision": "1f670c136c1dd96f6151e3f5d43c4e53"
  },
  {
    "url": "docs/1.0/content/typography/index.html",
    "revision": "f8ad9dac1d129ccd3ed7045143cf4b65"
  },
  {
    "url": "docs/1.0/examples/album/album.css",
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "docs/1.0/examples/album/index.html",
    "revision": "8088e1d95bc9263681886821a80f5bcc"
  },
  {
    "url": "docs/1.0/examples/blog/blog.css",
    "revision": "095c85e484178b56ad0446775869e628"
  },
  {
    "url": "docs/1.0/examples/blog/index.html",
    "revision": "c1d0cf090944a6369dcfeaeebbf73eff"
  },
  {
    "url": "docs/1.0/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/1.0/examples/carousel/index.html",
    "revision": "b60a1b9d8a622551914f1869d2070ca6"
  },
  {
    "url": "docs/1.0/examples/checkout/form-validation.css",
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "docs/1.0/examples/checkout/index.html",
    "revision": "79021acecd4d9e2e84e26cf84153153b"
  },
  {
    "url": "docs/1.0/examples/cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/1.0/examples/cover/index.html",
    "revision": "3c6d961d4b1d583a8cf972d66d6b8171"
  },
  {
    "url": "docs/1.0/examples/dashboard/dashboard.css",
    "revision": "419f2b36ccf58f5cb1b5b557658b65dd"
  },
  {
    "url": "docs/1.0/examples/dashboard/index.html",
    "revision": "de15dff920a3aebbb324d257985e4ba8"
  },
  {
    "url": "docs/1.0/examples/floating-labels/floating-labels.css",
    "revision": "0711f793d4f6bc20572f9b357c061b5b"
  },
  {
    "url": "docs/1.0/examples/floating-labels/index.html",
    "revision": "e16e25d95c2a41f6d3d8ff7b94b82936"
  },
  {
    "url": "docs/1.0/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/1.0/examples/grid/index.html",
    "revision": "33dfa672c9163374f9d790a292c884d1"
  },
  {
    "url": "docs/1.0/examples/index.html",
    "revision": "766ce6a600b37e70af542a841733381e"
  },
  {
    "url": "docs/1.0/examples/jumbotron/index.html",
    "revision": "187a48844da8e19e0765d417a5077f81"
  },
  {
    "url": "docs/1.0/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/1.0/examples/navbar-bottom/index.html",
    "revision": "dd165c45857a4239ce7787aea5a7bff5"
  },
  {
    "url": "docs/1.0/examples/navbar-fixed/index.html",
    "revision": "1178a7c1f06eeeea76176173b2e0d7fd"
  },
  {
    "url": "docs/1.0/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/1.0/examples/navbar-static/index.html",
    "revision": "8f818f7c1ab4e90bf1ea9b0bd0adb5b3"
  },
  {
    "url": "docs/1.0/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/1.0/examples/navbars/index.html",
    "revision": "84494d9562fd4bfb7a613cde029e839f"
  },
  {
    "url": "docs/1.0/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/1.0/examples/offcanvas/index.html",
    "revision": "5581dfe7bff85b99df300fdf455176a7"
  },
  {
    "url": "docs/1.0/examples/offcanvas/offcanvas.css",
    "revision": "b5d28d8db34c23de78c46784c4ba4331"
  },
  {
    "url": "docs/1.0/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/1.0/examples/pricing/index.html",
    "revision": "b8df028d11c89dae8309b9369922f011"
  },
  {
    "url": "docs/1.0/examples/pricing/pricing.css",
    "revision": "1e170831b26afb7a6bcde4f0bc2cb29b"
  },
  {
    "url": "docs/1.0/examples/product/index.html",
    "revision": "7424fe35dc94c1190849c8627cc33ef0"
  },
  {
    "url": "docs/1.0/examples/product/product.css",
    "revision": "9db57bf56394ba8cd85abd5f7ebc8ef1"
  },
  {
    "url": "docs/1.0/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/1.0/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/1.0/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/1.0/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/1.0/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/1.0/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/1.0/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/1.0/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/1.0/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/1.0/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/1.0/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/1.0/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/1.0/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/1.0/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/1.0/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/1.0/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/1.0/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/1.0/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/1.0/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/1.0/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/1.0/examples/sign-in/index.html",
    "revision": "96ef25d250a29ba9272ee52fcf369101"
  },
  {
    "url": "docs/1.0/examples/sign-in/signin.css",
    "revision": "00e205f17ee0cd3f59d5e1e1e9cf3b3f"
  },
  {
    "url": "docs/1.0/examples/starter-template/index.html",
    "revision": "d405e899854462588983ff1b304f7d0d"
  },
  {
    "url": "docs/1.0/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/1.0/examples/sticky-footer-navbar/index.html",
    "revision": "cf52f64c92b9c1fae606d610fe2d2116"
  },
  {
    "url": "docs/1.0/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/1.0/examples/sticky-footer/index.html",
    "revision": "7f8a7abbce45fa7d948f8fe3a41c3545"
  },
  {
    "url": "docs/1.0/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/1.0/examples/tooltip-viewport/index.html",
    "revision": "b1074cded6dd5b3603fd470151af233e"
  },
  {
    "url": "docs/1.0/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/1.0/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/1.0/extend/approach/index.html",
    "revision": "8c634919aaef9f55dfd5d8e1904ce369"
  },
  {
    "url": "docs/1.0/extend/icons/index.html",
    "revision": "1d8da1f5ff8d8c6ec3aeea23f7b8c737"
  },
  {
    "url": "docs/1.0/extend/index.html",
    "revision": "0beb9e3af715390ff5cb1b13e5fe5db4"
  },
  {
    "url": "docs/1.0/getting-started/accessibility/index.html",
    "revision": "630cb6b8ba00436d6df4e834f53a3c35"
  },
  {
    "url": "docs/1.0/getting-started/best-practices/index.html",
    "revision": "7ee294312ed2b39963c9eead94a8b9a2"
  },
  {
    "url": "docs/1.0/getting-started/browsers-devices/index.html",
    "revision": "de37e27ff3cb408a4ad2c1a0abcc4001"
  },
  {
    "url": "docs/1.0/getting-started/build-tools/index.html",
    "revision": "2f3fe2ba4f044171de5c841f126a9779"
  },
  {
    "url": "docs/1.0/getting-started/contents/index.html",
    "revision": "da1e562937886c316f7aa6b76f0beff7"
  },
  {
    "url": "docs/1.0/getting-started/download/index.html",
    "revision": "e9ba33a0eff7f6f2697c93d601a569e2"
  },
  {
    "url": "docs/1.0/getting-started/index.html",
    "revision": "d404a0805c36ff62272a057acccd96e0"
  },
  {
    "url": "docs/1.0/getting-started/introduction/index.html",
    "revision": "69cc077f92bac90242cdca6ecb769e3e"
  },
  {
    "url": "docs/1.0/getting-started/javascript/index.html",
    "revision": "b034f1add7e044df4ad0c7428262be2e"
  },
  {
    "url": "docs/1.0/getting-started/options/index.html",
    "revision": "8a85343b50e92e8e0077dbb8390f9524"
  },
  {
    "url": "docs/1.0/getting-started/theming/index.html",
    "revision": "15533a93435301693b10c36b35dc605c"
  },
  {
    "url": "docs/1.0/getting-started/webpack/index.html",
    "revision": "ec77a23f5a8a88486ddd1b98658c9c92"
  },
  {
    "url": "docs/1.0/history/index.html",
    "revision": "06a8a5da85feaf9ee547abac39d0e983"
  },
  {
    "url": "docs/1.0/index.html",
    "revision": "d404a0805c36ff62272a057acccd96e0"
  },
  {
    "url": "docs/1.0/layout/grid/index.html",
    "revision": "08c91d5d9799c16d810c386db9ae7844"
  },
  {
    "url": "docs/1.0/layout/index.html",
    "revision": "042d41f47b83256e8cc9a2b4aa0a545d"
  },
  {
    "url": "docs/1.0/layout/media-object/index.html",
    "revision": "a488d58998105b9de471c65dae3205b9"
  },
  {
    "url": "docs/1.0/layout/overview/index.html",
    "revision": "d9bb722a5572dfb820b4ed8e3ae98f96"
  },
  {
    "url": "docs/1.0/layout/utilities-for-layout/index.html",
    "revision": "afa594060e2ecf5622f000cc070eafe4"
  },
  {
    "url": "docs/1.0/migration/index.html",
    "revision": "c68566af1fedcee4eb53d846450101f9"
  },
  {
    "url": "docs/1.0/team/index.html",
    "revision": "06a8a5da85feaf9ee547abac39d0e983"
  },
  {
    "url": "docs/1.0/utilities/borders/index.html",
    "revision": "3e59be0f9d7a9924a2e507c724ff6027"
  },
  {
    "url": "docs/1.0/utilities/clearfix/index.html",
    "revision": "c5203223dc990bed38f57ff91fde4778"
  },
  {
    "url": "docs/1.0/utilities/close-icon/index.html",
    "revision": "6a86595dbf91ce1de45a05f3a933e277"
  },
  {
    "url": "docs/1.0/utilities/colors/index.html",
    "revision": "b2be38f8f2c356b523ac6a23c207bd9a"
  },
  {
    "url": "docs/1.0/utilities/display/index.html",
    "revision": "f7f0acfa7f1fdfb953fb04ce16c3503d"
  },
  {
    "url": "docs/1.0/utilities/embed/index.html",
    "revision": "6b9dffce2022ed1cbe00c02023d07b34"
  },
  {
    "url": "docs/1.0/utilities/flex/index.html",
    "revision": "5ddc7e655bed849f074421a01757f470"
  },
  {
    "url": "docs/1.0/utilities/float/index.html",
    "revision": "8f405f0ba1eaf34aaa9b2cdf3216ae83"
  },
  {
    "url": "docs/1.0/utilities/image-replacement/index.html",
    "revision": "5eaf4154c670c0ebfefafd9c2336c524"
  },
  {
    "url": "docs/1.0/utilities/index.html",
    "revision": "8442eee2f227912ca406a84c7639d4e0"
  },
  {
    "url": "docs/1.0/utilities/position/index.html",
    "revision": "76d86aa96cbdbcea6a0d684de1096b8c"
  },
  {
    "url": "docs/1.0/utilities/screenreaders/index.html",
    "revision": "a35adba3cd6d305f42198030efb131eb"
  },
  {
    "url": "docs/1.0/utilities/shadows/index.html",
    "revision": "24432e019f255d5bb26551635cd271a0"
  },
  {
    "url": "docs/1.0/utilities/sizing/index.html",
    "revision": "6a754167b887a42f4add24ab66a92a7e"
  },
  {
    "url": "docs/1.0/utilities/spacing/index.html",
    "revision": "6bdf14022dc037eae3832943393c71d2"
  },
  {
    "url": "docs/1.0/utilities/text/index.html",
    "revision": "837df2d555cc105712015830f0020336"
  },
  {
    "url": "docs/1.0/utilities/vertical-align/index.html",
    "revision": "511a56fd7180ab9eb845daea272fdad9"
  },
  {
    "url": "docs/1.0/utilities/visibility/index.html",
    "revision": "8d1e6f02148e5f91e9eb7e31af9c65ba"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "d404a0805c36ff62272a057acccd96e0"
  },
  {
    "url": "docs/index.html",
    "revision": "d404a0805c36ff62272a057acccd96e0"
  },
  {
    "url": "examples/index.html",
    "revision": "09e8d1d631503364ed9d5bb4927dd100"
  },
  {
    "url": "index.html",
    "revision": "a690d63e2781db905873e30ade67c678"
  },
  {
    "url": "redirects.json",
    "revision": "9d9ae2741884b3d8f7bd35fd38798f78"
  }
])
