// export const formatPrice = (price) => {
//     let formattedPrice = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//     }).format((price / 100).toFixed(2))

//     return formattedPrice
// };

export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD"
    }).format(price);
}

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}

export const getUniqueValues = (data, type) => {
    // let unique = data.map((item) => item[type])
    let unique = data.map((item) => item?.attributes[type])
    if (type === 'colors') {
      unique = unique.flat()
    }
  
    return ['all', ...new Set(unique)]
}