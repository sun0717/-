<script>
// import { reactive } from 'vue';
export default {
    name: 'MyHeader',
    setup() {
        
    }
}
</script>

<template>
    <div class="header">
        <div class="logo">
            <svg t="1677062420067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1587" width="33.28" height="33.28">
                <path
                    d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z"
                    fill="#FE7945" p-id="1588"></path>
                <path d="M184.32 286.72h317.44a153.6 153.6 0 0 1 153.6 153.6v307.2H184.32v-460.8z" fill="#FFFFFF"
                    p-id="1589"></path>
                <path d="M737.28 286.72h102.4v460.8H737.28z" fill="#FFFFFF" p-id="1590"></path>
                <path d="M286.72 389.12h215.04a51.2 51.2 0 0 1 51.2 51.2v307.2H286.72v-358.4z" fill="#FE7945" p-id="1591">
                </path>
                <path d="M368.64 491.52h102.4v256H368.64z" fill="#FFFFFF" p-id="1592"></path>
            </svg>
        </div>
        <div class="header-container">
            <ul>
                <li><a href="#" style="color: #ff6900;">小米官网</a></li>
                <li><a href="#">小米商城</a></li>
                <li><a href="#">小米影像</a></li>
                <li><a href="#">MIUI</a></li>
                <li><a href="#">IoT</a></li>
                <li><a href="#">云服务</a></li>
                <li><a href="#">天星数科</a></li>
                <li><a href="#">有品</a></li>
                <li><a href="#">小爱开放平台</a></li>
                <li><a href="#">企业团购</a></li>
            </ul>
        </div>
        <div class="header-container-login">
            <ul>
                <li><a href="#">登录</a></li>
                <span>|</span>
                <li><a href="#">注册</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-around;
    height: 80px;
    background-color: #242424;

    color: #ffffff;
    font-size: 14px;
    font-family: MiSans,serif;
    font-weight: 500;
}
.header li {
    padding: 0 15px;
}

.header li a:hover{
    color: #ff6900;
}
.logo {
    display: flex;
    align-items: center;
    margin-left: 50px;
}
.header-container {
    display: flex;
    align-items: center;
}

.header-container-login {
    display: flex;
}

.header-container-login ul {
    align-items: center;
}

.header-container-login span {
    margin: 0 25px;
}
</style>