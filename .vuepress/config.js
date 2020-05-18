module.exports = {
    title: "Dario Breitenstein | I make things.",
    description: "Dario Breitenstein",
    themeConfig: {
        cloudinary_base_url: "https://res.cloudinary.com/dey9hupke/image/upload"
    },
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
