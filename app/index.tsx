import * as React from "react";
import { ScrollView, View } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import WelcomeTitle from "~/components/WelcomeTitle";
import Banner from "~/components/Banner";
import VideoListCard from "~/components/VideoListCard";

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <ScrollView className="p-6 bg-zink-900">
      <WelcomeTitle />
      <Banner />
      <VideoListCard />
    </ScrollView>
  );
}
