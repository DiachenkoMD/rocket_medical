
document.addEventListener("DOMContentLoaded", function () {
    const VueApp = {
        data() {
            return {
                lang:{
                    ru: {

                    }
                }
            }
        }
    };

    Vue.createApp(VueApp).mount('#app');
});