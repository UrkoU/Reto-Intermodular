const url="http://10.10.17.164/api/";let sToken="";function GetBalizas(){return $.ajax({type:"GET",dataType:"html",url:url+"Meteorologia/",headers:{accept:"application/json",authorization:"Bearer "+sToken}}).fail((function(o){console.log("ERROR: "+o)}))}function GetTiempo(o="C080"){return $.ajax({type:"GET",dataType:"html",url:url+"Meteorologia/"+o,headers:{accept:"application/json",authorization:"Bearer "+sToken}}).fail((function(o){console.log("ERROR: "+o)}))}function GetOpcionesUsuario(o=1){return $.ajax({type:"GET",dataType:"html",url:url+"OpcionesUsuario/"+o,headers:{accept:"application/json",authorization:"Bearer "+sToken}}).fail((function(o){console.log("ERROR: "+o)}))}function PutOpcionesUsuario(o=1,a){$.ajax({type:"PUT",url:url+"OpcionesUsuario/"+o,data:JSON.stringify(a),contentType:"application/json",headers:{authorization:"Bearer "+sToken}}).fail((function(o){console.log("ERROR: "+o)}))}function DeleteOpcionUsuario(o,a){$.ajax({type:"DELETE",url:url+"OpcionesUsuario/"+o+"/"+a,contentType:"application/json",headers:{authorization:"Bearer "+sToken}}).fail((function(o){console.log("ERROR: "+o)}))}function LoginApi(o="Deagle50",a="pass"){return $.ajax({type:"POST",dataType:"json",contentType:"application/json",url:url+"Users/authenticate",data:JSON.stringify({username:o,password:a}),headers:{accept:"application/json",dataType:"json",contentType:"application/json"}}).fail((function(o){400==o.status?console.log(o.status):console.log("Problema de conexión")}))}
//# sourceMappingURL=index.3fa58fbc.js.map