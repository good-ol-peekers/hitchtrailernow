<template>
    <div class="">
<h1>this is the active trailer page</h1>

    </div>
</template>


<script>
import { watchEffect } from 'vue';
import { trailersService } from '../services/TrailersServices';
import Pop from '../utils/Pop';
Pop

export default {
    setup(){
        const route = useRoute()
        const router = useRouter()

        async function getTrailerById(){
            try {
                const trailerId = route.params.trailerId
                await trailersService.getTrailerById(trailerId)
            } catch (error) {
                Pop.error(error.message, 'getTrailerById')
                router.push('/')
            }
        }

        watchEffect(() => {
            if(route.params.trailerId){
                getTrailerById()
            }
        })

        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>