const { createApp } = Vue

createApp({
    data(){
        return {
            message: 'Hello World!',
            Japan: 'https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt6e1661a50f2abf0b/60ab379977e996669f49e985/US_Japan_Japan_Header.jpg'
        }
    }
}).mount('#app');