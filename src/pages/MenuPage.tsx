import React from 'react';

interface MenuItem {
    id: number;
    name: string;
    subName: string;
    price: string;
    image: string;
    bgColor: string;
    textColor?: string; // Optional property
    description: string;
    ingredients?: string[];
}

const menuItems: MenuItem[] = [
    {
        id: 1,
        name: "CLASSIC",
        subName: "BURGER",
        price: "$12.500",
        image: "/images/burger1.png",
        bgColor: "bg-orange-500",
        description: "La técnica perfecta. Smash classic.",
        ingredients: ["Doble Carne Smash", "Queso Cheddar", "Cebolla", "Pepinillos", "Salsa Secreta"]
    },
    {
        id: 2,
        name: "ZINGER",
        subName: "CRISPY",
        price: "$13.500",
        image: "/images/burger4.png", // Zinger
        bgColor: "bg-green-600",
        description: "Pollo frito extra crujiente.",
        ingredients: ["Pollo Crispy", "Lechuga Fresca", "Mayonesa Casera", "Pan Brioche"]
    },
    {
        id: 3,
        name: "STEAK",
        subName: "HOUSE",
        price: "$15.000",
        image: "/images/burger3.png", // BBQ Tower usada como Steak
        bgColor: "bg-yellow-500", // Darker yellow used
        // textColor removed, defaults to white logic in JSX
        description: "Bacon, aros de cebolla y BBQ.",
        ingredients: ["Doble Carne", "Bacon Ahumado", "Aros de Cebolla", "Salsa BBQ", "Cheddar"]
    },
    {
        id: 4,
        name: "CHEESE",
        subName: "LOVER",
        price: "$14.500",
        image: "/images/burger5.png", // Cheese deluxe
        bgColor: "bg-red-600",
        description: "Doble carne, extra queso fundido.",
        ingredients: ["Triple Carne", "Extra Cheddar", "Salsa de Queso", "Cebolla Morada"]
    },
    {
        id: 5,
        name: "Truffle",
        subName: "DELUXE",
        price: "$14.900",
        image: "/images/burger2.png", // Mushroom
        bgColor: "bg-orange-600",
        description: "Champiñones y aceite de trufa.",
        ingredients: ["Carne Premium", "Hongos Salteados", "Aceite de Trufa", "Queso Suizo", "Rúcula"]
    }
];

const MenuPage = () => {
    return (
        <div className="min-h-screen pt-14 bg-bgDark flex flex-col md:flex-row overflow-hidden">
            {menuItems.map((item, index) => (
                <div
                    key={item.id}
                    className={`
            relative flex-1 group transition-all duration-500 ease-in-out hover:flex-[1.5]
            flex flex-col justify-end pb-12 items-center text-center
            ${item.bgColor}
            border-r-0 md:border-r border-white/10 last:border-r-0
            min-h-[50vh] md:min-h-[calc(100vh-80px)]
          `}
                >
                    {/* Background Text Faded */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 opacity-10 whitespace-nowrap pointer-events-none">
                        <span className={`text-[10rem] font-bold uppercase tracking-tighter ${item.textColor ? 'text-black' : 'text-white'}`}>
                            {item.name}
                        </span>
                    </div>

                    {/* Burger Image - Mix Blend for transparency fix */}
                    <div className="absolute top-10 md:top-1/4 left-1/2 transform -translate-x-1/2 w-48 md:w-64 lg:w-80 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 z-10 drop-shadow-2xl">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-auto object-contain filter drop-shadow-2xl mix-blend-multiply"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-20 mt-auto px-4 w-full">
                        <h2 className={`text-4xl md:text-5xl font-black uppercase leading-none mb-1 ${item.textColor || 'text-white'}`}>
                            {item.name}
                        </h2>
                        <h3 className={`text-2xl md:text-3xl font-bold uppercase mb-4 ${item.textColor || 'text-white'}`}>
                            {item.subName}
                        </h3>
                        <div className={`text-3xl font-bold border-2 inline-block px-4 py-1 rounded-full mb-4 ${item.textColor ? 'border-black text-black' : 'border-white text-white'}`}>
                            {item.price}
                        </div>

                        {/* Ingredients on Hover */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <div className={`flex flex-wrap justify-center gap-1 mb-4 max-w-[80%] mx-auto`}>
                                {item.ingredients?.map((ing, i) => (
                                    <span key={i} className={`text-xs font-bold uppercase px-2 py-1 rounded bg-black/20 ${item.textColor || 'text-white'}`}>
                                        {ing}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={`https://wa.me/5492920123456?text=Hola%20IRON%20BUN,%20quiero%20pedir%20una%20${encodeURIComponent(item.name + ' ' + item.subName)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block bg-white text-black px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-lg"
                            >
                                Pedir Ahora
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuPage;
