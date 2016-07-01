$(document).ready(function(){
  var loc;
  if (location.pathname.substring(location.pathname.lastIndexOf("/")+1, location.pathname.length) === "active_users.html"){
    loc = "active_users/";
  }
  else {loc = "users/";}
  $('#back').hide();
  function loadToPage(all){
    for (var i = 0; i < all.length; i++) {
    var userdiv = document.createElement("div");
    var name = document.createElement("div");
    if (all.active === 1){
      alert("cool");
      name.style.color = "green";
    }
    name.className = "names";
    name.innerHTML = all[i].name;
    userdiv.appendChild(name);
    $('#allusers').append(userdiv);
    }
  }

  function profilePage(data){
    $('#back').show();
    var name = document.createElement("span");
    name.innerHTML = data.first_name + " " + data.last_name;
    var active = document.createElement("span");
    var image = document.createElement("img");
    image.src = "https://pixabay.com/static/uploads/photo/2016/03/31/19/56/avatar-1295399_960_720.png";
    if (data.active === 1){
      active.innerHTML = "&#9731; online";
      active.style.color = "green";
    }
    else{
      active.innerHTML = "&#8226; offline";
      active.style.color = "black";
    }
    var ycode = document.createElement("span");
    ycode.innerHTML = "Ycode: " + data.y_code;
    $('#allusers').append(name);
    $('#allusers').append(active);
    $('#allusers').append(ycode);
    $('#allusers').append(image);
  }

  $.ajax({
    url: "http://localhost:3000/" + loc,
    success: function(data){
      var all = [];
      for (var i in data){
        all.push({
          name: data[i].user_data.first_name + " " + data[i].user_data.last_name,
          ycode: data[i].user_data.y_code,
          id: data[i].user_data.id,
          active: data[i].user_data.active
        });
      }
      loadToPage(all);
    }
  });
  $('#back').on("click", function(){
    $('#back').hide();
    location.reload();
  });

  $(document).on("click", ".names", function(){
    $('#usertext').hide();
    $('#allusers').empty();
    var last = this.innerHTML.substring(this.innerHTML.indexOf(" ")+1, this.innerHTML.length);
    $.ajax({
      url: "http://localhost:3000/" + loc + last,
      success: function(data){
        profilePage(data.user_data);
      }
    });
  });
});
