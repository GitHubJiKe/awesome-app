import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import "./about.scss";
import UserInfo from "../../components/UserInfo";
import { UserInfoContext } from "../../contexts";
export default class About extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "About"
  };

  state = {
    userInfo: {
      avatarUrl: "",
      nickName: ""
    }
  };

  componentWillMount() {
    console.log(this.state);
  }

  componentDidMount() {
    console.log(this.$router.params);
    Taro.getUserInfo({
      success: res => this.onGetUserInfo({ currentTarget: res })
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onGetUserInfo = e => {
    const {
      currentTarget: { userInfo, errMsg }
    } = e;
    if (errMsg !== "getUserInfo:ok") return;
    this.setState({ userInfo });
  };

  render() {
    const { userInfo } = this.state;
    return (
      <UserInfoContext.Provider value={userInfo}>
        <View className="about">
          <UserInfo />
          <Text>query:</Text>
          {Object.values(this.$router.params).map(val => (
            <View key={val}>
              <Text>{val}</Text>
            </View>
          ))}
          <Button openType="getUserInfo" onGetUserInfo={this.onGetUserInfo}>
            get user info
          </Button>
        </View>
      </UserInfoContext.Provider>
    );
  }
}
