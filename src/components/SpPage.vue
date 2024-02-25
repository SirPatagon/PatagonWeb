<template>
    <div class="sp-page">
        <slot name="header"></slot>
        <nav class="sp-page__nav">
            <div class="sp-page__nav__content">
                <router-link class="sp-page__nav__link" to="/">
                    <span class="sp-page__nav__link__content">
                        <span class="sp-icon">󰋜</span>
                        <br>
                        Home
                    </span>
                </router-link>
                <router-link class="sp-page__nav__link" to="/projects">
                    <span class="sp-page__nav__link__content">
                        <span class="sp-icon">󱃖</span>
                        <br>
                        Projects
                    </span>
                </router-link>
                <router-link class="sp-page__nav__link" to="/about">
                    <span class="sp-page__nav__link__content">
                        <span class="sp-icon">󰛓</span>
                        <br>
                        About me
                    </span>
                </router-link>
            </div>
        </nav>
        <main class="sp-page__content">
            <slot/>
        </main>
        <footer class="sp-page__footer">
            Copyright 󰗦 {{ (new Date()).getFullYear() }} SirPatagon
        </footer>
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
    padding: .5rem;

    &__nav {
        z-index: 1;
        height: $navbar-height;
        position: fixed;
        top: calc(100vh - $navbar-height);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: $purple-gradient;
        background-attachment: fixed;

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

        &__content {
            max-width: 1200px;
            width: 100%;
            display: flex;
        }

        &__link {
            text-decoration: none;
            text-align: center;
            font-size: 1rem;
            width: 100%;
            position: relative;

            &[href] {
                color: #fffa;
            }

            &::before{
                content:'';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                transition: background-color .3s ease;
            }

            &:hover::before {
                background-color: #fff1;
            }

            &:active::before {
                background-color: #fff2;
            }

            &.router-link-exact-active {
                * {
                    @include gradient-text;
                }
            }

            & .sp-icon {
                display: inline-block;
                font-size: 1.5em;
            }
        }
    }

    &__content {
        max-width: 1200px;
        width: 100%;
        overflow: hidden;
    }

    &__footer {
        margin-top: 3rem;
        margin-bottom: 1rem;
        padding-bottom: $navbar-height;
    }

    @media screen and (min-width: 512px) {
        &__content {
            padding-bottom: 0;
            margin-top: 2rem;
        }
        &__nav {
            position: sticky;
            top: 0;
        }
        &__footer {
            padding-bottom: 0;
        }
    }
}
</style>
