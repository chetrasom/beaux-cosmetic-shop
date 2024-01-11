import { Heading, WhyCard } from '../../components';
import { whyData } from '../../data';

const Why = () => {
    return (
        <section className="section">
            <div className="container">
                <Heading
                    subTitle={'Best Quality'}
                    title={'Why Shop with BeauX?'}
                />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-8 place-items-start'>
                    {whyData.map((item) => {
                        return <WhyCard key={item.id} {...item} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Why