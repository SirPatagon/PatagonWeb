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
    height: calc(100vh - $navbar-height);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
