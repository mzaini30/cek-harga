<template>
	<teleport to='head'>
		<title>Cek Harga</title>
	</teleport>

	<div class="p-2 bg-pink-400 shadow text-white">Cek Harga</div>
	<div class="">
		<div class="" v-for='x in data'>
			
		</div>
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	const data = ref([
		{namaBarang: '', harga: '', kuantitas: '', hasilBagi: ''}
	])
</script>