<template>
	<teleport to='head'>
		<title>Cek Harga</title>
	</teleport>

	<div class="p-2 bg-red-400 shadow text-white">Cek Harga</div>
	<div class="p-2">
		<div class="border mb-2 bg-red-300 shadow rounded p-2" v-for='x in data'>
			<div class="pb-2 grid grid-cols-6">
				<input type="text" class='inputan col-span-4' placeholder="nama barang">
				<input type="text" class='inputan col-span-2 bg-purple-200' placeholder="hasil" readonly>
			</div>
			<div class="grid grid-cols-2">
				<input type="text" class="inputan" placeholder="harga">
				<input type="text" class="inputan" placeholder="banyak">
			</div>
		</div>
	</div>
</template>

<style scoped>
	.inputan {
		@apply focus:outline-none border p-1 w-full;
	}
</style>

<script setup>
	import {ref} from 'vue'
	const data = ref([
		{namaBarang: '', harga: '', kuantitas: '', hasilBagi: ''},
		{namaBarang: '', harga: '', kuantitas: '', hasilBagi: ''},
	])
</script>