import {FlatList, View} from "react-native";
import ProductCardComponent from "./ProductCardComponent";
import {useNavigation} from "@react-navigation/native";



const ProductListComponent = ({product_list}) => {
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                numColumns={2}
                data={product_list}
                renderItem={({item}) => {
                    return <ProductCardComponent onPress={() => {navigation.navigate("ProductDetailScreen", {product_id: item.id})}} text={item.title} price={item.price} image_url={item.image} id={item.id}/>
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


export default ProductListComponent;