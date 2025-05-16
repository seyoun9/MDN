import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQS: FAQItem[] = [
    {
        question: '신체 정보를 어떻게 변경하나요?',
        answer: '설정 → 신체 정보 변경에서 입력한 데이터를 변경할 수 있습니다.',
    },
    {
        question: '운동 정보를 어떻게 변경하나요?',
        answer: '운동 탭에서 편집 버튼을 눌러 정보를 수정할 수 있습니다.',
    },
    {
        question: '식단 정보를 어떻게 변경하나요?',
        answer: '식단 탭에서 식단을 선택해 수정하세요.',
    },
    {
        question: '프로필을 어떻게 변경하나요?',
        answer: '마이페이지 > 프로필 편집에서 가능합니다.',
    },
    {
        question: '데이터에 오류가 있는 거 같아요.',
        answer: '문의하기 메뉴에서 오류 내용을 보내주세요.',
    },
];

export default function HelpScreen() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const router = useRouter();

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* 헤더 */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>도움말</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* FAQ 리스트 */}
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {FAQS.map((faq, index) => (
                    <View key={index}>
                        <TouchableOpacity
                            style={styles.questionButton}
                            onPress={() => toggle(index)}
                        >
                            <Text style={styles.questionText}>{faq.question}</Text>
                        </TouchableOpacity>

                        {openIndex === index && (
                            <View style={styles.answerBox}>
                                <Text style={styles.answerText}>{faq.answer}</Text>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
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
    scrollContainer: {
        padding: 20,
    },
    questionButton: {
        backgroundColor: Colors.primary,
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    questionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
    },
    answerBox: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#119D80',
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
        marginTop: -4,
    },
    answerText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },
});
