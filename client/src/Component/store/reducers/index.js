import { combineReducers } from 'redux';

// To initialize the store 
const initialState = {
    uiPage: '',
    imageLink: '',
    imageHeading: 'Heading',
    imagePrice: '',
    uiShop: '',
    subShop: '',
    order: [],
    searchText: []
};

// To change the state based on th action reducers 
const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_TO_HOME':
            return {
                ...state,
                uiPage: ''
            }
        case 'SWITCH_TO_SEARCH':
                return {
                    ...state,
                    uiPage: 'search',
                    searchText: [...action.searchText],
                    uiShop: '',
                    subShop: ''
                }
        case 'SWITCH_TO_SHOP':
            return {
                ...state,
                uiPage: 'shop',
                uiShop: 'shop',
            }
        case 'SWITCH_TO_SHOP_FROM_SEARCH':
                return {
                    ...state,
                    
                }
        case 'SWITCH_TO_EMBOSSED':
                return {
                    ...state,
                    uiPage: 'shop',
                    uiShop: 'shop',
                    subShop: ''
                }
        case 'SWITCH_TO_GIFT':
                return {
                    ...state,
                    uiPage: 'shop',
                    uiShop: 'shop',
                    subShop: 'gift'
                }
        case 'SWITCH_TO_OTHERS':
                return {
                    ...state,
                    uiPage: 'shop',
                    uiShop: 'shop',
                    subShop: 'others'
                }
        case 'ADD_TO_BASKET':
                    return {
                        ...state,
                        order: [...state.order,action.newOrder],
                    }
        case 'UPDATE_BASKET':
                        return {
                            ...state,
                            order: [...action.newOrders],
                        }
        case 'DATA_MAPPING':
            return {
                ...state,
                uiShop: 'detail',
                imageLink: action.imageLink,
                imageHeading: action.imageHeading,
                imagePrice: action.imagePrice
            }
        default:
            return state;
    }
}

