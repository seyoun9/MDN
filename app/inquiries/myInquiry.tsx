import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function MyInquiryScreen() {
    const router = useRouter();

    const inquiries = [
        { id: 1, title: '문의', content: '문의 내용 1~~~~' },
        { id: 2, title: '문의', content: '문의 내용 2~~~~' },
        { id: 3, title: '문의', content: '문의 내용 3~~~~' },
        { id: 4, title: '문의', content: '문의 내용 4~~~~' },
        { id: 5, title: '문의', content: '문의 내용 5~~~~' },
        { id: 6, title: '문의', content: '문의 내용 6~~~~' },
        { id: 7, title: '문의', content: '문의 내용 7~~~~' },
        { id: 8, title: '문의', content: '문의 내용 8~~~~' },
        { id: 9, title: '문의', content: '문의 내용 9~~~~' },
        { id: 10, title: '문의', content: '문의 내용 10~~~~' },
        { id: 11, title: '문의', content: '문의 내용 11~~~~' },
        { id: 12, title: '문의', content: '문의 내용 12~~~~' },
        { id: 13, title: '문의', content: '문의 내용 13~~~~' },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>내 문의</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Inquiry List */}
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {inquiries.map(inquiry => (
                    <View key={inquiry.id} style={styles.card}>
                        <Text style={styles.cardTitle}>{inquiry.title}</Text>
                        <Text style={styles.cardContent}>{inquiry.content}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
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
    content: {
        padding: 20,
    },
    card: {
        borderWidth: 1.5,
        borderColor: '#119D80',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
        marginBottom: 4,
    },
    cardContent: {
        fontSize: 14,
        color: '#666',
    },
});
