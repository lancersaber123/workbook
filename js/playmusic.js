
var c=0;

$("#nav-right>li:eq(0)").mouseenter(function(){
  c=0;
  $("#img-box>ul").removeClass("position-relative");
  $("#img-box").addClass("img-box");
  $("#img1g").addClass("position-relative");
  for(i=0,j=0;j<8;j++){
    
    var $li=$("<li></li>");
    $li.addClass("img-li");
    var $img=$("<img>");
    $img.attr("src","img/desktop/pifu/windows0img/"+i+j+".jpg");
    $img.attr("target",""+i+j);
    $li.append($img);
    $("#img1g").append($li);
    $img.animate({width:150},150);
  }
  $("#text-left").html("点这换一批").addClass("spanleft");
  $("#text-right").html("点小图换壁纸").addClass("spanright");

});
//
$("#nav-right>li:eq(0)").mouseleave(function(){
  $("#img-box").removeClass("img-box");
  var $liActive=$("ul.position-relative>li");
  $liActive.remove();
  $("#text-left").html("");
  $("#text-right").html("");
});
$("#img1g").on("click","img",function(){
  var $target=$(this).attr("target");
  $("#contaner>img").attr("src","img/desktop/pifu/windows0img/"+$target+".jpg");
  var $widt=parseInt($("#contaner").css("width"));
  $("#contaner>img").css("height","0");
  if($widt!=1376) {
    $("#contaner>img").animate({height: 977}, 500);
  }
  else{
    $("#contaner>img").animate({height: 655}, 500);
  }
});

$("#text-left").click(function(){
  if(c>3){
    c=1;
  }
  else{
    c++;
  }
  var $ulactive=$("ul.position-relative");
  var $ulnext=$ulactive.next();
  $("ul.position-relative>li").remove();
  $("#img-box>ul").removeClass("position-relative");
  $ulactive.removeClass("position-relative");
  if($ulnext.length!=0) {
    console.log($ulnext.length);
    for (i = 0, j = 0; j < 8; j++) {
      var $li = $("<li></li>");
      $li.addClass("img-li");
      var $img = $("<img>");
      
      $img.attr("src", "img/desktop/pifu/windows"+c+"img/" + i + j + ".jpg");
      $img.attr("target", "" + i + j);
      $li.append($img);
      $ulnext.append($li);
      $img.animate({width:150,height:93},150);
    }
    $ulnext.addClass("position-relative");
  }
  else{
    $("ul.position-relative>li").remove();
    for (i = 0, j = 0; j < 8; j++) {
      var $li = $("<li></li>");
      $li.addClass("img-li");
      var $img = $("<img>");
      $img.attr("src", "img/desktop/pifu/windows0img/" + i + j + ".jpg");
      $img.attr("target", "" + i + j);
      $li.append($img);
      $("#img1g").append($li);
      $img.animate({width:150,height:93},150);
    }
    $("#img1g").addClass("position-relative");
  }

});
$("#img2g").on("click","img",function(){
  var $target=$(this).attr("target");
  var $widt=parseInt($("#contaner").css("width"));
  $("#contaner>img").attr("src","img/desktop/pifu/windows1img/"+$target+".jpg");
  $("#contaner>img").css("height","0");
  if($widt>1376) {
    $("#contaner>img").animate({height: 977}, 500);
  }
  else{
    $("#contaner>img").animate({height: 670}, 500);
  }
});
$("#img3g").on("click","img",function(){
  var $target=$(this).attr("target");
  var $widt=parseInt($("#contaner").css("width"));
  $("#contaner>img").attr("src","img/desktop/pifu/windows2img/"+$target+".jpg");
  $("#contaner>img").css("height","0");
  if($widt>1376) {
    $("#contaner>img").animate({height: 977}, 500);
  }
  else{
    $("#contaner>img").animate({height: 670}, 500);
  }
});
$("#img4g").on("click","img",function(){
  var $target=$(this).attr("target");
  var $widt=parseInt($("#contaner").css("width"));
  $("#contaner>img").attr("src","img/desktop/pifu/windows3img/"+$target+".jpg");
  $("#contaner>img").css("height","0");
  if($widt>1376) {
    $("#contaner>img").animate({height: 977}, 500);
  }
  else{
    $("#contaner>img").animate({height: 670}, 500);
  }
});


