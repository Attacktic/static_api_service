$(document).ready(function(){

  function loadToPage(all){
    for (var i = 0; i < all.length; i++) {
    var userdiv = document.createElement("div");
    var name = document.createElement("div");
    name.id = "names";
    name.innerHTML = all[i].name;
    userdiv.appendChild(name);
    $('#allusers').append(userdiv);
    }
  }

  function profilePage(data){
    var name = document.createElement("span");
    name.innerHTML = data.first_name + " " + data.last_name;
    var active = document.createElement("span");
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
  }

  $.ajax({
    url: "http://localhost:3000/active_users",
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
      loadToPage(all)
    }
  });

  $(document).on("click", "#names", function(){
    $('#allusers').empty();
    var last = this.innerHTML.substring(this.innerHTML.indexOf(" ")+1, this.innerHTML.length)
    $.ajax({
      url: "http://localhost:3000/active_users/" + last,
      success: function(data){
        profilePage(data.user_data)
      }
    });
  });
});
