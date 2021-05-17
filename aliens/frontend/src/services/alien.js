export function getAlien(id) {
    return fetch(`/api/alien/${id}`).then(data => data.json())
}
