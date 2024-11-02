import React, { FunctionComponent } from "react";
import { Image, View } from "react-native";

const Logo: FunctionComponent = () => {
  return (
    <View className="flex justify-startitems-center">
      <Image
        height={100}
        width={100}
        alt="Screen Recorder"
        className="w-[30px] h-[30px] rounded-lg mr-2 shadow-2xl border border-slate-100"
        source={require("../assets/images/logo-icon.png")}
      />
    </View>
  );
};

export default Logo;
