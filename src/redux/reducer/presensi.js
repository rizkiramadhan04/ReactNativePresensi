const initPresensi = {
    presensi: [],
    inProgress: [],
};

export const presensiReducer = (state=initPresensi, action) => {

    if(action.type === 'SET_PRESENSI') {
        return {
            ...state,
            presensi: action.value
        }
    }

    return state;
}