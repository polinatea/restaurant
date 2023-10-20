interface Product  {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number}[];
};

export const products: Product[] = [
    {
        id: 1,
        title: "Salad Dream",
        desc: "lorem ipsum sjdsj fwjfwef wefbiewhoei jdksjvk",
        img: "/noodle-soup.png",
        price: 7,
        options:[
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 2,
            },
            {
                title: "Large",
                additionalPrice: 4,
            },
        ]
    },
    {
        id: 2,
        title: "Salad Dream",
        desc: "lorem ipsum sjdsj fwjfwef wefbiewhoei jdksjvk",
        img: "/fruit-salad.png",
        price: 7,
        options:[
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 2,
            },
            {
                title: "Large",
                additionalPrice: 4,
            },
        ]
    },
    {
        id: 3,
        title: "Salad Dream",
        desc: "lorem ipsum sjdsj fwjfwef wefbiewhoei jdksjvk",
        img: "/fruit-salad.png",
        price: 7,
        options:[
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 2,
            },
            {
                title: "Large",
                additionalPrice: 4,
            },
        ]
    },
    {
        id: 4,
        title: "Salad Dream",
        desc: "lorem ipsum sjdsj fwjfwef wefbiewhoei jdksjvk",
        img: "/fruit-salad.png",
        price: 7,
        options:[
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 2,
            },
            {
                title: "Large",
                additionalPrice: 4,
            },
        ]
    },
]


export interface Menu  {
        id: number;
        cat: string;
        title: string;
        desc?: string;
        price?: string;
        img?: string;
};


export const menu:Menu[] = [
    {
        id: 1,
        cat: "starters",
        title: "Fruit salad",
        desc: "Strawberry, banana, avocado",
        price: "5",
        img: "/fruit-salad.png",     
    },
    {
        id: 2,
        cat: "starters",
        title: "Aulac salad",
        desc: "Strawberry, banana, avocado",
        price: "5",
        img: "/aulac-salad.png",     
    },
    {
        id: 3,
        cat: "main",
        title: "Mixed vegetables",
        desc: "Carrot, celery, peper, cauliflower, broccoli, courgette, cooked rice",
        price: "5",
        img: "/mixed-vegetables.png",     
    },
    {
        id: 4,
        cat: "main",
        title: "Noodle soup",
        desc: "Wheat noodles, tofu, vegetables",
        price: "5",
        img: "/noodle-soup.png",     
    },
    {
        id: 5,
        cat: "drinks",
        title: "Fresh juice",
        desc: "",
        price: "5",
        img: "/fresh-juice.png",     
    },
    {
        id: 6,
        cat: "drinks",
        title: "Smoothie",
        desc: "",
        price: "5",
        img: "/smoothie.png",     
    },
    {
        id: 7,
        cat: "desserts",
        title: "Banana bingsu",
        desc: "",
        price: "5",
        img: "/banana-bingsu.png",     
    },
    {
        id: 8,
        cat: "desserts",
        title: "Strawberry bingsu",
        desc: "",
        price: "5",
        img: "/strawberry-bingsu.png",     
    },
]