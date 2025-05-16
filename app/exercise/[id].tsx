import { useRouter, useLocalSearchParams } from 'expo-router';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WorkoutDetail() {
    const router = useRouter();
    const { id } = useLocalSearchParams(); // 예: /workout-detail/1
    const [tab, setTab] = useState<'intro' | 'howto'>('howto');

    const data = {
        id,
        title: 'Dumbbells',
        time: '12 Minutes',
        kcal: '1385 Kcal',
        count: '3 Exercises',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        steps: [
            'Lorem ipsum tempor incididunt ut labore et dolore, in voluptate velit esse cillum dolore eu fugiat nulla pariatur?',
            'Lorem ipsum tempor incididunt ut labore et dolore, in voluptate velit esse cillum dolore eu fugiat nulla pariatur? Tempor incididunt ut labore et dolore.',
            'Lorem ipsum tempor incididunt ut labore et dolore, in voluptate velit esse cillum dolore eu fugiat nulla pariatur?',
        ],
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>

                <Image source={{ uri: data.image }} style={styles.mainImage} />

                <Text style={styles.title}>{data.title}</Text>

                <View style={styles.metaRow}>
                    <Text style={styles.metaText}>⏱ {data.time}</Text>
                    <Text style={styles.metaText}>🔥 {data.kcal}</Text>
                    <Text style={styles.metaText}>🏋 {data.count}</Text>
                </View>

                <View style={styles.tabRow}>
                    <TouchableOpacity
                        style={[styles.tabBtn, tab === 'intro' && styles.tabActive]}
                        onPress={() => setTab('intro')}
                    >
                        <Text style={[styles.tabText, tab === 'intro' && styles.tabActiveText]}>운동 소개</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabBtn, tab === 'howto' && styles.tabActive]}
                        onPress={() => setTab('howto')}
                    >
                        <Text style={[styles.tabText, tab === 'howto' && styles.tabActiveText]}>운동하는 법</Text>
                    </TouchableOpacity>
                </View>

                {tab === 'intro' && (
                    <View style={styles.descriptionCard}>
                        <Text style={styles.stepDescription}>
                            덤벨 운동은 다양한 근육 부위에 자극을 줄 수 있는 대표적인 중량 운동입니다.
                            {'\n\n'}기본 자세와 호흡을 지키는 것이 중요하며, 반복 횟수와 세트는 개인의 체력에 따라 조절해야 합니다.
                        </Text>
                    </View>
                )}

                {tab === 'howto' && (
                    <View style={styles.stepsContainer}>
                        {data.steps.map((desc, index) => (
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
        padding: 24,
        backgroundColor: '#fff',
    },
    backBtn: {
        marginBottom: 40,
    },
    mainImage: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20,
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    metaText: {
        fontSize: 12,
        color: '#666',
    },
    tabRow: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        color: Colors.primary,
    },
    tabActive: {
        backgroundColor: Colors.primary,
    },
    tabActiveText: {
        color: '#fff',
    },
    stepsContainer: {
        gap: 16,
    },
    stepCard: {
        backgroundColor: '#f2f2f2',
        padding: 16,
        borderRadius: 12,
    },
    stepTitle: {
        fontWeight: '700',
        marginBottom: 8,
        color: '#333',
    },
    stepDescription: {
        fontSize: 13,
        color: '#555',
        lineHeight: 20,
    },
    descriptionCard: {
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
        padding: 16,
    },
});
