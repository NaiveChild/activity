$(function() {
    var myswiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });

    $('.up').click(function(){
        setTimeout(function() {
            myswiper.slideNext();
        }, 500);
    })

    var answers={};
    console.log(answers);
    //单选题点击
    $('.one button').click(function() {
        if ($(this).children('div').css('display') == 'none') {
            $(this).children('div').show();
        } else {
            $(this).children('div').hide();
        }
        $(this).siblings().children('div').hide();
        var index=$(this).parent().attr("id");
        answers[index]=$(this).children('div:visible').parent().children('span').text();
        console.log(answers);
        setTimeout(function() {
            myswiper.slideNext();
        }, 600)
    });
    var arr1=[];
    var arr2=[];
    //多选题点击
    $('#changsuo button').click(function(){
        $(this).children('div').show();
        var index=$(this).parent().attr("id");
        if($(this).children('div:visible')){
            arr1.push($(this).children('span').text())
        }
        answers[index]=arr1;
        if(arr1.length>1){
            setTimeout(function() {
                myswiper.slideNext();
            }, 1000)
        }
    });
    $('#qudao button').click(function(){
        $(this).children('div').show();
        var index=$(this).parent().attr("id");
        if($(this).children('div:visible')){
            arr2.push($(this).children('span').text())
        }
        answers[index]=arr2;
        if(arr2.length>1){
            setTimeout(function() {
                myswiper.slideNext();
            }, 1000)
        }
    });


    // $('#save').click(function(){
    //     answers.name=$('.answer9 input').val();
    //     console.log(answers);
    //     $(".result").html(answers.name);
    // })

    // var src=$('.re img').attr('src');
    // $('.re button').click(function(){
    //  download(src,'图片');
    // });
    // function download(src,name){
    //     var $a = document.createElement('a');
    //     $a.setAttribute("href", src);
    //     $a.setAttribute("download", name);
    //     var evObj = document.createEvent('MouseEvents');
    //     evObj.initMouseEvent( 'click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
    //     $a.dispatchEvent(evObj);
    // }
    if(answers.sex =='男'){
        if(answers.yusuan =="1万以下"){

        }else if(answers.yusuan == "1~3万"){

        }else if(answers.yusuan == "3~5万"){
            
        }else if(answers.yusuan == "5~10万"){
            
        }else{
            
        }
    }else{

    }
    


    function hechen(){
        //因为没法直接读取本地图片 所以做了这部操作
        var mainCtx = document.getElementById('main').getContext("2d");;
        
        var starImg = new Image();
        starImg.src=$('#starImg').attr('src');

        starImg.onload=function(){
            var w = 200,h= 500;
            mainCtx.width = 223;
            mainCtx.height = 517;
            //先把图片绘制在这里
            mainCtx.drawImage(starImg,0,0);
            //读取用户的文本   
            if(answers.name){
                mainCtx.font = "small-caps bold 18px STXinwei";
                //设置用户文本填充颜色
                mainCtx.fillStyle = "black";
                //从坐标点(50,50)开始绘制文字
                mainCtx.fillText(answers.name,180,480);
            }
        }
    }
    $("#save").click(function(){
        answers.name=$('.answer9 input').val();
        hechen();
        
    });
    $('.re button').click(function(){
        console.log(1);
        var myCanvas = document.getElementById("main");
        var image = myCanvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
        window.location.href=image;
    })


    
})
