<template>
    <div>
        <div></div>
        <div>购物清单</div>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
import { getFoodList } from "@/axios/food.js"

export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        console.log(this.$route)
        const dataArr = Object.key(this.$route.query)

    },
    watch: {

    },
    methods: {
        getList(dataArr){
            const data = {
              code: ['00003', '00001']
            }
            getFoodList(data).then((respone) => {
                console.log(respone)
                this.list = respone
                console.log(this.list)
                this.state = 2
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
