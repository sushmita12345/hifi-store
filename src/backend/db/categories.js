import { v4 as uuid } from "uuid";
import saree from '../../assets/Image/Header/main-saree.webp';
import sweatshirt from '../../assets/Image/Header/main-sweatshirt.webp';
import ethnic from '../../assets/Image/Header/main-kurta.jpeg';
import dress from '../../assets/Image/Header/main-dress.webp';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "Saree",
    img: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16418176/2021/12/15/a9d45bc8-3d4f-47c6-973a-5b02f83f54231639543112745-Multicolor-Crush-Printed-bollywood-Saree-2471639543112274-1.jpg"
  },
  {
    _id: uuid(),
    category: "Ethnic",
    img: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/16608404/2021/12/24/0dc50adf-8891-4e9d-8eab-861608de7ae41640349657204JATRIQQWomenMagenta1.jpg"
  },
  {
    _id: uuid(),
    category: "Dress",
    img: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/15227352/2021/9/13/41c78b20-6f0e-483f-bb8d-ec82496613221631519487378-Athena-Burgundy-Georgette-Dress-4071631519486851-1.jpg"
  },
  {
    _id: uuid(),
    category: "Sweatshirt",
    img: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/21/ac642513-8cd6-46e1-b5b0-10cb9542eb451605945819520-1.jpg"
  },
];
