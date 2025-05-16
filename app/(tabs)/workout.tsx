// app/(tabs)/workout.tsx
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function WorkoutScreen() {

  const router = useRouter();

  const [loaded] = useFonts({
    Roboto_Bold: require('../../assets/fonts/Roboto-Bold.ttf'),
    Roboto_Regular: require('../../assets/fonts/Roboto-Regular.ttf')
  });

  const workouts = [
    {
      id: '1',
      name: 'Dumbbell Step Up',
      time: '12 Minutes',
      kcal: '1385 Kcal',
      count: '3 Exercises',
      image: require('../../assets/images/dumbell.jpg'),
    },
    {
      id: '2',
      name: 'Dumbbell Step Up',
      time: '12 Minutes',
      kcal: '1385 Kcal',
      count: '3 Exercises',
      image: require('../../assets/images/dumbell.jpg'),
    },
    {
      id: '3',
      name: 'Dumbbell Step Up',
      time: '12 Minutes',
      kcal: '1385 Kcal',
      count: '3 Exercises',
      image: require('../../assets/images/dumbell.jpg'),
    },
    {
      id: '4',
      name: 'Dumbbell Step Up',
      time: '12 Minutes',
      kcal: '1385 Kcal',
      count: '3 Exercises',
      image: require('../../assets/images/dumbell.jpg'),
    },
    {
      id: '5',
      name: 'Dumbbell Step Up',
      time: '12 Minutes',
      kcal: '1385 Kcal',
      count: '3 Exercises',
      image: require('../../assets/images/dumbell.jpg'),
    },
    {
      id: '6',
      name: 'Dumbbell Step Up',
      time: '12 Minutes',
      kcal: '1385 Kcal',
      count: '3 Exercises',
      image: require('../../assets/images/dumbell.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greeting}>좋은 하루예요, {'{User}'}</Text>
            <Text style={styles.subtext}>오늘은 어떤 운동을 추천해 드릴까요?</Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchInputContainer}>
            <Ionicons name="search" size={20} color="#aaa" style={{ marginHorizontal: 8 }} />
            <TextInput placeholder="운동 검색하기" style={styles.searchInput} />
          </View>
        </View>

        {/* Workout List */}
        {workouts.map((item) => (
          <TouchableOpacity key={item.id} style={styles.workoutCard} onPress={() => router.push(`/exercise/${item.id}`)}>
            <View style={{ flex: 1 }}>
              <Text style={styles.workoutTitle}>{item.name}</Text>
              <Text style={styles.workoutInfo}>⏰ {item.time}</Text>
              <Text style={styles.workoutInfo}>🔥 {item.kcal}</Text>
              <Text style={styles.workoutInfo}>🏋 {item.count}</Text>
            </View>
            <Image source={item.image} style={styles.workoutImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontFamily: 'Roboto_Bold',
    marginBottom: 4,
    color: Colors.text,
  },
  subtext: {
    fontSize: 14,
    fontFamily: 'Roboto_Regular',
    color: Colors.secondaryText,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    paddingHorizontal: 4,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  workoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    backgroundColor: 'white',
    position: 'relative',
  },
  workoutTitle: {
    fontSize: 16,
    fontFamily: 'Roboto_Bold',
    color: Colors.text,
    marginBottom: 8,
  },
  workoutInfo: {
    fontSize: 13,
    fontFamily: 'Roboto_Regular',
    marginBottom: 2,
  },
  workoutImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginLeft: 5,
  }
});
