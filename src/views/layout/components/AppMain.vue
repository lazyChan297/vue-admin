<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view/>
        </transition>
    </section>
</template>
<script>

</script>
<style>
    .app-main{
        padding-top: 30px;
    }
</style>