const dataReducer = () => {
    return [  {
        imageLink: 'resources/Photos/fruits/1.jpg',
        imageHeading: 'Avocado / வெண்ணைப்பழம்',
        imagePrice: '160',
    },
    {
      imageLink: 'resources/Photos/fruits/2.jpg',
      imageHeading: 'Dragon fruit / டிராகன் பழம்',
      imagePrice: '135',
    },
    {
      imageLink: 'resources/Photos/fruits/3.jpg',
      imageHeading: 'Fig (athi) / அத்திப்பழம்',
      imagePrice: '62',
    },
    {
      imageLink: 'resources/Photos/fruits/4.jpg',
      imageHeading: 'anana Nendran / நேந்திரம் வாழை',
      imagePrice: '64',
    },
    {
      imageLink: 'resources/Photos/fruits/5.jpg',
      imageHeading: 'Guava (white) / கொய்யாப்பழம்',
      imagePrice: '55',
    },
    {
      imageLink: 'resources/Photos/fruits/6.jpg',
      imageHeading: 'Kiwi / கிவி',
      imagePrice: '115',
    },
    {
      imageLink: 'resources/Photos/fruits/7.jpg',
      imageHeading: 'Banana (Manjal) / வாழைப்பழம்',
      imagePrice: '42',
    },
    {
      imageLink: 'resources/Photos/fruits/8.jpg',
      imageHeading: 'Mosambi / சாத்துக்குடி',
      imagePrice: '48',
    },
    {
      imageLink: 'resources/Photos/fruits/9.jpg',
      imageHeading: 'Royal gala apple / ராயல் காலா ஆப்பிள்',
      imagePrice: '185',
    },
    {
      imageLink: 'resources/Photos/fruits/10.jpg',
      imageHeading: 'Orange malta / ஆரஞ்சு மால்டா',
      imagePrice: '150',
    },
    {
      imageLink: 'resources/Photos/fruits/11.jpg',
      imageHeading: 'Papaya / பப்பாளி',
      imagePrice: '56',
    },
    {
      imageLink: 'resources/Photos/fruits/12.jpg',
      imageHeading: 'Pineapple / அன்னாசிப்பழம்',
      imagePrice: '84',
    },
    {
      imageLink: 'resources/Photos/fruits/13.jpg',
      imageHeading: 'Pomegranate / மாதுளை',
      imagePrice: '140',
    },
    {
      imageLink: 'resources/Photos/fruits/14.jpg',
      imageHeading: 'Washington apple / வாஷிங்டன் ஆப்பிள்',
      imagePrice: '160',
    },
    {
      imageLink: 'resources/Photos/fruits/15.jpg',
      imageHeading: 'Banana – Red / செவ்வாழ',
      imagePrice: '52',
    },
    {
      imageLink: 'resources/Photos/fruits/16.jpg',
      imageHeading: 'Grapes (paneer) / பன்னீர் திராட்சை',
      imagePrice: '69',
    },
    {
      imageLink: 'resources/Photos/fruits/17.jpg',
      imageHeading: 'Apple Indian / ஆப்பிள்',
      imagePrice: '135',
    },
    {
      imageLink: 'resources/Photos/fruits/18.jpg',
      imageHeading: 'Watermelon (kiran) / தர்பூசணி கிரண்',
      imagePrice: '56',
    },
    {
      imageLink: 'resources/Photos/fruits/19.jpg',
      imageHeading: 'Banana – Elakki / வாழைப்பழம் – எலக்கி',
      imagePrice: '52',
    },
    {
      imageLink: 'resources/Photos/fruits/20.jpg',
      imageHeading: 'Tender coconut / இளநீர்',
      imagePrice: '49',
    },
    {
      imageLink: 'resources/Photos/fruits/21.jpg',
      imageHeading: 'Cherry / செர்ரி',
      imagePrice: '160',
    },
    {
      imageLink: 'resources/Photos/fruits/22.jpg',
      imageHeading: 'Green Grapes / பச்சை திராட்சை',
      imagePrice: '79',
    },
    {
      imageLink: 'resources/Photos/fruits/23.jpg',
      imageHeading: 'Red guava / சிவப்பு கொய்யா',
      imagePrice: '68',
    },
    {
      imageLink: 'resources/Photos/fruits/24.jpg',
      imageHeading: 'Peach / பீச்',
      imagePrice: '160',
    },
    {
      imageLink: 'resources/Photos/fruits/25.jpg',
      imageHeading: 'Plums / பிளம்ஸ்',
      imagePrice: '190',
    },
    {
      imageLink: 'resources/Photos/fruits/26.jpg',
      imageHeading: 'Sapotta / சப்போட்டா பழம்',
      imagePrice: '65',
    },
    {
      imageLink: 'resources/Photos/fruits/27.jpg',
      imageHeading: 'Pear / பேரிக்காய்',
      imagePrice: '230',
    },
    {
      imageLink: 'resources/Photos/fruits/28.jpg',
      imageHeading: 'Custard Apple / சீத்தாப்பழம்',
      imagePrice: '66',
    },
    {
      imageLink: 'resources/Photos/fruits/29.jpg',
      imageHeading: 'Litchi / லிச்சி',
      imagePrice: '160',
    },
    {
      imageLink: 'resources/Photos/fruits/30.jpg',
      imageHeading: 'Strawberry / ஸ்ட்ராபெரி',
      imagePrice: '260',
    },
    {
      imageLink: 'resources/Photos/fruits/31.jpg',
      imageHeading: 'Mangosteen / மாங்கோஸ்டீன் பழம்',
      imagePrice: '160',
    },
    {
      imageLink: 'resources/Photos/fruits/32.jpg',
      imageHeading: 'Muskmelon / கிர்ணி பழம்',
      imagePrice: '37',
    },
]

}

