import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth5652Reducer from '../features/EmailAuth5652/redux/reducers';
import CalendarView5651Reducer from '../features/CalendarView5651/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth5652: EmailAuth5652Reducer,
CalendarView5651: CalendarView5651Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});