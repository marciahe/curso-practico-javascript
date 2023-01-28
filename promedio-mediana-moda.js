const MarsMath = {};

MarsMath.calcularPromedio = function calcularPromedio(lista) {
  function sumarElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }
    const sumaLista = lista.reduce(sumarElementos);
    const average = sumaLista / lista.length;
    return average;
}

MarsMath.isEven = function isEven(arr){
    let size = arr.length;
    if(size%2==0){
      return true;
    } else{
      return false;
    }
}  
  
MarsMath.orderArr = function orderArr(arr){
  function orderArrSort(a, b){
    return a - b;
  }
  const orderedArr = arr.sort(orderArrSort);
  return orderedArr;
}

MarsMath.calcularMediana = function calcularMediana(arr){
    const orderedArr = MarsMath.orderArr(arr);
    const arrIsEven = MarsMath.isEven(arr);

    if (arrIsEven){
      const indexMiddleItem1 = Math.floor((orderedArr.length)/2) -1;
      const indexMiddleItem2 = Math.floor(orderedArr.length/2);
      const medianaEven = Math.floor((orderedArr[indexMiddleItem1] + orderedArr[indexMiddleItem2]) / 2)
      return medianaEven;
    }else{
        const indexMiddleItem = Math.floor(orderedArr.length/2);
        const medianaOdd = orderedArr[indexMiddleItem];
        return medianaOdd;
    }
}

MarsMath.calcularModa = function calcularModa(arr){
  const arrCount = {};
  for (let i=0; i < arr.length; i++){
    const item = arr[i];

    if(arrCount[item]){ 
      arrCount[item] += 1;
    }else{
      arrCount[item] = 1;
    }
  }
  //  convertir un objeto en array  
  const arrArray = Object.entries(arrCount);
  const orderedArray = orderBidimentionalArr(arrArray);
  const elementMaxNumber = orderedArray[orderedArray.length -1];
  const moda = elementMaxNumber[0];
  return moda;
}

MarsMath.orderBidimentionalArr = function orderBidimentionalArr(arr){
  function orderArrSort(valorAcumulado, nuevoValor){
    return valorAcumulado[1] - nuevoValor[1];
  }
  const orderedArr = arr.sort(orderArrSort);
  return orderedArr;
}