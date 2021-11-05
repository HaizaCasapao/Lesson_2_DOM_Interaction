const app = Vue.createApp ({
    data() {
        return {
            counter:0,
            timer:5000,
            value:0,

        };
    },

    watch: {
        counter(value) {
            if(value >37) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0;
                }, 5000)
            }
        }
    },

    methods: {
        addA() {
            this.counter = this.counter + 5;
        },
        addB() {
            this.counter = this.counter + 1;
        },
        result() {
            if (this.counter == 0) {
                return this.counter;
            }
            else if (this.counter > 0 && this.counter < 37) {
                return 'Not there yet';
            }
            else if (this.counter > 37) {
                return 'Too much';
            }
            return this.counter;

        },

    },
    
});

app.mount('#reactivity');