import * as ScreenRecorder from "expo-screen-recorder";
import React, { useState } from "react";
import { Button, View } from "react-native";

export default function Recorder() {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    const micEnabled = true; // Enable microphone if needed
    await ScreenRecorder.startRecording(micEnabled);
    setIsRecording(true);
  };

  const stopRecording = async () => {
    const outputUrl = await ScreenRecorder.stopRecording();
    console.log("Video saved at:", outputUrl);
    setIsRecording(false);
  };

  return (
    <View>
      <Button
        title={isRecording ? "Stop Recording" : "Start Recording"}
        onPress={isRecording ? stopRecording : startRecording}
      />
    </View>
  );
}
