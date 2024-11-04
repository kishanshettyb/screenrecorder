import React from "react";
import { View, Button, Alert } from "react-native";
import RecordScreen from "react-native-record-screen";

const TestScreenRecorder = () => {
  const startRecording = async () => {
    try {
      await RecordScreen.startRecording();
      Alert.alert("Recording started!");
    } catch (error) {
      console.error("Error starting recording:", error);
      Alert.alert("Error", "Failed to start recording");
    }
  };

  const stopRecording = async () => {
    try {
      const result = await RecordScreen.stopRecording();
      if (result && result.videoUrl) {
        Alert.alert("Recording stopped", `Video saved at ${result.videoUrl}`);
      } else {
        Alert.alert("Recording failed", "No video URL found");
      }
    } catch (error) {
      console.error("Error stopping recording:", error);
      Alert.alert("Error", "Failed to stop recording");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Start Recording" onPress={startRecording} />
      <Button
        title="Stop Recording"
        onPress={stopRecording}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default TestScreenRecorder;
