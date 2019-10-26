import Taro from "@tarojs/taro";

export const UserInfoContext = Taro.createContext({
  avatarUrl: "",
  nickName: ""
});

export default {
  UserInfoContext
};
