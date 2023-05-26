const app = Vue.createApp({
    data(){
        return{
            inputClass: '',
            inputBackground: 'red',
            paraVisibility: true
        }
    },
    computed:{
        paraClasses(){
            return{
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paraVisibility,
                hidden: !this.paraVisibility
            }
        }
    },
    methods: {
        toggleParaVisibility(){
           this.paraVisibility = !this.paraVisibility
        }
    }
});
app.mount("#assignment")