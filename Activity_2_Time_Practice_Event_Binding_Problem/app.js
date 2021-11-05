const app = Vue.createApp({
    data() {
        return {
            outputA: '',
            outputB: '',
        };
    },
    methods: {
        OutputA(event) {
            this.outputA = event.target.value;
        },
        OutputB(event) {
            this.outputB = event.target.value;
        },
        submitButton() {
            alert('Completed!');
        },
    }
});

app.mount('#assignment');