<template>
    <div class="clearAll">
        <span class="clearBtn" @click="clearData">
            Clear Aall
        </span>
    </div>
</template>

<script>
export default {
    methods:{
        clearData() {
            //localStorage.clear();
            this.$emit('removeAll')
        }
    }
}
</script>

<style>
    .clearAll {
        width:8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        margin: 0 auto;
    }
    .clearBtn {
        color : #e20303;
        display: block;
    }
</style>