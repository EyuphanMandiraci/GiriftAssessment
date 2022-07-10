import {StyleSheet, View} from "react-native";
import CategoryListComponent from '../components/CategoryListComponent';
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchCategories} from "../actions/categories/FetchCategories";
import {ActivityIndicator} from "react-native-paper";

const HomeScreen = ({categories, fetchCategories}) => {
    useEffect(() => {
        fetchCategories();
    }, [])
    if (categories.length === 0){
        return (
            <View style={styles.container}>
                <ActivityIndicator size={100}/>
            </View>
        )
    }else{

        return (
            <View>
                <CategoryListComponent category_list={categories}/>
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
    return { categories: state.categories };
}

export default connect(
    mapStateToProps,
    {fetchCategories}
)(HomeScreen)