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
L.marker([-31.639647, -60.706139],{title:"Farmacia Zentner"}).addTo(mymap).bindPopup('<h4>Farmacia Zentner</h4>San Jeronimo 3101')
L.marker([-31.637391, -60.695676],{title:"Farmacia Pasteur"}).addTo(mymap).bindPopup('<h4>Farmacia Pasteur</h4>Marcial Candioti 3499')
L.marker([-31.613065, -60.676787],{title:"Farmacia Sabio"}).addTo(mymap).bindPopup('<h4>Farmacia Sabio</h4>Angel Cassanello 898')
L.marker([-31.596585, -60.692041],{title:"Farmacia Del Ahorro"}).addTo(mymap).bindPopup('<h4>Farmacia Del Ahorro</h4>Aristobulo del Valle 7781')
L.marker([-31.647778, -60.705498],{title:"Farmacia Timofiejuk"}).addTo(mymap).bindPopup('<h4>Farmacia Timofiejuk</h4>Avenida Rivadavia 2443')
L.marker([-31.638229, -60.701684],{title:"Farmacia Sartor"}).addTo(mymap).bindPopup('<h4>Farmacia Sartor</h4>Avenida Rivadavia 3358')
L.marker([-31.636470, -60.702872],{title:"Farmacia Armando"}).addTo(mymap).bindPopup('<h4>Farmacia Armando</h4>25 de mayo 3441')
L.marker([-31.637357, -60.705648],{title:"Farmacia Bosch"}).addTo(mymap).bindPopup('<h4>Farmacia Bosch</h4>Santiago del Estero 2764')
L.marker([-31.626523, -60.700399],{title:"Farmacia Mario Martinez"}).addTo(mymap).bindPopup('<h4>Farmacia Mario Martinez</h4>Avenida Aristobulo del Valle 4499')
L.marker([-31.615573, -60.709344],{title:"Farmacia Caraballo"}).addTo(mymap).bindPopup('<h4>Farmacia Caraballo</h4>Diagonal Goyena 3460')
L.marker([-31.615774, -60.706297],{title:"Farmacia Berron"}).addTo(mymap).bindPopup('<h4>Farmacia Berron</h4>Diagonal Goyena 3221')
L.marker([-31.653025, -60.715312],{title:"Farmacia Juan Jose Martinez"}).addTo(mymap).bindPopup('<h4>Farmacia Juan Jose Martinez</h4>Urquiza 1859')
L.marker([-31.649425, -60.714258],{title:"Farmacia Chemes"}).addTo(mymap).bindPopup('<h4>Farmacia Chemes</h4>Urquiza 2179')
L.marker([-31.637768, -60.710723],{title:"Farmacia Damiani"}).addTo(mymap).bindPopup('<h4>Farmacia Damiani</h4>Urquiza 3180')
L.marker([-31.647134, -60.713378],{title:"Farmacia Gimenez"}).addTo(mymap).bindPopup('<h4>Farmacia Gimenez</h4>Urquiza 2332')
L.marker([-31.644529, -60.711495],{title:"Farmacia Alejandro Senn"}).addTo(mymap).bindPopup('<h4>Farmacia Alejandro Senn</h4>4 de Enero 2599')
L.marker([-31.649806, -60.710101],{title:"Farmacia Barrientos"}).addTo(mymap).bindPopup('<h4>Farmacia Barrientos</h4>9 de Julio 2198')
L.marker([-31.648792, -60.708258],{title:"Farmacia Del Ahorro 2"}).addTo(mymap).bindPopup('<h4>Farmacia Del Ahorro 2</h4>Mendoza 2676')
L.marker([-31.609755, -60.693975],{title:"Farmacia Costa Samita"}).addTo(mymap).bindPopup('<h4>Farmacia Costa Samita</h4>Avenida Aristobulo del Valle 6378')
L.marker([-31.639754, -60.712724],{title:"Farmacia Ferro"}).addTo(mymap).bindPopup('<h4>Farmacia Ferro</h4>Francia 2998')
L.marker([-31.644675, -60.715736],{title:"Farmacia Amherdt"}).addTo(mymap).bindPopup('<h4>Farmacia Amherdt</h4>Saavedra 2499')
L.marker([-31.652448, -60.709819],{title:"Farmacia Esterkin"}).addTo(mymap).bindPopup('<h4>Farmacia Esterkin</h4>San Jeronimo 1995')
L.marker([-31.599878, -60.692020],{title:"Farmacia Mai"}).addTo(mymap).bindPopup('<h4>Farmacia Mai</h4>Av. Aristobulo del Valle 7431')
L.marker([-31.627502, -60.694927],{title:"Farmacia Trucco"}).addTo(mymap).bindPopup('<h4>Farmacia Trucco</h4>Las Heras 4501')
L.marker([-31.633573, -60.696547],{title:"Farmacia Stricker"}).addTo(mymap).bindPopup('<h4>Farmacia Stricker</h4>Las Heras 3844')
L.marker([-31.639147, -60.708639],{title:"Farmacia Veronica Cano"}).addTo(mymap).bindPopup('<h4>Farmacia Veronica Cano</h4>Suipacha 2912')
L.marker([-31.611781, -60.704586],{title:"Farmacia Coniglio"}).addTo(mymap).bindPopup('<h4>Farmacia Coniglio</h4>Av. Facundo Zuviria 5918')
L.marker([-31.656354, -60.714816],{title:"Farmacia Camusso"}).addTo(mymap).bindPopup('<h4>Farmacia Camusso</h4>4 de Enero 1594')
L.marker([-31.611039, -60.718946],{title:"Farmacia Costa"}).addTo(mymap).bindPopup('<h4>Farmacia Costa</h4>Av Blas Parera 5691')
L.marker([-31.651884, -60.712509],{title:"Farmacia Mazzali"}).addTo(mymap).bindPopup('<h4>Farmacia Mazzali</h4>Juan de Garay 2915')
L.marker([-31.656637, -60.711482],{title:"Farmacia Denise Bonazzola"}).addTo(mymap).bindPopup('<h4>Farmacia Denise Bonazzola</h4>Av General Lopez 2740')
L.marker([-31.609488, -60.677946],{title:"Farmacia Montes"}).addTo(mymap).bindPopup('<h4>Farmacia Montes</h4>Av. General Paz 6765')
L.marker([-31.640581, -60.707689],{title:"Farmacia Asinari"}).addTo(mymap).bindPopup('<h4>Farmacia Asinari</h4>Gobernador Crespo 2810')
L.marker([-31.577461, -60.728104],{title:"Farmacia Marcelo Galizzi"}).addTo(mymap).bindPopup('<h4>Farmacia Marcelo Galizzi</h4>Av. Blas Parera 8953')





