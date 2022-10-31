<script>
	import superagent from 'superagent';

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

<div class="flex h-screen w-screen m-auto">
	<button class="btn" on:click={onbuttonclick}>get timetable</button>
</div>
{#if fetched}
	<img src={arr[0]} alt="timetable" />
{/if}
<div />