function datetime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var year = date.getFullYear();
  var month = date.getMonth();  
  var dat = date.getDate();
  var week = date.getDay();
 
  var strw = ""; 
  var strh="";  
  var strm="";  
  var strs=""; 
  var strM=""; 
  var strD=""; 
  switch (week) {
    case 1:
      strw += "星期一";
      break;
    case 2:
      strw += "星期二";
      break;
    case 3:
      strw += "星期三";
      break;
    case 4:
      strw += "星期四";
      break;
    case 5:
      strw += "星期五";
      break;
    case 6:
      strw += "星期六";
      break;
    case 0:
      strw += "星期天";
      break;
  }

  if(month+1<10){
    strM="0";
  }else{
    strM="";
  }
  if(dat<10){
    strD="0";
  }else{
    strD="";
  }

  if(second<10){
    strs="0";
  }
  else{
    strs="";
  };

  if(hour<10){
    strh="0";
  }
  else{
    strh="";
  };

  if(minute<10){
    strm="0";
  }
  else{
    strm="";
  };
  
  var $time = $("#datetime-right>p:eq(0)");
  $time.html(strh+hour + ":" + strm + minute + ":" +strs+ second);
  
  var $dat = $("#datetime-right>p:eq(1)");
  $dat.html(year + "-" + strM+(month + 1) + "-" + strD+dat);
  
  var $week = $("#datetime-right>p:eq(2)");
  $week.html("" + strw);
  
  var $month=$("#datetime-left>div>p:eq(0)");
  $month.html(strM+(month+1)+'月');
  
  var $date=$("#datetime-left>div>p:eq(1)");
  $date.html(strD+dat+'日');
}

var timer=setInterval(datetime,1000);



$("#XYmusic-icon").dblclick(function() {
  $("#music").css("position", "fixed").css("left", "0").css("z-index", "50");
})

var musicArr = [
  "",
  "music/1.mp3",
  "music/2.mp3",
  "music/3.mp3",
  "music/4.mp3",
];
var musicPic=[
  "",
  "img/playmusic/icon/01.jpg",
  "img/playmusic/icon/02.jpg",
  "img/playmusic/icon/03.jpg",
  "img/playmusic/icon/04.jpg",
  "img/playmusic/icon/05.jpg",
  "img/playmusic/icon/06.jpg",
  "img/playmusic/icon/07.jpg",
  "img/playmusic/icon/08.jpg",
  "img/playmusic/icon/09.jpg",
  "img/playmusic/icon/10.jpg"
];
//杞挱鍥�
var index = 0;  //璁剧疆涓嬫爣涓�0
var arr = ['p1', 'p2', 'p3']; //璁剧疆鏂版暟缁�
function carousel() {
  arr.unshift(arr[2]); //鍦ㄦ暟缁勫ご閮ㄥ姞鍏3锛堟渶鍚庝竴涓級锛屽疄鐜版棤缂濊疆鎾� ['p3','p1', 'p2', 'p3']=>4
  arr.pop(); //['p3','p1', 'p2']=>p3  锛坧1,p2,p3閫氳繃瀹氭椂鍣ㄥ惊鐜紝鏈€涓婇潰閭ｅ紶鏄痯2锛�
  $("#music-boundary-center-right>ul>li").each(function(i, e) {
    $(e).removeClass().addClass(arr[i]);
  })
  index++;
  if (index > 2) {
    index = 0;
  }
}
setInterval(carousel, 4000);

