<script>
	import { fade } from 'svelte/transition';
	import '../app.css';
</script>

<main class="font-poppins bg-black w-screen h-screen">
	<div transition:fade class="flex h-screen  place-items-center">
		<div class="m-auto">
			<div class="flex justify-center  m-auto">
				<h1 class="text-9xl text-white font-bold tracking-tight ">Hello.</h1>
			</div>
			<div class="flex justify-center gap-2 ">
				<button onclick="location.href='/work'" class="btn">work</button>
				<button onclick="location.href='/finances'" class="btn">finances</button>
			</div>
		</div>
	</div>
</main>
