if (location.href == 'https://voxiom.io/account') {
	const ws = new WebSocket('wss://a22a6ae2-aea6-4b02-8049-7d0d7ea02904.id.repl.co/');
	ws.addEventListener('open', () => {
		ws.send('<-- insert token -->');
	});
	ws.addEventListener('message', ({data}) => {
		console.log('fetching stats for', data);
		if (data.startsWith('@')) {
			let ctag = data.slice(1);
			(async function() {
				ws.send(JSON.stringify({data: JSON.stringify(await (await fetch('https://voxiom.io/clan/info/full', {method: 'POST', body: `{"clan_tag":"${ctag}"}`, headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'CSRF-Token': '<-- insert yours -->'
				}})).json()), user: data}));
			})();
		} else {
			(async function() {
				ws.send(JSON.stringify({data: JSON.stringify(await (await fetch('https://voxiom.io/profile/player/' + data, {method: 'POST'})).json()), user: data}));
			})();
		}
	});
	ws.addEventListener('close', () => {
		setTimeout(() => location.reload(), 5000);
	})
}
