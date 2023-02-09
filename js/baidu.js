function luojiajie({g=[]}){ //ES6中的结构赋值
  //console.log(g);
  //根据g的内容来生成对应的li，添加给ul
  let html = "";
  g.forEach(item=>{//每一项是一个对象，我只需要里面的q
    html += `<li><a target="_black" href="https://www.baidu.com/s?wd=${item.q}">${item.q}</a></li>`;
    //既然偷了百度的数据就全偷了，百度搜索地址也是大部分可以删掉的
    //https://www.baidu.com/s?wd=萌音。 这个地址就是百度的搜索，只需要改wd
  })
  oList.innerHTML = html;
}


let oInput = document.getElementById('searchInput');
let oList = document.getElementById('list');
let oSearch = document.getElementById("search");
oInput.onclick = function(){
  let data = oSearch.value
  window.open(`https://www.baidu.com/s?wd=${encodeURI(data)}`);
}
//oninput输入一次触发一次
oSearch.oninput = function(){
  let val = this.value;
  let src = `https://www.baidu.com/sugrec?prod=pc&wd=${encodeURI(val)}&cb=luojiajie` 
  //拼接对应的url
  //每一个src对应一个js文件。我们要引入这个文件
  let oScript = document.createElement("script");
  oScript.src = src;
  //添加到页面之后script标签才会执行
  document.body.appendChild(oScript);
  //之后判断有没有g，没有g把li清空，没有添加li
}