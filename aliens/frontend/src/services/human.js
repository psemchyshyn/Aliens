export function getHuman(id) {
    return fetch(`/api/human/${id}`).then(data => data.json())
}
