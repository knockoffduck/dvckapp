<script>
	import * as dfd from 'danfojs';
	import papa from 'papaparse';
	import Dropzone from 'svelte-file-dropzone';
	import { purchases, transactions } from '../../stores/transactionsStore';
	import Charts from './charts.svelte';
	import { handleFilesSelect } from './fileHandler.svelte';

	import '../../app.css';

	let uploaded = false;
	let string;
	let Transactions = [];
	let Purchases = [];
	function sortTransactions(array) {
		for (let transaction of array) {
			let type = transaction['Transaction Type'];
			let merchant = transaction['Payee'];
			let category = transaction['Category'];
			let amount = transaction['Total (AUD)'];
			if (category === '') {
				category = 'Misc';
			}

			Transactions.push({
				TransactionType: type,
				Merchant: merchant,
				Category: category,
				Amount: amount
			});
			if (type === 'Purchase') {
				Purchases.push({
					TransactionType: type,
					Merchant: merchant,
					Category: category,
					Amount: amount
				});
			}
		}
		let df = new dfd.DataFrame(Purchases);
		df['Amount'] = df['Amount'].abs();
		let grouped = df.groupby(['Category']).col(['Amount']).sum();
		let categorised = dfd.toJSON(grouped);
		for (let transaction of categorised) {
			$purchases.push(transaction);
		}
	}

	function CSVParser(event) {
		let csvFile = handleFilesSelect(event);
		let config = {
			header: true,
			skipEmptyLines: true,
			complete: (result) => {
				let temp = result.data;
				sortTransactions(temp);
				console.log($transactions);
				uploaded = true;
			}
		};
		papa.parse(csvFile, config);
	}

	async function loadTransactions() {
		const { data, error } = await supabase.from('Transactions').select();

		if (error) {
			return console.error(error);
		}
		transactions.set(data);
	}

	console.log(transactions);
</script>

<div>
	<div>
		{#if uploaded == false}
			<h3 class="has-text-centered">Upload XML</h3>
			<Dropzone on:drop={CSVParser} />
		{/if}
	</div>
	<div class="md:mx-auto p-6">
		{#if uploaded}
			<div class="h-screen content-center">
				<Charts />
			</div>
		{/if}
	</div>
</div>
