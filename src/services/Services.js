import { NUTRISCORE_LIST } from "../ui/components";
import { getActivity, getAverageSession, getPerformance, getUser } from "./Calling";

/**
 * get the user front name from back
 * @returns user first name
 */
function getFirstName() {
    return getUser().then(data => data.userInfos.firstName);
}

/**
 * get the user key data from the back
 * @returns user key data like kcal, proteins, etc...
 */
function getKeyData() {
    return getUser().then(data => data.keyData);
}

/**
 * get by the name, the value of the searched data
 * @param {string} name name of the searched data
 * @returns the value of the searched data
 */
function getNutriCountFromNutriName(name) {
    return getKeyData().then(data => {
        switch(name) {
            case NUTRISCORE_LIST.Calorie :
                return data.calorieCount;
            case NUTRISCORE_LIST.Glucide :
                return data.carbohydrateCount;
            case NUTRISCORE_LIST.Lipide :
                return data.lipidCount;
            case NUTRISCORE_LIST.Protein :
                return data.proteinCount;
            default:
                throw new Error("Can't find nutriment");
        }
    })
}

/**
 * Get the average duration of the last sessions
 * @returns the average duration of the last sessions
 */
function getAverageDuration() {
    return getAverageSession().then(data => data.sessions);
}

/**
 * get the performance stats with there names
 * @returns the performance stats
 */
function getStats() {
    return getPerformance().then(data => {
        data.data.forEach(value => {
            switch(value.kind) {
                case 1 :
                    value.name = "cardio";
                    break;
                case 2 :
                    value.name = "energy";
                    break;
                case 3 :
                    value.name = "endurance";
                    break;
                case 4 :
                    value.name = "strength";
                    break;
                case 5 :
                    value.name = "speed";
                    break;
                case 6 :
                    value.name = "intensity";
                    break;
            }
        })
        return data.data;
    });
}

/**
 * get the daily score in degree
 * @returns daily score in degree
 */
function getScoreInDegree() {
    return getUser().then(data =>  {
        return data.todayScore * 360 + 90;
    });
}

/**
 * get the daily score in percent
 * @returns daily score in percent
 */
function getScoreInPercent() {
    return getUser().then(data => {
        return data.todayScore * 100;
    })
}

/**
 * Get daily activities sorted by dates
 * @returns daily activities sorted by dates
 */
function getDailyActivitySortByDate() {
    return getActivity().then(data => {
        let sessions = data.sessions.sort((a, b) => {
            return new Date(a.day) - new Date(b.day);
        })
        sessions.forEach(session => {
            session.index = sessions.indexOf(session) + 1;
        })
        return sessions;
    })
}

export { getFirstName, getKeyData, getNutriCountFromNutriName, getAverageDuration, getStats, getScoreInDegree, getScoreInPercent, getDailyActivitySortByDate };