<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="createTrailerListing()">
          <div>
            <label for="title" class="form-label">Title</label>
            <input v-model="editable.title" required type="text" class="form-control" name="title" id="title"
            aria-describedby="enter Title ">
          </div>
          <div>
              <label for="year" class="form-label">Year</label>
              <input v-model="editable.year" required type="text" class="form-control" name="year" id="year"
              aria-describedby="enter Year">
            </div>
            <div>
            <label for="capacity" class="form-label">Capacity</label>
            <input v-model="editable.capacity" required type="text" class="form-control" name="capacity" id="capacity"
            aria-describedby="trailer capacity">
          </div>
          <div>
            <label for="make" class="form-label">Make</label>
            <input v-model="editable.make" required type="text" class="form-control" name="make" id="make"
            aria-describedby="enter event name">
          </div>
          <div>
            <label for="lengthSize" class="form-label">length</label>
            <input v-model="editable.lengthSize" required type="text" class="form-control" name="lengthSize" id="lengthSize"
            aria-describedby="enter trailer length">
          </div>
          <div>
            <label for="width" class="form-label">Width</label>
            <input v-model="editable.width" required type="text" class="form-control" name="width" id="width"
            aria-describedby="enter trailer width">
          </div>
          <div>
            <label for="description" class="form-label">Description</label>
            <input v-model="editable.description" required type="text" class="form-control" name="description" id="description"
            aria-describedby="enter trailer description">
          </div>
          <div>
            <label for="details" class="form-label">details</label>
            <input v-model="editable.details" required type="text" class="form-control" name="details" id="details"
            aria-describedby="enter trailer details">
          </div>
          <div>
            <label for="rules" class="form-label">Rules</label>
            <input v-model="editable.rules" required type="text" class="form-control" name="rules" id="rules"
            aria-describedby="enter rules">
          </div>
          <div>
            <label for="cost" class="form-label">Daily Rate</label>
            <input v-model="editable.cost" required type="text" class="form-control" name="cost" id="cost"
            aria-describedby="enter daily rate / cost">
          </div>
          <div>
            <label for="addons" class="form-label">Addons</label>
            <input v-model="editable.addons" required type="text" class="form-control" name="addons" id="addons"
            aria-describedby="enter trailer addons here">
          </div>
          <div>
            <label for="deposit" class="form-label">Deposit</label>
            <input v-model="editable.deposit" required type="text" class="form-control" name="deposit" id="deposit"
            aria-describedby="enter deposit dollar amount here">
          </div>
          <div>
            <label for="img1" class="form-label">Image # 1</label>
            <input v-model="editable.img1" required type="text" class="form-control" name="img1" id="img1"
            aria-describedby="enter image 1">
          </div>
                    <div>
              <label for="img2" class="form-label">Image # 2</label>
              <input v-model="editable.img2" required type="text" class="form-control" name="img2" id="img2"
              aria-describedby="enter image 2">
            </div>
                      <div>
              <label for="img3" class="form-label">Image # 3</label>
              <input v-model="editable.img3" type="text" class="form-control" name="img3" id="img3"
              aria-describedby="enter image 3, not required">
            </div>
            <div>
                <label for="img4" class="form-label">Image # 4</label>
                <input v-model="editable.img4" type="text" class="form-control" name="img4" id="img4"
                aria-describedby="enter image 4, not required">
              </div>
              <div>
                <label for="img5" class="form-label">Image # 5</label>
                <input v-model="editable.img5" type="text" class="form-control" name="img5" id="img5"
                aria-describedby="enter image 5, not required">
              </div>
              <div>
                <label for="img6" class="form-label">Image # 6</label>
                <input v-model="editable.img6" type="text" class="form-control" name="img6" id="img6"
                aria-describedby="enter image 6, not required">
              </div>
              <div>
                <label for="img7" class="form-label">Image # 7</label>
                <input v-model="editable.img7" type="text" class="form-control" name="img7" id="img7"
                aria-describedby="enter image 7, not required">
              </div>
          <div>
                <label for="type" class="form-label">Type of Trailer</label>
                <select v-model="editable.type" class="form-select mb-4" required name="type" id="type">
                  <option selected value="utility">Utility Trailer</option>
                  <option value="flatbed">Flatbed Trailer</option>
                  <option value="car">Car Trailer</option>
                  <option value="car dolly">Car dolly</option>
                  <option value="dump">Dump Trailer</option>
                  <option value="enclosed">Enclosed Trailer</option>
                  <option value="horse trailer">Horse Trailer</option>
                  <option value="motorcycle trailer">Motorcycle Trailer</option>
                  <option value="hitch cargo carrier">Hitch Cargo Carrier / RoofTop Box</option>
                </select>
              </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
