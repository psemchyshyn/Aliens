import { getAliens } from "../../../services/alien"
import { getHumans } from "../../../services/human"

export const enemyType = (user) => {
    // to differentiate human and alien, change some ui stuff
    if (!user.isAlien) {
        return {"color": "success", "race": "Alien", 'kill&abd': "Total abductions",
        'esc&comm': "Total commutations", 'ex': "Total experiments", "getEnemies": getAliens, 
        "enemyName": "aliens", 'action': "kill"}
    } else {
        return {"color": "danger", "race": "Human", 'kill&abd': "Total kills",
        'esc&comm': "Total escapes", 'ex': "Total excursions", "getEnemies": getHumans,
        "enemyName": "humans", 'action': "abduct"}
    }
}

export const userType = (user) => {
    // to differentiate human and alien, change some ui stuff
    if (user.isAlien) {
        return {"color": "success", "race": "Alien", 'kill&abd': "Total abductions",
        'esc&comm': "Total commutations", 'ex': "Total experiments", "getEnemies": getHumans}
    } else {
        return {"color": "danger", "race": "Human", 'kill&abd': "Total kills",
        'esc&comm': "Total escapes", 'ex': "Total excursions", "getEnemies": getAliens}
    }
}

export const getEscOrComm = (user) => {
    let result = user.isAlien ? user.commutations : user.escapes
    return result ? result : []
}

export const getKillsOrAbd = (user) => {
    let result = user.isAlien ? user.abductions: user.killed
    return result ? result : []
}

export const getEx = (user) => {
    let result = user.isAlien ? user.experiments : user.excursions
    return result ? result : []

}

export const getSecondWord = (word) => {
    console.log(word)
    return word.split(' ')[1]
}
