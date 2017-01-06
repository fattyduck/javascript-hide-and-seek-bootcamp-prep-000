function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('.target');
}

function deepestChild(){
  var temp = document.querySelector("#grand-node");
  while (temp.child){
    temp = temp.child
  }
  return temp;
}

function increaseRankBy (n){
  const nodeList = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < nodeList.length ;i++){
    nodeList[i].innerHTML = parseInt(nodeList[i].innerHTML) + n;
  }
}
