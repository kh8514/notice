<template>
    <div class="wrap">
        <h1>main</h1>
        {{dataList}}
    </div>
</template>

<script>
export default {
    created () {
        this.axios.get('/ssab/route/getTest')
        .then((response) => {
            let datalist = response.data.dataList
            this.dataList = datalist
        })
    },
    data () {
        return {
            dataList: []
        }
    }
}
</script>