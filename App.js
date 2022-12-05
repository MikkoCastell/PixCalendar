import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={{
          backgroundColor: "black",
          borderRadius: 10,
          margin: 40,
          padding: 10,
          width: 200,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 22 }}>Show Calendar</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade" style={{flex: 1}}>
        <Calendar
          style={{ borderRadius: 10, marginTop: 40 }}
          onDayPress={(date) => {
            setShowModal(false);
          }}
          onMonthChange={() => {}}
          minDate={"2020-01-01"}
          maxDate={"2024-12-31"}
          markingType={"period"}
          markedDates={{
            // "2022-09-10": {
            //   dots: [{color: "red" }, {color: "green"}],
            //   marked: true,
            //   dotColor: "gray",
            //   selected: true,
            //   selectedColor: "purple",
            // },
            "2022-12-24": {
              startingDay: true, color: "lightgreen"
            },
            "2022-12-25": {
              color: "lightgreen", marked: true, dotColor: "transparent"
            },
            "2022-12-26": {
              color: "lightgreen", marked: true, dotColor: "transparent"
            },
            "2022-12-27": {
              color: "lightgreen", marked: true, dotColor: "transparent"
            },
            "2022-12-28": {
              color: "lightgreen", marked: true, dotColor: "transparent"
            },
            "2022-12-29": {
              color: "lightgreen", marked: true, dotColor: "transparent"
            },
            "2022-12-30": {
              color: "lightgreen", marked: true, dotColor: "transparent"
            },
            "2022-12-31": {
              endingDay: true, color: "lightgreen"
            }
          }}
        />
        
      </Modal>
      
    </View>
  );
};

export default App;
