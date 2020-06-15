import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth5652Saga from '../features/EmailAuth5652/redux/sagas';
import CalendarView5651Saga from '../features/CalendarView5651/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth5652Saga,
CalendarView5651Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}