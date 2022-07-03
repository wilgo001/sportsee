import { NUTRISCORE_LIST } from "../ui/components";
import { getActivity, getAverageSession, getPerformance, getUser } from "./Calling";

function getFirstName() {
    return getUser().then(data => data.userInfos.firstName);
}

function getKeyData() {
    return getUser().then(data => data.keyData);
}

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

function getAverageDuration() {
    return getAverageSession().then(data => data.sessions);
}

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

function getScoreInDegree() {
    return getUser().then(data =>  {
        return data.todayScore * 360 + 90;
    });
}

function getScoreInPercent() {
    return getUser().then(data => {
        return data.todayScore * 100;
    })
}

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