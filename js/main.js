/*const mymap = L.map('map').setView([-31.194, -61.106], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

marcador.map((point) => {
    marker([ponit.lat, point.lon]).addto(mymap);
});*/


const mymap = L.map('map').setView([-31.6075, -60.7599], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.marker([-31.60869,-60.70422],{title:"Farmacia Peiró "}).addTo(mymap).bindPopup('<h4>Farmacia Peiró</h4>Av.Facundo Zuviria 6253')
L.marker([-31.65518,-60.71040],{title:"Farmacia Argenti "}).addTo(mymap).bindPopup('<h4>Farmacia Argenti</h4>San jeronimo 1746')
L.marker([-31.5974125, -60.7227954],{title:"Farmacia Burgues Romano"}).addTo(mymap).bindPopup('<h4>Farmacia Burgues Romano</h4>Avenida Blas Parera 7001')
L.marker([-31.6000100, -60.7219103],{title:"Farmacia Imoberdorf"}).addTo(mymap).bindPopup('<h4>Farmacia Imoberdorf</h4>Avenida Blas Parera 6751')
L.marker([-31.595302, -60.723018],{title:"Farmacia Rojas"}).addTo(mymap).bindPopup('<h4>Farmacia Rojas</h4>Avenida Blas Parera 7202')
L.marker([-31.592370, -60.724196],{title:"Farmacia Gheco (Bonazzola)"}).addTo(mymap).bindPopup('<h4>Farmacia Gheco (Bonazzola)</h4>Avenida Blas Parera 7621')
L.marker([-31.6011182, -60.7128933],{title:"Farmacia Gomez"}).addTo(mymap).bindPopup('<h4>Farmacia Gomez</h4>Avenida Angel Vera Peñaloza 6839')
L.marker([-31.600321, -60.718560],{title:"Farmacia Santivañez"}).addTo(mymap).bindPopup('<h4>Farmacia Santivañez</h4>Estanislao Zeballos 4453')
L.marker([-31.594650, -60.712002],{title:"Farmacia Villarrubi"}).addTo(mymap).bindPopup('<h4>Farmacia Villarrubi</h4>Avenida Angel Vera Peñaloza 7512')
L.marker([-31.594644, -60.712017],{title:"Farmacia Brambilla"}).addTo(mymap).bindPopup('<h4>Farmacia Brambilla</h4>Estanislao Zeballos 4453')
L.marker([-31.589574, -60.724984],{title:"Farmacia Sottini"}).addTo(mymap).bindPopup('<h4>Farmacia Sottini</h4>Avenida Blas Parera 7831')
L.marker([-31.6061783, -60.7031965],{title:"Farmacia Daniel Lagger"}).addTo(mymap).bindPopup('<h4>Farmacia Daniel Lagger</h4>Avenida Facundo Zuviria 6536')
L.marker([-31.618410, -60.716068],{title:"Farmacia Imoberdorf"}).addTo(mymap).bindPopup('<h4>Farmacia Imoberdorf</h4>Fray Cayetano Rodriguez 3889')
L.marker([-31.583736, -60.726033],{title:"Farmacia Ortega"}).addTo(mymap).bindPopup('<h4>Farmacia Ortega</h4>Avenida Blas Parera 8374')
L.marker([-31.603380, -60.708408],{title:"Farmacia Judith Acevedo"}).addTo(mymap).bindPopup('<h4>Farmacia Judith Acevedo</h4>Castelli 3650')
L.marker([-31.6400976, -60.7040230],{title:"Farmacia Acosta"}).addTo(mymap).bindPopup('<h4>Farmacia Acosta</h4>Suipacha 2506')
L.marker([-31.6463720, -60.7184449],{title:"Farmacia Bonazzola"}).addTo(mymap).bindPopup('<h4>Farmacia Bonazzola</h4>Avenida Gobernador Freyre 2298')
L.marker([-31.6207780, -60.6986670],{title:"Farmacia Estefania Bonazzola"}).addTo(mymap).bindPopup('<h4>Farmacia Estefania Bonazzola</h4>Avenida Aristobulo del Valle 5118 ')
L.marker([-31.6425336, -60.7173532],{title:"Farmacia Cardoso"}).addTo(mymap).bindPopup('<h4>Farmacia Cardoso</h4>Avenida Gobernador Freyre 2638')
L.marker([-31.640722, -60.702462],{title:"Farmacia Wagner"}).addTo(mymap).bindPopup('<h4>Farmacia Wagner</h4>Avenida Rivadavia 3098')
L.marker([-31.6443214, -60.7084917],{title:"Farmacia Sindical Luz y Fuerza"}).addTo(mymap).bindPopup('<h4>Farmacia Sindical Luz y Fuerza</h4>9 de julio 2682')
L.marker([-31.6413930, -60.7050919],{title:"Farmacia Azanza"}).addTo(mymap).bindPopup('<h4>Farmacia Azanza</h4>San Martin 2983')
L.marker([-31.6496480, -60.7076507],{title:"Farmacia Farmalife El Inca"}).addTo(mymap).bindPopup('<h4>Farmacia Farmalife El Inca</h4>San Martin 2255')
L.marker([-31.6406779, -60.7016073],{title:"Farmacia Bordignon"}).addTo(mymap).bindPopup('<h4>Farmacia Bordignon</h4>Suipacha 2310')
L.marker([-31.6383038, -60.7139068],{title:"Farmacia Fucksmann"}).addTo(mymap).bindPopup('<h4>Farmacia Fucksmann</h4>Saavedra 3081')
L.marker([-31.6247050, -60.7051388],{title:"Farmacia Jerarquicos"}).addTo(mymap).bindPopup('<h4>Farmacia Jerarquicos</h4>Avenida Facundo Zuviria 4536')
L.marker([-31.649141, -60.711482],{title:"Farmacia Valverde"}).addTo(mymap).bindPopup('<h4>Farmacia Valverde</h4>1° de mayo 2215')





