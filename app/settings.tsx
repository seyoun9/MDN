import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Switch, TouchableOpacity, } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SettingsScreen() {

    const [loaded] = useFonts({
        Roboto_Bold: require('../assets/fonts/Roboto-Bold.ttf'),
        Roboto_Regular: require('../assets/fonts/Roboto-Regular.ttf')
    });

    const router = useRouter();
    const [isAlarmEnabled, setIsAlarmEnabled] = React.useState(false);

    const toggleSwitch = () => setIsAlarmEnabled(previous => !previous);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>설정</Text>

                <View style={styles.profileContainer}>
                    <TouchableOpacity style={styles.profileRow} onPress={() => router.push('/settings/profile-setting')}>
                        <Image source={require('../assets/images/photo.png')} style={styles.profileImage} />
                        <View style={styles.profileTextContainer}>
                            <Text style={styles.profileName}>Leila Souad</Text>
                            <Text style={styles.profilePoints}>1000 P</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuGroup}>
                    <MenuItem icon="body" label="신체 정보 변경" onPress={() => router.push('/settings/body-setting')} />
                    <MenuItem icon="football" label="운동 정보 변경" onPress={() => router.push('/settings/workout-setting')} />
                    <MenuItem icon="restaurant-outline" label="식단 정보 변경" onPress={() => router.push('/settings/diet-setting')} />
                    <MenuItem icon="flag" label="목표 설정" />
                </View>

                <View style={styles.switchContainer}>
                    <View style={styles.switchLabel}>
                        <Ionicons name="notifications-outline" size={20} color="#777" />
                        <Text style={styles.menuText}>알림</Text>
                    </View>
                    <Switch value={isAlarmEnabled} onValueChange={toggleSwitch} />
                </View>

                <View style={styles.menuGroup}>
                    <MenuItem icon="mail-outline" label="문의하기" onPress={() => router.push('/inquiries/inquiry')} />
                    <MenuItem icon="log-out-outline" label="로그아웃" onPress={() => router.push('/auth/login')} />
                    <MenuItem icon="close-circle-outline" label="탈퇴하기" onPress={() => router.push('/auth/login')} />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

interface MenuItemProps {
    icon: string;
    label: string;
    onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onPress }) => {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={onPress}>
            <Ionicons name={icon as any} size={20} color="#777" />
            <Text style={styles.menuText}>{label}</Text>
            <Entypo name="chevron-right" size={20} color="#ccc" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingTop: 15,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Roboto_Bold',
        alignSelf: 'center',
        marginBottom: 40,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e6fff9',
        padding: 15,
        borderRadius: 10,
        width: '100%',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginRight: 15,
    },
    profileTextContainer: {
        flex: 1,
    },
    profileName: {
        fontSize: 16,
        fontFamily: 'Roboto_Bold',
    },
    profilePoints: {
        color: 'green',
        fontFamily: 'Roboto_Bold',
        fontWeight: '600',
        marginTop: 4,
    },
    menuGroup: {
        marginVertical: 1,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    menuText: {
        marginLeft: 10,
        fontSize: 15,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    switchLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
