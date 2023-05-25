<template>
    <div class="Container-fluid">

        <div v-for="t in trailer">
        <Trailer :trailer="t" />
        </div>

        <img src="https://images.unsplash.com/photo-1619317190381-643a6b28d6e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80" alt="trailerImg">
<h1>this is the array of trailers page</h1>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { trailersService } from '../services/TrailersServices';
import Pop from '../utils/Pop';
import Trailer from '../components/Trailer.vue';
import { AppState } from '../AppState';
export default {
    setup() {
        async function getAllTrailers() {
            try {
                await trailersService.getAllTrailers();
            }
            catch (error) {
                Pop.error(error, "get All Trailers");
            }
        }
        onMounted(() => {
            getAllTrailers();
        });
        return {

            trailer: computed(() => AppState.trailers),

        };
    },
    components: { Trailer }
}
</script>


<style lang="scss" scoped>

</style>