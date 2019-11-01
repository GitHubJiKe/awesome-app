import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import { routeCreator, RouteKeys } from "../../constants";
import { AtButton, AtTabBar, AtTabs, AtTabsPane } from "taro-ui";
import Counter from "../../components/Counter";
import Bar from "../../components/Bar";

const tabStyle =
  "padding: 100px 50px;background-color: #FAFBFC;text-align: center;";
export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    current: 0,
    progress: 0
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
    const internal = setInterval(() => {
      if (this.state.progress >= 100) {
        clearInterval(internal);
      }
      this.setState({ progress: this.state.progress + 1 });
    }, 1000);
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

  gotoWebView = () => {
    Taro.navigateTo(routeCreator(RouteKeys.H5));
  };

  render() {
    const tabList = [
      { title: "待办事项", text: "8" },
      { title: "拍照", text: "nothing" },
      { title: "通讯录", dot: true }
    ];
    const { current, progress } = this.state;
    const tableConfig = [
      {
        color: "black",
        progress: progress
      },
      {
        color: "red",
        progress: 10
      },
      {
        color: "orange",
        progress: 20
      },
      {
        color: "yellow",
        progress: 30
      },
      {
        color: "green",
        progress: 40
      },
      {
        color: "blue",
        progress: 50
      },
      {
        color: "purple",
        progress: 60
      },
      {
        color: "black",
        progress: 70
      }
    ];
    return (
      <View className="index">
        <View
          style={{
            width: "400rpx",
            height: "256rpx",
            borderBottom: "2rpx solid #000000",
            borderLeft: "2rpx solid #000000"
          }}
        >
          {tableConfig.map(item => (
            <Bar
              key={item.color}
              bgColor={item.color}
              progress={item.progress}
            />
          ))}
        </View>
        <View style={{ height: "300rpx" }} />
        <AtButton onClick={this.gotoWebView}>go to webView</AtButton>
        <AtButton onClick={this.gotoPage}>goto next page</AtButton>
        <AtTabBar
          fixed
          tabList={tabList}
          current={current}
          onClick={this.onTabChange}
        />
        <AtTabs current={current} tabList={tabList} onClick={this.onTabChange}>
          {tabList.map((tab, idx) => (
            <AtTabsPane key={tab.title} current={current} index={idx}>
              <View style={tabStyle}>{tab.title}</View>
            </AtTabsPane>
          ))}
        </AtTabs>
      </View>
    );
  }
}
