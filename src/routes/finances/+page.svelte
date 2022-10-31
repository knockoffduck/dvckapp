<script>
	import '../../app.css';
	import Parser from './parser.svelte';
</script>

<div class="bg-white w-screen h-screen">
	<div class=" w-full h-full">
		<section class="body-font font-poppins">
			<div class="md:containner md:mx-auto p-5">
				<h1 class="subpixel-antialiased text-10xl font-extrabold text-center">
					UP Bank Transactions Tracker
				</h1>
			</div>
		</section>

		<section>
			<div class="md:container md:mx-auto">
				<Parser />
			</div>
		</section>
	</div>
</div>
