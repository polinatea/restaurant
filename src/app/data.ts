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