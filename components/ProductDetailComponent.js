import {Card, Paragraph} from "react-native-paper";
import {Dimensions, Image, ScrollView, View} from "react-native";
import {capitalizeWords} from "../Utils";


const ProductDetailComponent = ({product}) => {
        return (
            <View>
                <Image source={{ uri: product.image }} style={{width: '100%', height: Dimensions.get("window").height/3, resizeMode: "stretch"}}/>
                <ScrollView>
                    <Card>
                        <Card.Title title={product.title} subtitle={capitalizeWords(product.category)} titleNumberOfLines={2}/>
                        <Card.Content>
                            <Paragraph style={{marginTop: '5%'}}>
                                {product.description}
                            </Paragraph>
                            <Paragraph>Price: ${product.price}</Paragraph>
                        </Card.Content>
                    </Card>
                </ScrollView>
            </View>
        );

}

export default ProductDetailComponent;
