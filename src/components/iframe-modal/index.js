import IFrame from '@/components/iframe-modal/iframe.vue';
const loadIframe = (Vue) => {
    const IframeConstructor = Vue.extend(IFrame);
    const parent = document.body;
    const render = (data) => {
        const iframeInstance = new IframeConstructor({
            el: document.createElement('div'),
            data
        });
        parent.appendChild(iframeInstance.$el)
    }
    const openIframe = (data) => {
        render(data)
    }
    Vue.prototype.$openIframe = openIframe
}
export default loadIframe;