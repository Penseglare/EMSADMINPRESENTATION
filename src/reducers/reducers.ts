import { combineReducers } from 'redux'
import { actionVariable } from '../actions/actions'

function todo(state:any, action:any) {
   switch (action.type) {
      case actionVariable.ADD_TODO:
         return {
            id: action.id,
            text: action.text,
         }
      default:
         return state
   }
}
function todos(state = [], action:any) {
   switch (action.type) {
      case actionVariable.ADD_TODO:
         return [
            ...state,
            todo(undefined, action)
         ]
      default:
         return state
   }
}
function todoSmple(state = {business:null}, action:any) {
   switch (action.type) {
      case actionVariable.SET_DATA:
         return {business:action.business}
         break;
         case actionVariable.REMOVE_DATA:
         return {business:null}
         break;
      default:
         return state
   }
}

const todoApp = combineReducers({
   todos,todoSmple
})
export default todoApp