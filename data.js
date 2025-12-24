var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior-front-",
      "name": "EXTERIOR FRONT ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.007120894163040958,
        "pitch": 0.015300800249830715,
        "fov": 0.7080771308227944
      },
      "linkHotspots": [
        {
          "yaw": -0.5092076374208041,
          "pitch": 0.07063206832498103,
          "rotation": 1.5707963267948966,
          "target": "1-exterior-angle-"
        },
        {
          "yaw": -0.10278210131310139,
          "pitch": 0.10232874622394661,
          "rotation": 0,
          "target": "2-sitout-exterior-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-exterior-angle-",
      "name": "EXTERIOR ANGLE ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10441249018271037,
        "pitch": 0.026929544684872297,
        "fov": 0.87022453910327
      },
      "linkHotspots": [
        {
          "yaw": 0.5557729449904762,
          "pitch": 0.1747627229669888,
          "rotation": 9.42477796076938,
          "target": "0-exterior-front-"
        },
        {
          "yaw": -0.07984835697997639,
          "pitch": 0.10049246524264532,
          "rotation": 0,
          "target": "2-sitout-exterior-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sitout-exterior-",
      "name": "SITOUT EXTERIOR ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.04177470910478576,
        "pitch": -0.008966146659751928,
        "fov": 0.6257244521336398
      },
      "linkHotspots": [
        {
          "yaw": -2.046949419523269,
          "pitch": 0.07801807867812727,
          "rotation": 9.42477796076938,
          "target": "1-exterior-angle-"
        },
        {
          "yaw": 1.5987415178181141,
          "pitch": 0.10069812914782617,
          "rotation": 1.5707963267948966,
          "target": "0-exterior-front-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.004552873677033276,
        "pitch": 0.011468651367252392,
        "fov": 1.3254487437298141
      },
      "linkHotspots": [
        {
          "yaw": 0.597281609145158,
          "pitch": 0.06767088690027201,
          "rotation": 1.5707963267948966,
          "target": "4-passage"
        },
        {
          "yaw": 1.7136712026698335,
          "pitch": 0.052695124041523655,
          "rotation": 1.5707963267948966,
          "target": "2-sitout-exterior-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-passage",
      "name": "PASSAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.08512675515363632,
        "pitch": 0.00854558243346304,
        "fov": 1.2608783021804504
      },
      "linkHotspots": [
        {
          "yaw": -0.8334354820076015,
          "pitch": 0.13013027587611248,
          "rotation": 3.141592653589793,
          "target": "5-dining"
        },
        {
          "yaw": -0.9221522904040356,
          "pitch": -0.4091932151303652,
          "rotation": 0,
          "target": "6-stair"
        },
        {
          "yaw": 0.05784518746219014,
          "pitch": 0.0434820721005309,
          "rotation": 0,
          "target": "12-kitchen"
        },
        {
          "yaw": -0.19901123466791226,
          "pitch": 0.03824653918925591,
          "rotation": 4.71238898038469,
          "target": "7-bedroom-1"
        },
        {
          "yaw": -2.1374472572965146,
          "pitch": 0.1888492887649189,
          "rotation": 3.141592653589793,
          "target": "3-living"
        },
        {
          "yaw": 2.8325330812573766,
          "pitch": 0.13253258211571328,
          "rotation": 4.71238898038469,
          "target": "11-bedroom-3"
        },
        {
          "yaw": 2.1060375736070798,
          "pitch": 0.17238884830633516,
          "rotation": 0,
          "target": "10-bedroom-21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.03205098181257071,
        "pitch": 0.017521144935342292,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.16899433075076864,
          "pitch": -0.5706744901435563,
          "rotation": 0,
          "target": "6-stair"
        },
        {
          "yaw": -1.1218925331932432,
          "pitch": 0.05853322968122043,
          "rotation": 1.5707963267948966,
          "target": "3-living"
        },
        {
          "yaw": -1.849055737890339,
          "pitch": 0.08132783267883781,
          "rotation": 4.71238898038469,
          "target": "10-bedroom-21"
        },
        {
          "yaw": -1.6849212552465787,
          "pitch": 0.0639832655077015,
          "rotation": 10.995574287564278,
          "target": "11-bedroom-3"
        },
        {
          "yaw": 1.6778802321202164,
          "pitch": 0.09453152918496599,
          "rotation": 0,
          "target": "12-kitchen"
        },
        {
          "yaw": 1.2227609703467621,
          "pitch": 0.10863131873529852,
          "rotation": 4.71238898038469,
          "target": "7-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-stair",
      "name": "STAIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05520439762348062,
        "pitch": -0.02003118875361487,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.5070743474636394,
          "pitch": 0.9568962136181582,
          "rotation": 3.141592653589793,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1627786867137342,
        "pitch": 0.033576612848428056,
        "fov": 1.1404913746239345
      },
      "linkHotspots": [
        {
          "yaw": 3.130990905072533,
          "pitch": 0.20869255662437425,
          "rotation": 4.71238898038469,
          "target": "4-passage"
        },
        {
          "yaw": -0.36484384913151224,
          "pitch": 0.3589926448617753,
          "rotation": 3.141592653589793,
          "target": "8-bedroom-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-11",
      "name": "BEDROOM 1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.005326171247052258,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.7037011584203476,
          "pitch": 0.08552036617998837,
          "rotation": 3.141592653589793,
          "target": "7-bedroom-1"
        },
        {
          "yaw": -0.5363757058122935,
          "pitch": 0.04161756993439525,
          "rotation": 4.71238898038469,
          "target": "4-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.44482801227779767,
        "pitch": -0.014048336209292245,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.28271825388995353,
          "pitch": 0.3042397475967338,
          "rotation": 3.141592653589793,
          "target": "9-bedroom-2"
        },
        {
          "yaw": 3.0890104986862754,
          "pitch": 0.006161958556825553,
          "rotation": 1.5707963267948966,
          "target": "4-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-21",
      "name": "BEDROOM 2.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.03561896432642442,
        "pitch": 0.015018124230284258,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.7938837461495378,
          "pitch": 0.03473777142860435,
          "rotation": 3.141592653589793,
          "target": "9-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-3",
      "name": "BEDROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.020068544009713918,
        "pitch": 0.0018593917436735552,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.5746816694019827,
          "pitch": -0.049653314714747765,
          "rotation": 4.71238898038469,
          "target": "4-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.02378799705678425,
        "pitch": 0.006975471299341507,
        "fov": 0.8055381684495742
      },
      "linkHotspots": [
        {
          "yaw": -1.293413947808796,
          "pitch": 0.1089548044192643,
          "rotation": 0,
          "target": "14-balcony-"
        },
        {
          "yaw": 1.2374011818329542,
          "pitch": 0.1490483124310309,
          "rotation": 0,
          "target": "4-passage"
        },
        {
          "yaw": -0.06382617442095473,
          "pitch": 0.41952422726166816,
          "rotation": 3.141592653589793,
          "target": "13-kitchen-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-kitchen-01",
      "name": "KITCHEN 0.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.00601158821972092,
        "pitch": -0.026460729203678923,
        "fov": 1.0360666479491774
      },
      "linkHotspots": [
        {
          "yaw": -0.04862051474279738,
          "pitch": 0.31046010747827246,
          "rotation": 9.42477796076938,
          "target": "12-kitchen"
        },
        {
          "yaw": -0.6029902400864682,
          "pitch": 0.08434707673749742,
          "rotation": 4.71238898038469,
          "target": "4-passage"
        },
        {
          "yaw": 0.4844373053133122,
          "pitch": 0.08619266837340689,
          "rotation": 1.5707963267948966,
          "target": "14-balcony-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-balcony-",
      "name": "BALCONY ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.16469700273575683,
        "pitch": -0.021756914310923747,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.1504498967582597,
          "pitch": 0.20586074132284615,
          "rotation": 0,
          "target": "12-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SIGNATURE BUILDERS AND INTERIORS",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
