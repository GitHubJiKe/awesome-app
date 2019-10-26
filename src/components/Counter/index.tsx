import { useLocalStore, observer } from "@tarojs/mobx";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

const Counter = () => {
  const store = useLocalStore(() => {
    return {
      counter: 0,
      increase() {
        store.counter++;
      },
      decrease() {
        store.counter--;
      },
      increaseAsync() {
        setTimeout(() => {
          store.counter++;
        }, 1000);
      },
      decreaseAsync() {
        setTimeout(() => {
          store.counter--;
        }, 1000);
      }
    };
  });
  const { counter, increase, decrease, increaseAsync, decreaseAsync } = store;
  console.log(counter);
  return (
    <View style={{ textAlign: "center" }}>
      <Text>{counter}</Text>
      <AtButton onClick={increase}>+</AtButton>
      <AtButton onClick={decrease}>-</AtButton>
      <AtButton onClick={increaseAsync}>+ async</AtButton>
      <AtButton onClick={decreaseAsync}>- async</AtButton>
    </View>
  );
};

export default observer(Counter);
