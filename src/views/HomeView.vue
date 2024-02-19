<template>
    <sp-page class="sp-page--home">
        <template v-slot:header>
            <sp-header>
                <img class="sp-header__image" src="@/assets/logo.svg" /><br>
                <h1 class="sp-header__subtext"><span>SOFTWARE DEVELOPER</span> // <span>IT SPECIALIST</span></h1>
            </sp-header>
        </template>
        <!--This *has* to be in one line because white-space: pre-wrap is stupid-->
        <sp-console>Welcome to my website!<br>You can also find me on:<br><br>󰊤 GitHub&nbsp;&nbsp;&nbsp;=>&nbsp;<a href="https://github.com/SirPatagon">https://github.com/SirPatagon</a><br><br>󰮠 GitLab&nbsp;&nbsp;&nbsp;=>&nbsp;<a href="https://gitlab.com/SirPatagon">https://gitlab.com/SirPatagon</a><br><br>󰕄 Twitter&nbsp;&nbsp;=>&nbsp;<a href="https://twitter.com/SirPatagon">https://twitter.com/SirPatagon</a><br><br>󰫑 Mastodon&nbsp;=>&nbsp;<a href="https://mastodon.social/@sirpatagon">https://mastodon.social/@sirpatagon</a><br><br>󰓓 Steam&nbsp;&nbsp;&nbsp;&nbsp;=>&nbsp;<a href="https://steamcommunity.com/id/SirPatagon/">https://steamcommunity.com/id/SirPatagon/</a><br><br>󰗃 YouTube&nbsp;&nbsp;=>&nbsp;<a href="https://www.youtube.com/channel/UClN8kD_2x5kIzmI852U4STw">https://www.youtube.com/channel/UClN8kD_2x5kIzmI852U4STw</a><br><br>󰊫 Gmail&nbsp;&nbsp;&nbsp;&nbsp;=>&nbsp;<a href="mailto:sirpatagon+development@gmail.com">mailto:sirpatagon+development@gmail.com</a><br><br></sp-console>
    </sp-page>
</template>

<script>
// @ is an alias to /src
import SpHeader from '@/components/SpHeader.vue';
import SpPage from '@/components/SpPage.vue';
import SpConsole from '@/components/SpConsole.vue';

export default {
    name: 'HomeView',
    components: {
        SpHeader,
        SpPage,
        SpConsole,
    },
};
</script>

<style scoped lang="scss">
.home {
    height: 75%;
}
.sp-header {
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
}

</style>
