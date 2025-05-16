import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function PostCreateScreen() {

    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState<string[]>([]);

    const [loaded] = useFonts({
        Roboto_Bold: require('../assets/fonts/Roboto-Bold.ttf'),
        Roboto_Regular: require('../assets/fonts/Roboto-Regular.ttf')
    });

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled && result.assets) {
            const uris = result.assets.map((asset) => asset.uri);
            setImages([...images, ...uris]);
        }
    };

    const removeImage = (uri: string) => {
        setImages(images.filter((img) => img !== uri));
    };

    const handlePost = () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert('알림', '제목과 내용을 모두 입력해주세요.');
            return;
        }
        console.log('게시물 전송:', { title, content, images });
        router.back();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* 상단 바 */}
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.postButton} onPress={handlePost}>
                    <Text style={styles.postButtonText}>게시하기</Text>
                </TouchableOpacity>
            </View>

            {/* 제목 */}
            <Text style={styles.label}>제목</Text>
            <TextInput
                style={styles.input}
                placeholder="제목을 입력하세요."
                value={title}
                onChangeText={setTitle}
            />

            {/* 내용 */}
            <Text style={styles.label}>내용</Text>
            <View style={styles.contentInputWrapper}>
                <TextInput
                    style={styles.contentInput}
                    placeholder="내용을 입력하세요."
                    value={content}
                    onChangeText={setContent}
                    multiline
                />
                <TouchableOpacity style={styles.imageIcon} onPress={pickImage}>
                    <Ionicons name="image-outline" size={28} color={Colors.primary} />
                </TouchableOpacity>
            </View>

            {/* 이미지 미리보기 */}
            <ScrollView horizontal style={styles.imagePreviewContainer}>
                {images.map((uri) => (
                    <View key={uri} style={styles.imageWrapper}>
                        <Image source={{ uri }} style={styles.imagePreview} />
                        <TouchableOpacity
                            style={styles.removeImageButton}
                            onPress={() => removeImage(uri)}
                        >
                            <Ionicons name="close-circle" size={18} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 20,
        backgroundColor: Colors.background,
        marginTop: 35
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    postButton: {
        backgroundColor: Colors.primary,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    postButtonText: {
        color: 'white',
        fontFamily: 'Roboto_Bold',
        fontSize: 14,
    },
    label: {
        fontSize: 16,
        fontFamily: 'Roboto_Bold',
        marginBottom: 8,
        color: Colors.text,
    },
    input: {
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
        fontFamily: 'Roboto_Regular',
    },
    contentInputWrapper: {
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 10,
        position: 'relative',
        marginBottom: 10,
    },
    contentInput: {
        padding: 12,
        height: 300,
        textAlignVertical: 'top',
        fontFamily: 'Roboto_Regular',
    },
    imageIcon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    imagePreviewContainer: {
        flexDirection: 'row',
    },
    imageWrapper: {
        marginRight: 10,
        position: 'relative',
    },
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    removeImageButton: {
        position: 'absolute',
        top: -2,
        right: -8,
        backgroundColor: 'white',
        borderRadius: 10,
    },
});