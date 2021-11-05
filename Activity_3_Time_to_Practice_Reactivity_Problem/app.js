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
    
});