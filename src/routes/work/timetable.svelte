<script context="module">
	import superagent from 'superagent';

	export async function load(url) {
		let dashboard = await superagent.get(url);

		return dashboard;
	}
	/* const superagent = require('superagent').agent()
    
    export async function load(url) {
        let dashboard = await superagent
            .post(url)
            .send({ username: 'daffa.fathurohman', loginbutton: '', password: 'P@55word.3276', submitFrm: 'true' })
            .set('Content-Type', 'text/html')
        console.log(dashboard.text)
    
    }
    */
</script>
