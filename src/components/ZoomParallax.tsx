import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ZoomParallax() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    // Configuración de escalas para el efecto zoom
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    // Array de imágenes con sus posiciones y escalas
    const pictures = [
        {
            src: "/images/hero.png", // Centro - Principal
            scale: scale4,
            classes: "w-[28vw] h-[28vh]"
        },
        {
            src: "/images/waiter_serving.png", // Top Center/Right
            scale: scale5,
            classes: "top-[-32vh] left-[5vw] w-[30vw] h-[30vh]"
        },
        {
            src: "/images/grill.png", // Top Left
            scale: scale6,
            classes: "top-[-15vh] left-[-28vw] w-[32vw] h-[25vh]"
        },
        {
            src: "/images/cheddar_fries.png", // Right Mid
            scale: scale5,
            classes: "left-[32vw] top-[-5vh] w-[25vw] h-[25vh]"
        },
        {
            src: "/images/lifestyle_friends.png", // Bottom Center/Right
            scale: scale6,
            classes: "top-[30vh] left-[2vw] w-[30vw] h-[30vh]"
        },
        {
            src: "/images/bite_action.png", // Bottom Left
            scale: scale8,
            classes: "top-[25vh] left-[-25vw] w-[22vw] h-[22vh]"
        },
        {
            src: "/images/ambiance.png", // Right Bottom detail
            scale: scale9,
            classes: "top-[20vh] left-[32vw] w-[18vw] h-[18vh]"
        }
    ]

    return (
        <div ref={container} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen overflow-hidden bg-bgDark">
                {pictures.map(({ src, scale, classes }, index) => {
                    return (
                        <motion.div key={index} style={{ scale }} className="absolute top-0 flex w-full h-full items-center justify-center">
                            <div className={`relative ${classes}`}>
                                <img
                                    src={src}
                                    alt="image"
                                    className="object-cover w-full h-full absolute rounded-lg shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    )
                })}

                {/* Overlay Text -> Replaced by Logo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
                        className="flex flex-col items-center justify-center"
                    >
                        <img
                            src="/img/logo-ironbun.png"
                            alt="IRON BUN"
                            className="w-[60vw] md:w-[35vw] object-contain drop-shadow-2xl"
                        />

                    </motion.div>
                </div>
            </div>
        </div>
    )
}
