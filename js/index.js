window.onload = function(){
  //为art2中每个添加点击事件
        var btnx = document.querySelector("#art2 .tab");
        for(let i=0;i<btnx.childElementCount;i++){
          btnx.children[i].onclick = function(){
            for(let j=0;j<btnx.childElementCount;j++){
              btnx.children[j].removeAttribute("class");
            }
            btnx.children[i].setAttribute("class","active");
             //控制art2第一个显示内容
            if(!btnx.firstElementChild.className){
              document.querySelector("#art2 .box").style.display ="none";
            } else {
              document.querySelector("#art2 .box").style.display ="";
            }
            //控制art2第二个显示内容
            if(!btnx.children[1].className){
                document.querySelector("#art2 .modal_content").style.display ="none";
            } else {
                console.log("2122");
              document.querySelector("#art2 .modal_content").style.display ="block";
            }
            //控制art2的第三个显示内容
            if(!btnx.children[2].className){
                document.querySelector("#art2 .todolist").style.display ="none";
            } else {
              document.querySelector("#art2 .todolist").style.display ="block";
            }
            //控制art2的第四个显示内容
            if(!btnx.children[3].className){
                document.querySelector("#art2 #wrap").style.display ="none";
            } else {
              document.querySelector("#art2 #wrap").style.display ="block";
            }
          }
        }
 
  //轮播图
        let box = document.querySelector(".box"),
        box1 = document.querySelectorAll('.box-1 ul li'),
        box2 = document.querySelector('.box-2 ul'),
        box3 = document.querySelector(".box-3"),
        lengthh = box1.length, //li的个数
        current = 0; //代表现在正在展示的图片
        let str = '';
        for(let i=0;i<lengthh;i++){
            if(i == 0){
                str += `<li class="on"> ${(i+1)} </li>`;
            }else{
                str += `<li> ${(i+1)} </li>`;
            }
        }
        box2.innerHTML = str;

        var timer = setInterval(forward,3000);
        //思路：轮播图片的时候，先让所有图片都隐藏，然后将下一张图片显示出来
        function forward(){
            for(var j=0;j<lengthh;j++){ //所有图片都隐藏
                box1[j].style.display = 'none';
                box2.children[j].className = "";
            }
            if(current == lengthh){
                current = 0; //因为没有第六张图片了，所以如果现在是第5张图片的时候，下一次显示的是第一张图片
            }
            box1[current].style.display = 'block';//不能是current+1，因为如果是current+1的话那么当current为5的时候就会出错(没有6)
            box2.children[current].className = "on";
            current++;
        }

        //鼠标移入图片的时候图片不进行移动，鼠标移除后正常移动
        for(let i=0;i<lengthh;i++){
            box1[i].onmouseover = function(){//移入后不进行轮播
                clearInterval(timer); //取消定时器
            }
            box1[i].onmouseout = function(){ //移除后继续计时
                timer = setInterval(forward,3000);//以1秒钟的速度进行轮播
            }
        }

        for(let i=0;i<lengthh;i++){//给box2设置鼠标移入的时候不轮播，同时定位到鼠标移入的那个图片上去，移除恢复轮播
            //注意:因为存在当前显示图片class要为on，所以需要定位到具体的位置
            box2.children[i].index = i; //给每个li设置一个index属性
            box2.children[i].onmouseover = function(){ //设置鼠标移入的时候不进行轮播
                clearInterval(timer);//1. 暂停了计时器
                //2.将鼠标接触到的li元素对应的图片显示出来
                for(let j=0;j<lengthh;j++){ //2.1将当前的图片隐藏
                    box1[j].style.display = 'none';
                    box2.children[j].className = "";
                }
                //2.2将当前鼠标移入的li元素的class变为on
                this.className = 'on';
                box1[this.index].style.display = 'block';
                current = this.index + 1;
            }
            box2.children[i].onmouseout = function(){
                timer = setInterval(forward,3000);
            }
        }

        for(let i=0;i<box3.children.length;i++){
            box3.children[i].onmouseover = function(){
                clearInterval(timer);
            };
            box3.children[i].onmouseout = function(){
                timer= setInterval(forward,3000);
            }
        }
    
        box3.children[0].onclick = function(){
            backward();
        }
        box3.children[1].onclick = function(){
            forward();
        }
        function backward(){ //销毁当前图片，然后拿出前一张图片
            //注意：如果当前图片为第1张，那么回退的时候回显示第5张
            for(let i=0;i<lengthh;i++){ //清空当前图片
                box1[i].style.display = 'none';
                box2.children[i].className = "";
                 //如果为第一张则下一张显示第五张
                
            }
            if(current == 0){
                current = lengthh;
                }
                box1[current-1].style.display ="block";
                box2.children[current - 1].className = 'on';
                current--;
            
        }
       
}

//手机验证码
var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;//手机号正则 
	var count = 60; //间隔函数，1秒执行
	var InterValObj1; //timer变量，控制时间
	var curCount1;//当前剩余秒数
	var yanz;
	/*第一*/
	function sendMessage1() {
		curCount1 = count;		 		 
		var phone = $.trim($('#phone1').val());
		if (!phoneReg.test(phone)) {
			alert(" 请输入有效的手机号码"); 
			return false;
		}
		//设置button效果，开始计时
		$("#btnSendCode1").attr("disabled", "true");
		$("#btnSendCode1").val( + curCount1 + "秒再获取");
		InterValObj1 = window.setInterval(SetRemainTime1, 1000); //启动计时器，1秒执行一次
		//向后台发送处理数据
		yanz =Math.floor(Math.random()*10000);
		console.log(yanz);
	}
	function SetRemainTime1() {
		if (curCount1 == 0) {                
			window.clearInterval(InterValObj1);//停止计时器
			$("#btnSendCode1").removeAttr("disabled");//启用按钮
			$("#btnSendCode1").val("重新发送");
		}
		else {
			curCount1--;
			$("#btnSendCode1").val( + curCount1 + "秒再获取");
		}
	} 
	
	/*提交*/
	function binding(){
		let y = document.getElementById("code1").value;
		if(yanz && y == yanz){
			alert("恭喜你，注册成功");
		} else {
			alert("验证码错误,请打开控制台查看验证码");
		}
	}