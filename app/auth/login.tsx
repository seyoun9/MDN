import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

export default function LoginScreen() {

    const [loaded] = useFonts({
        Roboto_Bold: require('../../assets/fonts/Roboto-Bold.ttf'),
        Roboto_Regular: require('../../assets/fonts/Roboto-Regular.ttf')
    });

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            {/* 인사말 */}
            <Text style={styles.title}>반가워요,</Text>
            <Text style={styles.subtitle}>헬스키친에 온 걸 환영합니다!</Text>

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

            {/* 비밀번호 */}
            <Text style={styles.label}>비밀번호</Text>
            <TextInput
                style={styles.input}
                placeholder="비밀번호를 입력하세요"
                placeholderTextColor="#aaa"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            {/* 비밀번호 찾기 */}
            <TouchableOpacity onPress={() => router.push('./reset-password')}>
                <Text style={styles.forgotText}>비밀번호를 잊으셨나요?</Text>
            </TouchableOpacity>

            {/* 로그인 버튼 */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>로그인</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>

            {/* 회원가입 링크 */}
            <View style={styles.signupRow}>
                <Text style={styles.signupQuestion}>처음 오셨나요? </Text>
                <TouchableOpacity onPress={() => router.push('./signup')}>
                    <Text style={styles.signupLink}>회원가입하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingBottom: 30,
        marginTop: 35,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Roboto_Bold',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
        color: '#222',
        marginBottom: 40,
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
        fontFamily: 'Roboto_Regular',
        color: '#000',
    },
    forgotText: {
        color: '#F29F05',
        fontSize: 13,
        fontFamily: 'Roboto_Bold',
        marginBottom: 30,
        textAlign: 'left',
    },
    loginButton: {
        backgroundColor: '#119D80',
        height: 50,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 6,
    },
    loginText: {
        color: '#fff',
        fontFamily: 'Roboto_Bold',
        fontSize: 16,
    },
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    signupQuestion: {
        fontSize: 13,
        color: '#222',
    },
    signupLink: {
        fontSize: 13,
        color: '#F29F05',
        fontFamily: 'Roboto_Bold',
    },
});
