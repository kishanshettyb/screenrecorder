import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

const WelcomeTitle: FunctionComponent = () => {
  return (
    <View className="my-5">
      <Text className="text-4xl font-semibold dark:text-slate-300">
        Hello John 👋
      </Text>
    </View>
  );
};

export default WelcomeTitle;
