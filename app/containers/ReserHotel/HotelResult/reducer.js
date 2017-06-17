/*
 *
 * HotelResult reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS(

  {
    "Info": {
      "GeneralParameters": {
        "PreferedLanguage": {
          "LanguageCode": "es"
        },
        "PreferedCurrency": {
          "CurrencyCode": "USD"
        }
      },
      "Rooms": {
        "Destination": "2574",
        "Room": {
          "RoomType": "NMO.HTL.RMT.DBL",
          "RoomSequence": "1"
        },
        "CheckIn": "2017-08-15",
        "CheckOut": "2017-08-19",
        "Availability": "Inmediate"
      },
      "Passengers": {
        "Passenger": [
          {
            "AgeType": "NMO.GBL.AGT.ADT",
            "RoomSequence": "1"
          },
          {
            "AgeType": "NMO.GBL.AGT.ADT",
            "RoomSequence": "1"
          }
        ]
      }
    },
    "Hotels": [
      {
        "Hotel": {
          "Code": "10452",
          "Name": "Aberotel Montparnasse",
          "SupplierID": "BOL",
          "Longitude": "2.307168",
          "Latitude": "48.843273",
          "UpdatedDt": "2017-02-04",
          "HotelDetailId": "CCL-8IM-23J"
        },
        "Destination": {
          "Code": "2574",
          "Type": "NMO.HTL.DST.CTY"
        },
        "Rate": [
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "89c71e14-77c5-4772-b0a4-81be9a1a3ec1",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE STANDARD"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "443.5"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "434.80"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "8.70"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "a13b7816-be61-4918-84ed-41bc87d3fb47",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL.TWN",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE 2 CAMAS STANDARD"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "463.81"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "454.72"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "9.09"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "9557852d-fb0a-4cf8-9627-5d4246ffe132",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE DESIGN ROOM"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "467.89"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "458.72"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "9.17"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "ed6cd094-a5d4-4232-969f-fb29ec2fdd93",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE STANDARD"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "671.28"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "658.12"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "13.16"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "69538038-67bf-48d0-b370-b0d39af20e5e",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL.TWN",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE 2 CAMAS STANDARD"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "671.28"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "658.12"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "13.16"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "1542b592-e29c-4e45-94e4-2b9ce87c0ffb",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE DESIGN ROOM"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "691.68"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "678.12"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "13.56"
              }
            ]
          }
        ],
        "Rating": {
          "Code": "NMO.HTL.RTN.3ST",
          "Type": "NMO.HTL.RTT.STR",
          "TextValue": "3.0"
        },
        "Line": [
          {
            "TextValue": "RUE BLOMET 24"
          },
          {
            "TextValue": "(75015) PARIS"
          }
        ],
        "TripAdvisor": {
          "LocationId": "239629",
          "ImagePath": "http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-26812-5.png",
          "CategoryValue": "4.0",
          "Reviews": "298"
        }
      },
      {
        "Hotel": {
          "Code": "10453",
          "Name": "LEGEND",
          "SupplierID": "BOL",
          "Longitude": "2.325472",
          "Latitude": "48.84533",
          "UpdatedDt": "2017-02-04",
          "HotelDetailId": "CCL-8IN-23J"
        },
        "Destination": {
          "Code": "2574",
          "Type": "NMO.HTL.DST.CTY"
        },
        "Rate": [
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "6ab5df69-baee-4881-b24a-04c819b9528e",
            "Room": {
              "Availability": "CNF",
              "Type": "SGL",
              "Occupancy": "2/0/0",
              "TextValue": "INDIVIDUAL STANDARD"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "565.44"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "554.35"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "11.09"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "a05fe47f-6f63-427a-9a6b-f0e2f1069414",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE STANDARD"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "629.52"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "617.18"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "12.34"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "d93349e8-4024-4147-859b-34e8874dca27",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE DELUXE"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "693.58"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "679.98"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "13.60"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "8ada2d3d-616d-4430-9042-586c74d32e1a",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE SUPERIOR"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "789.67"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "774.19"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "15.48"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "b1437b6d-d61f-4364-bed1-331477f15173",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE STANDARD"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "598.26"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "586.53"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "11.73"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "211f8a64-ccbc-4a01-bb25-93031ba9a697",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE DELUXE"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "659.14"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "646.22"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "12.92"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "44f4ddb5-027e-4b7a-86af-03fb93a9e62e",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE SUPERIOR"
            },
            "Board": {
              "Code": "1",
              "TextValue": "SOLO HABITACIÓN"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "751.21"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "736.48"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "14.73"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "d7deffa6-d255-4f97-8561-542c1cd8a0b3",
            "Room": {
              "Availability": "CNF",
              "Type": "SGL",
              "Occupancy": "2/0/0",
              "TextValue": "INDIVIDUAL STANDARD"
            },
            "Board": {
              "Code": "2",
              "TextValue": "ALOJAMIENTO Y DESAYUNO"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "632.75"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "620.34"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "12.41"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "fe16eee2-6acf-4c40-9a69-562a69d5f20b",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE STANDARD"
            },
            "Board": {
              "Code": "2",
              "TextValue": "ALOJAMIENTO Y DESAYUNO"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "696.84"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "683.18"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "13.66"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "55de7f1c-a9bd-433d-b72a-2bcba370457e",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE DELUXE"
            },
            "Board": {
              "Code": "2",
              "TextValue": "ALOJAMIENTO Y DESAYUNO"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "760.86"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "745.94"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "14.92"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "4ce6d47f-3f55-4dbf-ba75-c2200bc1c50e",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "DOBLE SUPERIOR"
            },
            "Board": {
              "Code": "2",
              "TextValue": "ALOJAMIENTO Y DESAYUNO"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "856.98"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "840.18"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "16.80"
              }
            ]
          }
        ],
        "Rating": {
          "Code": "NMO.HTL.RTN.4ST",
          "Type": "NMO.HTL.RTT.STR",
          "TextValue": "4.0"
        },
        "Line": [
          {
            "TextValue": "RUE DE RENNES 151 bis"
          },
          {
            "TextValue": "(75006) PARIS"
          }
        ],
        "TripAdvisor": {
          "LocationId": "3217278",
          "ImagePath": "http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-26812-5.png",
          "CategoryValue": "4.5",
          "Reviews": "1074"
        }
      },
      {
        "Hotel": {
          "Code": "10454",
          "Name": "Hotel Acadia - Astotel",
          "SupplierID": "JCB",
          "Longitude": "2.34358",
          "Latitude": "48.873326",
          "UpdatedDt": "2017-02-16",
          "HotelDetailId": "KG7-8IO-23J"
        },
        "Destination": {
          "Code": "2574",
          "Type": "NMO.HTL.DST.CTY"
        },
        "Rate": [
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "166d7b44-cfc9-4892-a432-a63023ed1e2d",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "Double Room"
            },
            "Board": {
              "Code": "2",
              "TextValue": "Bed and Buffet Breakfast                          "
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "390.59"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "382.93"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "7.66"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "a0bee3cb-e695-4e48-945b-c52d52ba655e",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL.TWN",
              "Occupancy": "2/0/0",
              "TextValue": "Twin Room"
            },
            "Board": {
              "Code": "2",
              "TextValue": "Bed and Buffet Breakfast                          "
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "390.59"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "382.93"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "7.66"
              }
            ]
          }
        ],
        "Rating": {
          "Code": "NMO.HTL.RTN.3ST",
          "Type": "NMO.HTL.RTT.STR",
          "TextValue": "3.0"
        },
        "Line": [
          {
            "TextValue": "4 Rue Geoffroy Marie"
          },
          {
            "TextValue": "Paris, France"
          }
        ],
        "TripAdvisor": null
      },
      {
        "Hotel": {
          "Code": "10456",
          "Name": "Chouette Hotel",
          "SupplierID": "GTA",
          "Longitude": "2.30179",
          "Latitude": "48.8358",
          "UpdatedDt": "2015-10-08",
          "HotelDetailId": "HRK-8IQ-23J"
        },
        "Destination": {
          "Code": "2574",
          "Type": "NMO.HTL.DST.CTY"
        },
        "Rate": [
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "29926291-9c6a-4daf-87eb-cb5cef7201cd",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "Habitación doble estándar"
            },
            "Board": {
              "Code": "1",
              "TextValue": "Solo Alojamiento"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "379.44"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "372.00"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "7.44"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "55c374cb-6ca5-4a0d-b830-5b70c220e5c6",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "Twin estándar"
            },
            "Board": {
              "Code": "1",
              "TextValue": "Solo Alojamiento"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "399.84"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "392.00"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "7.84"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "d210fb59-3fbc-4279-a960-cc42f27ba210",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "Habitación doble ejecutiva"
            },
            "Board": {
              "Code": "1",
              "TextValue": "Solo Alojamiento"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "436.56"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "428.00"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "8.56"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "8442a31f-ae78-4984-98f3-509505ad74b1",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "Habitación doble estándar"
            },
            "Board": {
              "Code": "2",
              "TextValue": "Desayuno  incluido completo"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "455.94"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "447.00"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "8.94"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "903c3f62-88a3-4985-87f2-45db5f03eed2",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "Twin ejecutiva"
            },
            "Board": {
              "Code": "1",
              "TextValue": "Solo Alojamiento"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "456.96"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "448.00"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "8.96"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "4f50549e-9256-4764-b465-d0f25d20ffdc",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "Twin estándar"
            },
            "Board": {
              "Code": "2",
              "TextValue": "Desayuno  incluido completo"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "474.3"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "465.00"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "9.30"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "8dc5f142-5cee-4aed-9997-60b730de055f",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "Habitación doble ejecutiva"
            },
            "Board": {
              "Code": "2",
              "TextValue": "Desayuno  incluido completo"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "513.06"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "503.00"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "10.06"
              }
            ]
          },
          {
            "PossiblyNonRefundable": "false",
            "TripProductID": "c47c16e9-60cc-4c15-8c4b-7165017def6d",
            "Room": {
              "Availability": "CNF",
              "Type": "DBL",
              "Occupancy": "2/0/0",
              "TextValue": "Twin ejecutiva"
            },
            "Board": {
              "Code": "2",
              "TextValue": "Desayuno  incluido completo"
            },
            "RatePrice": [
              {
                "Type": "NMO.GBL.RPT.GRS",
                "Currency": "USD",
                "TextValue": "531.42"
              },
              {
                "Type": "NMO.HTL.RPT.NET",
                "Currency": "USD",
                "TextValue": "521.00"
              },
              {
                "Type": "NMO.HTL.RPT.COM",
                "Currency": "USD",
                "TextValue": "10.42"
              }
            ]
          }
        ],
        "Rating": {
          "Code": "NMO.HTL.RTN.3ST",
          "Type": "NMO.HTL.RTT.STR",
          "TextValue": "3.0"
        },
        "Line": [
          {
            "TextValue": "237 Rue De La Convention"
          },
          {
            "TextValue": "Paris 75015"
          },
          {
            "TextValue": "France"
          }
        ],
        "TripAdvisor": {
          "LocationId": "260484",
          "ImagePath": "http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-26812-5.png",
          "CategoryValue": "4.5",
          "Reviews": "292"
        }
      }
    ]
  }


);

function hotelResultReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default hotelResultReducer;
