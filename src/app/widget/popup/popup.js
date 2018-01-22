define(() => (option) => {
    let options=$.extend({
        init:()=>{},
        close:()=>{},
        closeBtn: '',
        content: ''
    },option);
    let zp = {};
    let id = 'z_pop';
    zp.dom = $("#" + id);
    let tpl = "<div id=" + id + " class='z_popup'>" + options.content + "</div>"
    $("body").append(tpl);
    //关闭弹出层
    zp.close = function () {
        zp.dom.remove();
        options.close();
    }
    //如果指定有关闭按钮，就添加关闭事件
    if ($(options.closeBtn).length) {
        $(options.closeBtn).on('click', zp.close);
    }
    options.init();
    return zp;
});