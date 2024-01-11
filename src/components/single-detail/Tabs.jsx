import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import Review from "./Review";

const tabs = [
    { 
        id: 1, 
        name: 'description', 
        label: 'description',
        render: () => {
            return (
                <>
                    <div className="pt-5">
                        <h5 className="pb-3"><strong>Product Description:</strong></h5>
                        <p className="text-stone-600">
                            Vitamins A, B, E, and F help to repair skin and protect it from UV damage. This sunscreen includes four effective UV filters to provide UVA and UVB protection, which keeps your skin more healthy. It not only cures sun-damaged skin but also calms, nourishes, and moisturizes it, thanks to Vitamins A, B3, B5, E, and F. It was extensively tested by an independent lab and had a certified SPF of 50. It is a photostable sunscreen that offers stronger and longer-lasting UV protection.
                        </p>
                    </div>
                    <div className="pt-5">
                        <h5 className="pb-3"><strong>How To Use:</strong></h5>
                        <ol className="list-disc space-y-3 px-5 text-stone-600">
                            <li>
                                Apply a coin-sized quantity of “Beaux Foam” on your fingertip. For a few minutes, gently wash your face and neck using circular strokes. Wash it away with cold water.
                            </li>
                            <li>
                                Apply 2 or 3 drops of Serum on your fingertips. Apply the Serum on the skin in circular strokes. Use a large amount of “ Beaux creme” during the day and “Night Creme” at night.
                            </li>
                            <li>
                                Gently massage the creme into your skin with your fingers. Begin with circular strokes on your cheeks, then move on to your neck, forehead, and T-zone.
                            </li>
                        </ol>
                    </div>
                </>
            )
        }
    },
    { 
        id: 2, 
        name: 'additional information', 
        label: 'additional information',
        render: () => {
            return (
                <>
                    <p className="text-stone-600">
                        Cosmetics are more effective in protecting the skin. Thus, they provide several types of moisturizing creams for both men and women. It will provide a more natural appearance for the skin. Smoothing cream is suitable for all skin types, and body lotion may be used to protect the skin on the hands and legs.
                    </p>

                    <div className="pt-5">
                        <h5 className="pb-3"><strong>Benefits of Creams/Lotion:</strong></h5>
                        <ul className="space-y-2 pl-4 text-stone-600">
                            <li><div>1. Nutrition for skin</div></li>
                            <li><div>2. Enhances self-confidence</div></li>
                            <li><div>3. Creates a professional look</div></li>
                            <li><div>4. Maintain skin health</div></li>
                            <li><div>5. Provides skin protection</div></li>
                        </ul>
                    </div>
                </>
            )
        }
    },
    { 
        id: 3, 
        name: 'reviews', 
        label: 'reviews',
        render: () => {
            return (
                <Review />
            )
        }
    },
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleClick = (e, tab) => {
        e.preventDefault()
        setActiveTab(tab)
    }

    const isSelected = (tab) => activeTab.name === tab.name;

    const tabContentVariants = {
        initial: {
            y: 10,
            opacity: 0
        },
        enter: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: -10,
            opacity: 0
        }
    }

    return (
        <div>

            <div className="flex flex-wrap items-center gap-2 text-[15px]">
                {tabs.map((tab) => {
                    return (
                        <div 
                            key={tab.id} 
                            className={`${isSelected(tab) ? 'bg-primary text-accent' : 'bg-accent text-white'} h-12 rounded-sm w-full md:max-w-max md:px-4`}
                        >
                            <button
                                aria-label="tab"
                                onClick={(e) => handleClick(e, tab)}
                                className="uppercase tracking-wider w-full h-full"
                            >
                                {tab.label}
                            </button>
                        </div>
                    )
                })}
            </div>

            <div className="pt-5">
				<AnimatePresence mode='wait'>
					<motion.div
						key={activeTab.name || "empty"}
						variants={tabContentVariants}
						initial="initial"
						animate="enter"
						exit="exit"
						transition={{
							duration: .3
						}}
                        className="border rounded-sm p-4"
					>
						{activeTab && activeTab?.render()}
					</motion.div>
				</AnimatePresence>
			</div>


        </div>
    )
}

export default Tabs