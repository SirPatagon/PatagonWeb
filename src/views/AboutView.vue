<template>
    <sp-page class="sp-page--about">
        <template v-slot:header>
                <sp-header>
                    <span class="sp-icon sp-header__icon">󰛓</span>
                    <h1 class="sp-header__subtext">Something about me</h1>
                </sp-header>
        </template>
        <p>
            I'm a software developer and IT specialist from Germany.
            I've always loved tinkering with my PC since I was in third grade and that has not really changed since then.
        </p>
        <p>
            Currently I'm especially interested in building, managing and maintaining server infrastructure, both locally at home and in the cloud&trade;.
        </p>
        <p>
            I also love experimenting with web design and redoing my website every now and then or adding new features to it.
        </p>
        <p>
            I have a wide range of interests, including computer science and software development, language, history, theology/mythology, geography, physics and chemistry.
        </p>
    </sp-page>
</template>

<script>
import SpHeader from '@/components/SpHeader.vue';
import SpPage from '@/components/SpPage.vue';

export default {
    name: 'AboutView',
    components: {
        SpHeader,
        SpPage,
    },
};
</script>
