<template>
    <div class="footer">
        <div class="site-footer  clearfix">
            <div class="container">
                <dl class="col-links col-links-first">
                    <dt></dt>
                </dl>
                <dl class="col-links">
                    <dt>选购指南</dt>
                    <dd><a href="#" target="_blank">手机</a>
                    </dd>
                    <dd><a href="#" target="_blank">电视</a>
                    </dd>
                    <dd><a href="#" target="_blank">笔记本</a></dd>
                    <dd><a href="#" target="_blank">平板</a>
                    </dd>
                    <dd><a href="#" target="_blank">穿戴</a></dd>
                    <dd><a href="#" target="_blank">耳机</a>
                    </dd>
                    <dd><a href="#" target="_blank">家电</a>
                    </dd>
                    <dd><a href="#" target="_blank">路由器</a></dd>
                    <dd><a href="#" target="_blank">音箱</a>
                    </dd>
                    <dd><a href="#" target="_blank">配件</a>
                    </dd>
                </dl>
                <dl class="col-links">
                    <dt>服务中心</dt>
                    <dd><a href="#" target="_blank">申请售后</a></dd>
                    <dd><a href="#" target="_blank">售后政策</a></dd>
                    <dd><a href="#" target="_blank">维修服务价格</a></dd>
                    <dd><a href="#" target="_blank">订单查询</a></dd>
                    <dd><a href="#" target="_blank">以旧换新</a></dd>
                    <dd><a href="#" target="_blank">保障服务</a></dd>
                    <dd><a href="#" target="_blank">防伪查询</a></dd>
                    <dd><a href="#" target="_blank">F码通道</a></dd>
                </dl>
                <dl class="col-links">
                    <dt>线下门店</dt>
                    <dd><a href="https://www.mi.com/service/mihome/list" target="_blank">小米之家</a></dd>
                    <dd><a href="https://www.mi.com/service/sitelist" target="_blank">服务网点</a></dd>
                    <dd><a href="https://www.mi.com/service/family-location" target="_blank">授权体验店/专区</a>
                    </dd>
                </dl>

                <dl class="col-links">
                    <dt>关于小米</dt>
                    <dd><a href="https://www.mi.com/about/" target="_blank">了解小米</a></dd>
                    <dd><a href="https://hr.xiaomi.com/" target="_blank">加入小米</a></dd>
                    <dd><a href="https://ir.mi.com/zh-hans" target="_blank">投资者关系</a></dd>
                    <dd><a href="https://ir.mi.com/zh-hans/environmental-social-governance" target="_blank">环境，社会及管治</a>
                    </dd>
                    <dd><a href="https://www.mi.com/integrity" target="_blank">廉洁举报</a></dd>
                </dl>

                <dl class="col-links">
                    <dt>关注我们</dt>
                    <dd><a href="https://weibo.com/xiaomishangcheng" target="_blank">新浪微博</a></dd>
                    <dd><a href="javascript:void(0);" id="J_siteWeixinCode">官方微信</a></dd>
                    <dd><a href="https://www.mi.com/about/contact/" target="_blank">联系我们</a></dd>
                    <dd><a href="https://www.mi.com/foundation/index" target="_blank">公益基金会</a></dd>
                </dl>
            </div>
        </div>
        <div class="site-info">
            <div class="slogan"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyFooter',
    setup() {

    }
}
</script>
<style scoped>
.footer {
    padding: 40px 0;
}
.container {
    width: 1200px;
    margin: 0 auto;
}

.col-links {
    float: left;
    width: 160px;
    margin: 0;
}

.col-links dt {
    margin: -1px 0 26px;
    font-size: 14px;
    line-height: 1.25;
    color: #424242;
}

.col-links dd {
    margin: 10px 0 0;
    font-size: 12px;
}

.col-links a {
    color: #757575;
}

.col-links a:hover {
    color: #ff6900;
}

.site-info {
    padding: 30px 0;
    font-size: 12px;
    background: #fafafa;
}
.site-info .slogan{
    clear: both;
    margin: 30px auto 0;
    width: 100%;
    height: 19px;
    background: url('https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/slogan2020.png') no-repeat center 0;
}

</style>