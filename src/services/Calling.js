const USER_ID = '12';     //TODO: Change this id by the one receive by the authentication
const URL = 'http://localhost:3000/user/'       //TODO: Change when get into production

/**
 * get response from the user path, and send an error if needed.
 * Do not use Calling methods directly, use or create a method in Services.
 * @returns user data
 */
function getUser() {
    return fetch(URL + USER_ID + '/').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}

/**
 * get response from the performance path, and send an error if needed.
 * Do not use Calling methods directly, use or create a method in Services.
 * @returns performance data
 */
function getPerformance() {
    return fetch(URL + USER_ID + '/performance').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}

/**
 * Get response from average sessions path, and send an error if needed.
 * Do not use Calling methods directly, use or create a method in Services.
 * @returns average sessions data
 */
function getAverageSession() {
    return fetch(URL + USER_ID + '/average-sessions').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}

/**
 * Get response from activity path, and send an error if needed.
 * Do not use Calling methods directly, use or create a method in Services.
 * @returns activity data
 */
function getActivity() {
    return fetch(URL + USER_ID + '/activity').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}
export { getUser, getPerformance, getAverageSession, getActivity };