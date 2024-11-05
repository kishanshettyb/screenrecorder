import { StyleSheet, Text, View, Share, TouchableOpacity } from "react-native";
import * as ExpoScreenRecorder from "expo-screen-recorder";
import * as FileSystem from "expo-file-system"; // For saving files to the device

export default function App() {
	const onPressStart = async () => {
		try {
			const result = await ExpoScreenRecorder.startRecording();
			console.log("Recording started", result);
		} catch (err) {
			console.log("Error starting recording:", err);
		}
	};

	const onPressStop = async () => {
		try {
			const url = await ExpoScreenRecorder.stopRecording();
			console.log("Recording stopped. File URL:", url);

			// First, check if the file exists at the given URL
			const fileExists = await FileSystem.getInfoAsync(url);
			if (!fileExists.exists) {
				throw new Error("File does not exist at the given URL");
			}

			// Now let's try reading the file (optional, but good for debugging)
			const fileContents = await FileSystem.readAsStringAsync(url);
			console.log("File content read successfully:", fileContents); // You can remove this after testing

			// We will save the file to a writable directory (e.g., documentDirectory)
			const fileName = url.split("/").pop(); // Extract file name from the URL
			const fileUri = FileSystem.documentDirectory + fileName; // Save it to the document directory

			// Copy the file from the temp location to the app's document directory
			await FileSystem.copyAsync({
				from: url, // Original file URL returned by stopRecording
				to: fileUri // New file URI in documentDirectory
			});

			console.log("File saved to:", fileUri);

			// Share the saved video file
			await Share.share({
				message: "Check out this screen recording!",
				url: fileUri // Share the file from the document directory
			});
		} catch (err) {
			console.log("Error stopping recording or saving file:", err);
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={{ margin: 20, padding: 20, backgroundColor: "black", borderRadius: 50 }} onPress={onPressStart}>
				<Text style={{ color: "white", fontSize: 16 }}>START RECORDING</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ margin: 20, padding: 20, backgroundColor: "black", borderRadius: 50 }} onPress={onPressStop}>
				<Text style={{ color: "white", fontSize: 16 }}>STOP RECORDING</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
