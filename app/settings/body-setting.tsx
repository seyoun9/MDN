import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

export default function BodySettingScreen() {
    const router = useRouter();

    const [gender, setGender] = useState<'남성' | '여성'>('남성');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = () => {
        if (!age || !height || !weight) {
            Alert.alert('입력 오류', '모든 항목을 입력해주세요.');
            return;
        }

        Alert.alert('저장 완료', `성별: ${gender}, 나이: ${age}, 키: ${height}cm, 몸무게: ${weight}kg`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>신체 정보 변경</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* Form */}
                <View style={styles.form}>
                    {/* 성별 */}
                    <Text style={styles.label}>성별</Text>
                    <View style={styles.genderContainer}>
                        <TouchableOpacity
                            style={[
                                styles.genderButton,
                                gender === '남성' && styles.genderSelected,
                            ]}
                            onPress={() => setGender('남성')}
                        >
                            <Text
                                style={[
                                    styles.genderText,
                                    gender === '남성' && styles.genderTextSelected,
                                ]}
                            >
                                {gender === '남성' ? '✓ ' : ''}남성
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.genderButton,
                                gender === '여성' && styles.genderSelected,
                            ]}
                            onPress={() => setGender('여성')}
                        >
                            <Text
                                style={[
                                    styles.genderText,
                                    gender === '여성' && styles.genderTextSelected,
                                ]}
                            >
                                {gender === '여성' ? '✓ ' : ''}여성
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* 나이 */}
                    <Text style={styles.label}>연령 (나이)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="나이를 입력하세요"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={age}
                        onChangeText={setAge}
                    />

                    {/* 신장 */}
                    <Text style={styles.label}>신장 (키)</Text>
                    <View style={styles.inputWithUnit}>
                        <TextInput
                            style={styles.unitInput}
                            placeholder="신장을 입력하세요"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                            value={height}
                            onChangeText={setHeight}
                        />
                        <Text style={styles.unit}>cm</Text>
                    </View>

                    {/* 체중 */}
                    <Text style={styles.label}>체중 (몸무게)</Text>
                    <View style={styles.inputWithUnit}>
                        <TextInput
                            style={styles.unitInput}
                            placeholder="체중을 입력하세요"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                            value={weight}
                            onChangeText={setWeight}
                        />
                        <Text style={styles.unit}>kg</Text>
                    </View>
                </View>

                {/* Submit Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>변경하기</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
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
        justifyContent: 'center',
        padding: 24,
        marginBottom: 70,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        paddingLeft: 5,
        color: Colors.text,
    },
    genderContainer: {
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: '#119D80',
        borderRadius: 30,
        overflow: 'hidden',
        marginBottom: 24,
    },
    genderButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    genderSelected: {
        backgroundColor: '#119D80',
    },
    genderText: {
        fontSize: 14,
        color: '#119D80',
        fontWeight: '600',
    },
    genderTextSelected: {
        color: '#fff',
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#119D80',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        marginBottom: 24,
        color: '#000',
    },
    inputWithUnit: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#119D80',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 24,
        justifyContent: 'space-between',
    },
    unitInput: {
        flex: 1,
        fontSize: 14,
        color: '#000',
        padding: 0,
    },
    unit: {
        fontSize: 14,
        color: '#333',
        marginLeft: 8,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        right: 24,
    },
    submitButton: {
        backgroundColor: '#119D80',
        borderRadius: 50,
        paddingHorizontal: 24,
        paddingVertical: 12,
        marginBottom: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
});
