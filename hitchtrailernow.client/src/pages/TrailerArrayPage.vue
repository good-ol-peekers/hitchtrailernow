<template>
    <div class="Container-fluid">

<h1>this is the array of trailers page</h1>
    </div>
</template>


<script>
import { onMounted, computed, onUpdated } from 'vue';

export default {
    setup(){
        OnMounted(() => {
            getAllTrailers();
        });
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>