const vegReducer = () => {
  return [  {
      imageLink: 'resources/Photos/veg/1.jpg',
      imageHeading: 'Amla / நெல்லிக்காய்',
      imagePrice: '44',
  },
  {
    imageLink: 'resources/Photos/veg/2.jpg',
    imageHeading: 'Ash gourd / சாம்பல் பூசணிக்காய்',
    imagePrice: '14',
  },
  {
    imageLink: 'resources/Photos/veg/3.jpg',
    imageHeading: 'Banana flower / வாழைப்பூ',
    imagePrice: '32',
  },
  {
    imageLink: 'resources/Photos/veg/4.jpg',
    imageHeading: 'Banana Stem / வாழைத்தண்டு',
    imagePrice: '16',
  },
  {
    imageLink: 'resources/Photos/veg/5.jpg',
    imageHeading: 'Beans / பீன்ஸ்',
    imagePrice: '27',
  },
  {
    imageLink: 'resources/Photos/veg/6.jpg',
    imageHeading: 'Beans–Broad / அவரைக்காய்',
    imagePrice: '24',
  },
  {
    imageLink: 'resources/Photos/veg/7.jpg',
    imageHeading: 'Beetroot / பீட்ரூட்',
    imagePrice: '16',
  },
  {
    imageLink: 'resources/Photos/veg/8.jpg',
    imageHeading: 'Bitter gourd / பாகற்காய்',
    imagePrice: '24',
  },
  {
    imageLink: 'resources/Photos/veg/9.jpg',
    imageHeading: 'Bottle Gourd / சுரைக்காய்',
    imagePrice: '39',
  },
  {
    imageLink: 'resources/Photos/veg/10.jpg',
    imageHeading: 'Brinjal ujala / கத்திரிக்காய்',
    imagePrice: '16',
  },
  {
    imageLink: 'resources/Photos/veg/11.jpg',
    imageHeading: 'Brinjal vari / கத்திரிக்காய்',
    imagePrice: '14',
  },
  {
    imageLink: 'resources/Photos/veg/12.jpg',
    imageHeading: 'Cabbage / முட்டை கோஸ்',
    imagePrice: '29',
  },
  {
    imageLink: 'resources/Photos/veg/13.jpg',
    imageHeading: 'Capsicum ( Green) / குடை மிளகாய்',
    imagePrice: '24',
  },
  {
    imageLink: 'resources/Photos/veg/14.jpg',
    imageHeading: 'Carrot / கேரட்',
    imagePrice: '34',
  },
  {
    imageLink: 'resources/Photos/veg/15.jpg',
    imageHeading: 'Cauliflower (Medium) / காலிஃபிளவர்',
    imagePrice: '62',
  },
  {
    imageLink: 'resources/Photos/veg/16.jpg',
    imageHeading: 'Chow Chow / சவ் சவ்',
    imagePrice: '21',
  },
  {
    imageLink: 'resources/Photos/veg/17.jpg',
    imageHeading: 'Cluster Beans / கொத்து பீன்ஸ்',
    imagePrice: '19',
  },
  {
    imageLink: 'resources/Photos/veg/18.jpg',
    imageHeading: 'Coccinia / கோவக்காய்',
    imagePrice: '14',
  },
  {
    imageLink: 'resources/Photos/veg/19.jpg',
    imageHeading: 'Coconut (Medium) / தேங்காய்',
    imagePrice: '35',
  },
  {
    imageLink: 'resources/Photos/veg/20.jpg',
    imageHeading: 'Colocasia / சேப்பங்கிழங்கு',
    imagePrice: '17',
  },
  {
    imageLink: 'resources/Photos/veg/21.jpg',
    imageHeading: 'Coriander Leaves / கொத்தமல்லி',
    imagePrice: '16',
  },
  {
    imageLink: 'resources/Photos/veg/22.jpg',
    imageHeading: 'Cucumber / வெள்ளரிக்காய்',
    imagePrice: '32',
  },
  {
    imageLink: 'resources/Photos/veg/23.jpg',
    imageHeading: 'Curry Leaves / கறிவேப்பில்லை',
    imagePrice: '8',
  },
  {
    imageLink: 'resources/Photos/veg/24.jpg',
    imageHeading: 'Drum Stick / முருங்கைக்காய்',
    imagePrice: '23',
  },
  {
    imageLink: 'resources/Photos/veg/25.jpg',
    imageHeading: 'Garlic (Hill)/ மலை பூண்டு',
    imagePrice: '112',
  },
  {
    imageLink: 'resources/Photos/veg/26.jpg',
    imageHeading: 'Ginger (New)/ இஞ்சி',
    imagePrice: '10',
  },
  {
    imageLink: 'resources/Photos/veg/27.jpg',
    imageHeading: 'Green Chilli / பச்சை மிளகாய்',
    imagePrice: '10',
  },
  {
    imageLink: 'resources/Photos/veg/28.jpg',
    imageHeading: 'Green Plantain / வாழைக்காய்',
    imagePrice: '16',
  },
  {
    imageLink: 'resources/Photos/veg/29.jpg',
    imageHeading: 'Ladies finger / வெண்டைக்காய்',
    imagePrice: '22',
  },
  {
    imageLink: 'resources/Photos/veg/30.jpg',
    imageHeading: 'Lemon / எலுமிச்சை',
    imagePrice: '13',
  },
  {
    imageLink: 'resources/Photos/veg/31.jpg',
    imageHeading: 'Mango – Raw / மாங்காய்',
    imagePrice: '94',
  },
  {
    imageLink: 'resources/Photos/veg/32.jpg',
    imageHeading: 'Mint Leaves / புதினா',
    imagePrice: '14',
  },
  {
    imageLink: 'resources/Photos/veg/33.jpg',
    imageHeading: 'Mushrooms / காளான்',
    imagePrice: '62',
  },
  {
    imageLink: 'resources/Photos/veg/34.jpg',
    imageHeading: 'Onion(Sambhar) / சின்ன வெங்காயம்',
    imagePrice: '55',
  },
  {
    imageLink: 'resources/Photos/veg/35.jpg',
    imageHeading: 'Potato / உருளைக்கிழங்கு',
    imagePrice: '37',
  },
  {
    imageLink: 'resources/Photos/veg/36.jpg',
    imageHeading: 'Radish / முள்ளங்கி',
    imagePrice: '14',
  },
  {
    imageLink: 'resources/Photos/veg/37.jpg',
    imageHeading: 'Ridge Gourd / பீர்க்கங்காய்',
    imagePrice: '37',
  },
  {
    imageLink: 'resources/Photos/veg/38.jpg',
    imageHeading: 'Snake Gourd / புடலங்காய்',
    imagePrice: '17',
  },
  {
    imageLink: 'resources/Photos/veg/39.jpg',
    imageHeading: 'Sweet Corn / சோளம்',
    imagePrice: '34',
  },
  {
    imageLink: 'resources/Photos/veg/40.jpg',
    imageHeading: 'Tomato Hybrid / பெங்களூரு தக்காளி',
    imagePrice: '32',
  },
  {
    imageLink: 'resources/Photos/veg/41.jpg',
    imageHeading: 'Tomato( local) / நாட்டுத்தக்காளி',
    imagePrice: '32',
  },
  {
    imageLink: 'resources/Photos/veg/42.jpg',
    imageHeading: 'Yam / சேனை கிழங்கு',
    imagePrice: '13',
  },
  {
    imageLink: 'resources/Photos/veg/43.jpg',
    imageHeading: 'Yellow Pumpkin / பூசணி',
    imagePrice: '14',
  },
  {
    imageLink: 'resources/Photos/veg/44.jpg',
    imageHeading: 'Onion(Medium)/வெங்காயம்',
    imagePrice: '31',
  },
  {
    imageLink: 'resources/Photos/veg/45.jpg',
    imageHeading: 'Siru keerai / சிறு கீரை',
    imagePrice: '22',
  },
  {
    imageLink: 'resources/Photos/veg/46.jpg',
    imageHeading: 'Palak Keerai / பாலக் கீரை',
    imagePrice: '24',
  },
  {
    imageLink: 'resources/Photos/veg/47.jpg',
    imageHeading: 'Brocolli / ப்ரோக்கோலி',
    imagePrice: '62',
  },
  {
    imageLink: 'resources/Photos/veg/48.jpg',
    imageHeading: 'Lettuce / லெட்டூஸ்',
    imagePrice: '49',
  },
  {
    imageLink: 'resources/Photos/veg/49.jpg',
    imageHeading: 'Arai keerai / அரை கீரை',
    imagePrice: '22',
  },

]

}




export default combineReducers({
    pageTag: pageReducer,
    dataExt: dataReducer,
    vegExt: vegReducer
});