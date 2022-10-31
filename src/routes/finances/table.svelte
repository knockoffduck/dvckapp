<script>
	export let tableData;
	import '../../app.css';

	let headers = ['Transaction Type', 'Merchant', 'Category', 'Amount'];
</script>

<table class="table mx-auto">
	<thead>
		<tr>
			{#each headers as header}
				<th>
					{header}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each tableData as { TransactionType, Amount, Category, Merchant }}
			<tr>
				<td>{TransactionType}</td>
				<td>{Merchant}</td>
				<td>{Category}</td>
				<td>{Amount}</td>
			</tr>
		{/each}
	</tbody>
</table>
