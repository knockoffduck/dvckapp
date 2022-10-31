<script context="module">
	export function handleFilesSelect(e) {
		let files = {
			accepted: [],
			rejected: []
		};
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
		return files.accepted[0];
	}
</script>
