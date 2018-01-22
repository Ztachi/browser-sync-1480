/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2017-12-21 10:42:29 
 * @Description: 整站路由
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-01-03 17:28:46
 */
import {schedule} from './schedule/schedule';

import {page3} from './document/page3';
    import {page4} from './document/page4/page4';
    import {page5} from './document/page5/page5';

const routes=[
    {
        path:'/',
        component:{
            template:"<div id='index' class='page'><router-link to='/schedule'><div><svg><use xlink:href='#icon-richeng'></use></svg></div>日程</router-link>\
            <router-link to='/schedule'><div><svg><use xlink:href='#icon-gongwen'></use></svg></div>公文</router-link></div>"
        }
    },
    {
        path:'/schedule',
        component:schedule,
        props:(router)=>({query:router.query})
    },
    {
        path:'/page3',
        name:'page3',
        component:page3,
        props:(router)=>({query:router.query}),
        children:[//嵌套路由
            {
                path:'page4',
                component:page4,
                props:(router)=>({query:router.query})
            },
            {
                path:'page5',
                component:page5,
                props:(router)=>({query:router.query})
            }
        ]
    }
]



export const router=new VueRouter({
    routes
})