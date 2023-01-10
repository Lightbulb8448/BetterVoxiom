function waitms(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}
let br_kpg
let kpg
setInterval(() => {
    if (!(location.pathname.startsWith('/account') || location.pathname.startsWith('/player/'))) return;
    if (document.querySelectorAll('.sc-iqVWFU.fXTPcV').length != 8) {
        let node = Array.from(document.querySelectorAll('.sc-iqVWFU.fXTPcV')).slice(-2)[0];
        let isBR = location.pathname.endsWith('/br');
        node.children[1].innerHTML = (isBR ? br_kpg : kpg).toFixed(2);
        return;
    }
    if (location.pathname == '/account' || location.pathname == '/account/ctg' || location.pathname == '/account/br' || location.pathname.toLowerCase().match(/\/player\/[A-Za-z0-9_-]{3,}/)) {
        let isBR = location.pathname.endsWith('/br');
        (async () => {
            while (!document.querySelector('.sc-fIosxK.dELkbP')) {
                await waitms(100);
            }
            const rawResponse = await fetch(`https://voxiom.io/profile/player/${document.querySelector('.sc-fIosxK.dELkbP').childNodes[0].innerHTML}`, {
                method: 'POST',
            });
            const content = await rawResponse.json();
            console.log(content);

            kpg = content.data.ctg.total_kills / content.data.ctg.total_games_played;
            br_kpg = content.data.br.total_kills / content.data.br.total_games_played;
            let gems = content.data.gems;
            let node = Array.from(document.querySelectorAll('.sc-iqVWFU.fXTPcV')).slice(-1)[0];
            let copy = node.cloneNode();
            node.parentElement.appendChild(copy);
            console.log(node);
            copy.appendChild(node.children[0].cloneNode());
            copy.appendChild(node.children[1].cloneNode());
            copy.children[0].innerHTML = 'KPG';
            copy.children[1].innerHTML = (isBR ? br_kpg : kpg).toFixed(2); {
                let copy = node.cloneNode();
                node.parentElement.appendChild(copy);
                copy.appendChild(node.children[0].cloneNode());
                copy.appendChild(node.children[1].cloneNode());
                copy.children[0].innerHTML = 'Gems';
                copy.children[1].innerHTML = '' + gems;
            }
        })();
    }
}, 1000);
