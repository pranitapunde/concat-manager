
const ThemeReducer = (state, action) => {

    switch (action.type) {

        case 'CHANGE_THEME':
            return {
                ...state,
                darkTheme : state.darkTheme ? false : true,
            }

        default:
            return state;
    }


}


export default ThemeReducer