import {call,put,takeEvery} from 'redux-saga/effects'
import { data,delet } from '../Action/Action'
import { Get_Data , Get_Data_Success ,Delete_Data,Delete_Data_Success} from '../Type'


function* getdata(action){
    const item= yield call(data,action.item)
    yield put ({
        type: Get_Data_Success,
        payload: item
    })
}
 function* deletdata(action){
    const value = yield call(delet,action.value)
    yield put ({
        type: Delete_Data_Success,
        payload: value
    })
 }



export default function* Selectall() {
    yield takeEvery(Get_Data,getdata)
    yield takeEvery(Delete_Data,deletdata)
}