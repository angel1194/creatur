const state = {
  night:{
    '123':{
      'room0':{
        id:'001',
        image:'',
        description:'DOBLE STANDARD',
        price:'234',
        capacity:0,
        type:'STANDARD'
      },
      'room1':{
        id:'002'
      }
    },
    '456':{
      'room3':{
        id:'001',
      },
      'room4':{
        id:'002'
      }
    }
  },
  hotels: {
    '001':{
      image:"http://cdn.precioyviajes.com/00/13/40/00134083_gp.jpg",
      nameHotel:'Best Western Maya Yucatán',
      price:'434.80',
      numStart:4,
      location:'Mérida',
      cantidad:0
    },
    '002':{
      image:"https://images.bestday.com/_lib/vimages/Merida_Yucatan/Hotels/Hotel-Casa-Lucia/Fachada_t.jpg",
      nameHotel:'Hotel Casa Lucía',
      price:'2452',
      numStart:4.5,
      location:'Mérida - Zona Centro',
      cantidad:0
    },
    '003':{
      image:"https://media-cdn.tripadvisor.com/media/photo-s/09/b9/7f/4a/hotel-residencial.jpg",
      nameHotel:'Hotel Residencial',
      price:'647',
      numStart:3,
      location:'Mérida',
      cantidad:0
    }
  }
}

export default state;
