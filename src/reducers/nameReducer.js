export default (names = [], action) => {
  switch (action.type){
    case 'GET_NAME_BY_ID':
      // console.log(action.payload)
      return action.payload
    default:
      return names
  }
}