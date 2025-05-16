// import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { Ionicons } from '@expo/vector-icons';

// interface Ingredient {
//     id: string;
//     name: string;
//     image: string; // URL
//     amount: string;
// }

// export default function RecipeDetailScreen() {
//     const { id } = useLocalSearchParams(); // URL 파라미터 (ex: /recipe/1)
//     const router = useRouter();

//     const [tab, setTab] = useState<'ingredient' | 'procedure'>('ingredient');
//     const [data, setData] = useState<{
//         title: string;
//         image: string;
//         serve: string;
//         itemCount: string;
//         ingredients: Ingredient[];
//     } | null>(null);

//     useEffect(() => {
//         // 서버에서 데이터 fetch (예: REST API)
//         const fetchData = async () => {
//             const response = await fetch(`https://your-api.com/recipes/${id}`);
//             const json = await response.json();
//             setData(json);
//         };
//         fetchData();
//     }, [id]);

//     if (!data) return <Text style={{ padding: 20 }}>로딩 중...</Text>;

//     return (
//         <View style={styles.container}>
//             {/* Back button */}
//             <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
//                 <Ionicons name="arrow-back" size={24} color="#000" />
//             </TouchableOpacity>

//             {/* 이미지 */}
//             <Image source={{ uri: data.image }} style={styles.mainImage} />

//             {/* 제목 */}
//             <Text style={styles.title}>{data.title}</Text>

//             {/* 탭 */}
//             <View style={styles.tabRow}>
//                 <TouchableOpacity
//                     style={[styles.tabBtn, tab === 'ingredient' && styles.tabActive]}
//                     onPress={() => setTab('ingredient')}
//                 >
//                     <Text style={[styles.tabText, tab === 'ingredient' && styles.tabActiveText]}>Ingredient</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={[styles.tabBtn, tab === 'procedure' && styles.tabOutline]}
//                     onPress={() => setTab('procedure')}
//                 >
//                     <Text style={[styles.tabText, tab === 'procedure' && styles.tabOutlineText]}>Procedure</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* 서브 정보 */}
//             <View style={styles.infoRow}>
//                 <Text style={styles.infoText}>{data.serve}</Text>
//                 <Text style={styles.infoText}>{data.itemCount}</Text>
//             </View>

//             {/* 재료 리스트 */}
//             {tab === 'ingredient' && (
//                 <FlatList
//                     data={data.ingredients}
//                     keyExtractor={(item) => item.id}
//                     renderItem={({ item }) => (
//                         <View style={styles.ingredientRow}>
//                             <Image source={{ uri: item.image }} style={styles.ingredientImage} />
//                             <Text style={styles.ingredientName}>{item.name}</Text>
//                             <Text style={styles.ingredientAmount}>{item.amount}</Text>
//                         </View>
//                     )}
//                 />
//             )}

//             {/* 조리법 탭일 경우 */}
//             {tab === 'procedure' && (
//                 <View style={{ padding: 20 }}>
//                     <Text style={{ fontSize: 14, lineHeight: 20 }}>
//                         조리법 API 또는 정적 설명이 이 영역에 들어옵니다.
//                     </Text>
//                 </View>
//             )}
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#fff',
//     },
//     backBtn: {
//         marginBottom: 10,
//     },
//     mainImage: {
//         width: '100%',
//         height: 180,
//         borderRadius: 12,
//         marginBottom: 16,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: '700',
//         marginBottom: 20,
//     },
//     tabRow: {
//         flexDirection: 'row',
//         marginBottom: 12,
//     },
//     tabBtn: {
//         flex: 1,
//         alignItems: 'center',
//         paddingVertical: 10,
//         borderRadius: 10,
//         marginRight: 10,
//     },
//     tabText: {
//         fontSize: 14,
//         fontWeight: '600',
//     },
//     tabActive: {
//         backgroundColor: '#0AAD69',
//     },
//     tabActiveText: {
//         color: '#fff',
//     },
//     tabOutline: {
//         borderWidth: 1.5,
//         borderColor: '#0AAD69',
//     },
//     tabOutlineText: {
//         color: '#0AAD69',
//     },
//     infoRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//         paddingHorizontal: 4,
//     },
//     infoText: {
//         fontSize: 12,
//         color: '#888',
//     },
//     ingredientRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#F5F5F5',
//         padding: 12,
//         borderRadius: 12,
//         marginBottom: 10,
//     },
//     ingredientImage: {
//         width: 40,
//         height: 40,
//         marginRight: 12,
//     },
//     ingredientName: {
//         fontSize: 14,
//         fontWeight: '600',
//         flex: 1,
//     },
//     ingredientAmount: {
//         fontSize: 13,
//         color: '#555',
//     },
// });
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const sampleData = {
    title: 'Spicy chicken burger with French fries',
    image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
    serve: '1 serve',
    itemCount: '10 items',
    ingredients: [
        { id: '1', name: 'Tomatos', image: 'https://cdn-icons-png.flaticon.com/512/135/135620.png', amount: '500kcal' },
        { id: '2', name: 'Cabbage', image: 'https://cdn-icons-png.flaticon.com/512/766/766225.png', amount: '300kcal' },
        { id: '3', name: 'Taco', image: 'https://cdn-icons-png.flaticon.com/512/5787/5787076.png', amount: '300kcal' },
        { id: '4', name: 'Slice Bread', image: 'https://cdn-icons-png.flaticon.com/512/5787/5787079.png', amount: '300kcal' },
    ],
};

