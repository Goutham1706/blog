export default (name = [], action) => {
  switch (action.type){
    case 'GET_NAME_BY_ID':
      // console.log(action.payload)
      // console.log(name)
      // console.log(action.payload)
      // const newObj  = {}
      // newObj[`person_${action.payload.id}`] = action.payload.name
      const newArr = [...name, action.payload]
      return newArr
    default:
      return name
  }
}