import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

export default function SignupScreen() {
    const [loaded] = useFonts({
        Roboto_Bold: require('../../assets/fonts/Roboto-Bold.ttf'),
        Roboto_Regular: require('../../assets/fonts/Roboto-Regular.ttf')
    });

    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                {/* 타이틀 */}
                <Text style={styles.title}>새로운 계정 생성하기</Text>
                <Text style={styles.subtitle}>헬스키친은 늘 사용자의 건강을 생각합니다.</Text>

                {/* 이름 */}
                <Text style={styles.label}>닉네임</Text>
                <TextInput
                    style={styles.input}
                    placeholder="이름을 입력하세요"
                    placeholderTextColor="#aaa"
                    value={name}
                    onChangeText={setName}
                />

                {/* 이메일 */}
                <Text style={styles.label}>이메일</Text>
                <TextInput
                    style={styles.input}
                    placeholder="이메일을 입력하세요"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                {/* 비밀번호 */}
                <Text style={styles.label}>비밀번호</Text>
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 입력하세요요"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {/* 비밀번호 확인 */}
                <Text style={styles.label}>비밀번호 확인</Text>
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 다시 입력하세요요"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                {/* 회원가입 버튼 */}
                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.signupText}>회원 가입</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                </TouchableOpacity>

                {/* 로그인 링크 */}
                <View style={styles.loginRow}>
                    <Text style={styles.loginText}>이미 회원이신가요? </Text>
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
    signupButton: {
        backgroundColor: '#119D80',
        height: 50,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 6,
        marginTop: 10,
    },
    signupText: {
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
