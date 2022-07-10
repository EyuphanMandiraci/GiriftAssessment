import {FlatList, View} from "react-native";
import CategoryButtonComponent from "./CategoryButtonComponent";
import {capitalizeWords} from "../Utils";




const CategoryListComponent = ({category_list}) => {
    return (
        <View>
            <FlatList data={category_list} renderItem={({item}) => {
                return <CategoryButtonComponent text={capitalizeWords(item)}/>
            }}/>
        </View>
    )
}

export default CategoryListComponent;