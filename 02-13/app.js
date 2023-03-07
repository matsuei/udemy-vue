const app = Vue.createApp({
    data() {
        return {
            courceGoalA: 'Finish the course and learn Vue!',
            courceGoalB: '<h2>Master Vue and build amazing Apps!</h2>',
            aboutVueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal: function() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courceGoalA
            } else {
                return this.courceGoalB
            }
        }
    }
});

app.mount('#user-goal');