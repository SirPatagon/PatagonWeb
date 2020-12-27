components.push({
    name: 'sp-feed', obj: {
        inject: ['globalProps'],
        props: ['title'],
        template: getTemplate('feed'),
        created() {
            fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgitlab.com%2Fsirpatagon.atom')
                .then(response => response.json())
                .then(data => data.items.forEach(item => this._feedData.push({ type: 'gitlab', title: item.title, link: item.link, date: new Date(item.pubDate) })));
            fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgithub.com%2Fsirpatagon.atom')
                .then(response => response.json())
                .then(data => data.items.forEach(item => this._feedData.push({ type: 'github', title: item.title, link: item.link, date: new Date(item.pubDate) })));
        },
        data() {
            return {
                _feedData: [],
                locale: getParameterValue('lang') || (navigator.language || navigator.userLanguage).substring(0, 2),
                dateOptions: {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                },
                timeOptions: {
                    hour: '2-digit',
                    minute: '2-digit'
                }
            };
        },
        computed: {
            feedData() {
                return this._feedData.length ? this._feedData.sort((a, b) => b.date - a.date) : [];
            }
        }
    }
});
