const ENV =  process.env.ENV;
const config = {
  environment: !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? "mobile" : "pc",
  ENV,
  cookieDomain: ""
};
export default config
