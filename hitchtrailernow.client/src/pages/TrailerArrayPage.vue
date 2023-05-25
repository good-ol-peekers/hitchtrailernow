<template>
    <div class="Container-fluid">

<h1>this is the array of trailers page</h1>
    </div>
</template>


<script>
import { onMounted, computed, onUpdated } from 'vue';
import { trailersServices } from '../services/TrailersServices.js'
export default {
    setup(){

        async function getAllTrailers() {
            try {
                await trailersServices.getAllTrailers()
            } catch (error) {
                Pop.error(error, "get All Trailers")
            }
        }

        OnMounted(() => {
            getAllTrailers();
        });
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>