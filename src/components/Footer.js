import { VERSION } from "../utils/constant";
const Footer = () => {
  return (
    <div className="footer">
      <div className="copyrights">&copy;copy rights</div>
      <div className="address">39/8-11,manhali,123XXXXXXXXXXX</div>
      <div className="mailid">food@gmail.com</div>
      <h5> Version : {VERSION}</h5>
      <h5>Running On the React JS</h5>
    </div>
  );
};

export default Footer;
