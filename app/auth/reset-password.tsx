import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ResetPasswordScreen() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                <Text style={styles.title}>비밀번호 재설정</Text>
                <Text style={styles.subtitle}>등록된 이메일로 비밀번호를 변경할 수 있어요.</Text>

                {/* 이메일 */}
                <Text style={styles.label}>이메일</Text>
                <TextInput
                    style={styles.input}
                    placeholder="이메일을 입력하세요"
                    placeholderTextColor="#aaa"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                {/* 새 비밀번호 */}
                <Text style={styles.label}>새 비밀번호</Text>
                <TextInput
                    style={styles.input}
                    placeholder="새 비밀번호를 입력하세요요"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                />

                {/* 비밀번호 확인 */}
                <Text style={styles.label}>비밀번호 확인</Text>
                <TextInput
                    style={styles.input}
                    placeholder="새 비밀번호를 다시 입력하세요요"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                {/* 제출 버튼 */}
                <TouchableOpacity style={styles.resetButton}>
                    <Text style={styles.resetText}>비밀번호 변경</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                </TouchableOpacity>

                {/* 로그인으로 돌아가기 */}
                <View style={styles.loginRow}>
                    <Text style={styles.loginText}>이미 비밀번호를 기억하시나요? </Text>
                    <TouchableOpacity onPress={() => router.push('./login')}>
                        <Text style={styles.loginLink}>로그인하기</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingBottom: 30,
        marginTop: 35,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 14,
        color: '#444',
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 16,
        height: 48,
        marginBottom: 20,
        fontSize: 14,
        color: '#000',
    },
    resetButton: {
        backgroundColor: '#119D80',
        height: 50,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 6,
        marginTop: 10,
    },
    resetText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    loginRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    loginText: {
        fontSize: 13,
        color: '#222',
    },
    loginLink: {
        fontSize: 13,
        color: '#F29F05',
        fontWeight: 'bold',
    },
});
