import images from "./images";

const products = [
  {
    imgUrl: `${images.Ptolemy}`,
    title:`Bathroom staple`,
    name: "Post-Poo Drops",
    size: "100 mL",
    price: "$215.00",
    detailsTitle: "Aroma",
   // descriptionTitle: "Dimensions",
    detailsInfo: "Citrus, floral, fresh",
    
      availability: '1',
      tag: ['Citrus', 'floral']
  },
  {
    imgUrl: `${images.Callippus}`,
    name: "Ptolemy Aromatique Candle",
    size: "300 g",
    price: "$860.00",
    detailsTitle: "Aroma",
    descriptionTitle: "Dimensions",
    detailsInfo: "Woody, earthy, resinous",
    decriptionInfo:
      "86 mm/3.4” diameter x 104 mm/4.1” height; burn time approximately 55-65 hours",
      availability: '1',
      tag: ['Woody', 'earthy']
  },
  {
    imgUrl: `${images.Aganice}`,
    name: "Againice Aromatique Candle",
    size: "300 g",
    price: "$860.00",
    detailsTitle: "Aroma",
    descriptionTitle: "Dimensions",
    detailsInfo: "Floral, spicy, fresh",
    decriptionInfo:
      "86 mm/3.4” diameter x 104 mm/4.1” height; burn time approximately 55-65 hours",
      availability: '1',
      tag: ['Floral', 'Spicy', 'Opulent']
  },
  {
    imgUrl: `${images.OilBurner}`,
    name: "Callippus Aromatique Candle",
    size: "300 g",
    price: "$860.00",
    detailsTitle: "Aroma",
    descriptionTitle: "Dimensions",
    detailsInfo: "Woody, earthy, green",
    decriptionInfo:
    "86 mm/3.4” diameter x 104 mm/4.1” height; burn time approximately 55-65 hours",
    
      availability: '1',
      tag: ['']
  },
  {
    imgUrl: `${images.YouDog}`,
    name: "Bronze Incense Holder",
    size: "",
    price: "$1,200.00",
    detailsTitle: "Suited to",
    descriptionTitle: "Usage",
    detailsInfo: "Any interior; a complementary addition to a table-setting, hearth or bookshelf ",
    decriptionInfo:
      "Secure a stick of incense in place and allow to smoulder; spent ash will collect in the dish ",
      availability: '1',
      tag: ['']
  },
  {
    imgUrl: `${images.RoomSpray}`,
    name: "You & Your Dog Duo",
    size: "",
    price: "$700.00",
    detailsTitle: "About this bundle",
    descriptionTitle: "Contents",
    detailsInfo: "Two aromatic gel cleansers for beloved pets and their owners",
    decriptionInfo:
      "Geranium Leaf Body Cleanser, Animal",
      availability: '1',
      tag: ['Citrus', 'Floral', 'Woody', 'Fresh', 'Spicy']
  },
  {
    imgUrl: `${images.Istros}`,
    name: "Animal",
    size: "500 mL",
    price: "$320.00",
    detailsTitle: "Suited to",
    descriptionTitle: "Application",
    detailsInfo: "Pampered pets; also suitable to enjoy as a gentle regular-use hand wash.",
    decriptionInfo:
      "Massage generously into a soaked, well-brushed coat, paying careful attention to the skin, then rinse thoroughly with warm water and towel dry.",
      availability: '1',
    tag: ['Citrus']
  },
  {
    imgUrl: `${images.Animal}`,
    name: "Istros Aromatique Room Spray",
    size: "100 mL",
    price: "$450.00",
    detailsTitle: "Aroma",
    descriptionTitle: "Usage",
    detailsInfo: "Vibrant, floral, smoky",
    decriptionInfo:
      "Spray two to three pumps throughout the immediate space and refresh as needed; the aroma will last for several hours.",
      availability: '1',
    tag: ['Citrus', 'Woody', 'Fresh']
  },
  
 
  {
    imgUrl: `${images.PostPooDrops}`,
    name: "Olous Aromatique Room Spray",
    size: "2 Sizes",
    price: "From $280.00",
    detailsTitle: "Aroma",
    descriptionTitle: "Usage",
    detailsInfo: "Fresh, woody, citrus",
    decriptionInfo:
      "Spray two to three pumps throughout the immediate space and refresh as needed; the aroma will last for several hours.",
    availability: '1',
    tag: ['Citrus', 'woody', 'Fresh']
  },
 
  
  {
    imgUrl: `${images.Cythera}`,
    name: "Cythera Aromatique Room Spray",
    size: "2 Sizes",
    price: "$280.00",
    detailsTitle: "Aroma",
    descriptionTitle: "Usage",
    detailsInfo: "Woody, opulent, spicy",
    decriptionInfo:
      "Spray two to three pumps throughout the immediate space and refresh as needed; the aroma will last for several hours.",
      availability: '1',
      tag: ['Woody', 'Spicy']
  },
  {
    imgUrl: `${images.Olous}`,
    name: "Kagerou Aromatique Incense",
    size: "33 sticks",
    price: "$310.00",
    detailsTitle: "Aroma",
    descriptionTitle: "Key Ingredients",
    detailsInfo: "Green, Herbaceous, Woody",
    decriptionInfo:
      "Vetiver, Igusa, Sandalwood",
      availability: '1',
      tag: ['Green']
  },
  {
    imgUrl: `${images.Beatrice}`,
    name: "Sarashina Aromatique Incense",
    size: "33 sticks",
    price: "$310.00",
    detailsTitle: "Aroma",
    descriptionTitle: "Woody, warm, sweet",
    detailsInfo: "Key Ingredients",
    decriptionInfo:
      "Sandalwood, Clove, Cinnamon",
      availability: '0',
      tag: ['']
  },
  {
    imgUrl: `${images.Isabelle}`,
    name: "Brass Oil Burner",
    size: "1.080kg",
    price: "$1,450.00",
    detailsTitle: "Suited to",
    descriptionTitle: "Usage",
    detailsInfo: "This product is no longer available online. We apologise for the inconvenience.",
    decriptionInfo:
      "Dispense five to ten drops of your favoured Oil Burner Blend into the oil well. Use a standard tea light candle.",
      availability: '0',
      tag: ['Fresh', 'Isabelle']
  },
  {
    imgUrl: `${images.Anouk}`,
    name: "Murasaki Aromatique Incense",
    size: "33 sticks",
    price: "$310.00",
    detailsTitle: "Aroma",
    descriptionTitle: "Key Ingredients",
    detailsInfo: "Woody, spicy, resinous",
    decriptionInfo:
      "Hinoki, Cinnamon, Clove",
      availability: '0',
      tag: ['Citrus', 'Floral']
  },
  {
    imgUrl: `${images.Catherine}`,
    name: "Anouk Oil Burner Blend",
    size: "25 mL",
    price: "$270.00",
    detailsTitle: "Availability",
    descriptionTitle: "",
    detailsInfo: "This product has been discontinued and is no longer available. We apologise for the inconvenience.",
    decriptionInfo:
      "",
      availability: '0',
      tag: ['Citrus', 'Spicy']
  },
  {
    imgUrl: `${images.Catherine}`,
    name: "Catherine Oil Burner Blend",
    size: "25 mL",
    price: "$270.00",
    detailsTitle: "Availability",
    descriptionTitle: "",
    detailsInfo: "This product has been discontinued and is no longer available. We apologise for the inconvenience.",
    decriptionInfo:
      "",
      availability: '0',
      tag: ['Citrus', 'Spicy']
  },
  {
    imgUrl: `${images.Catherine}`,
    name: "Isabelle Oil Burner Blend",
    size: "25 mL",
    price: "$270.00",
    detailsTitle: "Availability",
    descriptionTitle: "",
    detailsInfo: "This product has been discontinued and is no longer available. We apologise for the inconvenience.",
    decriptionInfo:
      "",
      availability: '0',
      tag: ['Citrus', 'Spicy']
  },
  {
    imgUrl: `${images.Aromatique}`,
    name: "States of Being: Aromatique Room Spray Trio",
    size: "",
    price: "From $790.00",
    detailsTitle: "About this kit",
    descriptionTitle: "contents",
    detailsInfo: "Three formulations to enhance any interior",
    decriptionInfo:
      "Cythera Aromatique Room Spray, Istros Aromatique Room Spray, Olous Aromatique Room Spray",
      availability: '0',
      tag: ['']
  },
  {
    imgUrl: `${images.Beatrice1}`,
    name: "Beatrice Oil Burner Blend",
    size: "25 mL",
    price: "From $270.00",
    detailsTitle: "Aroma",
    descriptionTitle: "",
    detailsInfo: "Woody, citrus, smoky",
    decriptionInfo:
      "",
      availability: '0',
      tag: ['']
  },
];

export default products;