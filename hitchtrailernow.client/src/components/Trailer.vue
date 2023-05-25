<template>
    <div class="row">
        <div class="col-6">
            <div>
                <h1>{{ trailer.addons }}</h1>
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