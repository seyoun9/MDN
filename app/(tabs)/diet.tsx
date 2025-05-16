import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DietScreen() {

    const featuredRecipes = [
        { id: '1', name: 'Crunchy Nut Coleslaw', time: '10 Mins', image: require('../../assets/images/pizza.jpg') },
        { id: '2', name: 'Classic Greek Salad', time: '15 Mins', image: require('../../assets/images/salad.jpg') },
        { id: '3', name: 'Crunchy Chicken Curry', time: '10 Mins', image: require('../../assets/images/pancake.jpg') },
    ];

    const recommendedRecipes = [
        { id: '1', title: 'Steak with tomato', author: 'James Milner', time: '20 mins', rating: 4.5, image: require('../../assets/images/photo.png') },
        { id: '2', title: 'Pilaf sweet with...', author: 'Laura Wilson', time: '20 mins', rating: 4.0, image: require('../../assets/images/photo.png') },
    ];

    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
                {/* Header */}
                <View style={styles.headerRow}>
                    <View>
                        <Text style={styles.greeting}>좋은 하루예요, {'{User}'}</Text>
                        <Text style={styles.subtext}>오늘은 어떤 식단을 추천해 드릴까요?</Text>
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchRow}>
                    <View style={styles.searchInputContainer}>
                        <Ionicons name="search" size={20} color="#aaa" style={{ marginHorizontal: 8 }} />
                        <TextInput placeholder="식단 검색하기" style={styles.searchInput} />
                    </View>
                </View>

                {/* Featured Recipes */}
                <FlatList
                    horizontal
                    data={featuredRecipes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.featuredCard} onPress={() => router.push(`/recipe/${item.id}`)}>
                            <Image source={item.image} style={styles.featuredImage} />
                            <Text style={styles.featuredTitle}>{item.name}</Text>
                            <Text style={styles.featuredTime}>Time {item.time}</Text>
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginBottom: 20 }}
                />

                {/* 추천 섹션 */}
                <Text style={styles.sectionTitle}>인기 레시피</Text>
                {recommendedRecipes.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.recipeRow} onPress={() => router.push(`/recipe/${item.id}`)}>
                        <Image source={item.image} style={styles.recipeImage} />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={styles.recipeTitle}>{item.title}</Text>
                            <Text style={styles.recipeSub}>By {item.author}</Text>
                            <Text style={styles.recipeTime}>{item.time}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                <Text style={styles.sectionTitle}>맞춤 추천 레시피</Text>
                {recommendedRecipes.map((item) => (
                    <TouchableOpacity key={item.id + '_2'} style={styles.recipeRow} onPress={() => router.push(`/recipe/${item.id}`)}>
                        <Image source={item.image} style={styles.recipeImage} />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={styles.recipeTitle}>{item.title}</Text>
                            <Text style={styles.recipeSub}>By {item.author}</Text>
                            <Text style={styles.recipeTime}>{item.time}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 18,
        fontFamily: 'Roboto_Bold',
        marginBottom: 4,
        color: Colors.text,
    },
    subtext: {
        fontSize: 14,
        fontFamily: 'Roboto_Regular',
        color: Colors.secondaryText,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 10,
        paddingHorizontal: 4,
        height: 40,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
    },
    featuredCard: {
        width: 140,
        marginRight: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.primary,
        overflow: 'hidden',
        padding: 10,
    },
    featuredImage: {
        width: '100%',
        height: 80,
        borderRadius: 8,
        marginBottom: 8,
    },
    featuredTitle: {
        fontSize: 14,
        fontFamily: 'Roboto_Bold',
        marginBottom: 4,
        color: Colors.text,
    },
    featuredTime: {
        fontSize: 12,
        color: Colors.secondaryText,
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: 'Roboto_Bold',
        marginVertical: 16,
        color: Colors.text,
    },
    recipeRow: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        alignItems: 'center',
    },
    recipeImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    recipeTitle: {
        fontSize: 14,
        fontFamily: 'Roboto_Bold',
        marginBottom: 4,
        color: Colors.text,
    },
    recipeSub: {
        fontSize: 12,
        color: Colors.secondaryText,
    },
    recipeTime: {
        fontSize: 12,
        color: Colors.secondaryText,
        marginTop: 4,
    },
});