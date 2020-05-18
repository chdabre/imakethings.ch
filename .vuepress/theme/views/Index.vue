<template>
  <main class="container col">
    <div class="content-row row">
      <section class="title col">
        <h1 class="title__main"><Content /></h1>
        <transition name="slide-fade" mode="out-in">
          <h1
            class="title__project"
            v-text="posts[current].frontmatter.index_title"
            :key="current"
          ></h1>
        </transition>

        <div class="row">
          <nav class="nav-dots">
            <ul>
              <li
                v-for="(post, index) in posts"
                :key="index"
              >
                <a
                  :class="{ active: current === index }"
                  :style="`--theme-color: ${post.frontmatter.color};`"
                  @click="changeSlide(index)"
                ></a>
              </li>
            </ul>
          </nav>
          <a
            class="btn"
            :href="posts[current].path"
          >
            Read More
            <arrow-right-icon size="16"></arrow-right-icon>
          </a>
        </div>
      </section>
      <section class="spacer"></section>
      <section class="image-aside">
        <transition name="fade">
          <img
            :src="imageUrl(posts[current].frontmatter.image)"
            :key="current"
            :alt="`Project: ${posts[current].frontmatter.title}`"
          >
        </transition>
      </section>
    </div>

    <footer>
      <h3 v-html="$page.frontmatter.footer"></h3>
    </footer>
  </main>
</template>


<script>
  import ArrowRightIcon from 'mdi-vue/ArrowRight.vue';

  export default {
    components: {
      ArrowRightIcon,
    },
    data() {
      return {
        slideInterval: null,
        current: 0
      }
    },
    created() {
      this.setThemeColor();
      this.slideInterval = setInterval(this.changeSlide, 5000);
    },
    beforeDestroy() {
      clearInterval(this.slideInterval);
    },
    computed: {
      posts() {
        return this.$site.pages
          .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
          .sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));
      }
    },
    methods: {
      resetSlide() {
        clearInterval(this.slideInterval);
        this.slideInterval = setInterval(this.changeSlide, 5000);
      },
      changeSlide(index) {
        if (typeof index === 'undefined') {
          this.current++;
          this.current %= this.posts.length;
        } else {
          this.current = index
          this.resetSlide();
        }
        this.setThemeColor();
      },
      setThemeColor() {
        const root = document.documentElement;
        root.style.setProperty('--theme-color', this.posts[this.current].frontmatter.color);
      },
      imageUrl (image) {
        return this.$site.themeConfig.cloudinary_base_url + '/w_600,h_400,c_fill' + image
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../style/home";
  @import "../style/transitions";
</style>