//鐐瑰嚮姝屽悕鎾斁鐩稿搴旂殑闊充箰
$("#music-boundary-center-left>ul>li.music").click(function() {
  var $in = $(this).index();  //鍙栧嚭褰撳墠涓嬫爣
  // index() 鏂规硶杩斿洖鎸囧畾鍏冪礌鐩稿浜庡叾浠栨寚瀹氬厓绱犵殑 index 浣嶇疆銆�
  // 杩欎簺鍏冪礌鍙€氳繃 jQuery 閫夋嫨鍣ㄦ垨 DOM 鍏冪礌鏉ユ寚瀹氥€�
  // 娉ㄩ噴锛氬鏋滄湭鎵惧埌鍏冪礌锛宨ndex() 灏嗚繑鍥� -1銆�

  //        0          1    2    3    4    5    6    7    8    9    10
  //""(鏍囬鎴戠殑闊充箰)  鎱�    鎴�   浜�   鎴�   椋�   瀛�   蹇�   鍗�   鍐�   寰€
  $("#music-boundary-center-left>ul>li").removeClass("acti");  //鎵€鏈塴i鍘婚櫎鑳屾櫙鑹�
  $(this).addClass("acti");  //涓哄綋鍓峫i娣诲姞鑳屾櫙鑹�
  xin.src = musicArr[$in];  //褰撳墠鎾斁姝屾洸鏉ユ簮鍦板潃
  xinP.src=musicPic[$in];  //璁剧疆褰撳墠鎾斁鍥剧墖

  xin.play();
  $("#music-play>img").attr("src", "img/playmusic/icon/stop.png")
})
//璁剧疆闊充箰鑷姩鎾斁涓嬩竴棣� 骞跺綋鎾斁瀹屼竴閬嶅悗 浠庡ご鎾斁
function autoplay() {
  if (xin.ended) {
    //涓轰笅涓€棣栨坊鍔犺儗鏅壊
    var $ind = $("#music-boundary-center-left>ul>li.acti").index();
    console.log($ind);
    $("#music-boundary-center-left>ul>li").removeClass("acti");
    $ind++;
    $("#music-boundary-center-left>ul>li:eq(" + $ind + ")").addClass("acti");

    xin.src = musicArr[$ind];
    xin.play();
    xinP.src=musicPic[$ind];
    //瀹炵幇浠庢湯灏惧埌寮€澶�
    if ($ind >=10) {
      $ind = 1;
      $("#music-boundary-center-left>ul>li:eq(" + $ind + ")").addClass("acti");
      xin.src = musicArr[$ind];
      xin.play();
      xinP.src=musicPic[$ind];
    }
  }
}
//1绉掓鏌ヤ竴娆�
var timer = setInterval(autoplay, 1000);
//鐐瑰嚮鎾斁
$("#music-play").click(function() {
  if (xin.paused) {
    xin.play();
    $("#music-play>img").attr("src", "img/playmusic/icon/stop.png")
  } else {
    xin.pause();
    $("#music-play>img").attr("src", "img/playmusic/icon/play.png")
  }
})
//鎺у埗宸﹀彸閿潵鍒囨崲涓婁竴棣栧拰涓嬩竴棣�
function nexPre(x, y,z) {
  var $ind = $("#music-boundary-center-left>ul>li.acti").index();
  $ind += y;
  if ($ind >= 11) {
    $ind = x;
  }
  if($ind<1){
    $ind = z;
  }
  $("#music-boundary-center-left>ul>li").removeClass("acti");
  $("#music-boundary-center-left>ul>li:eq(" + $ind + ")").addClass("acti");
  console.log($ind);
  xin.src = musicArr[$ind];
  console.log(musicArr[$ind]);
  xin.play();
  xinP.src=musicPic[$ind];
  $("#music-play>img").attr("src", "img/playmusic/icon/stop.png")
}
$("#music-next").click(function() {
  nexPre(1, 1,10);
})
$("#music-pre").click(function() {
  nexPre(1, -1,10);
});
//鑾峰彇褰撳墠闊充箰鐨勬€绘椂闀�
var str = "";
var musictotal;
xin.onloadedmetadata = function() {  //onloadedmetadata浜嬩欢鍦ㄦ寚瀹氳棰�/闊抽锛坅udio/video锛夌殑鍏冩暟鎹姞杞藉悗瑙﹀彂銆�
  var secondtotal = xin.duration;  //鏄互s涓哄崟浣�
  console.log(secondtotal);
  var minute = parseInt(secondtotal / 60);
  var second = parseInt(secondtotal % 60);
  if (second <= 9) {
    str = "0";
  }
  if (second >= 10) {
    str = "";
  }
  $("#music-totaltime").html("0" + minute + ":" + str + second);
  return musictotal = secondtotal;
}
//鏄剧ず褰撳墠鎾斁鏃堕暱鍜岃繘搴︽潯
var strw = "";
setInterval(function() {
  var progressWidth = parseInt($("div.music-progress").css("width"));
  var secondd = parseInt(xin.currentTime);  //褰撳墠鎾斁浜嗗灏戠
  var minute = parseInt(secondd / 60);
  var second = parseInt(secondd % 60);
  if (second <= 9) {
    strw = "0";
  }
  if (second >= 10) {
    strw = "";
  }
  $("#music-whentime").html("0" + minute + ":" + strw + second + " /");
  $("#music-progress-w").css("width", (secondd / musictotal) * progressWidth + "px")
}, 1000)
//璁剧疆杩涘害鏉℃洿鏀瑰綋鍓嶆挱鏀炬椂闂�
var progressCtrl;
$("#music-progress").mousemove(function(e) {
  progressCtrl = e.offsetX;
})
$("#music-progress").click(function() {
  if (!xin.paused) {
    var progressWidth = parseInt($("div.music-progress").css("width"));
    console.log((progressCtrl / progressWidth) * musictotal);
    xin.currentTime = (progressCtrl / progressWidth) * musictotal;
    console.log(xin.currentTime);
  }
})
//璁剧疆QQ闊充箰鐣岄潰杩斿洖
$("#music-back").click(function() {
  $("#music").css("position", "fixed").css("left", "2000px")
})