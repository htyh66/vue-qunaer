<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.v-enter , .v-leave-to{
    opacity: 0;
}
.v-enter-active , .v-leave-active{
    transition: opacity 0.9s;;
}
</style>