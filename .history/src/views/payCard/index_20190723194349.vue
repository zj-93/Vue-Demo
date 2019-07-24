<template>
    <div class="shopCard">
        <div class="title">购物清单</div>
        <ul>
            <li v-for="(ele, index) in list" :key="index">

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

</style>
