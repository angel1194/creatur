var PDFDocument = require('pdfkit');
var fs = require('fs');
var doc = new PDFDocument();
doc.pipe(fs.createWriteStream('pdfInfoUser.pdf'));
//LOGO CREATUVIAJE
doc.image('logo.png', 15, 25, {width: 200, height: 45});
//No. reserva
doc.font('Helvetica-Bold').text('No. de Reserva',380,85,{
   fontSize: 12,
})
doc.rect(475,76,70,23).fillAndStroke('#F0F3F4','#F0F3F4');
doc.fillColor('#600003').font('Helvetica-Bold').text('XXHLLDF',480,85);
//Frase, imagen y cuadro de datos de hotel
doc.moveDown();
doc.fillColor('#2b5bac').font('Helvetica-Bold').text('Estimado cliente este el detalle de su reservación:',25,110);
doc.rect(25,130,150,100).stroke();
doc.rect(175,130,400,100).stroke();
doc.image('hotel.jpg',25
,130,{
  width:150,
  heigth:100
});
//NOMBRE HOTEL
doc.font('Helvetica-Bold').text('Hotel Ibis Merida',400,135,{
   indent:40
}).fillColor('#0000');
//DIRECCION
doc.font('Helvetica').text('Calle 58a 495, Centro, 97000.',370,170).fontSize(12);
doc.font('Helvetica').text(' Mérida, Yuc.', 460, 185).fontSize(12);
//tripadvisor
doc.image('tripadv.jpeg',240,200,{
   width:100,
   heigth:30
});
//datos
doc.font('Helvetica').text('Merida,Yuc.',350,208);
doc.font('Helvetica').text('Tel:',420,208);
doc.font('Helvetica').text('01 999 254 3800',440,208);
//CUADRO DE PRECIOS totales
doc.rect(325,250,250,100).stroke();
doc.fillColor('#2b5bac').font('Helvetica-Bold').text('Resumen de Precios',350,270)
doc.fillColor('#0000').font('Helvetica').text('Por noche:',400,300);
//Precios
doc.fillColor('#0000').font('Helvetica-Bold').text('$10.56',480,300);
doc.fillColor('#0000').font('Helvetica').fontSize(8).text('USD',520,303);
doc.fillColor('#0000').font('Helvetica').fontSize(12).text('Impuestos:',400,320);
doc.fillColor('#0000').font('Helvetica-Bold').text('$8.60',480,320);
doc.fillColor('#0000').font('Helvetica').fontSize(8).text('USD',520,323);
//total
doc.rect(325,350,250,50).stroke();
doc.fontSize(16).fillColor('#2b5bac').font('Helvetica-Bold').text('Precio Total:',350,360)
doc.fillColor('#0000').text('$19.16',450,360);
doc.fillColor('#0000').fontSize(14).text('USD',505,361);
//POLITICAS DE CANCELACION
doc.fillColor('#2b5bac').font('Helvetica-Bold').text('Políticas de cancelación',325,420);
var  politicas = 'Permite cancelar sin cargo hasta 8 días antes de la fecha de llegada, de 7 días a 24 horas antes de su llegada, aplica 2 noches de estancia. En caso de No show, o salida anticipada queda sujeto al cobro por el total reservado'
doc.fillColor('#0000').fontSize(8).font('Helvetica').text(politicas,325,450,{
  width:200,
  align:'justify'
});
//CUADRO DESGLOSE DE Reserva
doc.rect(25,250,280,370).fillAndStroke('#F0F3F4','#F0F3F4');
//DATOS DE ESTANCIA
doc.fillColor('#2b5bac').fontSize(12).font('Helvetica-Bold').text('Detalles de la estancia',30,270);
 //Nombre pasajero
doc.fillColor('#0000').font('Helvetica-Bold').text('Cliente:',30,290);
doc.fillColor('#0000').font('Helvetica').text('Antonio',100,290);
//Fecha entrada y salida
doc.fillColor('#0000').font('Helvetica-Bold').text('Entrada:',30,310);
doc.fillColor('#0000').font('Helvetica').text('16/02/2017',100,310);
doc.fillColor('#0000').font('Helvetica-Bold').text('Salida:',30,330);
doc.fillColor('#0000').font('Helvetica').text('19/02/2017',100,330);
//No. noches
doc.fillColor('#0000').font('Helvetica-Bold').text('Noches:',30,350);
doc.fillColor('#0000').font('Helvetica').text('3',100,350);
//No. Huespedes
doc.fillColor('#0000').font('Helvetica-Bold').text('Huéspedes:',30,370);
doc.fillColor('#0000').font('Helvetica').text('2 Adultos',100,370);
//Tipo habitacion
doc.fillColor('#0000').font('Helvetica-Bold').text('Habitación Individual:',30,390);
doc.fillColor('#0000').font('Helvetica').text('Económico',160,390);
//Tipo cama.
doc.fillColor('#0000').font('Helvetica-Bold').text('Cama:',30,410);
doc.fillColor('#0000').font('Helvetica').text('Doble',75,410);
//Check In
doc.fillColor('#2b5bac').fontSize(12).font('Helvetica-Bold').text('Check in:',30,440);
doc.fillColor('#0000').font('Helvetica').text('02:00 pm ',90,440);
//Check out
doc.fillColor('#2b5bac').fontSize(12).font('Helvetica-Bold').text('Check out:',160,440);
doc.fillColor('#0000').font('Helvetica').text('12:00 pm ',230,440);
//Descripcion del hotel
doc.fillColor('#2b5bac').fontSize(12).font('Helvetica-Bold').text('Descripción del hotel:',30,460);
doc.fillColor('#0000').font('Helvetica').text('Este hotel, moderno y sencillo, está a 2 km del Museo Palacio Cantón y a 19 km de Dzibilchaltún, un yacimiento arqueológico con ruinas mayas.Las habitaciones son funcionales y luminosas, con suelos de madera, Wi-Fi gratis y televisiones de pantalla plana. Se permiten mascotas en las habitaciones por un suplemento.',30,480,{
  width:260,
  align: 'justify'
});
//ESTRELLAS
doc.translate(510, 143).path('M 250,75 L 323,301 131,161 369,161 177,301 z').fillColor('#f5d21a ').scale(0.06).fill('non-zero');
doc.translate(-250, -2).path('M 250,75 L 323,301 131,161 369,161 177,301 z').fillColor('#f5d21a ').scale(1).fill('non-zero');
doc.translate(-300, -2).path('M 250,75 L 323,301 131,161 369,161 177,301 z').fillColor('#f5d21a ').scale(1).fill('non-zero');
doc.translate(-320, -2).path('M 250,75 L 323,301 131,161 369,161 177,301 z').fillColor('#f5d21a ').scale(1).fill('non-zero');
doc.translate(-340, -2).path('M 250,75 L 323,301 131,161 369,161 177,301 z').fillColor('#f5d21a ').scale(1).fill('non-zero');
doc.end()
