import { observable, action } from "mobx";

/**
 * 스토어 만들기
 * 하나의 클래스에 observable 값이랑 함수들을 만들어주면 끝!
 */
export default class CounterStore {
  @observable number = 0;

  // 루트 스토어 값을 저장
  constructor(root) {
    this.root = root;
  }

  @action increase = () => {
    this.number++;
  };

  @action decrease = () => {
    this.number--;
  };
}
