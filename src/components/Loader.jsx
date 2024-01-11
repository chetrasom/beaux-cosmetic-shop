import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='fixed inset-0 bg-white z-50 flex items-center justify-center'>
            <InfinitySpin
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    )
}

export default Loader;