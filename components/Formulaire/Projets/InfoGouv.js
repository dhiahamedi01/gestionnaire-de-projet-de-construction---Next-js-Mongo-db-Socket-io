export default function info() {
  const localisation = [    
    {
      id: 1,      
      Gouvernorat: "Ariana",      
      Munici: [{name: "Ariana Ville" }, {name: "Ettadhamen-Mnihla" }, { name: "Kalâat el-Andalous" }, {name: "Soukra" }]
    },
    {
      id: 2,
      Gouvernorat: "Béja",
      Munici: [{ name: "Béja Nord" }, {name: "Béja Sud" }, {name: "Medjez el-Bab" }, {name: "Téboursouk" }, {name: "Testour" }]
    },
    {
      id: 3,
      Gouvernorat: "Ben Arous",
      Munici: [{name: "Ben Arous" }, {name: "El Mourouj" }, {name: "Ezzahra" }, {name: "Fouchana" }, {name: "Hammam Lif" }, {name: "Mornag" }, {name: "Radès" }]
    },
    {
      id: 4,
      Gouvernorat: "Bizerte",
      Munici: [{ name: "Bizerte Nord" }, { name: "Bizerte Sud" }, { name: "El Alia" }, { name: "Ghar El Melh" }, { name: "Mateur" }, { name: "Menzel Bourguiba" }, { name: "Menzel Jemil" }, { name: "Ras Jebel" }, { name: "Sejnane" }, { name: "Tinja" }, { name: "Utique" }]
    },
    {
      id: 5,
      Gouvernorat: "Gabès",
      Munici: [{ name: "Gabès Médina" }, { name: "Gabès Ouest" }, { name: "Gabès Sud" }, { name: "Ghannouch" }, { name: "Mareth" }, { name: "Menzel Habib" }, { name: "Métouia" }, { name: "Nouvelle Matmata" }]
    },
    {
      id: 6,
      Gouvernorat: "Gafsa",
      Munici: [{ name: "El Ksar" }, { name: "Gafsa Nord" }, { name: "Gafsa Sud" }, { name: "Mdhilla" }, { name: "Métlaoui" }, { name: "Oum El Araies" }, { name: "Redeyef" }, { name: "Sened" }]
    },
    {
      id: 7,
      Gouvernorat: "Jendouba",
      Munici: [{ name: "Aïn Draham" }, { name: "Balta-Bou Aouane" }, { name: "Bou Salem" }, { name: "Fernana" }, { name: "Ghardimaou" }, { name: "Jendouba Nord" }, { name: "Jendouba Sud" }, { name: "Oued Meliz" }, { name: "Tabarka" }]
    },
    {
      id: 8,
      Gouvernorat: "Kairouan",
      Munici: [{ name: "Bou Hajla" }, { name: "Chebika" },{ name: "Echrarda" }, { name: "Haffouz" }, 
               { name: "Hajeb El Ayoun" }, { name: "Kairouan Nord" }, { name: "Kairouan Sud" }, { name: "Nasrallah" }, { name: "Oueslatia" }, { name: "Sbikha" }, { name: "Sidi Bouzid Est" }, { name: "Sidi Bouzid Ouest" }, { name: "Sidi Ali Ben Aoun" }]
    },
    {
      id: 9,
      Gouvernorat: "Kasserine",
      Munici: [{ name: "El Ayoun" }, { name: "Fériana" }, { name: "Foussana" }, { name: "Haïdra" }, { name: "Hassi El Ferid" }, { name: "Jedelienne" }, { name: "Kasserine Nord" }, { name: "Kasserine Sud" }, { name: "Majel Bel Abbès" }, { name: "Sbeitla" }, { name: "Sbiba" }, { name: "Thala" }]
      },
      {
      id: 10,
      Gouvernorat: "Kébili",
      Munici: [{ name: "Douz Nord" }, { name: "Douz Sud" }, { name: "Faouar" }, { name: "Kébili Nord" }, { name: "Kébili Sud" }, { name: "Souk Lahad" }, { name: "Tataouine Nord" }, { name: "Tataouine Sud" }]
      },
      {
      id: 11,
      Gouvernorat: "Le Kef",
      Munici: [{ name: "Dahmani" }, { name: "Jérissa" }, { name: "El Ksour" }, { name: "Le Kef Est" }, { name: "Le Kef Ouest" }, { name: "Nebeur" }, { name: "Sers" }, { name: "Tajerouine" }, { name: "Touiref" }]
      },
      {
      id: 12,
      Gouvernorat: "Mahdia",
      Munici: [{ name: "Bou Merdes" }, { name: "Chebba" }, { name: "El Jem" }, { name: "Essouassi" }, { name: "Hebira" }, { name: "Kerker" }, { name: "Mahdia" }, { name: "Melloulèche" }, { name: "Ouled Chamekh" }, { name: "Sidi Alouane" }]
      },
      {
      id: 13,
      Gouvernorat: "La Manouba",
      Munici: [{ name: "Borj El Amri" }, { name: "Djedeida" }, { name: "Douar Hicher" }, { name: "La Manouba" }, { name: "Mornaguia" }, { name: "Oued Ellil" }, { name: "Tebourba" }]
      },
      {
        id: 14,
        Gouvernorat: "Médenine",
        Munici: [{ name: "Ben Gardane" }, { name: "Djerba - Ajim" }, { name: "Djerba - Houmt Souk" }, { name: "Djerba Midoun" }, { name: "Médenine Nord" }, { name: "Médenine Sud" }, { name: "Sidi Makhlouf" }, { name: "Zarzis" }]
      },
      {
        id: 19,
        Gouvernorat: "Siliana",
        Munici: [{ name: "Bargou" }, { name: "Bou Arada" }, { name: "El Aroussa" }, { name: "Gaâfour" }, { name: "Kesra" }, { name: "Makthar" }]
      }, {
        id: 20,
        Gouvernorat: "Sousse",
        Munici: [{ name: "Akouda" }, { name: "Bouficha" }, { name: "Enfidha" }, { name: "Hamman Sousse" }, { name: "Hergla" }, { name: "Kalâa Kebira" }, { name: "Kalâa Seghira" }, { name: "Kondar" }, { name: "M'saken" }, { name: "Sidi Bou Ali" }, { name: "Sidi El Heni" }, { name: "Sousse Jawhara" }, { name: "Sousse Médina" }, { name: "Sousse Riadh" }, { name: "Sousse Sidi Abdelhamid" }]
      },
      {
        id: 21,
        Gouvernorat: "Tataouine",
        Munici: [{ name: "Bir Lahmar" }, { name: "Dehiba" }, { name: "Ghomrassen" }, { name: "Remada" }, { name: "Tataouine Nord" }, { name: "Tataouine Sud" }]
      },
      {
        id: 22,
        Gouvernorat: "Tozeur",
        Munici: [{ name: "Degache" }, { name: "Hazoua" }, { name: "Nefta" }, { name: "Tameghza" }, { name: "Tozeur" }]
      },
      {
        id: 23,
        Gouvernorat: "Zaghouan",
        Munici: [{ name: "Bir Mcherga" }, { name: "El Fahs" }, { name: "Nadhour" }, { name: "Saouaf" }, { name: "Zaghouan" }]
      },{
        id: 24,
        Gouvernorat: "Tunis",
        Munici: [{ name: "Bab El Bhar" }, { name: "Bab Souika" }, { name: "Carthage" }, { name: "Cité El Khadra" }, { name: "Djebel Jelloud" }, { name: "El Kabaria" }, { name: "El Menzah" }, { name: "El Omrane" }, { name: "El Ouardia" }, { name: "Ezzouhour" }, { name: "Hraïria" }, { name: "La Goulette" }, { name: "La Marsa" }, { name: "Le Bardo" }, { name: "Le Kram" }, { name: "Medina" }, { name: "Séjoumi" }, { name: "Sidi Hassine" }, { name: "Sijoumi" }, { name: "Tbourba" }]
      }
    ];
    return localisation;
  }
  