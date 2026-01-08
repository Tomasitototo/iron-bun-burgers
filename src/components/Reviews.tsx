import React, { useState } from 'react';

// Enlace optimizado para abrir directamente la pestaña de Opiniones
const REVIEWS_URL = "https://www.google.com.ar/maps/place/Roma+-Imperio+Cervecero-/@-40.8077716,-62.9876026,17z/data=!4m8!3m7!1s0x95f6980e7defcb43:0xc7317d014193459d!8m2!3d-40.8077716!4d-62.9876026!9m1!1b1";

const reviewsData = [
    {
        name: "Daniel ESE",
        date: "Hace 2 años",
        rating: 5,
        text: "Muy buena carta de cervezas, excelente atención y porciones abundantes!! Muy recomendable!!",
        initial: "D",
        bg: "bg-gray-600",
        link: REVIEWS_URL
    },
    {
        name: "Gisela Paola Videla",
        date: "Hace 1 mes",
        rating: 5,
        text: "Hermoso lugar, la atención excelente, la comida riquísima y abundante. Super recomendable!!!",
        initial: "G",
        bg: "bg-purple-600",
        link: REVIEWS_URL
    },
    {
        name: "Maxi Leon",
        date: "Hace 2 meses",
        rating: 5,
        text: "La verdad excelente servicio, muy buena la comida y la cerveza. El ambiente es muy cálido.",
        initial: "M",
        bg: "bg-blue-600",
        link: REVIEWS_URL
    },
    {
        name: "Daiana Belen",
        date: "Hace 3 meses",
        rating: 4,
        text: "Lindo lugar para compartir. Precios accesibles y buena ubicación. La música un poco fuerte para mi gusto pero el resto genial.",
        initial: "D",
        bg: "bg-pink-600",
        link: REVIEWS_URL
    },
    {
        name: "Jorge Alberto",
        date: "Hace 1 mes",
        rating: 5,
        text: "Espectacular todo. Las papas con cheddar son una bomba. Volveremos sin dudas.",
        initial: "J",
        bg: "bg-green-600",
        link: REVIEWS_URL
    },
    {
        name: "Delta Remix (Franco Diaz)",
        date: "Hace un tiempo",
        rating: 4,
        text: "Agradable lugar, buena relación precio calidad, gastamos 64k y quedamos llenos...",
        initial: "D",
        bg: "bg-red-600",
        link: "https://maps.app.goo.gl/2kjumL1P3QwQKsnB6",
        images: [
            "https://lh3.googleusercontent.com/geougc-cs/AMBA38vOYSm1_2xTfn4Grjzkrw8sGaVCasWufZF8scg6CpytD-vHnBZea5zrXNa5BWB_K4fi3XFRiCcplyQ9k100OV74bVxhWHar7LHoc9iIlIDcjG_kG5cuoRyeUaU9Q7WPmHZIWD4Ee4kVxYqt=w300-h450-p",
            "https://lh3.googleusercontent.com/geougc-cs/AMBA38uI60V_zfEtJdmSzvCAzZ4oYZh1O6dbHXr5BOPDbFRGxmRqfhtOZBfMKeddjKSpsjwih8Y0PnjxqfRbPUDOkQcrjGOkMDRCFgIkNBamjzXbnjEUXMiPibZAEdSeHnXhjq0SF6ftCe59ojM=w300-h450-p"
        ]
    },
    {
        name: "Javier Campano",
        date: "Hace un tiempo",
        rating: 5,
        text: "Buena atención, la comida la traen enseguida",
        initial: "J",
        bg: "bg-blue-600",
        link: "https://maps.app.goo.gl/kifrgF5o6m5TABDe7",
        images: [
            "https://lh3.googleusercontent.com/geougc-cs/AMBA38s_ub2tvL_Dsd_I8J0l4YDSmB4SAnJf6h-rcIoD-R9Alm5RbhF32j0cKrUX_Ap2uWHZCxF6bNB3Yy_yNfhR6D_P_2CVyV8QE-m4u1gVinRRguFznM0kkzCNY3-XC7uho5Oi6EV521zVKssc=w300-h225-p",
            "https://lh3.googleusercontent.com/geougc-cs/AMBA38tGPKOKhtqy6hOQlP6Y-m8dwFLH-qXfSLtOmlcE6Vb8nfliIuWUM0jZyHzr8XeiTH8zFYLXmv0KY3w-TsSDqJUTOL9nlaPD9aKQ0zRn0gDr82RGyqjL7-nczopOM22pKH2GuxvokG6yP5VU=w300-h225-p"
        ]
    }
];

// Duplicamos el array varias veces para asegurar un loop fluido (Marquee)
const reviews = [...reviewsData, ...reviewsData, ...reviewsData, ...reviewsData];

const Reviews = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-20 bg-bgDark border-t border-b border-white/5 relative overflow-hidden group/section">


            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Zoomed Review"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl scale-100 animate-in fade-in zoom-in duration-300"
                    />
                    <button className="absolute top-4 right-4 text-white hover:text-primary">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            )}

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skewed-bg pointer-events-none"></div>

            <div className="w-full relative z-10">
                {/* Carousel Container */}
                <div className="flex gap-6 animate-scroll w-max px-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[300px] md:w-[400px] bg-white text-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between"
                        >
                            {/* Google Logo Inline SVG */}
                            <svg className="absolute top-8 right-8 w-6 h-6 opacity-60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>

                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-full ${review.bg} text-white flex items-center justify-center font-bold text-xl`}>
                                        {review.initial}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg leading-tight">{review.name}</h4>
                                        <span className="text-gray-400 text-sm">Hace unos meses</span>
                                    </div>
                                </div>

                                <div className="flex text-yellow-400 mb-3 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                    ))}
                                </div>

                                <p className="text-gray-600 leading-relaxed font-medium line-clamp-4">
                                    "{review.text}"
                                </p>

                                {/* Thumbnail Images */}
                                {review.images && review.images.length > 0 && (
                                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                                        {review.images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt="Review attachment"
                                                className="w-16 h-16 object-cover rounded-lg cursor-zoom-in hover:opacity-80 transition-opacity border border-gray-200"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    setSelectedImage(img);
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="pt-4 border-t border-gray-100 mt-auto">
                                <a
                                    href={review.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 font-bold text-sm hover:underline flex items-center gap-1 w-fit"
                                >
                                    Ver reseña completa
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
