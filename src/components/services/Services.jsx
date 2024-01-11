import Heading from "../Heading"
import { servicesData } from '../../data';
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <section className="section">
            <div className="container">
                <div>
                    <Heading 
                        subTitle={'Best Services'}
                        title={'Our Services'}
                    />

                    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        {servicesData.map((item) => {
                            return <ServiceCard key={item.id} {...item} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services