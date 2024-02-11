<template>
    <div class="sp-console">
        <div class="sp-console__header">visitor@sirpatagon.net:~</div>
        <label class="sp-console__content">
            <slot/>visitor@sirpatagon.net:~$&nbsp;{{ text }}<span class="sp-console__content__caret">█</span>
            <input class="sp-console__input" type="text" v-model="text"/>
        </label>
    </div>
</template>

<script>
export default {
    name: 'SpConsole',
    data () {
        return {
            text: '',
        };
    },
};
</script>

<style lang="scss">
@import '@/styles/_Variables.scss';
.sp-console {
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 6px 6px 0 0;
    background: #0005;
    backdrop-filter: blur(5px);
    margin: 1rem;

    &__content {
        display: block;
        height: 620px;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
        overflow-x: hidden;

        a {
            white-space: pre-wrap;
        }

        &::selection, a::selection {
            background: white;
            color: black;
        }
        &:focus-within &__caret {
            @keyframes blink {
                from,
                to {
                    visibility: hidden;
                }
                50% {
                    visibility: visible;
                }
            }
            animation: blink 1.2s step-end infinite;
        }
    }

    &__input {
        width: 0;
        height: 0;
        background:transparent;
        font-family: 'Fira Code NF', monospace;
        outline: none;
        border:none;
    }

    &__header {
        position: relative;
        box-sizing: border-box;
        background: linear-gradient(180deg, #2b2b2b, #262626);
        border-radius: 6px 6px 0 0;
        height: 37.5px;
        border-bottom: 1px solid black;
        border-top: 1px solid #383838;
        display: flex;
        justify-content: center;
        padding-top: 8px;
        font-family: 'Cantarell', 'Noto Sans', sans-serif;
        font-size: 14px;
        font-weight: bold;
        user-select: none;

        &::after {
            content: '';
            position: absolute;
            top: 11px;
            right: -8px;
            font-family: 'Fira Code NF', monospace;
            font-size: 10px;
            letter-spacing: 1.5rem;
        }
    }
}
</style>
