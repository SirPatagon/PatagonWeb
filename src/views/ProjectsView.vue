<template>
    <sp-page class="sp-page--projects">
        <template v-slot:header>
                <sp-header>
                    <span class="sp-icon sp-header__icon">󱃖</span>
                    <h1 class="sp-header__subtext">Here's a selection of my projects</h1>
                </sp-header>
        </template>
        <div class="sp-flex-center-wrapper">
            <sp-project href="https://github.com/SirPatagon/dionysos"
                        background-url="https://raw.githubusercontent.com/SirPatagon/dionysos/main/res/gui/images/logo_light.svg">
                Project Dionysos
            </sp-project>
            <sp-project href="https://github.com/PuzzleCMS"
                        background-url="https://avatars.githubusercontent.com/u/84229514?s=400&u=436e9906bf373f7e0f5893f8278c297b0eb670c3&v=4">
                Puzzle CMS
            </sp-project>
        </div>
        <div class="sp-text--center">
            <p>You're looking for a different project? Have a look at my <a href="https://github.com/SirPatagon?tab=repositories">󰊤 GitHub Profile</a>.</p>
        </div>
    </sp-page>
</template>

<script>
import SpHeader from '@/components/SpHeader.vue';
import SpPage from '@/components/SpPage.vue';
import SpProject from '@/components/SpProject.vue';

export default {
    name: 'ProjectsView',
    components: {
        SpHeader,
        SpPage,
        SpProject,
    },
};
</script>
