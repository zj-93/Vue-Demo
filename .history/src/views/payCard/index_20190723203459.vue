<template>
    <div class="shopCard">
              <div class="backBoder" @click="goBack">
        <i class="el-icon-back"/>
      </div>
        <div class="title">购物清单</div>
        <ul>
            <li class="liHeader">
                <span class="shopInfo">商品信息</span>
                <span class="shopPrice">单价</span>
            </li>
            <li v-for="(ele, index) in list" :key="index">
                <span class="shopInfo">
                    <img :src="ele.img" alt="">
                    <span class="shopName">{{ ele.name }}</span>
                    <span class="shopNum">x{{ ele.price }}</span>
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
        </ul>
    </div>
</template>

<script>
import { getFoodList } from "@/axios/food.js"

export default {
    data() {
        return {
            list: [],
            price: 123
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        console.log(this.$route, this.$route.query)
        const arrList = Object.keys(this.$route.query)
        let dataArr = []
        arrList.forEach(element => {
            console.log(element)
            dataArr.push(this.$route.query[element])
        });
        
        this.getList(dataArr)
    },
    watch: {

    },
    methods: {
        getList(dataArr){
            const data = {
              code: dataArr
            }
            //  console.log(dataArr)
            getFoodList(data).then((respone) => {
                console.log(respone)
                this.list = respone
            }).catch(error => {
                console.log(error)
            })
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
    .title{ height: 120px;line-height: 120px;text-align: center; font-size: 30px;font-weight: bold;}
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
    .shopPrice{ float: left;  width: 10%;}
    .aglinPrice{ height: 180px; line-height: 180px;}
}
</style>
