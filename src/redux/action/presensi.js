import axios from "axios"
import { getData } from "../../utils"

export const getPresensi = () => (dispatch) => {
    getData('token').then((resToken) => {
        console.log(resToken);
        axios.get('http://10.0.2.2:8000/api/absensiAll', { 
        headers: {
                Authorization: resToken.value
            },
        }).then((res) => {
            console.log('get Data: ', res);
            dispatch({type: 'SET_PRESENSI', value: res.data.data});
        }).catch((err) => {
            console.log('Error', err);
        });
    });
};