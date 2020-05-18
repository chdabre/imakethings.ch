<template>
  <main class="container col">
    <div class="row">
      <a class="btn" href="/">
        <arrow-left-icon size="16"></arrow-left-icon>
        Back
      </a>
    </div>
    <section class="title row">
      <h1 class="title__project">{{ $page.frontmatter.title }}</h1>
    </section>
    <div class="row">
      <article class="content col">
        <section class="tags row">
          <span v-if="$page.frontmatter.year" v-text="$page.frontmatter.year"></span>
          <span v-for="(tag, index) in $page.frontmatter.tags" :key="index" v-text="tag"></span>
        </section>

        <section class="mobile-images">
          <div
            v-for="(image, index) in $page.frontmatter.side_images"
            :key="`mobile-${index}`"
            class="mobile-image"
          >
            <img
              :src="imageUrl(image.url)"
              :alt="image.description"
            >
          </div>
        </section>

        <Content/>
      </article>

      <aside class="images-aside col">
        <div
          v-for="(image, index) in $page.frontmatter.side_images"
          :key="`aside-${index}`"
          class="image-aside"
        >
          <img
            :src="imageUrl(image.url)"
            :alt="image.description"
          >
          <span v-text="image.description"></span>
        </div>
      </aside>
    </div>
  </main>
</template>

<script>
  import ArrowLeftIcon from 'mdi-vue/ArrowLeft.vue';

  export default {
    name: 'Project',
    components: {
      ArrowLeftIcon,
    },
    beforeMount() {
      this.setThemeColor();
    },
    methods: {
      setThemeColor() {
        const root = document.documentElement;
        root.style.setProperty('--theme-color', this.$page.frontmatter.color);
      },
      imageUrl (image) {
        return this.$site.themeConfig.cloudinary_base_url + '/w_600,h_400,c_fill' + image
      }
    },
  };
</script>

<style scoped lang="scss">
  @import "../style/project";
</style>
