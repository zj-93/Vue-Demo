<template>
    <div class="shopCard"
        v-loading.fullscreen="loading"
        :element-loading-text="backTip"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="backBoder" @click="goBack">
            <i class="el-icon-back"/>
        </div>
        <div class="title">购物清单</div>
        <ul class="shopList">
            <li class="liHeader">
                <span class="shopInfo">商品信息</span>
                <span class="shopPrice">单价</span>
            </li>
            <li v-for="(ele, index) in list" :key="index">
                <span class="shopInfo">
                    <img :src="ele.img" alt="">
                    <span class="shopName">{{ ele.name }}</span>
                    <span class="shopNum">x{{ ele.num }}</span>
                </span>
                <span class="shopPrice aglinPrice">{{ele.price}}</span>
            </li>
        </ul>
        <hr style="height: 1px;border:none;background-color:#ccc;">
        <ul>
            <li>
                <span class="shopInfo">总价</span>
                <span class="shopPrice">{{price}}</span>
            </li>
            <li>
                <span class="shopInfo">运费</span>
                <span class="shopPrice">{{shipNum}}</span>
            </li>
             <li>
                <span class="shopInfo">应付</span>
                <span class="shopPrice">{{totalMoney}}</span>
            </li>
        </ul>
        <div class="payWay">
            <el-button type="primary" @click="WXPay">微信支付</el-button>
            <el-button type="primary" @click="ZFBPay">支付宝支付</el-button>
        </div>
    </div>
</template>

<script>
import { getFoodList } from "@/axios/food.js"
import { setTimeout, clearInterval, clearTimeout } from 'timers';

export default {
    data() {
        return {
            list: [],
            price: 123,
            shipNum: this.$store.state.common.shipNum,
            loading: false,
            backTip: '3秒后返回首页'
        };
    },
    computed: {
        totalMoney() {
            return this.price + this.$store.state.common.shipNum
        }
    },
    created() {

    },
    mounted() {
        // const arrList = JSON.parse(this.$route.query.info)
        // let dataArr = []
        // arrList.forEach(element => {
        //     for(let x in element) {
        //         dataArr.push(x)
        //     }
        // })
        // this.getList(dataArr)
        let arrList = JSON.parse(this.$route.query.info)
        
        
            this.getList(arrList)
    },
    watch: {

    },
    methods: {
        WXPay() {
            this.$message({
                message: '支付成功',
                type: 'success'
            });

            this.loading= true
            this.backHome()
        },
        ZFBPay() {
            this.$message({
                message: '支付成功',
                type: 'success'
            });
            this.loading= true
            this.backHome()
        },
        backHome() {
            let a = 3
            setInterval(() => {
                --a 
                this.backTip =  a + '秒后返回首页'
                if(a == 1 ){
                    setTimeout(() => {
                        this.loading= false
                        clearTimeout()
                        this.$router.push({name: 'food'})
                    }, 800)
                    clearInterval()
                }
            }, 1000)
        },
        getList(arrList){
            console.log(arrList)
            let dataArr = []
            arrList.forEach(element => {
                let ee = Object.keys(element)[0]
                dataArr.push(ee)
            })
            
            const data = {
              code: dataArr
            }
            getFoodList(data).then((respone) => {
                console.log(respone)
                this.list = respone
                this.price = 0
                this.list.forEach((ele) => {
                    arrList.forEach((item) => {
                        if(ele.id == Object.keys(item)[0]) {
                            const num = item[ele.id].num
                            ele.num = num
                            this.price += num * ele.price
                        }
                        
                    })
                })

            }).catch(error => {
                console.log(error)
            })
        },
        goBack() {
            history.go(-1)
        }
    }
};
</script>

<style scoped lang="less">
.shopCard{
    width: 100%;
    background-color: #fff;
    padding: 0 10%;
    box-sizing: border-box;
    .title{ position: fixed; top: 0;left: 0;z-index: 9;width: 100%;height: 120px;line-height: 120px;text-align: center; font-size: 30px;font-weight: bold;background-color: coral;color: #fff;}
    .shopList{ margin-top: 120px; }
    li{
        width: 100%;
        list-style: none;
        margin: 30px 0;
        overflow: hidden;
        img{ width: 180px; height: 180px; float: left; margin-right: 20px;}
    }
    .liHeader{ padding: 30px 0 10px 0; }
    .shopInfo{float: left; width: 90%; position: relative;
        .shopName{ display: inline-block;margin-top: 20px; }
        .shopNum{ position:absolute;bottom: 30px; left: 200px}    
    }
    .shopPrice{ float: left;  width: 10%; text-align: right;}
    .aglinPrice{ height: 180px; line-height: 180px;}
    .backBoder{
        padding: 15px;
        border-radius: 100px;
        display: inline-block;
        border: 1px solid #d6d6d6;
        position: fixed;
        top: 25px;
        left: 15px;
        z-index: 999;
        background-color: rgba(0,0,0,0.3);
        z-index: 10;
        cursor: pointer;
        i{
            color: #fff
        }
    }
    .payWay{
        user-select: none;
        margin-top: 100px;
        margin-bottom: 100px;
        text-align: center;
        cursor: pointer;
    }
}
</style>
