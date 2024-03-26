import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "tamagui";

const TabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={styles.mainContainer}>
            {state.routes.map((route: any, index: number) => {
                const isFocused = state.index === index;
                const { options } = descriptors[route.key];

                // Récupération de l'icône en passant l'objet attendu
                const Icon = options.tabBarIcon({ color: "rgb(107, 114, 128)" });

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={[
                            styles.mainItemContainer,
                            { backgroundColor: isFocused ? "#55bd1531" : "#ffffff" } // Changement de couleur de fond en fonction de isFocused
                        ]}
                    >
                        {Icon}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        position: 'absolute',
        bottom: 25,
        width: '100%',
        backgroundColor: "#ffff",
        borderRadius: 40,
        paddingVertical: 7,
    },
    mainItemContainer: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 0,
        borderRadius: 15,
    },
});

export default TabBar;
