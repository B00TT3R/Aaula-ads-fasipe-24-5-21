$(document).ready(
    function (){
        $.ajax({
            type: "GET",
            url: "http://192.168.10.94:9000/users",
            success: function(data){

                $.each(data, function(i, user){
                    console.log(user.name)
                    $("#tabela_user").append(
                        "<tr><td>"+user.name+"</td></tr>"
                    )
            
                    })
            
        },error:
         function(data){
            console.log(data);
    }})
    
    }
    )