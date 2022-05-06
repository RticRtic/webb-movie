export const STATUS = {
    FETCHING: 'FETCH_TRENDING_PENDING',
    SUCCESS: 'FETCH_TRENDING_SUCCESS',
    FAILURE: 'FETCH_TRENDING_FAILURE'
};

export const convertMinutes = (totalMinutes) => {
    let minutes = totalMinutes % 60;
    let hours = (totalMinutes-minutes)/60;
    let output = hours + 'h ' + minutes + 'm';

    return output;
};

export const splitDate = (date) => {
    let arr = date.split('-');

    return arr[0];
};