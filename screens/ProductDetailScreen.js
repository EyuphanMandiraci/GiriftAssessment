import {StyleSheet, View} from "react-native";
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSingleProduct} from "../actions/single_product_detail/FetchSingleProduct";
import {deleteProduct} from "../actions/single_product_detail/DeleteProduct";
import ProductDetailComponent from "../components/ProductDetailComponent";
import {ActivityIndicator} from "react-native-paper";

const ProductDetailScreen = ({route, fetchSingleProduct, product, deleteProduct}) => {
    useEffect(() => {
        deleteProduct();
        fetchSingleProduct(route.params.product_id);
    }, [])
    if (Object.keys(product).length === 0){
        return (
            <View style={styles.container}>
                <ActivityIndicator size={100}/>
            </View>
        )
    }else{

        return (
            <View>
                <ProductDetailComponent product={product}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const mapStateToProps = (state) => {
    return { product: state.product_detail };
}

export default connect(
    mapStateToProps,
    {fetchSingleProduct, deleteProduct}
)(ProductDetailScreen)