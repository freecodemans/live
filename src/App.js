import React, { Component } from "react";
import { Provider } from "react-redux";
import "./assets/style/reset.scss";
import "./utils/rem";
import store from "./store";
import { getUserInfos } from "./api";
import Router from './router'

class App extends Component {
  componentDidMount() {
    /***
     * https://www.hihiworld.com 测试环境地址，自行微信登陆获取cookie，
     * 即可访问到所有接口信息
     * */
    let cookie = "2aknccpq4et0xtyjmtmx1awv";
    //let testCookie = "wv4kfu2cq24afhpw1jhtihbb";
    document.cookie = "ASP.NET_SessionId=" + cookie;
    getUserInfos().then(res => {
      //console.log(res.Data);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
