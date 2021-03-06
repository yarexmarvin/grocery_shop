
// category photos;
import babyFood from 'assets/catalog/baby-nutrition.png'
import babyFood2x from 'assets/catalog/baby-nutrition@2x.png'
import babyFood3x from 'assets/catalog/baby-nutrition@3x.png'

import beverages from 'assets/catalog/beverages.png'
import beverages2x from 'assets/catalog/beverages@2x.png'
import beverages3x from 'assets/catalog/beverages@3x.png'

import bread from 'assets/catalog/bread.png'
import bread2x from 'assets/catalog/bread@2x.png'
import bread3x from 'assets/catalog/bread@3x.png'

import candies from 'assets/catalog/candies.png'
import candies2x from 'assets/catalog/candies@2x.png'
import candies3x from 'assets/catalog/candies@3x.png'

import cleaning from 'assets/catalog/cleaning.png'
import cleaning2x from 'assets/catalog/cleaning@2x.png'
import cleaning3x from 'assets/catalog/cleaning@3x.png'

import coffee from 'assets/catalog/coffee.png'
import coffee2x from 'assets/catalog/coffee@2x.png'
import coffee3x from 'assets/catalog/coffee@3x.png'

import dairy from 'assets/catalog/dairy.png'
import dairy2x from 'assets/catalog/dairy@2x.png'
import dairy3x from 'assets/catalog/dairy@3x.png'

import frozen from 'assets/catalog/frozen.png'
import frozen2x from 'assets/catalog/frozen@2x.png'
import frozen3x from 'assets/catalog/frozen@3x.png'

import healthy from 'assets/catalog/healthy.png'
import healthy2x from 'assets/catalog/healthy@2x.png'
import healthy3x from 'assets/catalog/healthy@3x.png'

import meat from 'assets/catalog/meat.png'
import meat2x from 'assets/catalog/meat@2x.png'
import meat3x from 'assets/catalog/meat@3x.png'

import pasta from 'assets/catalog/pasta.png'
import pasta2x from 'assets/catalog/pasta@2x.png'
import pasta3x from 'assets/catalog/pasta@3x.png'

import pet from 'assets/catalog/pet.png'
import pet2x from 'assets/catalog/pet@2x.png'
import pet3x from 'assets/catalog/pet@3x.png'

import veggies from 'assets/catalog/veggies.png'
import veggies2x from 'assets/catalog/veggies@2x.png'
import veggies3x from 'assets/catalog/veggies@3x.png'
import { ICategoryItem } from 'pages/catalog/data/CategoryTypes'


export const categories:ICategoryItem[] = [
    {
        id: 'diary',
        wide: true,
        label: '????????????, ??????, ????????',
        img: {
            src: dairy,
            srcSet: `${dairy} 1x, ${dairy2x} 2x, ${dairy3x} 3x`
        }
    },
    {
        id: 'bread',
        variant: 'primary',
        label: '????????',
        img: {
            src: bread,
            srcSet: `${bread} 1x, ${bread2x} 2x, ${bread3x} 3x`
        }
    },
    {
        id: 'veggies_fruits',
        label: '???????????? ?? ??????????',
        img: {
            src: veggies,
            srcSet: `${veggies} 1x, ${veggies2x} 2x, ${veggies3x} 3x`
        }
    },
    {
        id: 'frozen_products',
        label: '???????????????????????? ????????????????',
        img: {
            src: frozen,
            srcSet: `${frozen} 1x, ${frozen} 2x, ${frozen} 3x`
        }
    },
    {
        id: 'beverages',
        label: '??????????????',
        img: {
            src: beverages,
            srcSet: `${beverages} 1x, ${beverages2x} 2x, ${beverages3x} 3x`
        }
    },
    {
        id: 'pastry',
        label: '???????????????????????? ??????????????',
        img: {
            src: candies,
            srcSet: `${candies} 1x, ${candies2x} 2x, ${candies3x} 3x`
        }
    },
    {
        id: 'coffee_tea',
        label: '??????, ????????',
        img: {
            src: coffee,
            srcSet: `${coffee} 1x, ${coffee2x} 2x, ${coffee3x} 3x`
        }
    },
    {
        id: 'grocery',
        label: '??????????????',
        img: {
            src: pasta,
            srcSet: `${pasta} 1x, ${pasta2x} 2x, ${pasta3x} 3x`
        }
    },
    {
        id: 'healthy_food',
        label: '???????????????? ??????????????',
        img: {
            src: healthy,
            srcSet: `${healthy} 1x, ${healthy2x} 2x, ${healthy3x} 3x`
        }
    },
    {
        id: 'pet_products',
        wide: true,
        label: '??????????????????',
        img: {
            src: pet,
            srcSet: `${pet} 1x, ${pet2x} 2x, ${pet3x} 3x`
        }
    },
    {
        id: 'baby_nutrition',
        label: '?????????????? ??????????????',
        img: {
            src: babyFood,
            srcSet: `${babyFood} 1x, ${babyFood2x} 2x, ${babyFood3x} 3x`
        }
    },
    {
        id: 'non_food',
        label: '?????????????????????????????????????? ????????????',
        img: {
            src: cleaning,
            srcSet: `${cleaning} 1x, ${cleaning2x} 2x, ${cleaning3x} 3x`
        }
    },
    {
        id: 'meat',
        wide: true,
        label: '????????, ??????????, ??????????????',
        img: {
            src: meat,
            srcSet: `${meat} 1x, ${meat2x} 2x, ${meat3x} 3x`
        }
    },
]