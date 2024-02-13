<template>
    <div class="sp-page">
        <slot name="header"></slot>
        <nav class="sp-page__nav">
            <div class="sp-page__nav__background"></div>
            <router-link to="/">Home</router-link>
            &emsp;|&emsp;
            <router-link to="/about">Projects</router-link>
        </nav>
        <main class="sp-page__content">
            <slot/>
        </main>
    </div>
</template>

<script>
export default {
    name: 'SpPage',
};
</script>

<style lang="scss">
@import '@/styles/_Variables.scss';
@import '@/styles/_Mixins.scss';
.sp-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__nav {
        z-index: 1;
        height: $navbar-height;
        position: sticky;
        top: calc(100vh - $navbar-height);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: $purple-gradient;
        background-attachment: fixed;
        font-size: 18px;

        &::before {
            content: '';
            background: url('@/assets/black-felt.png');
            background-position-y: calc(-100vh + $navbar-height);
            position: absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
            z-index: -1;
        }

        a {
            font-weight: bold;
            text-decoration: none;

            &.router-link-exact-active {
                @include gradient-text;
            }
        }
    }

    &__content {
        max-width: 1200px;
        width: 100%;
        overflow: hidden;
        padding-bottom: $navbar-height;
    }

    @media screen and (min-width: 512px) {
        &__content {
            padding-bottom: 0;
        }
        &__nav {
            top: 0;
        }
    }
}
</style>
