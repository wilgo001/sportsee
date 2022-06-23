function getUser() {
    return fetch('./user.json').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}

function getPerformance() {
    return fetch('./performance.json').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}

function getAverageSession() {
    return fetch('./averageSession.json').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}

function getActivity() {
    return fetch('./activity.json').then(rsp => rsp.json()).then(data => data.data).catch(error => {
        throw new Error('error occured because of : ' + error)
    });
}
export { getUser, getPerformance, getAverageSession, getActivity };