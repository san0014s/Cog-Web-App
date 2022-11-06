import SessionState from "../components/SessionState";

/**
 * Hits the storeData endpoint of the REST server to store a stat and gameType
 * 
 * @param {int} gameType - enumerable property representing the game type (i've arbitrarily chosen 1 for this game, TODO: standardize that server side)
 * @param {num} stat - whatever stat needs recorded for this game
 */
export const recordData = (gameType, stat) => {
    let personalData = {
        "gameType":gameType,
        "stat":stat
    }

    fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/storeData`, { // TODO: make protocol, ip address, and port(?) configurable
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personalData)
    })
    .catch(e => console.error(e)); // TODO: possibly apply a .then() and .catch() or return the promise so that callers can handle .then and/or .catch
}