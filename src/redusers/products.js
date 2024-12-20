import { SET_SELECTED_CATEGORY } from '../actions/actionTypes'

const initialState = {
    products: [
      {
        id: 1,
        name: 'Юбилейная',
        category: 'Троицкая пряжа для ручного вязания',
        composition: ['мериносовая шерсть', 'акрил'],
        composition_proccent: '20% мериносовая шерсть, 80% акрил',
        brand: 'Пряжа из Троицка',
        season: ['весна', 'осень', 'зима'],
        series: 'классическая',
        price: 250.00,
        packQuantity: 5,
        threadLength: 200,
        weight: 200,
        description: 'Перед вами новинка Классической серии -  объёмная пряжа ЮБИЛЕЙНАЯ,  из которой можно очень быстро и легко связать любое изделие! Отличительная особенность этой пряжи – сложная крутка: десять тонких ниточек соединены по две, затем, получившиеся пять, скручены между собой. Элитная мериносовая шерсть, совмещенная с акрилом, доставит большое удовольствие при вязании и обеспечит высокий уровень комфорта при носке: приятная по тактильным ощущениям, не пилингуется,  не выгорает, не вытягивается. Равномерная структура нити и  широкая палитра оттенков от классики до авангарда, позволят даже начинающим вязальщицам, насладится результатами своего труда! Благодаря шерсти в составе данной пряжи, изделия из нее дышат и обладают гигроскопическими свойствами. Отлично подходит для вязания вещей и аксессуаров на  холодное время года - пальто, кардиганов, пуловеров, жилетов, свитеров, шарфов, головных уборов. Нить прекрасно ложится в любых узорах при вязании и спицами, и крючком - от ажуров до сложных переплетений из жгутов и кос. Рекомендуется использовать спицы и крючки толщиной от № 6 до № 10.',
        colors: ['#E05655', '#E35B5B','#D5893E', '#1FA39D'],
        images: ['./src/assets/Products/yubileynaya.jpg', './scr/assets/Products/yubileynaya_E05655.jpg', './scr/assets/Products/yubileynaya_E35B5B.jpg', './src/assets/Products/yubileynaya_D5893E.jpg', './scr/assets/Products/yubileynaya_1FA39D.jpg'],
      },
      {
        id: 2,
        name: 'Шотландский твид',
        category: 'Троицкая пряжа для ручного вязания',
        composition: ['Шерсть'],
        composition_proccent: '100% шерсть',
        brand: 'Пряжа из Троицка',
        season: ['зима', 'осень', 'весна'],
        series: 'чистая шерсть',
        price: 240.00,
        packQuantity: 10,
        threadLength: 360,
        weight: 100,
        description: 'Твидовая пряжа - это разновидность пряжи, изготовленная из толстой и плотной некрученой овечьей шерсти. Она состоит из объемной однотонной шерсти с разноцветными вкраплениями, визуально имитирует английский твид.  Мягкая, приятная на ощупь пряжа, из которой получаются теплые современные вещи, отличающиеся добротным внешним видом и практичными свойствами в носке.  Цветовая палитра выполнена в соответствии с модными тенденциями. Подходит для разнообразных творческих проектов: носков, снудов, шапок, пуловеров, пончо, платьев, пальто. Рекомендуются простые плотные узоры спицами, жаккарды , араны , в которых раскроется тайна и изюминка этой потрясающей пряжи.',
        colors: ['#9AA1AD', '#3D5E80', '#6B4A8F', '#69562E', '#61375F', '#645954', '#63322F', '#B0444F', '#797585', '#69564E'],
        images: ['./src/assets/Products/scotlandTvid.jpg', './src/assets/Products/scotlandTvid_9AA1AD.png', './src/assets/Products/scotlandTvid_3D5E80.jpg', './src/assets/Products/scotlandTvid_6B4A8F.jpg', './src/assets/Products/scotlandTvid_69562E.jpg', './src/assets/Products/scotlandTvid_61375F.jpg', './src/assets/Products/scotlandTvid_645954.jpg', './src/assets/Products/scotlandTvid_63322F.jpg', './src/assets/Products/scotlandTvid_B0444F.jpg', './src/assets/Products/scotlandTvid_797585.jpg', './src/assets/Products/scotlandTvid_69564E.jpg'],
      },
    ],
    categories: ['Троицкая пряжа для ручного вязания', 'Шерсть для валяния', 'Пряжа российских производителей', 'Пехорская пряжа',
        'Спицы, крючки и иглы для валяния', 'Иностранная пряжа', 'Одеяла',
    ],
    selectedCategory: '',
  };


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CATEGORY:
            return { 
                ...state, 
                selectedCategory: action.payload 
            };
        default:
            return state;
    }
};

export default productReducer