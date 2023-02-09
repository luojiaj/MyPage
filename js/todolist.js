// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(this.readyState === 4){
//         let data = this.responseText;
//         data = JSON.parse(data);
//         success(data);
//     }
// };

// xhr.open("GET","https://mock.yonyoucloud.com/mock/11975/123",true);

// xhr.send();
// var list = "dsadsadsads1";//list为参数
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.readyState === 4){
        let data = this.responseText;
        data = JSON.parse(data);
        success(data);
    }
}

xhr.open("GET","https://mock.yonyoucloud.com/mock/11975/123",true);
xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
xhr.send();
function success(data){
    var list = data;
    document.getElementById('add').onclick = function(){  //增加
        let todo = document.getElementById("add").previousElementSibling.value;
        let li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"/> ${todo} <button>删除</button>`;
        li.setAttribute('id','1');
        let inp = li.childNodes[0];
        inp.onchange = function(){
            if(inp.parentElement.id == '1'){
                document.getElementById('u1').removeChild(inp.parentElement);
                document.getElementById('u2').appendChild(inp.parentElement);
                inp.parentElement.id = '2';
            } else {
                document.getElementById('u2').removeChild(inp.parentElement);
                document.getElementById('u1').appendChild(inp.parentElement);
                inp.parentElement.id = '1';
            }
        }
        document.getElementById('u1').appendChild(li);
        document.getElementById("add").previousElementSibling.value = '';
        let bu = document.querySelectorAll('li>button');
        for(let i=0;i<bu.length;i++){
            bu[i].onclick = function(){
                console.log(bu[i].parentElement);
                bu[i].parentElement.remove();
            }
        }
    };
    
    
    list.map((item,index)=>{ 
        let li = document.createElement('li');
        if(!item.checked){
                li.innerHTML = `<input type="checkbox"/> ${item.title} --------- <button>删除</button>`;
                li.setAttribute('id','1');
                document.getElementById('u1').append(li);
    
        } else {
                li.innerHTML = `<input type="checkbox" checked/> ${item.title} --------- <button>删除</button>`;
                li.setAttribute('id','2');
                document.getElementById('u2').append(li);
    
        }
    })
        
    
    let bu = document.querySelectorAll('li>button');
    for(let i=0;i<bu.length;i++){
        bu[i].onclick = function(){
            //console.log(bu[i].parentElement);
            let todo = bu[i].parentElement.value;
           
            bu[i].parentElement.remove();
        }
    }
    
    
    let chb = document.querySelectorAll('li>input');
    for(let i=0;i<chb.length;i++){
        chb[i].onchange = function(){
            if(chb[i].parentElement.id == '1'){
                document.getElementById('u1').removeChild(chb[i].parentElement);
                document.getElementById('u2').appendChild(chb[i].parentElement);
                chb[i].parentElement.id = '2';
            } else {
                document.getElementById('u2').removeChild(chb[i].parentElement);
                document.getElementById('u1').appendChild(chb[i].parentElement);
                chb[i].parentElement.id = '1';
            }
        }
    }
    
}
// var list = [
//     {
//         title:"年入五十万",
//         checked:false
//     },
//     {
//         title:"被世界名校录取",
//         checked:true
//     },
//     {
//         title:"富萝莉",
//         checked:false
//     },
//     {
//         title:"一辆宝马",
//         checked:false
//     },
//     {
//         title:"进入BAT",
//         checked:false
//     },
//     {
//         title:"生活自给自足",
//         checked:true
//     }
// ];

