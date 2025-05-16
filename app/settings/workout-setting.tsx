import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function WorkoutSettingScreen() {
    const router = useRouter();

    const [place, setPlace] = useState<'실내' | '실외' | null>('실내');
    const [timeOfDay, setTimeOfDay] = useState<string[]>([]);
    const [duration, setDuration] = useState<string | null>(null);
    const [goals, setGoals] = useState<string[]>([]);

    const toggleMultiSelect = (value: string, list: string[], setList: Function) => {
        if (list.includes(value)) {
            setList(list.filter(item => item !== value));
        } else {
            setList([...list, value]);
        }
    };

    const handleSubmit = () => {
        if (!place || !duration || timeOfDay.length === 0 || goals.length === 0) {
            Alert.alert('입력 오류', '모든 항목을 선택해주세요.');
            return;
        }

        Alert.alert('운동 정보 변경됨', `운동 장소: ${place}\n운동 시간대: ${timeOfDay.join(', ')}\n운동 시간: ${duration}\n목표: ${goals.join(', ')}`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scroll}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>운동 정보 변경</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* 운동 장소 */}
                <View style={styles.section}>
                    <Text style={styles.label}>운동 장소</Text>
                    <View style={styles.row}>
                        {['실내', '실외'].map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[styles.chip, place === item && styles.chipSelected]}
                                onPress={() => setPlace(item as '실내' | '실외')}
                            >
                                <Text style={[styles.chipText, place === item && styles.chipTextSelected]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* 운동 시간대 */}
                <View style={styles.section}>
                    <Text style={styles.label}>운동 시간대</Text>
                    <View style={styles.row}>
                        {['아침', '점심', '저녁', '심야'].map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.chip,
                                    timeOfDay.includes(item) && styles.chipSelected,
                                ]}
                                onPress={() => toggleMultiSelect(item, timeOfDay, setTimeOfDay)}
                            >
                                <Text
                                    style={[
                                        styles.chipText,
                                        timeOfDay.includes(item) && styles.chipTextSelected,
                                    ]}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* 운동 시간 */}
                <View style={styles.section}>
                    <Text style={styles.label}>운동 시간</Text>
                    <View style={styles.row}>
                        {['10분', '30분', '1시간', '1시간 이상', '그 외'].map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[styles.chip, duration === item && styles.chipSelected]}
                                onPress={() => setDuration(item)}
                            >
                                <Text style={[styles.chipText, duration === item && styles.chipTextSelected]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* 운동 목표 */}
                <View style={styles.section}>
                    <Text style={styles.label}>운동 목표</Text>
                    <View style={styles.rowWrap}>
                        {['체중 감량', '근육 증가', '지구력 향상', '유연성 향상', '체형 교정', '스트레스 해소'].map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.chip,
                                    goals.includes(item) && styles.chipSelected,
                                ]}
                                onPress={() => toggleMultiSelect(item, goals, setGoals)}
                            >
                                <Text
                                    style={[
                                        styles.chipText,
                                        goals.includes(item) && styles.chipTextSelected,
                                    ]}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* 변경 버튼 */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>변경하기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scroll: {
        paddingBottom: 120,
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
    section: {
        paddingHorizontal: 24,
        marginTop: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 12,
        paddingLeft: 5,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    rowWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    chip: {
        borderWidth: 1.5,
        borderColor: '#119D80',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    chipSelected: {
        backgroundColor: '#119D80',
    },
    chipText: {
        color: '#119D80',
        fontSize: 14,
        fontWeight: '600',
    },
    chipTextSelected: {
        color: '#fff',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        right: 24,
    },
    button: {
        backgroundColor: '#119D80',
        borderRadius: 50,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
});
