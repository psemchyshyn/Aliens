export function getSpaceship(id) {
    return fetch(`/api/spaceship/${id}`).then(data => data.json())
}

export function getSpaceships(id, isAlien) {
    let url = "/api/spaceships?"
    if (id && isAlien !== undefined) {
        url += new URLSearchParams({"target_id": id, isAlien}).toString()
    } 
    return fetch(url).then(data => data.json())
}