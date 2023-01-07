
const firstApp = {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        incrementCount(){
            if (this.count >= 0) {
                document.getElementById("counter").style.color = "black"
            }
            this.count++

        },
        decrementCount(){
            if (this.count <= 0) {
                document.getElementById("counter").style.color = "red"
            }
            this.count--
        }
        
    }
}

Vue.createApp(firstApp).mount("#app")