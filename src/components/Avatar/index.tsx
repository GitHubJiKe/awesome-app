import { Image } from "@tarojs/components";
const pxTransform = Taro.pxTransform;
const size_WidthHeight_val = {
  large: 300,
  middle: 240,
  small: 120,
  default: 180
};
function getStyleBySize(size?: string): object {
  const finalSize = size || "default";
  const val = size_WidthHeight_val[finalSize];
  return {
    width: pxTransform(val),
    height: pxTransform(val),
    borderRadius: "50%"
  };
}

interface AvatarProp {
  size?: "default" | "large" | "middle" | "small";
  avatar?: string;
}
export default (props: AvatarProp) => {
  const { size, avatar = "" } = props;
  return <Image style={getStyleBySize(size)} src={avatar} />;
};
