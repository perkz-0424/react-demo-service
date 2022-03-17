/****
 * 加密函数
 * 用于文件
 * 用来加密登录和验证
 * ***/
import * as CryptoJS from "crypto-js";

//密钥
const _key = "123";
const _iv = "321";

//加密
const encrypt = (data: any) => {

  const encrypted = CryptoJS.AES.encrypt(
    data,
    _key,
    {
      // @ts-ignore
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  return encrypted.toString();
};

//解密
const decrypt = (encrypted: any) => {
  const decrypted = CryptoJS.AES.decrypt(
    encrypted,
    _key,
    {
      // @ts-ignore
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

export {
  encrypt,
  decrypt
};
