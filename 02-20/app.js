const app = Vue.createApp({
    data() {
        return {
            name: 'kuromame',
            age: 31,
            imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Twitch_logo_2019.svg/360px-Twitch_logo_2019.svg.png'
        };
    },
    methods: {
        favoriteNumber: function() {
            const randomNumber = Math.random();
            return "Favorite Number: " + randomNumber.toString();
        }
    }
});

app.mount('#assignment');