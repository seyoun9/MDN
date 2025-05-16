import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

interface User {
    id: number;
    name: string;
    points: number;
    avatar: any; // require image path or URL
}

export default function RankingScreen() {

    const router = useRouter();
    const [loaded] = useFonts({
        Roboto_Bold: require('../../assets/fonts/Roboto-Bold.ttf'),
        Roboto_Regular: require('../../assets/fonts/Roboto-Regular.ttf')
    });

    const [users, setUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        // 서버에서 데이터 받아오는 로직 (임시 더미 데이터 사용)
        const fetchedUsers: User[] = [
            { id: 1, name: 'Top User', points: 2569, avatar: require('../../assets/images/pizza.jpg') },
            { id: 2, name: 'Runner Up', points: 1469, avatar: require('../../assets/images/pancake.jpg') },
            { id: 3, name: 'Third Place', points: 1053, avatar: require('../../assets/images/Coffee.png') },
            { id: 4, name: 'Madelyn Dias', points: 590, avatar: require('../../assets/images/photo.png') },
            { id: 5, name: 'Zain Vaccaro', points: 448, avatar: require('../../assets/images/photo.png') },
            { id: 6, name: 'Skylar Geidt', points: 448, avatar: require('../../assets/images/photo.png') },
            { id: 7, name: 'Justin Bator', points: 390, avatar: require('../../assets/images/photo.png') },
        ];

        const currentUser = { id: 99, name: '{User}', points: 590, avatar: require('../../assets/images/salad.jpg') };

        const allUsers = [...fetchedUsers, currentUser];
        const sorted = allUsers.sort((a, b) => b.points - a.points);
        setUsers(sorted);

        const myRank = sorted.findIndex((u) => u.id === currentUser.id);
        setCurrentUser({ ...currentUser, id: myRank + 1 });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                {/* 내 순위 */}
                {currentUser && (
                    <View style={styles.myRankBox}>
                        <Text style={styles.myRankLabel}>내 순위</Text>
                        <View style={styles.myRankContent}>
                            <Text style={styles.myRankNumber}>{currentUser.id}</Text>
                            <Image source={currentUser.avatar} style={styles.myAvatar} />
                            <View>
                                <Text style={styles.myName}>{currentUser.name}</Text>
                                <Text style={styles.myPoints}>{currentUser.points} points</Text>
                            </View>
                        </View>
                    </View>
                )}

                {/* 상위 3명 */}
                <View style={styles.podiumWrapper}>
                    {users.slice(0, 3).map((user, index) => {
                        const podiumStyle =
                            index === 0 ? styles.podium1 :
                                index === 1 ? styles.podium2 :
                                    index === 2 ? styles.podium3 : undefined;

                        return (
                            <View key={user.id} style={[styles.podiumBox, podiumStyle]}>
                                <Text style={styles.podiumRank}>{index + 1}</Text>
                                <Image source={user.avatar} style={[styles.profileCircle, styles.podiumAvatar]} />
                                <Text style={styles.podiumPoints}>{user.points} P</Text>
                            </View>
                        );
                    })}
                </View>

                {/* 그 외 순위 */}
                {users.slice(3).map((user, index) => (
                    <View key={user.id} style={styles.rankRow}>
                        <Text style={styles.rankIndex}>{index + 4}</Text>
                        <Image source={user.avatar} style={[styles.profileCircle, styles.rankAvatar]} />
                        <Text style={styles.rankName}>{user.name}</Text>
                        <Text style={styles.rankPoints}>{user.points} points</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: 15,
        paddingHorizontal: 20,
    },
    myRankBox: {
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 16,
        padding: 10,
        marginBottom: 30,
        backgroundColor: 'white',
    },
    myRankLabel: {
        fontSize: 16,
        color: Colors.primary,
        fontFamily: 'Roboto_Bold',
        paddingHorizontal: 20,
        marginBottom: 8,
    },
    myRankContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    myRankNumber: {
        fontSize: 18,
        marginRight: 10,
        fontFamily: 'Roboto_Bold',
        color: Colors.text,
    },
    myAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 12
    },
    myName: {
        fontSize: 16,
        fontFamily: 'Roboto_Bold',
        color: Colors.text,
    },
    myPoints: {
        fontSize: 14,
        fontFamily: 'Roboto_Regular',
        color: Colors.secondaryText,
    },
    podiumWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        alignItems: 'flex-end',
    },
    podiumBox: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
        backgroundColor: Colors.primary,
        width: 80,
        height: 120,
        marginHorizontal: 10,
        justifyContent: 'flex-end',
    },
    podium1: {
        backgroundColor: '#f5d000',
        height: 160,
    },
    podium2: {
        backgroundColor: '#cfcfcf',
        height: 140,
    },
    podium3: {
        backgroundColor: '#c9ac81',
        height: 120,
    },
    podiumAvatar: {
        width: 40,
        height: 40,
        borderRadius: 18,
        backgroundColor: '#fff',
        marginBottom: 6,
    },
    podiumPoints: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Roboto_Bold',
    },
    podiumRank: {
        position: 'absolute',
        top: 10,
        fontSize: 22,
        fontFamily: 'Roboto_Bold',
        color: 'white',
    },
    rankRow: {
        backgroundColor: '#E6F6EC',
        borderRadius: 16,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    rankIndex: {
        width: 30,
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Roboto_Bold',
        color: Colors.text,
    },
    profileCircle: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    rankAvatar: {
        width: 40,
        height: 40,
        borderRadius: 18,
        marginRight: 10,
        backgroundColor: Colors.background,
    },
    rankName: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Roboto_Bold',
        color: Colors.text,
    },
    rankPoints: {
        fontSize: 14,
        fontFamily: 'Roboto_Regular',
        marginRight: 10,
        color: Colors.text,
    },
});
