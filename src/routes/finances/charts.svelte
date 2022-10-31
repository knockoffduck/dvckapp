<script>
	import { PieChart } from '@carbon/charts-svelte';
	import '@carbon/charts/styles.css';
	import '@carbon/styles/css/styles.css';
	import { purchases } from '../../stores/transactionsStore';

	let data = $purchases;
	let options = {
		title: 'This Months Spending Allocation',
		pie: {
			valueMapsTo: 'Amount_sum',
			alignment: 'center'
		},
		legend: {
			alignment: 'center'
		},
		data: {
			groupMapsTo: 'Category'
		}
	};
</script>

<PieChart {data} {options} />
