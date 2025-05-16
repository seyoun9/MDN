import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useFonts } from 'expo-font';

export default function DietSettingScreen() {
    const [loaded] = useFonts({
        Roboto_Bold: require('../../assets/fonts/Roboto-Bold.ttf'),
        Roboto_Regular: require('../../assets/fonts/Roboto-Regular.ttf')
    });

    const router = useRouter();

    const [style, setStyle] = useState<string | null>(null);
    const [goals, setGoals] = useState<string[]>([]);
    const [allergies, setAllergies] = useState<string[]>([]);

    const dietStyles = ['한식', '중식', '일식', '양식', '동남아식'];
    const dietGoals = ['체중 감량', '근육 증가', '지구력 향상', '유연성 향상', '체형 교정', '스트레스 해소'];
    const allergyOptions = [
        '유제품 제외(우유, 치즈, 버터, 요거트 등)',
        '견과류 제외 (땅콩, 아몬드, 호두, 캐슈넛 등)',
        '글루텐 제외 (밀가루, 빵, 파스타 등)',
        '갑각류 제외 (새우, 게, 오징어, 조개류 등)',
        '계란 제외 (달걀, 마요네즈 등)',
        '대두 제외 (두부, 콩, 된장 등)',
    ];

    const toggleItem = (value: string, list: string[], setList: Function) => {
        if (list.includes(value)) {
            setList(list.filter(item => item !== value));
        } else {
            setList([...list, value]);
        }
    };

    const handleSubmit = () => {
        if (!style || goals.length === 0) {
            Alert.alert('입력 오류', '식단 스타일과 목표를 선택해주세요.');
            return;
        }

        Alert.alert(
            '저장 완료',
            `식단 스타일: ${style}\n목표: ${goals.join(', ')}\n알레르기: ${allergies.join(', ') || '없음'}`
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>식단 정보 변경</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* 식단 스타일 */}
                <View style={styles.section}>
                    <Text style={styles.label}>식단 스타일</Text>
                    <View style={styles.row}>
                        {dietStyles.map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[styles.chip, style === item && styles.chipSelected]}
                                onPress={() => setStyle(item)}
                            >
                                <Text style={[styles.chipText, style === item && styles.chipTextSelected]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* 식단 목표 */}
                <View style={styles.section}>
                    <Text style={styles.label}>식단 목표</Text>
                    <View style={styles.rowWrap}>
                        {dietGoals.map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[styles.chip, goals.includes(item) && styles.chipSelected]}
                                onPress={() => toggleItem(item, goals, setGoals)}
                            >
                                <Text style={[styles.chipText, goals.includes(item) && styles.chipTextSelected]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* 알레르기 유무 */}
                <View style={styles.section}>
                    <Text style={styles.label}>알레르기 유무</Text>
                    {allergyOptions.map(option => (
                        <TouchableOpacity
                            key={option}
                            style={styles.checkboxContainer}
                            onPress={() => toggleItem(option, allergies, setAllergies)}
                        >
                            <Feather
                                name={allergies.includes(option) ? 'check-square' : 'square'}
                                size={20}
                                color={allergies.includes(option) ? '#119D80' : '#999'}
                            />
                            <Text style={styles.checkboxText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
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
        marginBottom: 15,
        paddingLeft: 5,
        paddingBottom: 5,
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkboxText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.text,
        marginLeft: 8,
        paddingBottom: 5,
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
