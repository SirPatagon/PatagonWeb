<template>
    <div class="sp-header">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'SpHeader',
};
</script>

<style lang="scss">
@import '@/styles/_Variables.scss';
@import '@/styles/_Mixins.scss';
.sp-header {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: scale(.75);
    text-transform: uppercase;

    @media screen and (min-height: 500px) {
        transform: none;
    }

    @media screen and (orientation: landscape) {
        height: calc(75vh - $navbar-height);
    }

    &__subtext {
        font-size: 4vw;

        @media screen and (min-width: 800px) {
            font-size: 32px;
        }
    }

    &__image {
        width: 90vw;
        max-width: 512px;
    }

    &__icon {
        @include gradient-text;
        font-size: 16vw;

        @media screen and (min-width: 800px) {
            font-size: 128px;
        }
    }
}
</style>
