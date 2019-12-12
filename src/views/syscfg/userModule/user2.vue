<template>
  <div>
    <h3>user2</h3>
    <div :class="{ hide: !detail.id }">
      <p>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </p>
      <p>
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </p>
      <p>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      detail: {
				id:"",
			}
    }
  },
  methods:{

  }
}
</script>

<style>
</style>