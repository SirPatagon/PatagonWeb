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
.sp-header {
    height: calc(50vh - $navbar-height);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: scale(.75);

    @media screen and (min-height: 500px) {
        transform: none;
    }

    @media screen and (orientation: landscape) {
        height: calc(75vh - $navbar-height);
    }
}
</style>
