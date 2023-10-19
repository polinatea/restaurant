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
        img: "/salad2-no-bg.png",
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
        img: "/salad2-no-bg.png",
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
        img: "/salad2-no-bg.png",
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
        img: "/salad2-no-bg.png",
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


interface Menu  {
        id: number;
        cat: string;
        title: string;
        desc?: string;
        img?: string;
};


export const menu:Menu[] = [
    {
        id: 1,
        cat: "starters",
        title: "Fruit salad",
        desc: "Strawberry, banana, avocado",
        img: "/fruit-salad.png",     
    },
    {
        id: 2,
        cat: "starters",
        title: "Fruit salad",
        desc: "Strawberry, banana, avocado",
        img: "/fruit-salad.png",     
    },
    {
        id: 3,
        cat: "main",
        title: "soup",
        desc: "Strawberry, banana, avocado",
        img: "/fruit-salad.png",     
    },
    {
        id: 4,
        cat: "main",
        title: "soup",
        desc: "Strawberry, banana, avocado",
        img: "/fruit-salad.png",     
    },
    {
        id: 5,
        cat: "drinks",
        title: "Fruit salad",
        desc: "Strawberry, banana, avocado",
        img: "/fruit-salad.png",     
    },
    {
        id: 6,
        cat: "drinks",
        title: "Fruit salad",
        desc: "Strawberry, banana, avocado",
        img: "/fruit-salad.png",     
    },
    {
        id: 7,
        cat: "desserts",
        title: "Fruit salad",
        desc: "Strawberry, banana, avocado",
        img: "/fruit-salad.png",     
    },
    {
        id: 8,
        cat: "desserts",
        title: "Fruit salad",
        desc: "Strawberry, banana, avocado",
        img: "/fruit-salad.png",     
    },
]