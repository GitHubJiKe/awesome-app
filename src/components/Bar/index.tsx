import { View, Text } from "@tarojs/components";
import { useState } from "@tarojs/taro";
import "./index.scss";
export default ({
  bgColor,
  restBgColor = "#bbbbbb",
  progress,
  showTopText = true
}) => {
  let restSpace = 0,
    _progress = 0;
  if (progress > 100) {
    restSpace = 0;
    _progress = 100;
  } else {
    restSpace = 100 - progress;
    _progress = progress;
  }
  const [topTextFontSize, setTopTextFontSize] = useState("16rpx");
  return (
    <View
      className="bar_container"
      onTouchStart={() => setTopTextFontSize("20rpx")}
      onTouchEnd={() => setTopTextFontSize("16rpx")}
    >
      {showTopText && (
        <Text style={{ fontSize: topTextFontSize }}>{_progress}%</Text>
      )}
      <View
        className="rest_space"
        style={{
          backgroundColor: restBgColor,
          height: `${restSpace}%`
        }}
      />
      <View
        className="result_space"
        style={{
          backgroundColor: bgColor,
          height: `${_progress}%`
        }}
      />
    </View>
  );
};
