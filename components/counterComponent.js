const counterComponent = {
    template: 
    `<p id="counter">{{ count }}</p>
    <button class="btn btn-primary" @click="increment">Acrescentar</button>
    <button class="btn btn-secondary" @click="decrement">Diminuir</button>
    <button class="btn btn-danger" @click="reset">Zerar</button>`,
    data() {
        return {
            count: localStorage.getItem("counter") || 0
        }
    },
    methods: {
        increment(){
            if (this.count >= 0) {
                document.getElementById("counter").style.color = "black"
            }
            this.count++
            Number(localStorage.setItem("counter", this.count))
        },

        decrement(){
            if (this.count <= 0) {
                document.getElementById("counter").style.color = "red"
            }
            this.count--
            Number(localStorage.setItem("counter", this.count))
        },

        reset(){
            this.count = 0
            Number(localStorage.setItem("counter", this.count))
        }
    }
}

exports = {counterComponent}