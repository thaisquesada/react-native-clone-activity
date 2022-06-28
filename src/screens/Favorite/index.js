import React from "react";
import { FlatList, Text, View } from "react-native";

const List = [
    {
        product: "product 1",
        price: "R$50",
        quantity: "5 available",
    },
    {
        product: "product 2",
        price: "R$70",
        quantity: "2 available",
    },
    {
        product: "product 3",
        price: "R$50",
        quantity: "2 available",
    },
];

const Item = ({product,price,quantity}) => {
    <View>
        <Text>
            {product}
        </Text>
        <Text>
            {price}
        </Text>
        <Text>
            {quantity}
        </Text>
    </View>
};

const Favorite = () => {
    const renderItem = ({item}) => (
        <Item product={item.product}
        price={item.price}
        quantity={item.quantity} />
    );

    return (
        <FlatList
        data={List}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} />
    )
};

export default Favorite;