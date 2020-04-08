import axios from 'axios';

export const initCountryName = (data) => (dispatch) => {
    dispatch({ type: 'COUNTRY_NAME', value: data });
}

export const setCountrySelected = (id, name) => async (dispatch) => {
    let res = await axios.get(`https://corona.lmao.ninja/countries/${name}`);
    if(res) {
        if (id === 1) {
            dispatch({ type: 'COUNTRY_1', value: res.data });
        } else {
            dispatch({ type: 'COUNTRY_2', value: res.data });
        }
    }
}

export const setShowStatus = () => (dispatch) => {
    dispatch({ type: 'SHOW_CHART', value: true });
}

export const refreshDispatch = () => (dispatch) => {
    dispatch({ type: 'COUNTRY_NAME', value: [] });
    dispatch({ type: 'COUNTRY_1', value: null });
    dispatch({ type: 'COUNTRY_2', value: null });
    dispatch({ type: 'SHOW_CHART', value: false });
}

export const setVisible = (data) => (dispatch) => {
    dispatch({ type: 'SHOW_MENU', value: data });
}

export const setDataSeries = (data, status) => () => {
    const arrA = [], arrB = [];
    const dataFirst = Object.entries(data[0]);
    const dataSecond = Object.entries(data[1]);
    
    dataFirst.map(re => { 
        if (status === 'all') {
            return arrA.push(re[1].confirmed)
        } else if (status === 'recovered') {
            return arrA.push(re[1].recovered)
        } else {
            return arrA.push(re[1].deaths)
        }
    });
    dataSecond.map(re => { 
        if (status === 'all') {
            return arrB.push(re[1].confirmed)
        } else if (status === 'recovered') {
            return arrB.push(re[1].recovered)
        } else {
            return arrB.push(re[1].deaths)
        }
    });

    return [ arrA, arrB ]
}

