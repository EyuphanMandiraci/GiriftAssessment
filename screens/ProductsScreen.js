import {StyleSheet, View} from "react-native";
import ProductListComponent from "../components/ProductListComponent";
import {useEffect} from "react";
import {fetchProducts} from "../actions/products/FetchProducts";
import {connect} from "react-redux";
import {deleteAllProducts} from "../actions/products/DeleteAllProducts";
import {ActivityIndicator} from "react-native-paper";

const ProductsScreen = ({route, fetchProducts, products, deleteAllProducts}) => {
    useEffect(() => {
        deleteAllProducts();
        fetchProducts(route.params.category.toLowerCase());
    }, [])
    if (products.length === 0){
        return (
            <View style={styles.container}>
                <ActivityIndicator size={100}/>
            </View>
        )
    }else{
        return (
            <View>
                <ProductListComponent product_list={products}/>
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
    return { products: state.products };
}

export default connect(
    mapStateToProps,
    {fetchProducts, deleteAllProducts}
)(ProductsScreen)