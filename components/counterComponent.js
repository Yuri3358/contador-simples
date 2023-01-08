const counterComponent = {
    template: 
    `<p id="counter">{{ count }}</p>
    <button class="btn btn-primary" @click="count++">Acrescentar</button>
    <button class="btn btn-secondary" @click="count--">Diminuir</button>`,
    data() {
        return {
            count: 0
        }
    }
}

exports = {counterComponent}