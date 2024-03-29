module.exports = {
    title: "Dario Breitenstein | I make things.",
    description: "Dario Breitenstein",
    themeConfig: {
        cloudinary_base_url: "https://res.cloudinary.com/dey9hupke/image/upload"
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-128427441-1' // UA-00000000-0
            }
        ]
    ],
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
        ['link', { rel: "manifest", href: "/site.webmanifest"}],
        ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#E5E5E5"}],
        ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
        ['meta', { name: "msapplication-TileColor", content: "#603cba"}],
        ['meta', { name: "msapplication-config", content: "/browserconfig.xml"}],
        ['meta', { name: "theme-color", content: "#E5E5E5"}],
        ['script', {}, `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WVHR3JL');
      `],
    ],
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-html5-embed'), {
                html5embed: {
                    useImageSyntax: true,
                    useLinkSyntax: false
                }
            })

            md.use(require('markdown-it-video', {
                youtube: { width: 640, height: 390 },
                vimeo: { width: 500, height: 281 },
                vine: { width: 600, height: 600, embed: 'simple' },
                prezi: { width: 550, height: 400 }
            }));
        }
    },
}
