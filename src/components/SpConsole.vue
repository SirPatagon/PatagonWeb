<template>
    <div class="sp-console">
        <div class="sp-console__header">visitor@sirpatagon.net:~</div>
        <label class="sp-console__content">
            <slot/>visitor@sirpatagon.net:~$
            <span>{{ textBeforeCaret }}</span>
            <span :class="{ 'visibility-hack':caretVisibilityHack }"
                  class="sp-console__content__caret">
                  {{ textInCaret }}
            </span>
            <span>{{ textAfterCaret }}</span>
            <input class="sp-console__input" type="text" @input="updateCaretPosition"
                   @keydown="updateCaretPosition" @keyup="updateCaretPosition"
                   @select="e=>{e.target.selectionStart = e.target.selectionEnd;}"/>
        </label>
    </div>
</template>

<script>
export default {
    name: 'SpConsole',
    data () {
        return {
            textBeforeCaret: '',
            textInCaret: ' ',
            textAfterCaret: '',
            caretVisibilityHack: false,
            caretBlinkStopTimer: null,
            fileSystem: {
                home: {
                    visitor: {
                        'welcome.txt': `Welcome to my website!
You can find me on:

󰊤 GitHub   => https://github.com/SirPatagon

󰮠 GitLab   => https://gitlab.com/SirPatagon

󰕄 Twitter  => https://twitter.com/SirPatagon

󰫑 Mastodon => https://mastodon.social/@sirpatagon

󰓓 Steam    => https://steamcommunity.com/id/SirPatagon/

󰗃 YouTube  => https://www.youtube.com/channel/UClN8kD_2x5kIzmI852U4STw

󰊫 Gmail    => mailto:sirpatagon+development@gmail.com`,
                    },
                },
            },
        };
    },
    methods: {
        updateCaretPosition (e) {
            this.caretVisibilityHack = true;
            const text = e.target.value;
            const position = e.target.selectionStart;
            this.textBeforeCaret = text.substring(0, position);
            this.textInCaret = text.substring(position, position + 1) || ' ';
            this.textAfterCaret = text.substring(position + 1, text.length);
            clearTimeout(this.caretBlinkStopTimer);
            this.caretBlinkStopTimer = setTimeout(() => {
                this.caretVisibilityHack = false;
            }, 100);
        },
    },
};
</script>

<style lang="scss">
@import '@/styles/_Variables.scss';
.sp-console {
    $margin: 1rem;
    $header-height: 37.5px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 6px 6px 0 0;
    background: #0005;
    backdrop-filter: blur(5px);
    margin: $margin 0;

    &__content {
        display: block;
        height: 620px;
        max-height: calc(95vh - $navbar-height - $header-height - $margin);
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
        overflow-x: hidden;

        a {
            white-space: pre-wrap;
        }

        &::selection, & *::selection {
            background: white;
            color: black;
        }

        &:focus-within &__caret {
            @keyframes blink {
                from,
                to {
                    background: white;
                    color: black;
                }
                50% {
                    background: transparent;
                    color: white;
                }
            }
            animation: blink 1.2s step-end infinite;

            &.visibility-hack {
                animation: none;
                background:white;
                color:black;
            }
        }
    }

    &__input {
        width: 0;
        height: 0;
        background:transparent;
        outline: none;
        border:none;
    }

    &__header {
        position: relative;
        box-sizing: border-box;
        background: linear-gradient(180deg, #2b2b2b, #262626);
        border-radius: 6px 6px 0 0;
        height: $header-height;
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
