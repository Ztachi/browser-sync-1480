/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2017-12-21 10:50:57 
 * @Description: 页面框架
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-01-03 09:34:53
 */
//http://music.migu.cn/music-migu-web/migumusic/resources/20017
import {router} from './router';

// import {header} from './header';


const app = new Vue({
    el: '#app',
    data: {
        title: 'OA系统',
        showSearch: 0 //是否显示搜索按钮
    },
    computed: {
        clip() {

        }
    },
    watch: {
        id() {

        }
    },
    methods: {
        goBack(num) {
            router.go(num);
        }
    },
    mounted() {
    },
    components: {
        // 'v-header': header
    },
    router
})

//每次要跳转页面之前触发
router.beforeEach((to, from, next) => {
    console.log(to,from)
    next();
})

window.vm = app;