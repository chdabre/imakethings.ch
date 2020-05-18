<template>
    <component :is="isIndex ? Index : Single"></component>
</template>
<script>
import Index from './views/Index';
import Single from './views/Single';

export default {
    data () {
        return {
            Index,
            Single
        }
    },
    computed: {
        isIndex() {
            return this.$page.path.endsWith("/");
        }
    }
};
</script>

<style lang="scss">
@import "./style/main";
</style>
