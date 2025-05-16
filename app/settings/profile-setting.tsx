import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform, Alert, } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileSettingScreen() {
    const router = useRouter();
    const [nickname, setNickname] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);

    // 프로필 이미지 선택
    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert('권한 필요', '사진 접근 권한이 필요합니다.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const handleChangeProfile = () => {
        if (!nickname.trim()) {
            Alert.alert('오류', '닉네임을 입력해주세요.');
            return;
        }

        Alert.alert('변경 완료', `프로필이 변경되었습니다.\n닉네임: ${nickname}`);
        // 여기서 서버에 프로필 저장 로직 등 연결 가능
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
                    <Text style={styles.headerTitle}>프로필 설정</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* Profile Section */}
                <View style={styles.content}>
                    <TouchableOpacity style={styles.profileCircle} onPress={pickImage}>
                        {imageUri ? (
                            <Image source={{ uri: imageUri }} style={styles.profileImage} />
                        ) : (
                            <Feather name="image" size={32} color="#119D80" />
                        )}
                    </TouchableOpacity>

                    <View style={styles.nicknameContainer}>
                        <TextInput
                            style={styles.nicknameInput}
                            placeholder="닉네임"
                            placeholderTextColor="#999"
                            value={nickname}
                            onChangeText={setNickname}
                        />
                        <Feather name="edit-3" size={16} color="#999" style={styles.editIcon} />
                    </View>
                </View>

                {/* Save Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.saveButton} onPress={handleChangeProfile}>
                        <Text style={styles.saveButtonText}>변경하기</Text>
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
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
    },
    profileCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#119D80',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        overflow: 'hidden',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    nicknameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#119D80',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    nicknameInput: {
        fontSize: 14,
        color: '#000',
        minWidth: 100,
        padding: 0,
        marginRight: 6,
    },
    editIcon: {
        marginLeft: 4,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        right: 24,
    },
    saveButton: {
        backgroundColor: '#119D80',
        borderRadius: 50,
        paddingHorizontal: 24,
        paddingVertical: 12,
        marginBottom: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
});
