const Add_New  = 'Add_New'
const Delete = 'Delete'

export const addnew = (title,description,duedate) => {
  return{
    type : Add_New,
    title : title,
    description : description,
    duedate : duedate
  }
}

export const remove = () => {
  return{
    type : Delete
  }
}
