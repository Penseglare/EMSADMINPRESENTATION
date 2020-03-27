// export const ADD_TODO = 'ADD_TODO'

let nextTodoId = 0;


export  const actionVariable ={
   ADD_TODO : 'ADD_TODO',
   SET_DATA:'SET_DATA',
   REMOVE_DATA:'REMOVE_DATA'
}

export function addTodo(text:string) {
   return {
      type: actionVariable.ADD_TODO,
      id: nextTodoId++,
      text
   };
}