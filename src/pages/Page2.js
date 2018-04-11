/**
 * Created by jianghai on 2018/2/26.
 */
/**
 * @flow
 */
import React, {Component} from 'react';
import Navigation from '../component/Navigation';
import {axPost} from '../utils/BasicApiRequest';
// import axios from 'axios';

class Page2 extends Component<void,void> {
  componentDidMount() {
    this.postRequest();
  }

  postRequest = () => {

    const url = 'http://localhost:3000/customerList?reqid=233';
    const body = {'name': 'mike'};

    axPost(url,body);

    // 测试axios成功
    // axios.post(url, JSON.stringify(body))
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


    // 测试fetch成功
    // fetch("http://localhost:3000/customerList?reqid=233", {
    //   method: "POST",
    //   body: JSON.stringify(body),
    // }).then(function (response) {
    //   return response.json();
    // }).then(function (data) {
    //   console.log(data);
    // }).catch(function (e) {
    //   console.log(e);
    // });

  }

  render() {
    return (
      <div>
        <div style={{fontSize:20,backgroundColor:'#F3F3F3'}}>Page2</div>
        <Navigation/>
      </div>
    );
  }
}

export default Page2;