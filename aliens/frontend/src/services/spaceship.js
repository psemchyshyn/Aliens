function getSpaceship(id) {
    return fetch(`/api/spaceship/${id}`).then(data => data.json())
}