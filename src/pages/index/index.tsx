import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import { routeCreator, RouteKeys } from "../../constants";
import { AtButton, AtTabBar, AtTabs, AtTabsPane } from "taro-ui";
import Counter from "../../components/Counter";

const tabStyle =
  "padding: 100px 50px;background-color: #FAFBFC;text-align: center;";
export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    current: 0
  };
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

  componentWillMount() {
    //first step
    console.log("componentWillMount");
  }

  componentDidMount() {
    //third step
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    //when unmount
    console.log("componentWillUnmount");
  }

  componentDidShow() {
    //second step
    console.log("componentDidShow");
  }

  componentDidHide() {
    //when leave
    console.log("componentDidHide");
  }

  gotoPage = () => {
    Taro.navigateTo(routeCreator(RouteKeys.ABOUT, { name: "peter", age: 25 }));
  };

  onTabChange = current => this.setState({ current });

  render() {
    const tabList = [
      { title: "待办事项", text: "8" },
      { title: "拍照", text: "nothing" },
      { title: "通讯录", dot: true }
    ];
    const { current } = this.state;
    return (
      <View className="index">
        <Counter />
        <AtButton onClick={this.gotoPage}>goto next page</AtButton>
        <AtTabBar
          fixed
          tabList={tabList}
          current={current}
          onClick={this.onTabChange}
        />
        <AtTabs current={current} tabList={tabList} onClick={this.onTabChange}>
          {tabList.map((tab, idx) => (
            <AtTabsPane key={idx} current={current} index={idx}>
              <View style={tabStyle}>{tab.title}</View>
            </AtTabsPane>
          ))}
        </AtTabs>
      </View>
    );
  }
}
