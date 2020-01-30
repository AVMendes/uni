$('address').click(function(event) {
	var address = $(event.target).text();
	console.log("Var: " + address);

	address.select();
	document.execCommand("copy");
	console.log("Copied to clipboard the following address: " + address);
})