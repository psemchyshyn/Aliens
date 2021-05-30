export function getHuman(id) {
    return fetch(`/api/human/${id}`).then(data => data.json())
}

export function getHumans(params) {
    if (!params) {
        params = {kills: 0, escapes: 0, excursions: 0}
    }
    const {kills, escapes, excursions} = params;
    let url = "/api/humans?"
    url += new URLSearchParams({kills, escapes, excursions}).toString()
    console.log(url)
    return fetch(url).then(data => data.json())
}