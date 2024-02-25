<template>
    <div class="sp-console">
        <div class="sp-console__header">visitor@sirpatagon.net:~</div>
        <label class="sp-console__content">
            <span v-html="outputText"></span><br>visitor@sirpatagon.net:{{ location }}$
            <span>{{ textBeforeCaret }}</span>
            <span :class="{ 'visibility-hack':caretVisibilityHack }"
                  class="sp-console__content__caret">
                  {{ textInCaret }}
            </span>
            <span>{{ textAfterCaret }}</span>
            <input class="sp-console__input" type="text" @input="updateCaretPosition"
                   @keydown="keyDown" @keyup="updateCaretPosition"
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
                        'welcome.txt': `
                            Welcome to my website!
                            You can find me on:

                            󰊤 GitHub   => https://github.com/SirPatagon

                            󰮠 GitLab   => https://gitlab.com/SirPatagon

                            󰕄 Twitter  => https://twitter.com/SirPatagon

                            󰫑 Mastodon => https://mastodon.social/@sirpatagon

                            󰓓 Steam    => https://steamcommunity.com/id/SirPatagon/

                            󰗃 YouTube  => https://www.youtube.com/channel/UClN8kD_2x5kIzmI852U4STw

                            󰊫 Gmail    => sirpatagon+development@gmail.com

                            DISCLAIMER: This console does not have any commands yet. 
                            └           Please be patient -> I'll implement them soon 🙏.

                        `,
                    },
                },
            },
            location: '~',
            outputText: '',
        };
    },
    methods: {
        prepareText (text) {
            let lines = text.split('\n');

            if (!lines[0].trim())
                lines = lines.slice(1);

            if (!lines[lines.length - 1].trim())
                lines = lines.slice(0, lines.length - 1);

            return lines.map(l => {
                const linkRegex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/igm;
                const mailRegex = /(\w|\+)+@\w+\.\w+/gi;
                let line = l.trim();
                line = line.replace(linkRegex, match => `<a href="${match}">${match}</a>`);
                line = line.replace(mailRegex, match => `<a href="mailto:${match}">${match}</a>`);
                return line;
            }).join('\n');
        },
        keyDown (e) {
            if (e.key === 'Enter')
                this.executeCommand(e);
            else
                this.updateCaretPosition(e);
        },
        updateCaretPosition (e) {
            if (e.key === 'Enter')
                return;

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
        getText () {
            return this.textBeforeCaret + this.textInCaret + this.textAfterCaret;
        },
        clearText () {
            this.textBeforeCaret = '';
            this.textInCaret = ' ';
            this.textAfterCaret = '';
        },
        executeCommand (e) {
            const command = this.getText();
            this.outputText += '\n' + `visitor@sirpatagon.net:${this.location}$ ` + command;
            e.target.value = '';
            this.clearText();

            // Hack for the rendering to update first
            setTimeout(() => {
                const scrollContainer = this.$el.querySelector('.sp-console__content');
                scrollContainer.scrollTo(0, scrollContainer.scrollHeight);
            }, 100);
        },
    },
    mounted () {
        this.outputText = this.prepareText(this.fileSystem.home.visitor['welcome.txt']);
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
