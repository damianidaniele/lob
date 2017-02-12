export function mapArrayToObject(arr) {
    return arr.map(element => {
            return {value: element, text: element.toString()}
        });
}

function getSortingOrder(sortingOrder) {
    return sortingOrder === 'asc' ? sortOrdersByPriceAsc : sortOrdersByPriceDesc;
}

function sortOrdersByPriceAsc(orderA, orderB) {
    return orderA.price < orderB.price ? -1 : 1;
}

function sortOrdersByPriceDesc(orderA, orderB) {
    return orderA.price > orderB.price ? -1 : 1;
}

function filterOrdersByType(orders, orderType) {
    return orders.filter(order => {return order.action === orderType});
}

export function groupOrders(orders, orderType, sortingOrder) {
    const results = [];
    const filteredOrders = filterOrdersByType(orders, orderType);
    const filteredOrdersLength = filteredOrders.length;
    let counter = 0;
    filteredOrders
        .sort(getSortingOrder(sortingOrder))
        .reduce( 
            (memo, current) => {
                counter++;
                if (!memo.price) {
                    memo.price = current.price;
                    memo.quantity = current.quantity;
                    memo.orders = [current.id];
                    if (counter === filteredOrdersLength) {
                        results.push(memo);
                    }
                    return memo;
                }

                if (memo.price === current.price) {
                    memo.quantity = memo.quantity + current.quantity;
                    memo.orders.push(current.id);
                    if (counter === filteredOrdersLength) {
                        results.push(memo);
                    }
                    return memo;
                } 
                results.push(memo);
                let newMemo = {
                    price: current.price,
                    quantity: current.quantity,
                    orders: [current.id]
                }

                if (counter === filteredOrdersLength) {
                    results.push(newMemo);
                }
                return newMemo;
            
            }, {});
    
    return results;
}