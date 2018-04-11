/**
 * @flow
 * Created by jianghai on 2018/4/11.
 */

import axios from 'axios';
import Tools from './Tools';

export function axPost(
  url: string = '',                  // 接口地址
  params: Object = {},               // 请求数据
  callBack: Function = () => null,   // 回调函数
  shouldHandleError: boolean = true, // 是否处理错误（非必传,默认为true）
  requestTimeout: number = 5 * 1000  // 超时时间（非必传,默认5秒）
) {

  axios.post(url, JSON.stringify(params), {timeout: requestTimeout})
    .then(function (response) {
      const resData = response.data;

      // console.log({'请求地址':url,'请求数据':params,'返回报文':resData});

      try {
        if (shouldHandleError) {
          callBack(resData);
        } else {
          callBack(response);
        }
      } catch (e) {
        throw new Error(e.message);
      }

    })
    .catch(function (error) {
      if (shouldHandleError) {
        Tools.alertError(error);
      }
    });

}

export default {};
