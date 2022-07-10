import {View} from "react-native";
import {Card, Paragraph } from 'react-native-paper';


const ProductCardComponent = ({text, price, image_url, onPress}) => {
    return (
        <View style={{width: '48%', margin: '1%'}}>
            <Card onPress={onPress}>
                <Card.Cover source={{ uri: image_url }} />
                <Card.Title title={text}/>
                <Card.Content>
                    <Paragraph>${price}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
}

export default ProductCardComponent;
