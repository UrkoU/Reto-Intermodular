$("#btnLogin").on("click",IniciarSesion);let usuario={};const passPhrase="fjosiddnkadbalseelfeaono";function IniciarSesion(){let t=$("#inputUser").val(),o=$("#inputPass").val();0!=t.length&&0!=o.length&&LoginApi(t,o).then((async t=>{usuario=t,sToken=t.token,localStorage.setItem("logueado",!0),localStorage.setItem("sToken",Encriptar(sToken)),localStorage.setItem("usuario",Encriptar(JSON.stringify(usuario))),PostLogin()}))}function Logout(){localStorage.setItem("sToken",""),localStorage.setItem("logueado",!1),localStorage.setItem("usuario",JSON.stringify({})),localStorage.setItem("iMaxGuardados",5),MostrarLogin()}function Encriptar(t){return CryptoJS.AES.encrypt(t,passPhrase).toString()}function Desencriptar(t){return CryptoJS.AES.decrypt(t,passPhrase).toString(CryptoJS.enc.Utf8)}
//# sourceMappingURL=index.996c2dfa.js.map
