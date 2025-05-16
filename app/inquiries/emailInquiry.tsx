import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

export default function EmailInquiryScreen() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }

        alert('문의가 제출되었습니다.');
        setTitle('');
        setContent('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* 헤더 */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>문의 메일</Text>
                        <View style={{ width: 24 }} />
                    </View>

                    {/* 입력 폼 */}
                    <View style={styles.form}>
                        <Text style={styles.label}>제목</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="제목을 입력하세요."
                            placeholderTextColor="#999"
                            value={title}
                            onChangeText={setTitle}
                        />

                        <Text style={styles.label}>내용</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="내용을 입력하세요."
                            placeholderTextColor="#999"
                            multiline
                            numberOfLines={6}
                            textAlignVertical="top"
                            value={content}
                            onChangeText={setContent}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>문의하기</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
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
    form: {
        flex: 1,
        padding: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#119D80',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        marginBottom: 24,
        color: '#000',
        backgroundColor: '#fff',
    },
    textArea: {
        height: 180,
    },
    button: {
        backgroundColor: '#119D80',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
});
