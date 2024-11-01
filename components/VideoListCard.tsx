import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
const VideoListCard: FunctionComponent = () => {
  return (
    <View>
      <View className="flex justify-between items-center flex-row my-5">
        <View>
          <Text className="text-2xl  text-neutral-500">Videos</Text>
        </View>
        <View className="px-4 py-2 bg-neutral-800 flex justify-center items-center rounded-2xl">
          <Text className="text-xs text-slate-600">View All</Text>
        </View>
      </View>
      <Text className="text-xs mb-2 text-neutral-500 opacity-40">Today</Text>
      <View className="rounded-2xl flex flex-row justify-between items-center gap-x-4 p-4 border-slate-50 border w-full">
        <View className="w-[90px] h-[100px] rounded-xl border  relative border-slate-50 bg-neutral-950">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="black" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2 text-neutral-400">
            Title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <Text className="text-xs text-neutral-950  mb-3">02-11-2024</Text>
          <View className="flex justify-between border rounded-xl p-2 border-neutral-900 flex-row items-center">
            <View>
              <Text className="text text-neutral-500">10.02 MB</Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather name="edit-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="share-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="more-vertical" size={17} color="black" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text className="text-xs mb-2 mt-5 text-neutral-500 opacity-40">
        Yesterday
      </Text>
      <View className="rounded-2xl mb-5 flex flex-row justify-between items-center gap-x-4 p-4 border-slate-50 border w-full">
        <View className="w-[90px] h-[100px] rounded-xl border  relative border-slate-50 bg-neutral-950">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample-1.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="black" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2 text-neutral-400">
            Title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <Text className="text-xs text-neutral-950  mb-3">01-11-2024</Text>
          <View className="flex justify-between border rounded-xl p-2 border-neutral-900 flex-row items-center">
            <View>
              <Text className="text text-neutral-500">5.22 MB</Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather name="edit-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="share-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="more-vertical" size={17} color="black" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="rounded-2xl mb-5 flex flex-row justify-between items-center gap-x-4 p-4 border-slate-50 border w-full">
        <View className="w-[90px] h-[100px] rounded-xl border  relative border-slate-50 bg-neutral-950">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample-1.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="black" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2 text-neutral-400">
            Title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <Text className="text-xs text-neutral-950  mb-3">01-11-2024</Text>
          <View className="flex justify-between border rounded-xl p-2 border-neutral-900 flex-row items-center">
            <View>
              <Text className="text text-neutral-500">5.22 MB</Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather name="edit-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="share-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="more-vertical" size={17} color="black" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="rounded-2xl mb-5 flex flex-row justify-between items-center gap-x-4 p-4 border-slate-50 border w-full">
        <View className="w-[90px] h-[100px] rounded-xl border  relative border-slate-50 bg-neutral-950">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample-1.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="black" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2 text-neutral-400">
            Title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <Text className="text-xs text-neutral-950  mb-3">01-11-2024</Text>
          <View className="flex justify-between border rounded-xl p-2 border-neutral-900 flex-row items-center">
            <View>
              <Text className="text text-neutral-500">5.22 MB</Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather name="edit-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="share-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="more-vertical" size={17} color="black" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="rounded-2xl mb-5 flex flex-row justify-between items-center gap-x-4 p-4 border-slate-50 border w-full">
        <View className="w-[90px] h-[100px] rounded-xl border  relative border-slate-50 bg-neutral-950">
          <Image
            className="w-[90px] h-[100px] rounded-xl"
            source={require("../assets/images/video-sample-1.jpg")}
          />
          <View className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <Feather name="play" size={24} color="black" />
          </View>
        </View>
        <View className="flex flex-1">
          <Text numberOfLines={2} className="mb-2 text-neutral-400">
            Title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            perspiciatis adipisci voluptatibus ex reiciendis maxime provident
            odit. Suscipit tempora iusto natus, odit doloremque similique facere
            facilis aut non, voluptas eos?
          </Text>
          <Text className="text-xs text-neutral-950  mb-3">01-11-2024</Text>
          <View className="flex justify-between border rounded-xl p-2 border-neutral-900 flex-row items-center">
            <View>
              <Text className="text text-neutral-500">5.22 MB</Text>
            </View>
            <View className="flex flex-row  justify-between  gap-x-6 opacity-30">
              <View>
                <Feather name="edit-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="share-2" size={17} color="black" />
              </View>
              <View>
                <Feather name="more-vertical" size={17} color="black" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoListCard;
