<template>
  <div id="app">
		<Header></Header>
    <h1>Rutas con Vue Router</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from  './components/Header.vue';
export default {
  components: { Header },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
body,
p,
a,
input,
textarea,
button {
	font-family: 'Quicksand', sans-serif;
	font-weight: 400;
	color: #5B5B5D;
	font-size: 16px;
}
a {
	&:hover,
	&:focus {
		text-decoration: none;
	}
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
	font-family: 'Quicksand', sans-serif;
	font-weight: 600;
	line-height: 1.1;
	margin-top: 20px;
	margin-bottom: 10px;
  color: #000000;
}

ul,
ol {
	font-family: 'Quicksand', sans-serif;
	padding-left: 25px;
	li p {
		margin-bottom: 5px;
	}
}
</style>
