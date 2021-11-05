const app = Vue.createApp({
    data() {
        return{
            yourName:'Haiza T. Casapao',
            yourAge: 21 + ' yrs old',
            yourAge5: 21 + 5 + ' after five yrs',
            url: "https://i.pinimg.com/originals/62/08/ec/6208ecbf1d02d01c151c4e3bfe259117.png",
            name: "Haiza T. Casapao"
        };
    },
    methods: {
        favNumber() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 0;
            }   else {
                return 1;
            }
        }
    }
});

app.mount('#dataBinding');