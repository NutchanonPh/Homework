const MainObjects = (...objects) => {
    return objects.reduce((acc, obj) => {
      Object.keys(obj).forEach(key => {
        acc[key] = obj[key]
      })
      return acc
    })
  }
  
  let obj1 = {
    name: 'Big',
    age: 19,
    city: 'Thailand'
  }
  
  let obj2 = {
    name: 'Korn',
    age: 18,
    city: 'Italian'
  }
  
  let obj3 = {
    name: 'Boom',
    age: 20,
    city: 'Indonesia'
  }
  
  console.log(MainObjects(obj1, obj2, obj3))
  console.log(MainObjects(obj1, obj3, obj2))
  console.log(MainObjects(obj3, obj2, obj1))