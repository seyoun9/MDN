import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InquiryScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>문의하기</Text>
                {/* 오른쪽 공간 확보용 빈 뷰 */}
                <View style={{ width: 24 }} />
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => router.push('./myInquiry')}>
                    <Text style={styles.buttonText}>내 문의</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => router.push('./emailInquiry')}>
                    <Text style={styles.buttonText}>문의 메일</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => router.push('./help')}>
                    <Text style={styles.buttonText}>도움말</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#e3f3ef',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    button: {
        backgroundColor: '#119D80',
        paddingVertical: 14,
        borderRadius: 12,
        marginBottom: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
});
