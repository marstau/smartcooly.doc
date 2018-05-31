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
    "url": "assets/img/media/add-algorithm.png",
    "revision": "ecc303dd0ec2a4ed1ac41aadf7be058d"
  },
  {
    "url": "assets/img/media/add-exchange.png",
    "revision": "362b5d7c64b2d0664d96cc234bfa7ed6"
  },
  {
    "url": "assets/img/media/add-trader.png",
    "revision": "6381df876ac759d0ccc12e57f851e3d7"
  },
  {
    "url": "assets/img/media/edit-algorithm.png",
    "revision": "0227dbea83203b3ff8a1155e13730afb"
  },
  {
    "url": "assets/img/media/run-trader.png",
    "revision": "3a4e2d2610909888965b6c277ce484c5"
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
    "url": "cn/docs/1.0/about/denote/index.html",
    "revision": "2fae4ef21add7d1e28b68d3ed1f8da61"
  },
  {
    "url": "cn/docs/1.0/about/license/index.html",
    "revision": "2882cd3f81db6d4d6b4f9bc11907e697"
  },
  {
    "url": "cn/docs/1.0/api/index.html",
    "revision": "084611f946d1d95203e58e8245db4a36"
  },
  {
    "url": "cn/docs/1.0/getting-started/download/index.html",
    "revision": "126a55b9928a6a5b8f7dc802544d7e5b"
  },
  {
    "url": "cn/docs/1.0/getting-started/index.html",
    "revision": "d58e8fe75ca9bc1a042edfb482ff5c2d"
  },
  {
    "url": "cn/docs/1.0/getting-started/installation/index.html",
    "revision": "ac6bc68a06b1a0779ebe0f3ee1ed0a27"
  },
  {
    "url": "cn/docs/1.0/getting-started/introduction/index.html",
    "revision": "686daf11f8c80bafd71f0a22e49120f9"
  },
  {
    "url": "cn/docs/1.0/index.html",
    "revision": "d58e8fe75ca9bc1a042edfb482ff5c2d"
  },
  {
    "url": "cn/docs/1.0/references/cryptocurrency-exchange-markets/index.html",
    "revision": "73786ea316e02ce72f6d5377c5358883"
  },
  {
    "url": "cn/docs/1.0/support-exchanges/index.html",
    "revision": "fffcc6ce723c07579b19aa87f617568c"
  },
  {
    "url": "cn/docs/1.0/usage/index.html",
    "revision": "341a92eb27c1326bb98c5da91dc82e64"
  },
  {
    "url": "cn/docs/getting-started/index.html",
    "revision": "d58e8fe75ca9bc1a042edfb482ff5c2d"
  },
  {
    "url": "cn/docs/index.html",
    "revision": "d58e8fe75ca9bc1a042edfb482ff5c2d"
  },
  {
    "url": "cn/index.html",
    "revision": "f387132652091b87c5fda5b41a12ba89"
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
    "url": "docs/1.0/getting-started/index.html",
    "revision": "d58e8fe75ca9bc1a042edfb482ff5c2d"
  },
  {
    "url": "docs/1.0/index.html",
    "revision": "d58e8fe75ca9bc1a042edfb482ff5c2d"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "d58e8fe75ca9bc1a042edfb482ff5c2d"
  },
  {
    "url": "docs/index.html",
    "revision": "d58e8fe75ca9bc1a042edfb482ff5c2d"
  },
  {
    "url": "en/docs/1.0/about/denote/index.html",
    "revision": "75a0052a499630f05966efefc5b34f99"
  },
  {
    "url": "en/docs/1.0/about/license/index.html",
    "revision": "3a5de367d001febc5bb5eae1f24558bb"
  },
  {
    "url": "en/docs/1.0/api/index.html",
    "revision": "e105a12e886b23702d960b4568e140e6"
  },
  {
    "url": "en/docs/1.0/getting-started/download/index.html",
    "revision": "27bc804e09a607a6bad4e0080fd50cde"
  },
  {
    "url": "en/docs/1.0/getting-started/index.html",
    "revision": "fd5a1e63a182284c084731286df4f12b"
  },
  {
    "url": "en/docs/1.0/getting-started/installation/index.html",
    "revision": "9e29df2f49c893fd12e726c4a5774872"
  },
  {
    "url": "en/docs/1.0/getting-started/introduction/index.html",
    "revision": "1bb503f37b4aad801281cfaf84c7b93a"
  },
  {
    "url": "en/docs/1.0/index.html",
    "revision": "fd5a1e63a182284c084731286df4f12b"
  },
  {
    "url": "en/docs/1.0/references/cryptocurrency-exchange-markets/index.html",
    "revision": "0b13db15b20be353e172c6aac23219e6"
  },
  {
    "url": "en/docs/1.0/support-exchanges/index.html",
    "revision": "440f4614eb129f029cc4437b35b49bc5"
  },
  {
    "url": "en/docs/1.0/usage/index.html",
    "revision": "eeb63367341eafefb5153dfe6b971643"
  },
  {
    "url": "en/docs/getting-started/index.html",
    "revision": "fd5a1e63a182284c084731286df4f12b"
  },
  {
    "url": "en/docs/index.html",
    "revision": "fd5a1e63a182284c084731286df4f12b"
  },
  {
    "url": "en/index.html",
    "revision": "ce3470ea38b541a78067b2c6671d6ed1"
  },
  {
    "url": "index.html",
    "revision": "9482b5a74f3173ce0195dfa62ac06335"
  },
  {
    "url": "redirects.json",
    "revision": "d68e11eb81f69b15c890475ade9e01d8"
  }
])
