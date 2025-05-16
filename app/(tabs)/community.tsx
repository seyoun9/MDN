import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CommunityScreen() {

    const router = useRouter();
    const [loaded] = useFonts({
        Roboto_Bold: require('../../assets/fonts/Roboto-Bold.ttf'),
        Roboto_Regular: require('../../assets/fonts/Roboto-Regular.ttf')
    });

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false} >
                    {/* 인삿말 */}
                    <View style={styles.headerRow}>
                        <View>
                            <Text style={styles.greeting}>좋은 하루예요, {'{User}'}</Text>
                            <Text style={styles.subtext}>당신의 소중한 하루를 모두에게 공유해 보세요.</Text>
                        </View>
                        <View style={styles.profileCircle}>
                            <Image source={require('../../assets/images/photo.png')} style={styles.profileImage} />
                        </View>
                    </View>

                    {/* 게시물 카드 리스트 */}
                    {[1, 2, 3].map((item) => (
                        <TouchableOpacity key={item} onPress={() => router.push(`../post-detail/${item}`)} style={styles.card}>
                            <Image
                                source={require('../../assets/images/salad.jpg')}
                                style={styles.cardImage}
                                resizeMode="cover"
                            />
                            <View style={styles.cardContent}>
                                <Text style={styles.authorName}>회원명</Text>
                                <Text style={styles.postText}>오늘 운동 완료! 오늘의 세트</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* 글쓰기 floating 버튼 */}
                <TouchableOpacity style={styles.fab} onPress={() => { console.log('Fab pressed'); router.push('../post-create') }}>
                    <MaterialCommunityIcons name="pencil" size={24} color={Colors.primary} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 24,
        paddingTop: 20,
        position: 'relative',
    },
    scrollContainer: {
        paddingBottom: 100,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 20,
        fontFamily: 'Roboto_Bold',
        color: Colors.text,
        marginBottom: 4,
    },
    subtext: {
        fontSize: 14,
        fontFamily: 'Roboto_Regular',
        color: Colors.secondaryText,
    },
    profileCircle: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 10,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    cardImage: {
        alignSelf: 'center',
        width: '50%',
        height: 180,
    },
    cardContent: {
        padding: 12,
        backgroundColor: '#e6fff9',
    },
    authorName: {
        fontSize: 13,
        fontFamily: 'Roboto_Regular',
        color: Colors.secondaryText,
        marginBottom: 8,
    },
    postText: {
        fontSize: 14,
        fontFamily: 'Roboto_Bold',
        color: Colors.text,
    },
    fab: {
        position: 'absolute',
        bottom: 65,
        right: 0,
        backgroundColor: '#fafafa',
        padding: 14,
        borderRadius: 15,
        elevation: 5,
    },
    fabIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
});
