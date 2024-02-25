<template>
    <sp-page class="sp-page--home">
        <template v-slot:header>
            <sp-header>
                <img class="sp-header__image" src="@/assets/logo.svg" /><br>
                <h1 class="sp-header__subtext"><span>SOFTWARE DEVELOPER</span> // <span>IT SPECIALIST</span></h1>
            </sp-header>
        </template>
        <sp-console/>
    </sp-page>
</template>

<script>
// @ is an alias to /src
import SpHeader from '@/components/SpHeader.vue';
import SpPage from '@/components/SpPage.vue';
import SpConsole from '@/components/SpConsole.vue';

export default {
    name: 'HomeView',
    components: {
        SpHeader,
        SpPage,
        SpConsole,
    },
};
</script>

<style scoped lang="scss">
.home {
    height: 75%;
}

</style>
