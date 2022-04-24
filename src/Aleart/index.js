import Aleart from './index.vue'
import { h, render } from 'vue'

function Creatalert(a, b) {
    document.body.appendChild(b)
    render(a, b)
}

function Cleanalert(b) {
    document.body.removeChild(b)
        // render(a, b)
}

function alert() {
    const VNode = h(Aleart)
    const container = document.createElement('div');
    Creatalert(VNode, container)
    setTimeout(() => {
        document.body.removeChild(container)
    }, 1000);

    // Cleanalert(VNode, container)

}
export { alert }