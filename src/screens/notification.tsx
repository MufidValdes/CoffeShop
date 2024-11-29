import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = {
  today: [
    {
      id: '1',
      title: '20% discount Alert',
      description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque',
      time: '2h',
    },
    {
      id: '2',
      title: '20% discount Alert',
      description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque',
      time: '7h',
    },
  ],
  yesterday: [
    {
      id: '3',
      title: '20% discount Alert',
      description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque',
      time: '1d',
    },
    {
      id: '4',
      title: '20% discount Alert',
      description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque',
      time: '2d',
    },
  ],
};

const NotificationItem = ({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) => (
  <View style={styles.notificationItem}>
    <View style={styles.iconContainer}>
      <Ionicons
        name="pricetag-outline"
        size={24}
        color="#000000"
      />
    </View>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
    <Text style={styles.notificationTime}>{time}</Text>
  </View>
);

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { title: 'Today', data: notifications.today },
          { title: 'Yesterday', data: notifications.yesterday },
        ]}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              <TouchableOpacity>
                <Text style={styles.markAllRead}>Mark all read</Text>
              </TouchableOpacity>
            </View>
            {item.data.map((notification) => (
              <NotificationItem
                key={notification.id}
                {...notification}
              />
            ))}
          </View>
        )}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  listContent: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  markAllRead: {
    fontSize: 14,
    color: '#C4846C',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4846C',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#F0F0F0',
  },
  notificationTime: {
    fontSize: 12,
    color: '#F0F0F0',
    marginLeft: 8,
  },
});

export default NotificationsScreen;
