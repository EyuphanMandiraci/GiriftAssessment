import {View} from "react-native";
import {Button} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

const CategoryButtonComponent = ({text}) => {
    const navigation = useNavigation();
    return (
      <View>
          <Button icon="shape" mode="outlined" onPress={() => {navigation.navigate("ProductsScreen", {category: text})}}>{text}</Button>
      </View>
    );
}

export default CategoryButtonComponent;