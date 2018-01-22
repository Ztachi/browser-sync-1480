/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2018-01-02 11:27:35 
 * @Description: 公文首页
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-01-04 09:08:11
 */

const popup=require('widget/popup/popup');
const {laydate} = layui; //启用日期选择插件

export const schedule = {
    props: ['query'],
    template: '<div id="schedule" class="page">\
    <div class="tabs">\
        <ul>\
            <li v-for="(d,i) in tabs" @click="tabActive=i" :class="{active:tabActive===i}"><span>{{d}}</span></li>\
        </ul>\
        <svg @click="gotoSearch"><use xlink:href="#icon-search"></use></svg>\
    </div>\
    <ul id="wrapper">\
        <li v-show="tabActive==0"><div type="text" id="calendar"></div>\
            <ul id="scheduleList">\
                <li>\
                    <div><div>09:00</div><div>12:00</div></div>\
                    <div><div>便几乎已，三大都是大货收到后扫地机阿搜救</div><div>会议地点：成都市</div></div>\
                    <div><span>日程</span></div>\
                </li>\
                <li>\
                    <div><div>09:00</div><div>12:00</div></div>\
                    <div><div>便几乎已，三大都是大货收到后扫地机阿搜救</div><div>会议地点：成都市</div></div>\
                    <div><span type=2>Mark</span></div>\
                </li>\
                <li>\
                    <div><div>09:00</div><div>12:00</div></div>\
                    <div><div>便几乎已，三大都是大货收到后扫地机阿搜救</div><div>会议地点：成都市</div></div>\
                    <div><span type=3>会议</span></div>\
                </li>\
                <li>\
                    <div><div>09:00</div><div>12:00</div></div>\
                    <div><div>便几乎已，三大都是大货收到后扫地机阿搜救</div><div>会议地点：成都市</div></div>\
                    <div><span type=4>出差</span></div>\
                </li>\
            </ul>\
        </li>\
        <li v-show="tabActive==1"><input type="text" id="date"></li>\
        <li v-show="tabActive==2">3</li>\
        <li v-show="tabActive==3">4</li>\
    </ul>\
    <svg @click="add" id="add"><use xlink:href="#icon-tianjia"></use></svg>\
    </div>',
    data() {
        return {
            tabs: ['日程', 'Mark', '会议', '出差'],
            tabActive: 0
        }
    },
    methods:{
        gotoSearch(){
            alert(1);
        },
        add(){
            popup({content:'1'})
        }
    },
    watch:{
        tabActive(val){//tab切换之后
            console.log(val);
        }
    },
    mounted() {
        laydate.render({
            elem: '#calendar' //指定元素
                ,
            position: 'static' //定位
                ,
            calendar: true //显示节日
                ,
            showBottom: false //不显示底部按钮
                ,
            change(value, date, endDate) { //日期改变之后触发

                console.log(value, '-', date, endDate);
            },
            ready(date) { //初始化
                $('#calendar td[lay-ymd*="' + date.year + '-' + date.month + '"]').eq(0).data('work', 1);
            }

        });

        laydate.render({
            elem: '#date',
            type: 'datetime',
            min: new Date().getTime() + 10 * 60 * 1000,
            done(value, date, endDate) { //选择日期之后触发

                console.log(value, '-', date, endDate);
            }
        });

        //绑定滑动切换tab事件
        $(document).on('swipeLeft',()=>{
            if(this.tabActive<3){
                this.tabActive+=1;
            }
        }).on('swipeRight',()=>{
            if(this.tabActive){
                this.tabActive-=1;
            }
        });
    }
};