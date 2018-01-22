import {router} from './router';
export const header={
    props:['title'],
    template:'<header><span @click="goBack(1)"><</span><div>{{title}}</div><span>搜索</span><span>确定</span></header>',
    computed:{
        goBack(num){
            router.go()
        }
    }
};