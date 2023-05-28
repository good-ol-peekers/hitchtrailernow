<template>
    <div class="">
<h1>this is the active trailer page</h1>
<h1>trailer details</h1>
<h1>{{ trailer.capacity }} capacity</h1>
    </div>
    <div>
        <h1>trailer owner here</h1>
        <h1>{{ trailer.trailerOwner.email }}</h1>
    </div>
</template>


<script>
import { useRoute, useRouter } from 'vue-router';
import { computed, watchEffect } from 'vue';
import { trailersService } from '../services/TrailersServices';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';

export default {
    setup(){
        const route = useRoute()
        const router = useRouter()

        async function getTrailerById(){
            try {
                const trailerId = route.params.trailerId
                await trailersService.getTrailerById(trailerId)
                console.log(trailerId)
            } catch (error) {
                Pop.error(error.message, 'getTrailerById')
                router.push('/')
            }
        }

        watchEffect(() => {
            if(route.params.trailerId){
                getTrailerById();
            };
        })

        return {
            activeTrailer: computed(() => AppState.trailer),
        }
    }
}
</script>


<style lang="scss" scoped>

</style>