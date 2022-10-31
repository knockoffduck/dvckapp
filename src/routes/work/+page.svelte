<script>
	import superagent from 'superagent';
	import '../../app.css';

	let arr = [];
	let fetched = false;

	async function onbuttonclick() {
		let url = 'https://150.230.12.140/api';
		let data = await superagent.get(url);
		arr.push(await data.text);
		if (arr) {
			fetched = true;
		}
	}
</script>

<body class="font-poppins bg-black w-screen h-screen">
	<div class="flex h-screen  place-items-center">
		<div class="m-auto">
			{#if fetched}
				<div class="grid gap-3">
					<img src={arr[0]} alt="timetable" />
					<button class="btn" on:click={onbuttonclick}>get timetable</button>
				</div>
			{:else}
				<button class="btn" on:click={onbuttonclick}>get timetable</button>
			{/if}
			<div />
		</div>
	</div>
</body>
