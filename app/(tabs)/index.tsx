import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { useFonts } from 'expo-font';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const router = useRouter();
  const [loaded] = useFonts({
    Roboto_Bold: require('../../assets/fonts/Roboto-Bold.ttf'),
    Roboto_Regular: require('../../assets/fonts/Roboto-Regular.ttf')
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

        {/* 상단 프로필/포인트/설정 */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/logo.png')} style={styles.icon} />
          </TouchableOpacity>

          <View style={styles.profileCircle}>
            <Image source={require('../../assets/images/photo.png')} style={styles.profileImage} />
          </View>

          <TouchableOpacity onPress={() => router.push('/settings')}>
            <Image source={require('../../assets/images/Menu.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.pointText}>1000 P</Text>

        {/* 키 / 체중 카드 */}
        <View style={styles.infoRow}>
          <InfoCard label="신장" value="170 cm" />
          <InfoCard label="체중" value="72 kg" />
        </View>

        {/* BMI 카드 */}
        <View style={styles.bmiCard}>
          <Text style={styles.cardTitle}>Body Mass Index (BMI)</Text>
          <Text style={styles.bmiValue}>24.9</Text>
          <View style={styles.bmiStatus}>
            <Text style={styles.bmiStatusText}>You're Healthy</Text>
          </View>
          <View style={styles.bmiBar}>
            {/* 여기에 BMI 바 그래픽 넣을 예정 */}
          </View>
        </View>

        {/* 칼로리 그래프 (추후 그래프 컴포넌트로 교체 예정) */}
        <View style={styles.graphCard}>
          <Text style={styles.cardTitle}>Kcal</Text>
          {/* 그래프 자리 */}
          <Image source={require('../../assets/images/photo.png')} style={{ width: '100%', height: 120 }} />
        </View>

        {/* 추천 운동 */}
        <Text style={styles.sectionTitle}>{`{User}`}님의 맞춤 운동</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Image
              key={item}
              source={require('../../assets/images/photo.png')}
              style={styles.workoutCard}
            />
          ))}
        </ScrollView>

        {/* 추천 식단 */}
        <Text style={styles.sectionTitle}>{`{User}`}님의 맞춤 식단</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <TouchableOpacity key={item} onPress={() => router.push(`/recipe/${item}`)}>
              <Image
                key={item}
                source={require('../../assets/images/photo.png')}
                style={styles.workoutCard}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.cardLabel}>{label}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
  },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 50,
    marginBottom: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  pointText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Roboto_Bold',
    color: Colors.primary,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 16,
  },
  infoCard: {
    flex: 1,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardLabel: {
    fontSize: 18,
    fontFamily: 'Roboto_Bold',
    color: Colors.secondaryText,
  },
  cardValue: {
    fontSize: 16,
    fontFamily: 'Roboto_Bold',
    color: Colors.text,
    marginTop: 4,
  },
  bmiCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Roboto_Bold',
    marginBottom: 8,
    color: Colors.text,
  },
  bmiValue: {
    fontSize: 28,
    fontFamily: 'Roboto_Bold',
    color: Colors.text,
  },
  bmiStatus: {
    backgroundColor: '#C4F2CE',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginVertical: 8,
  },
  bmiStatusText: {
    fontSize: 14,
    fontFamily: 'Roboto_Bold',
    color: 'green',
  },
  bmiBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginTop: 10,
  },
  graphCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Roboto_Bold',
    marginHorizontal: 15,
    marginBottom: 10,
    color: Colors.text,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  workoutCard: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    marginRight: 3,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: '#fff',
  },
});
