import Aleart from './index.vue'
// import home from '../views/home/home.vue'
import { h, render } from 'vue'
// import { de } from 'element-plus/lib/locale'

function Creatalert(a, b) {
    document.body.appendChild(b)
    render(a, b)
}

function Cleanalert(b) {
    document.body.removeChild(b)
        // render(a, b)
}
const a = []

function alert(span) {

    // console.log(span);
    // span = 10;
    // console.log(Aleart.input);
    const VNode = h(Aleart)
    const container = document.createElement('div');
    Creatalert(VNode, container)
    setTimeout(() => {
        document.body.removeChild(container)
    }, 1000);
}
// export default { a }
export { alert }