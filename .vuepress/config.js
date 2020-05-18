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
        }
    },
}
