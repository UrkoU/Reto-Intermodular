function o(o){return o&&o.__esModule?o.default:o}var a;let e,i=new(o(a=L).layerGroup);const r=o(a).icon({iconUrl:"../images/marker-selected.png",iconSize:[41,41]});function d(o,a){o.target.setIcon(a)}function n(o){return aGuardados.some((a=>a.codigoBaliza===o))}window.CargarMapa=function(){e&&e.remove(),e=o(a).map("map").setView([42.983333333333,-2.6166666666667],8.4),o(a).tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),aGuardados.length>0&&$("#map").hide()},window.CargarMarcadores=function(){e.removeLayer(i),i=new(o(a).LayerGroup),i.clearLayers(),aBalizas.forEach((e=>{let c;c=n(e.codigo)?r:iconoDefecto;const t=o(a).marker([e.latitud,e.longitud],{customId:`marcador${e.codigoBaliza}`,icon:c});t.bindPopup(`${e.nombre}`),t.on("click",(o=>{!function(o,a){if(aGuardados.length<iMaxGuardados&&!n(a.codigo))d(o,r),ObtenerTiempo(a.codigo),aGuardados.push({idUsuario:usuario.id,codigoBaliza:a.codigo,temperatura:!0,sensacionTermica:!0,humedad:!0,velocidadViento:!1,direccionViento:!1,horaAmanecer:!1,horaAtardecer:!1,presionAtmosferica:!1}),GuardarMarcadores(aGuardados);else if(n(a.codigo)){let e=aGuardados.findIndex((o=>o.codigoBaliza==a.codigo));aGuardados.splice(e,1),DeleteOpcionUsuario(usuario.id,a.codigo),GuardarMarcadores(aGuardados),$(`#div${a.codigo}`).remove(),d(o,iconoDefecto)}else MostrarError(limitError)}(o,e)})),i.addLayer(t)})),e.addLayer(i)},window.AnadirCarta=function(o){let a=ObtenerGuardadoPorId(o.codigo);$("#divContainer").append(`<div id="div${o.codigo}" class="infoTiempo mw-50 droppableItem">\n      <div class="d-flex justify-content-between align-items-center">\n        <span class="cardTitle" id="nombre${o.codigo}">${o.nombre}</span>\n        <img id="img${o.codigo}" class="cardImg" alt="${o.descripcion}" src="images/${o.descripcion.toLowerCase()}-white.png" >\n      </div>\n    </div>`),$(`#div${o.codigo}`).on("click",(()=>{MostrarCartaGrande(o)})),$(`#div${o.codigo}`).hover((function(){$(this).css("cursor","pointer")})),$(`#div${o.codigo}`).append(`<div id="info${o.codigo}" ></div>`);for(const a in oPropiedadesCortas)if(!a.includes("Nombre"))if("horaAtardecer"==a||"horaAmanecer"==a){let e=new Date(1e3*parseInt(o[a]));$(`#info${o.codigo}`).append(`<div id="${a}${o.codigo}">${oPropiedadesCortas[a+"Nombre"]}\n          <span id="value${a}${o.codigo}">${e.customFormat("#hhhh#:#mm#")}</span>\n          ${oPropiedadesCortas[a]}</div>`)}else $(`#info${o.codigo}`).append(`<div id="${a}${o.codigo}">${oPropiedadesCortas[a+"Nombre"]}\n          <span id="value${a}${o.codigo}">${o[a]}</span>\n           ${oPropiedadesCortas[a]}</div>`);for(const o in a)a[o]||$(`#${o}${a.codigoBaliza}`).hide();CrearDroppables()},window.ActualizarCarta=function(o){for(const a in oPropiedadesCortas)oPropiedadesCortas[a].includes("Nombre")||$(`#value${oPropiedadesCortas[a]}${o.codigo}`).val(o[a])},window.aMarcadores=i;
//# sourceMappingURL=index.97b3d8f1.js.map
