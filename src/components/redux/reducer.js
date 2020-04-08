const initialState = {
    countryList: [],
    country_1: null,
    country_2: null,
    showChart: false,
    showMenu: '0',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTRY_NAME':
            return {
              ...state,
              countryList: action.value
            }
        case 'COUNTRY_1':
            return {
              ...state,
              country_1: action.value
            }
        case 'COUNTRY_2':
            return {
              ...state,
              country_2: action.value
            }
        case 'SHOW_CHART':
            return {
              ...state,
              showChart: action.value
            }
        case 'SHOW_MENU':
            return {
              ...state,
              showMenu: action.value
            }
        default:
            return state;
    }
}

export default reducer;