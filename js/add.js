/** 用于加载头部和尾部**/
(()=>{
  $.ajax({
    type:"GET",
    url:"header.html",
    success:function(data) {

      $("#header").html(data);
      var html = `<link rel="stylesheet" href="css/header.css">`;
      html+=`<script src="js/header.js"></script>`;
      var $head = $("head");
      $head.html(html += $head.html());
    },
    error:function(){
      alert("网络故障")
    }
  });
})();

// 页面尾部的加载
(()=>{
  $.ajax({
    type:"GET",
    url:"footer.html",
    success:function(data){
      $("#footer").html(data);
      var html=`<link rel="stylesheet" href="css/footer.css">`;
      var $head=$("head");
      $head.html(html+=$head.html());
    },
    error:function(){
      console.log("网络故障1")
    }
  })
})();
