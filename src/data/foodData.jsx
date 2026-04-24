const foodData = [

  {
    state: "Andhra Pradesh",
    slug: "andhra-pradesh",
    capital: "Amaravati",
    dish: "Pulihora",
    type: "Vegetarianetarian",
    calories: "350 kcal",
    bestPlace: "Local Temples & Homes",
    ingredients: ["Rice", "Tamarind", "Peanuts", "Curry leaves"],
    images: ["https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/pulihora.jpg"],
    description: "Pulihora is a tangy tamarind rice dish popular in Andhra Pradesh.",
    history: "Traditionally prepared during festivals and temple offerings."
  },

  {
    state: "Arunachal Pradesh",
    slug: "arunachal-pradesh",
    capital: "Itanagar",
    dish: "Thukpa",
    type: "Non-Vegetarian",
    calories: "400 kcal",
    bestPlace: "Local Monastery Kitchens",
    ingredients: ["Noodles", "Vegetarianetables", "Chicken", "Spices"],
    images: ["https://foodtrails25.com/wp-content/uploads/2019/09/How-to-make-Thukpa-Noodle-Soup.jpg"],
    description: "Thukpa is a noodle soup enjoyed in the cold regions.",
    history: "Influenced by Tibetan cuisine."
  },

  {
    state: "Assam",
    slug: "assam",
    capital: "Dispur",
    dish: "Masor Tenga",
    type: "Non-Vegetarian",
    calories: "300 kcal",
    bestPlace: "Traditional Assamese Homes",
    ingredients: ["Fish", "Tomato", "Lemon", "Mustard oil"],
    images: ["https://static.toiimg.com/thumb/60448103.cms?imgsize=2641337&width=800&height=800"],
    description: "Masor Tenga is a tangy fish curry from Assam.",
    history: "A staple food in Assamese households."
  },

  {
    state: "Bihar",
    slug: "bihar",
    capital: "Patna",
    dish: "Litti Chokha",
    type: "Vegetarianetarian",
    calories: "500 kcal",
    bestPlace: "Street Vendors, Patna",
    ingredients: ["Wheat flour", "Sattu", "Mustard oil"],
    images: ["https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg"],
    description: "Traditional dish served with mashed Vegetarianetables.",
    history: "Eaten during ancient Magadh period."
  },

  {
    state: "Chhattisgarh",
    slug: "chhattisgarh",
    capital: "Raipur",
    dish: "Chila",
    type: "Vegetarianetarian",
    calories: "250 kcal",
    bestPlace: "Local Markets",
    ingredients: ["Rice flour", "Gram flour", "Spices"],
    images: ["https://upload.wikimedia.org/wikipedia/commons/5/5a/CHILA%28THE_DOSA_OF_CHHATTISGARH%29.jpg"],
    description: "Chila is a healthy breakfast dish.",
    history: "Part of tribal cuisine."
  },

  {
    state: "Goa",
    slug: "goa",
    capital: "Panaji",
    dish: "Goan Fish Curry",
    type: "Non-Vegetarian",
    calories: "450 kcal",
    bestPlace: "Beach Shacks, Goa",
    ingredients: ["Fish", "Coconut milk", "Red chili"],
    images: ["https://www.recipetineats.com/tachyon/2020/10/Goan-Fish-Curry_6-SQ.jpg?resize=500%2C500"],
    description: "Spicy and tangy seafood curry.",
    history: "Portuguese influence on Goan cuisine."
  },

  {
    state: "Gujarat",
    slug: "gujarat",
    capital: "Gandhinagar",
    dish: "Dhokla",
    type: "Vegetarianetarian",
    calories: "160 kcal",
    bestPlace: "Ahmedabad Street Food",
    ingredients: ["Gram flour", "Curd", "Mustard seeds"],
    images: ["https://maayeka.com/wp-content/uploads/2011/11/sooji-ka-dhokla-instant-recipe-1-of-1.jpg"],
    description: "Soft steamed snack.",
    history: "Popular Gujarati breakfast."
  },

  {
    state: "Haryana",
    slug: "haryana",
    capital: "Chandigarh",
    dish: "Bajra Khichdi",
    type: "Vegetarian",
    calories: "420 kcal",
    bestPlace: "Village Dhaba",
    ingredients: ["Pearl millet", "Ghee"],
    images: ["https://static.toiimg.com/thumb/73419237.cms?imgsize=2132758&width=800&height=800"],
    description: "Nutritious winter meal.",
    history: "Traditional farmer dish."
  },

  {
    state: "Himachal Pradesh",
    slug: "himachal-pradesh",
    capital: "Shimla",
    dish: "Dham",
    type: "Vegetarian",
    calories: "380 kcal",
    bestPlace: "Local Festivals",
    ingredients: ["Rice", "Rajma", "Curd"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MVC6sR8DqDk2RND-B1eYkD3VV_8zaImASw&s"],
    description: "Festive meal served during celebrations.",
    history: "Part of Himachali culture."
  },

  {
    state: "Jharkhand",
    slug: "jharkhand",
    capital: "Ranchi",
    dish: "Thekua",
    type: "Sweet",
    calories: "200 kcal",
    bestPlace: "Local Homes",
    ingredients: ["Wheat flour", "Jaggery"],
    images: ["https://c.ndtvimg.com/2018-11/1ivb9hq_thekua_625x300_13_November_18.jpg"],
    description: "Traditional sweet snack.",
    history: "Made during Chhath festival."
  },

  {
    state: "Karnataka",
    slug: "karnataka",
    capital: "Bengaluru",
    dish: "Bisi Bele Bath",
    type: "Vegetarian",
    calories: "400 kcal",
    bestPlace: "MTR, Bengaluru",
    ingredients: ["Rice", "Lentils", "Vegetarianetables"],
    images: ["https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/bisi-bele-bath-recipe-500x375.jpg"],
    description: "Spicy rice dish.",
    history: "Originated in Mysore."
  },

  {
    state: "Kerala",
    slug: "kerala",
    capital: "Thiruvananthapuram",
    dish: "Appam with Stew",
    type: "Vegetarian/Non-Vegetarian",
    calories: "300 kcal",
    bestPlace: "Kochi Restaurants",
    ingredients: ["Rice batter", "Coconut milk"],
    images: ["https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2FAppam_and_Chicken_Stew20131126121303_88_1.jpg&w=3840&q=75"],
    description: "Soft pancakes with stew.",
    history: "Syrian Christian influence."
  },

  {
    state: "Madhya Pradesh",
    slug: "madhya-pradesh",
    capital: "Bhopal",
    dish: "Poha Jalebi",
    type: "Vegetarian",
    calories: "350 kcal",
    bestPlace: "Indore Sarafa Bazaar",
    ingredients: ["Flattened rice", "Turmeric"],
    images: ["https://www.cookshideout.com/wp-content/uploads/2014/04/Indori-Poha_FI.jpg"],
    description: "Famous breakfast combo.",
    history: "Central India specialty."
  },

  {
    state: "Maharashtra",
    slug: "maharashtra",
    capital: "Mumbai",
    dish: "Vada Pav",
    type: "Vegetarian",
    calories: "300 kcal",
    bestPlace: "Mumbai Street Stalls",
    ingredients: ["Potato", "Pav bread"],
    images: ["https://ministryofcurry.com/wp-content/uploads/2024/06/vada-pav-3.jpg"],
    description: "Indian burger.",
    history: "Invented in 1960s Mumbai."
  },

  {
    state: "Manipur",
    slug: "manipur",
    capital: "Imphal",
    dish: "Eromba",
    type: "Vegetarian",
    calories: "250 kcal",
    bestPlace: "Local Homes",
    ingredients: ["Boiled Vegetarianetables", "Fermented fish"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0ateF_3ZZSaogUXiurFDwHfKe-UDl09P7A&s"],
    description: "Traditional Manipuri dish.",
    history: "Indigenous tribal cuisine."
  },

  {
    state: "Meghalaya",
    slug: "meghalaya",
    capital: "Shillong",
    dish: "Jadoh",
    type: "Non-Vegetarian",
    calories: "450 kcal",
    bestPlace: "Shillong Markets",
    ingredients: ["Rice", "Pork"],
    images: ["https://gayathriscookspot.com/wp-content/uploads/2018/11/Jadoh-1.jpg"],
    description: "Rice and meat delicacy.",
    history: "Khasi tribal origin."
  },

  {
    state: "Mizoram",
    slug: "mizoram",
    capital: "Aizawl",
    dish: "Bai",
    type: "Vegetarian",
    calories: "200 kcal",
    bestPlace: "Local Kitchens",
    ingredients: ["Vegetarianetables", "Bamboo shoot"],
    images: ["https://images.slurrp.com/prod/rich_article/kwxhjwjlwoe.webp?impolicy=slurrp-20210601&width=880&height=500"],
    description: "Healthy boiled dish.",
    history: "Tribal food tradition."
  },

  {
    state: "Nagaland",
    slug: "nagaland",
    capital: "Kohima",
    dish: "Smoked Pork with Bamboo Shoot",
    type: "Non-Vegetarian",
    calories: "500 kcal",
    bestPlace: "Local Tribal Homes",
    ingredients: ["Pork", "Bamboo shoot"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4ZpfruxwFUod_mLcbwMq1ey3dEVRwjaFJA&s"],
    description: "Smoky flavored pork dish.",
    history: "Traditional Naga cuisine."
  },

  {
    state: "Odisha",
    slug: "odisha",
    capital: "Bhubaneswar",
    dish: "Pakhala Bhata",
    type: "Vegetarian",
    calories: "250 kcal",
    bestPlace: "Odisha Homes",
    ingredients: ["Fermented rice", "Curd"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtGmdVmvlkCvcosHavurnisVyfA897eAetQ&s"],
    description: "Cooling summer dish.",
    history: "Temple cuisine of Jagannath."
  },

  {
    state: "Punjab",
    slug: "punjab",
    capital: "Chandigarh",
    dish: "Sarson da Saag",
    type: "Vegetarian",
    calories: "400 kcal",
    bestPlace: "Amritsar Dhaba",
    ingredients: ["Mustard leaves", "Butter"],
    images: ["https://upload.wikimedia.org/wikipedia/commons/c/c8/Saagroti.jpg"],
    description: "Winter specialty.",
    history: "Farmer’s traditional meal."
  },

  {
    state: "Rajasthan",
    slug: "rajasthan",
    capital: "Jaipur",
    dish: "Dal Baati Churma",
    type: "Vegetarian",
    calories: "450 kcal",
    bestPlace: "Jaipur Restaurants",
    ingredients: ["Wheat", "Dal", "Ghee"],
    images: ["https://assets.cntraveller.in/photos/64c7775e1e94724098a803da/master/w_1600%2Cc_limit/Thaali%2520and%2520more%2520.jpeg"],
    description: "Iconic Rajasthani dish.",
    history: "Rajput warrior food."
  },

  {
    state: "Sikkim",
    slug: "sikkim",
    capital: "Gangtok",
    dish: "Momos",
    type: "Vegetarian/Non-Vegetarian",
    calories: "300 kcal",
    bestPlace: "Gangtok Street",
    ingredients: ["Flour", "Vegetarianetables/Meat"],
    images: ["https://www.spicypunch.com/wp-content/uploads/2021/05/chicken-momos-recipe-1.jpg"],
    description: "Steamed dumplings.",
    history: "Tibetan influence."
  },

  {
    state: "Tamil Nadu",
    slug: "tamil-nadu",
    capital: "Chennai",
    dish: "Dosa",
    type: "Vegetarian",
    calories: "200 kcal",
    bestPlace: "Chennai Restaurants",
    ingredients: ["Rice batter", "Lentils"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H8Mu-pfh7Rb3kFFqkAs9BGl3KstjAFkb4A&s"],
    description: "Crispy fermented crepe.",
    history: "Ancient South Indian dish."
  },

  {
    state: "Telangana",
    slug: "telangana",
    capital: "Hyderabad",
    dish: "Haleem",
    type: "Non-Vegetarian",
    calories: "500 kcal",
    bestPlace: "Hyderabad Ramadan Bazaars",
    ingredients: ["Wheat", "Meat"],
    images: ["https://i.ytimg.com/vi/1iQbz7hvXU8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuI53GJixTMNg0nngSTpLpCuVeqg"],
    description: "Slow cooked meat stew.",
    history: "Introduced by Arabs."
  },

  {
    state: "Tripura",
    slug: "tripura",
    capital: "Agartala",
    dish: "Mui Borok",
    type: "Non-Vegetarian",
    calories: "350 kcal",
    bestPlace: "Tribal Homes",
    ingredients: ["Fish", "Bamboo shoot"],
    images: ["https://s7ap1.scene7.com/is/image/incredibleindia/mui-borok-gastronomy-agartala-blog-gas-hero?qlt=82&ts=1726651182594"],
    description: "Traditional Tripuri dish.",
    history: "Tribal cuisine."
  },

  {
    state: "Uttar Pradesh",
    slug: "uttar-pradesh",
    capital: "Lucknow",
    dish: "Tunday Kababi",
    type: "Non-Vegetarian",
    calories: "350 kcal",
    bestPlace: "Tunday Kababi, Lucknow",
    ingredients: ["Minced meat", "Spices"],
    images: ["https://b.zmtcdn.com/data/pictures/chains/1/801511/52e9803a79161bac614b90c455952d36.jpg"],
    description: "Famous Awadhi kebab.",
    history: "Created for a Nawab."
  },

  {
    state: "Uttarakhand",
    slug: "uttarakhand",
    capital: "Dehradun",
    dish: "Kafuli",
    type: "Vegetarian",
    calories: "250 kcal",
    bestPlace: "Local Garhwali Homes",
    ingredients: ["Spinach", "Fenugreek"],
    images: ["https://images.archanaskitchen.com/images/recipes/indian/main-course/north-indian-vegetarian-recipes/sabzi-recipes/Uttaranchal_Style_Garwhali_Kafuli_Recipe_Spinach_Curry_9378_675c6867d2.jpg"],
    description: "Green leafy curry.",
    history: "Garhwali traditional dish."
  },

  {
    state: "West Bengal",
    slug: "west-bengal",
    capital: "Kolkata",
    dish: "Rasgulla",
    type: "Sweet",
    calories: "150 kcal",
    bestPlace: "K.C. Das, Kolkata",
    ingredients: ["Chenna", "Sugar syrup"],
    images: ["https://glutenfreeindian.com/wp-content/uploads/2019/10/shutterstock_1182461014-1.jpg"],
    description: "Spongy sweet dessert.",
    history: "Invented in 19th century."
  }

];

export default foodData;