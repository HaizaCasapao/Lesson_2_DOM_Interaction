const app = Vue.createApp({
    data() {
        return {
            user: '',
            user1:false,
            user2:false,
            enable:true,
            color: '',
            selectColor: '',

        };
    },

    methods: {
        Input(event) {
            this.user = event.target.value;
            
            if(this.user === 'user1') {
                this.user1 = 'user1';
            }
            else if(this.user ==='user2') {
                this.user2 = 'user2';
            }
            else {
                this.user1 = ''
                this.user2 = ''
            }
        },
        toggle() {
            this.enable = !this.enable;
        },
        
        SelectColor(event) {
            this.color = event.target.value;
            if(this.color === 'red') {
                this.selectColor = this.color;
            }
            else if(this.color === 'yellow') {
                this.selectColor = this.color
            }
            else if(this.color === 'blue') {
                this.selectColor = this.color;
            }
            else{this.selectColor = '';
            }
        }
    }
    
});
app.mount('#styling');