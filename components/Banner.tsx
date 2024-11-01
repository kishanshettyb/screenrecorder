import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Banner: FunctionComponent = () => {
  return (
    <View className=" w-full flex-row justify-between p-4 border rounded-2xl bg-neutral-900 flex  ">
      <View className="shadow-2xl  mr-2 flex-1 h-[190px]  border   border-slate-50 p-4 bg-neutral-950  rounded-2xl">
        <View className="bg-neutral-950 border  border-slate-50 w-full text-center flex justify-between h-full flex-1 items-center p-2 rounded-2xl">
          <Text>📂 Storage</Text>
          <View className="h-[70px] w-[70px] mt-3 rounded-full bg-neutral-950 border-2 border-green-500"></View>
          <Text className="font-semibold text-neutral-500">120.15/125</Text>
        </View>
      </View>
      <View className="flex flex-1 border  border-slate-50 p-4  rounded-2xl bg-neutral-950">
        <View className="flex flex-row gap-2 mb-5">
          <View className="w-1/2 flex-1 rounded-2xl h-[70px] border border-slate-50 p-2 flex justify-center items-center">
            <Feather name="camera" size={24} color="green" />
            <Text className="text-[8px] text-neutral-500 mt-2">Camera</Text>
          </View>
          <View className="w-1/2  flex-1 rounded-2xl h-[70px] border border-slate-50 p-2 flex justify-center items-center">
            <Feather name="image" size={24} color="green" />
            <Text className="text-[8px] text-neutral-500 mt-2">Screenshot</Text>
          </View>
        </View>
        <View className="flex flex-row gap-2 ">
          <View className="w-1/2 flex-1 rounded-2xl h-[70px] border border-slate-50 p-2 flex justify-center items-center">
            <Feather name="edit" size={24} color="green" />
            <Text className="text-[8px] text-neutral-500 mt-2">Edit</Text>
          </View>
          <View className="w-1/2  flex-1 rounded-2xl h-[70px] border border-slate-50 p-2 flex justify-center items-center">
            <Feather name="stop-circle" size={24} color="green" />
            <Text className="text-[8px] text-neutral-500 mt-2">Assistive</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Banner;
