export const deliveryOptions = [{
    id: '1',
    deliveryDate: 7,
    PriceCents: 0
}, {
    id: '2',
    deliveryDate: 3,
    PriceCents: 499
}, {
    id: '3',
    deliveryDate: 1,
    PriceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });

    return deliveryOption || deliveryOptions[0];
}