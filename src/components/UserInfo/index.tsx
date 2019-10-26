import { View, Text } from "@tarojs/components";
import Avatar from "../Avatar";
import { UserInfoContext } from "../../contexts";
import { useContext } from "@tarojs/taro";

export default () => {
  const context = useContext(UserInfoContext);
  return (
    <View style={{ textAlign: "center" }}>
      <Avatar avatar={context.avatarUrl} />
      <View>
        <Text>{context.nickName}</Text>
      </View>
    </View>
  );
};
