const USER_ID = '12';     //TODO: Change this id by the one receive by the authentication
const URL = 'http://localhost:3000/user/'       //TODO: Change when get into production

function getUser() {
    return fetch(URL + USER_ID + '/').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}

function getPerformance() {
    return fetch(URL + USER_ID + '/performance').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}

function getAverageSession() {
    return fetch(URL + USER_ID + '/average-sessions').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}

function getActivity() {
    return fetch(URL + USER_ID + '/activity').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}
export { getUser, getPerformance, getAverageSession, getActivity };