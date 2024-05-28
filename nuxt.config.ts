// import daisyui from "daisyui";
const title = "마인드팡 - 재미있는 무료 테스트 모음";
const description =
  "마인드팡의 모든 테스트들은 무료로 즐길 수 있습니다. 심리, 연애, 퀴즈, 방송 등 다양한 테스트를 즐겨보세요.";
const logo = "https://mindpang.com/mindpang-opengraph-logo.png";

// const preRoutes = require("./assets/js/preRoute.json");

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  // tailwindcss: {
  //   config: {
  //     plugins: [daisyui],
  //   },
  // },
  runtimeConfig: {
    public: {
      BASE_URL: "https://api.mindpang.com/api",
    },
  },
  // nitro: {
  //   prerender: {
  //     // autoSubfolderIndex: false,
  //     routes: preRoutes,
  //     ignore: ["/make"],
  //   },
  // },
  // modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  // css: ["~/assets/css/style.css", "~/assets/css/mobile.css"],
  // tailwindcss: {
  //   cssPath: "~/assets/css/tailwind.css",
  //   configPath: "tailwind.config",
  //   exposeConfig: false,
  //   injectPosition: 0,
  //   viewer: true,
  // },
  // plugins: ["@/plugins/dasiyui"],
  // app: {
  //   head: {
  //     htmlAttrs: { lang: "ko" },
  //     title: title,
  //     charset: "utf-8",
  //     viewport: "width=device-width, initial-scale=1",
  //     script: [
  //       {
  //         src: "https://t1.kakaocdn.net/kakao_js_sdk/v1/kakao.min.js",
  //       },
  //       // {
  //       //   src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130836798889522",
  //       //   crossorigin: "anonymous",
  //       //   async: true,
  //       // },
  //       {
  //         src: "//wcs.naver.net/wcslog.js",
  //         type: "text/javascript",
  //       },
  //       {
  //         innerHTML:
  //           'if(!wcs_add) var wcs_add = {}; wcs_add["wa"] = "18cf866f0226840"; if(window.wcs) {wcs_do();}',
  //         type: "text/javascript",
  //       },
  //       {
  //         innerHTML:
  //           '(function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); }; t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt"; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, "clarity", "script", "feybr6kyxk");',
  //         type: "text/javascript",
  //       },
  //     ],
  //     link: [
  //       {
  //         rel: "canonical",
  //         href: "https://mindpang.com",
  //       },
  //     ],
  //     meta: [
  //       {
  //         name: "naver-site-verification",
  //         content: "cfae9d48e4136a6cc0488f13e108a464fcd96305",
  //       },
  //       {
  //         name: "google-site-verification",
  //         content: "VvMMlxDsaibrAPB29RkBlph_fkpfGw92LPRxcYC0wrA",
  //       },
  //       {
  //         name: "16cdf8d64fd8bf0",
  //         content: "16cdf8d64fd8bf0",
  //       },
  //       {
  //         name: "robots",
  //         content: "index, follow",
  //       },
  //       {
  //         name: "theme-color",
  //         content: "#E5BA73",
  //       },
  //       {
  //         name: "description",
  //         content: description,
  //       },
  //       {
  //         name: "og:type",
  //         content: "website",
  //       },
  //       {
  //         name: "og:url",
  //         content: "https://mindpang.com",
  //       },
  //       {
  //         name: "og:article:author",
  //         content: "Mindpang",
  //       },
  //       {
  //         name: "og:site_name",
  //         content: "마인드팡",
  //       },
  //       {
  //         name: "og:title",
  //         content: title,
  //       },
  //       {
  //         name: "og:image",
  //         content: logo,
  //       },
  //       {
  //         name: "twitter:card",
  //         content: "summary_large_image",
  //       },
  //       {
  //         name: "twitter:site",
  //         content: "@mindpang.com",
  //       },
  //       {
  //         name: "twitter:title",
  //         content: title,
  //       },
  //       {
  //         name: "twitter:description",
  //         content: description,
  //       },
  //       {
  //         name: "twitter:image",
  //         content: logo,
  //       },
  //       {
  //         name: "apple-touch-icon",
  //         content: logo,
  //       },
  //     ],
  //   },
  // },
});
