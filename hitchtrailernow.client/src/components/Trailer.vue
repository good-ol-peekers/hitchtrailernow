<template>
    <div class="row">
        <div class="col-6">
            <router-link class="selectable" :to="{ name: 'ActiveTrailer', params: { trailerId: trailer.id} }">
                <img src="image source" class="img-fluid rounded-top" alt="trailer img here">
            </router-link>
    
            <div>
                <h1>{{ trailer.id }}</h1>
                <!-- <img :src="" alt=""> -->
            </div>
        </div>

    </div>
</template>


<script>
import { Trailer } from '../models/Trailer';

export default {
    props: {trailer: {type: Trailer, required: true}},
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>