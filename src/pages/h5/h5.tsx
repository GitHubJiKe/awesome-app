import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, WebView } from "@tarojs/components";
import "./h5.scss";

export default class H5 extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const url = `https://l2l-test.boldseas.com/boldseas/static/miniapp-test-h5/index.html?datetime=${Date.now()}`;
    return <WebView src={url} />;
  }
}
