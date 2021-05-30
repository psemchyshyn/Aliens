export function getAlien(id) {
    return fetch(`/api/alien/${id}`).then(data => data.json())
}


export function getAliens(params) {
    if (!params) {
        params = {abductions: 0, commutations: 0, experiments: 0}
    }
    const {abductions, commutations, experiments} = params;
    let url = "/api/aliens?"
    url += new URLSearchParams({abductions, commutations, experiments}).toString()
    console.log(url)
    return fetch(url).then(data => data.json())
}