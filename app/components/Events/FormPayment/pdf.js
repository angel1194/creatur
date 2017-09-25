var PDFDocument = require('pdfkit');
var fs = require('fs');
var doc = new PDFDocument();

doc.pipe(fs.createWriteStream('pdfPrueba.pdf'));

doc.image('creatuviaje-logo.png', 15, 25, {width: 200, height: 45});

//No. reserva
doc.text('No. de Reserva',380,85,{
   fontSize: 12,
})
doc.rect(480,76,65,23).fillAndStroke('#babdc1','#babdc1');
doc.fillColor('#600003').text('XXHLLDF',485,85);

//Frase, imagen y cuadro de datos de hotel
doc.moveDown();
doc.fillColor('#2b5bac').text('Estimado cliente este el detalle de su reservación:',25,110);
doc.rect(25,130,150,100).stroke();
doc.rect(175,130,400,100).stroke();
doc.image('hotel.jpg',25
,130,{
  width:150,
  heigth:100
})
//NOMBRE HOTEL
doc.fillColor('#0000').text('Hotel Ibis Merida',400,135,{
   indent:40
})

//ESTRELLAS


//DIRECCION
doc.text('Calle 58a 495, Centro, 97000 Mérida, Yuc.',310,170)
doc.image('buhoTripAdvisor.png',250,200,{
   width:40,
   heigth:20
})
doc.image('viewsTripAdvisor.png',300,210,{
   width:40,
   heigth:20

})

doc.text('Merida,Yuc.',350,208)

doc.text('Tel:',420,208)

doc.text('01 999 254 3800',440,208)


doc.end()
