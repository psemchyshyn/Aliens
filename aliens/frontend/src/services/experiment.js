export function getExperiments() {
    return fetch(
        '/api/experiments').
        then(data => data.json())
}

export function getExperiment(id) {
    return fetch(
        `/api/experiment/${id}`).
        then(data => data.json())
}