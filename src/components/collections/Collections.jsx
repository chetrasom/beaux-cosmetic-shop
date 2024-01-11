import { collectionsData } from '../../data';
import { Heading, CollectionCard } from '../../components';

const Collections = () => {
    return (
        <section className="section">
            <div className="container">
                <Heading
                    subTitle={'beauty forever'}
                    title={'Special Collections'}
                />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-8'>
                    {collectionsData.map((collect) => {
                        return <CollectionCard key={collect.id} {...collect} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Collections