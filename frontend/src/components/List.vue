<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(ItemList, index) in propsdata" v-bind:key="ItemList" class="shadow">
                
                {{ ItemList }}
                <span class="removeBtn" type="button" @click="removeItem(ItemList, index)">
                    <span class="icon">X</span>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
export default {
    props: ['propsdata'],
    created() {
        console.log("storage ::", localStorage.length)
        console.log("ItemList :: ",this.ItemLists)
        if(localStorage.length > 0){
            for(var i=0; i<localStorage.length; i++){
                this.$props.propsdata.push(localStorage.key(i))
                //this.propsdata.push(localStorage.key(i))
            }
        }
    },
    methods: {
        removeItem(ItemLists, index){
            //localStorage.removeItem(ItemLists);
            //this.ItemLists.splice(index, 1);
            this.$emit('removeItem', ItemLists, index)
        }
    }
}
</script>

<style scoped>
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-move {
        transition: transform 1s;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align:left;
    }
    li {
        display:flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>