export default function RecipeDetail() {
    const router = useRouter();
    const [tab, setTab] = useState<'ingredient' | 'procedure'>('ingredient');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView               
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{}}
            >
                <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>

                <Image source={{ uri: sampleData.image }} style={styles.mainImage} />

                <Text style={styles.title}>{sampleData.title}</Text>

                <View style={styles.tabRow}>
                    <TouchableOpacity
                        style={[styles.tabBtn, tab === 'ingredient' && styles.tabActive]}
                        onPress={() => setTab('ingredient')}
                    >
                        <Text style={[styles.tabText, tab === 'ingredient' && styles.tabActiveText]}>재료</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabBtn, tab === 'procedure' && styles.tabActive]}
                        onPress={() => setTab('procedure')}
                    >
                        <Text style={[styles.tabText, tab === 'procedure' && styles.tabActiveText]}>레시피</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.infoText}>{sampleData.serve}</Text>
                    <Text style={styles.infoText}>{sampleData.itemCount}</Text>
                </View>

                {tab === 'ingredient' && (
                    <View>
                        {sampleData.ingredients.map((item) => (
                            <View key={item.id} style={styles.ingredientRow}>
                                <Image source={{ uri: item.image }} style={styles.ingredientImage} />
                                <Text style={styles.ingredientName}>{item.name}</Text>
                                <Text style={styles.ingredientAmount}>{item.amount}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {tab === 'procedure' && (
                    <View style={styles.procedureContainer}>
                        {[
                            'Lorem ipsum tempor incididunt ut labore et dolore, in voluptate velit esse cillum dolore eu fugiat nulla pariatur?',
                            'Lorem ipsum tempor incididunt ut labore et dolore, in voluptate velit esse cillum dolore eu fugiat nulla pariatur? Tempor incididunt ut labore et dolore.',
                            'Lorem ipsum tempor incididunt ut labore et dolore, in voluptate velit esse cillum dolore eu fugiat nulla pariatur?',
                            'Lorem ipsum tempor incididunt ut labore et dolore, in voluptate velit esse cillum dolore eu fugiat nulla pariatur?',
                        ].map((desc, index) => (
                            <View key={index} style={styles.stepCard}>
                                <Text style={styles.stepTitle}>Step {index + 1}</Text>
                                <Text style={styles.stepDescription}>{desc}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
    },
    backBtn: {
        marginBottom: 20,
    },
    mainImage: {
        width: '100%',
        height: '50%',
        borderRadius: 12,
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20,
    },
    tabRow: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    tabBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
        marginRight: 10,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
    },
    tabActive: {
        backgroundColor: Colors.primary,
    },
    tabActiveText: {
        color: '#fff',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 4,
    },
    infoText: {
        fontSize: 12,
        color: '#888',
    },
    ingredientRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
    },
    ingredientImage: {
        width: 40,
        height: 40,
        marginRight: 20,
    },
    ingredientName: {
        fontSize: 14,
        fontWeight: '600',
        flex: 1,
    },
    ingredientAmount: {
        fontSize: 14,
        color: '#555',
        paddingRight: 20,
        width: 150,
        textAlign: 'right',
    },
    procedureContainer: {
        paddingHorizontal: 4,
        paddingBottom: 30,
    },

    stepCard: {
        backgroundColor: '#F2F2F2',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom: 16,
    },

    stepTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#333',
        marginBottom: 8,
    },

    stepDescription: {
        fontSize: 13,
        color: '#555',
        lineHeight: 20,
    },

});
