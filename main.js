var arr = [
    Math.random().toFixed(2),
    Math.random().toFixed(2),
    Math.random().toFixed(2),
    Math.random().toFixed(2),
    Math.random().toFixed(2)
  ];
  
  console.log(arr);
  var ul = document.createElement('ul');
  ul.className = 'myUL';
  document.getElementById('container').appendChild(ul);
  
  function myFunction() {
       
      // for(var i =0;i<5;i++){
      //   arr.push(Math.random().toFixed(2));
      // }
    create(arr);
  }
  
  function create(arr){
    arr.forEach(function(data){
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML  += data;
    li.className = "myList";
  });
  }create(arr);