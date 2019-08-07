var menu = {
    name: prompt('Имя',''),
    age: prompt('возраст','')
  };
  
  console.log( "Первое-------------");
    console.log( "Имя " + menu.name );
    console.log( "Возраст " + menu.age);

    console.log( "Второе-------------");


    var myArr = new Array (5);
    for (var j = 0, J = myArr.length; j < J; j++)
       myArr [j] = prompt ('введите значение ' + j + '-го элемента масива', '');
     
       console.log(myArr); // это для проверки
   
       console.log( "For----");
       for(var p = myArr.length-1;p >= 0;p--) { 
        console.log (myArr[p]);
      }
      console.log( "While----");
      var p = myArr.length-1;
      while(p >= 0) { 
        console.log (myArr[p]);
        p--;
      }

      // var o=promt('Введите сколько продуктов в магазине','')
      // var myArr1 = new Array (o);
      // for (var j = 0, J = myArr1.length; j < J; j++)
      //    myArr [j] = prompt ('Название продукта' + j , '');
       


// for (var k = 0, K = myArr.length; k < K; k++) {
//   console.log( masiv[k]);
// }






// var s=(masiv.length);
// for (var z = 0; z < masiv.length; z++) {
 
//     console.log( "Изначальный Массив " + masiv[s] );
//     s= s--;
//   }
//   console.log( "Изначальный Массив " + masiv ); 
  