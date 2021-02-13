function merge(obj1,obj2){
  for(let key in obj2){
    if(obj1.hasOwnProperty(key)){
      const item1 = obj1[key],item2 = obj2[key]
      item1 && typeof item1 === 'object'
      
      
      if(){
        //两个都是对象

      }else{
        //有一个不是对象，直接覆盖
        obj1[key] = obj2[key]
      }

    }else{
      obj1[key] = cloneDeep(obj2[key])
    }
  }
}