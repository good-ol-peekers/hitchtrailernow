<template>
    <div class="Container-fluid">

<h1>this is the array of trailers page</h1>
    </div>
</template>


<script>
import { onMounted, computed, onUpdated } from 'vue';

export default {
    setup(){

        async function getAllTrailers() {
            try {
                await trailersS
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