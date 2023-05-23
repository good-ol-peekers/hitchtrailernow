<template>
    <div class="container-fluid bg-dark">
        <div class="row">
            <div class="col-12 d-flex justify-content-between mt-3">
                <router-link :to="{ name: 'Home' }" class="btn text-success lighten-30 selectable text-uppercase">
                <p class="mx-3">HITCH TRAILER NOW</p>
            </router-link>
                <div class="justify-content-end">
                    <Login />
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import Login from './Login.vue';

export default {
    setup() {
        return {};
    },
    components: { Login }
}
</script>


<style lang="scss" scoped>

</style>