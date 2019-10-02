const intialstate = {
  title : [],
  descriptions : [],
  duedata : []
}


const add = (state = intialstate,action) => {
  switch(action.type){
    case 'Add_New' : return{
      title : state.title + action.title,
      descriptions : state.descriptions + action.description,
      duedate : state.duedate + action.duedate
    }
    default : return state
  }
}

export default add;
