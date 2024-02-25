<template>
    <a class="sp-project" :href="href">
        <div class="sp-project__image">
            <img :src="backgroundUrl"/>
        </div>
        <slot/>
    </a>
</template>

<script>
export default {
    name: 'SpProject',
    props: {
        href: String,
        backgroundUrl: String,
    },
};
</script>

<style scoped lang="scss">
.sp-project {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 20rem;
    width: 100%;
    font-size: 1.5rem;
    text-decoration: none;

    &:hover &__image {
        background-color: #fff2;
    }

    &:active &__image {
        background-color: #fff3;
    }

    &__image {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10rem;
        width: 100%;
        background-color: #fff1;
        backdrop-filter: blur(5px);
        border-radius: 1rem;
        transition: background-color .3s ease;
        margin-bottom: .5rem;

        img {
            max-height: 8rem;
            max-width: 18rem;
        }
    }
}
</style>
