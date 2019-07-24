<template>
    <div class="shopCard">
        <div class="title">购物清单</div>
        <ul>
            <li>
                <span class="shopInfo">商品信息</span>
                <span class="shopPrice">单价</span>
                <span class="shopNum">数量</span>
            </li>
            <li v-for="(ele, index) in list" :key="index">
                <span class="shopInfo">
                    <img :src="ele.img" alt="">
                </span>
                <span class="shopPrice">{{ele.price}}</span>
                <span class="shopNum">{{ele.price}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
import { getFoodList } from "@/axios/food.js"

export default {
    data() {
        return {
            list: []
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
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.shopCard{
    li{
        img{ width: 180px; height: 180px;}
    }
}
</style>
