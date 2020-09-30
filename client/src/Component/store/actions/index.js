export const updateData = (imageLink, imageHeading, imagePrice) => {

    return {
        type: 'DATA_MAPPING',
        imageLink: imageLink,
        imageHeading: imageHeading,
        imagePrice: imagePrice
    }

}

export const addBasket = (imageLink, imageHeading, imagePrice,frameSize,quantity) => {

    return {
        type: 'ADD_TO_BASKET',
        newOrder: {"imageLink" : imageLink,
        "imageHeading": imageHeading,
        "imagePrice": imagePrice,
        "frameSize": frameSize,
        "quantity": quantity
    }
    }

}

export const updateBasket = (newOrders) => {

    return {
        type: 'UPDATE_BASKET',
        newOrders: newOrders,
    }

}

export const updateSearch = (searchText) => {

    return {
        type: 'SWITCH_TO_SEARCH',
        searchText: [...searchText],
    }

}