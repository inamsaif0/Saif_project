import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';
import { Link } from 'react-router-dom';
import Adminnavbar from './Admin-navbar';
function AdminPanel(props) {
  const [Contact, setContact] = useState([]);
  const [showContactData, setShowContactData] = useState(false);
  const [Orders, setOrders] = useState([]);
  const [showOrdersData, setShowOrdersData] = useState(false);
  const [UserOrders, setUserOrders] = useState([]);
  const [showUserOrders, setShowUserOrders] = useState(false);
  const [Step1, setStep1] = useState([]);
  const [showStep1Data, setShowStep1Data] = useState(false);
  const [Step2, setStep2] = useState([]);
  const [showStep2Data, setShowStep2Data] = useState(false);
  const [Step2LogoData, setStep2LogoData] = useState([]);
  const [showStep2LogoData, setShowStep2LogoData] = useState(false);
  const [Step2WebData, setStep2WebData] = useState([]);
  const [showStep2WebData, setShowStep2WebData] = useState(false);
  const [Step2VideoData, setStep2VideoData] = useState([]);
  const [showStep2VideoData, setShowStep2VideoData] = useState(false);
  const [Step2MobileData, setStep2MobileData] = useState([]);
  const [showStep2MobileData, setShowStep2MobileData] = useState(false);
  const [Step3Data, setStep3Data] = useState([]);
  const [showStep3Data, setShowStep3Data] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/contactus");
      setContact(response.data);
      setShowContactData(true);
      setShowStep1Data(false);
      setShowUserOrders(false);
      setShowStep2Data(false);
      setShowStep3Data(false);
      setShowStep2VideoData(false);
      setShowStep2MobileData(false);
      setShowStep2WebData(false);
      setShowOrdersData(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetchDat = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/orders");
      setOrders(response.data);
      setShowOrdersData(true);
      setShowContactData(false); 
      setShowUserOrders(false);
      setShowStep2WebData(false);
      setShowStep3Data(false);
      setShowStep2Data(false);
      setShowStep2MobileData(false);
      setShowStep2LogoData(false);
      setShowStep2VideoData(false);
      setShowStep1Data(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetchDa = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/step1");
      setStep1(response.data);
      setShowStep1Data(true);
      setShowOrdersData(false);
      setShowUserOrders(false);
      setShowStep2Data(false);
      setShowStep2MobileData(false);
      setShowStep2WebData(false);
      setShowStep3Data(false);
      setShowStep2VideoData(false);
      setShowContactData(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetchdd = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/user_orders");
      setUserOrders(response.data);
      setShowStep1Data(false);
      setShowUserOrders(true);
      setShowOrdersData(false);
      setShowStep2Data(false);
      setShowStep2MobileData(false);
      setShowStep2WebData(false);
      setShowStep3Data(false);
      setShowStep2VideoData(false);
      setShowContactData(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetchD = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/step2");
      setStep2(response.data);
      setShowStep1Data(false);
      setShowStep2Data(true);
      setShowUserOrders(false);
      setShowStep2LogoData(false);
      setShowStep3Data(false);
      setShowStep2WebData(false);
      setShowStep2MobileData(false);
      setShowStep2VideoData(false);
      setShowOrdersData(false);
      setShowContactData(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetch = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/step2_logo");
      setStep2LogoData(response.data);
      setShowStep1Data(false);
      setShowStep2Data(false);
      setShowStep2MobileData(false);
      setShowStep3Data(false);
      setShowUserOrders(false);
      setShowStep2LogoData(true);
      setShowStep2WebData(false);
      setShowStep2VideoData(false);
      setShowOrdersData(false);
      setShowContactData(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fetc = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/step2_web");
      setStep2WebData(response.data);
      setShowStep1Data(false);
      setShowStep2Data(false);
      setShowStep2LogoData(false);
      setShowStep3Data(false);
      setShowUserOrders(false);
      setShowStep2WebData(true);
      setShowOrdersData(false);
      setShowContactData(false); 
      setShowStep2MobileData(false);
      setShowStep2VideoData(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fet = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/step2_video");
      setStep2VideoData(response.data);
      setShowStep1Data(false);
      setShowStep2Data(false);
      setShowStep2LogoData(false);
      setShowStep2WebData(false);
      setShowUserOrders(false);
      setShowStep2VideoData(true);
      setShowStep3Data(false);
      setShowOrdersData(false);
      setShowStep2MobileData(false);
      setShowContactData(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fe = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/step2_mobile");
      setStep2MobileData(response.data);
      setShowStep1Data(false);
      setShowStep2Data(false);
      setShowStep2LogoData(false);
      setShowStep2WebData(false);
      setShowStep2VideoData(false);
      setShowUserOrders(false);
      setShowStep3Data(false);
      setShowStep2MobileData(true);
      setShowOrdersData(false);
      setShowContactData(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const fett = async () => {
    try {
      const response = await axios.get("http://45.55.45.170:8081/step3");
      setStep3Data(response.data);
      setShowStep1Data(false);
      setShowStep2Data(false);
      setShowStep3Data(true);
      setShowStep2LogoData(false);
      setShowStep2WebData(false);
      setShowUserOrders(false);
      setShowStep2VideoData(false);
      setShowStep2MobileData(false);
      setShowOrdersData(false);
      setShowContactData(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };


  return (
    <div>
      <Adminnavbar />
      <div className="admin-panel">
        <div className="sidebar">
          <button onClick={fetchData}>Contact Us</button>
          <button onClick={fetchdd}>User-Orders</button>
          <button onClick={fetchDat}>Orders</button>
          <button onClick={fetchDa}>Step1</button>
          <button onClick={fetchD}>Step2</button>
          <button onClick={fett}>Step3</button>
          <button onClick={fetch}>Step2-Logo</button>
          <button onClick={fetc}>Step2-Web</button>
          <button onClick={fet}>Step2-Video</button>
          <button onClick={fe}>Step2-Mobile</button>
          <Link to='/adp'><button>Create New</button></Link>
          
        </div>

        <div className="main-section">
          <h1>{props.name ? `Welcome - ${props.name}` : "Admin Panel"} </h1>
          {showContactData && (
            <div>
              <h2>Contact Us</h2>
            <table> 
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>ProjectName</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {Contact.map((noti) => (
                  <tr key={noti.id}>
                    <td>{noti.id}</td>
                    <td>{noti.name}</td>
                    <td>{noti.email}</td>
                    <td>{noti.projectname}</td>
                    <td>{noti.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          {showUserOrders && (
            <div>
            <h2>User-Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>C-id</th>
                  <th>Company</th>
                  <th>CompanySlogan</th>
                  <th>Logo</th>
                  <th>Web</th>
                  <th>Video</th>
                  <th>Mobile</th>
                  <th>red</th>
                  <th>pink</th>
                  <th>purple</th>
                  <th>blue</th>
                  <th>aqua</th>
                  <th>green</th>
                  <th>orange</th>
                  <th>grey</th>
                  <th>yellow</th>
                  <th>brown</th>
                  <th>multi</th>
                  <th>YourName</th>
                  <th>YourEmail</th>
                </tr>
              </thead>
              <tbody>
                {UserOrders.map((nott) => (
                  <tr key={nott.id}>
                    <td>{nott.cid}</td>
                    <td>{nott.company}</td>
                    <td>{nott.companyslogan}</td>
                    <td>{nott.logo}</td>
                    <td>{nott.web}</td>
                    <td>{nott.video}</td>
                    <td>{nott.mobile}</td>
                    <td>{nott.red}</td>
                    <td>{nott.pink}</td>
                    <td>{nott.purple}</td>
                    <td>{nott.blue}</td>
                    <td>{nott.aqua}</td>
                    <td>{nott.green}</td>
                    <td>{nott.orange}</td>
                    <td>{nott.grey}</td>
                    <td>{nott.yellow}</td>
                    <td>{nott.brown}</td>
                    <td>{nott.multi}</td>
                    <td>{nott.yourname}</td>
                    <td>{nott.youremail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          {showOrdersData && (
            <div>
            <h2>Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Company</th>
                  <th>CompanySlogan</th>
                  <th>YourName</th>
                  <th>YourEmail</th>
                </tr>
              </thead>
              <tbody>
                {Orders.map((not) => (
                  <tr key={not.id}>
                    <td>{not.id}</td>
                    <td>{not.company}</td>
                    <td>{not.companyslogan}</td>
                    <td>{not.yourname}</td>
                    <td>{not.youremail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          {showStep1Data && (
            <div>
            <h2>Step-1</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Company</th>
                  <th>CompanySlogan</th>
                </tr>
              </thead>
              <tbody>
                {Step1.map((notif) => (
                  <tr key={notif.cid}>
                    <td>{notif.cid}</td>
                    <td>{notif.company}</td>
                    <td>{notif.companyslogan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          {showStep2Data && (
            <div>
            <h2>Step-2</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Logo Design</th>
                  <th>Web Design</th>
                  <th>Video Animation</th>
                  <th>Mobile Application</th>
                </tr>
              </thead>
              <tbody>
                {Step2.map((notifi) => (
                  <tr key={notifi.cid}>
                    <td>{notifi.id}</td>
                    <td>{notifi.logo}</td>
                    <td>{notifi.web}</td>
                    <td>{notifi.video}</td>
                    <td>{notifi.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          {showStep2LogoData && (
            <div>
            <h2>Step-2-Logo</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Agriculture</th>
                  <th>Art</th>
                  <th>Construction</th>
                  <th>Business</th>
                  <th>Children</th>
                  <th>Religious</th>
                  <th>Fashion</th>
                  <th>Food</th>
                  <th>Games</th>
                  <th>Health</th>
                  <th>Travel</th>
                  <th>Education</th>
                  <th>Pet</th>
                  <th>Home</th>
                  <th>Real Estate</th>
                  <th>Security</th>
                  <th>Law</th>
                  <th>Beauty</th>
                  <th>Creative</th>
                  <th>Sports</th>
                  <th>Science</th>
                  <th>Transport</th>
                  <th>Music</th>
                  <th>Other</th>
                </tr>
              </thead>
              <tbody>
                {Step2LogoData.map((notific) => (
                  <tr key={notific.cid}>
                    <td>{notific.id}</td>
                    <td>{notific.agriculture}</td>
                    <td>{notific.art}</td>
                    <td>{notific.construction}</td>
                    <td>{notific.business}</td>
                    <td>{notific.children}</td>
                    <td>{notific.religious}</td>
                    <td>{notific.fashion}</td>
                    <td>{notific.food}</td>
                    <td>{notific.games}</td>
                    <td>{notific.health}</td>
                    <td>{notific.travel}</td>
                    <td>{notific.education}</td>
                    <td>{notific.pet}</td>
                    <td>{notific.home}</td>
                    <td>{notific.realestate}</td>
                    <td>{notific.securit}</td>
                    <td>{notific.law}</td>
                    <td>{notific.beauty}</td>
                    <td>{notific.creative}</td>
                    <td>{notific.sports}</td>
                    <td>{notific.science}</td>
                    <td>{notific.transport}</td>
                    <td>{notific.music}</td>
                    <td>{notific.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          {showStep2WebData && (
            <div>
            <h2>Step-2-Web</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Agriculture</th>
                  <th>Art</th>
                  <th>Construction</th>
                  <th>Business</th>
                  <th>Children</th>
                  <th>Religious</th>
                  <th>Fashion</th>
                  <th>Food</th>
                  <th>Games</th>
                  <th>Health</th>
                  <th>Travel</th>
                  <th>Education</th>
                  <th>Pet</th>
                  <th>Home</th>
                  <th>Real Estate</th>
                  <th>Security</th>
                  <th>Law</th>
                  <th>Beauty</th>
                  <th>Creative</th>
                  <th>Sports</th>
                  <th>Science</th>
                  <th>Transport</th>
                  <th>Music</th>
                  <th>Other</th>
                </tr>
              </thead>
              <tbody>
                {Step2WebData.map((notifica) => (
                  <tr key={notifica.cid}>
                    <td>{notifica.id}</td>
                    <td>{notifica.agriculture}</td>
                    <td>{notifica.art}</td>
                    <td>{notifica.construction}</td>
                    <td>{notifica.business}</td>
                    <td>{notifica.children}</td>
                    <td>{notifica.religious}</td>
                    <td>{notifica.fashion}</td>
                    <td>{notifica.food}</td>
                    <td>{notifica.games}</td>
                    <td>{notifica.health}</td>
                    <td>{notifica.travel}</td>
                    <td>{notifica.education}</td>
                    <td>{notifica.pet}</td>
                    <td>{notifica.home}</td>
                    <td>{notifica.realestate}</td>
                    <td>{notifica.securit}</td>
                    <td>{notifica.law}</td>
                    <td>{notifica.beauty}</td>
                    <td>{notifica.creative}</td>
                    <td>{notifica.sports}</td>
                    <td>{notifica.science}</td>
                    <td>{notifica.transport}</td>
                    <td>{notifica.music}</td>
                    <td>{notifica.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          {showStep2VideoData && (
            <div>
            <h2>Step-2-Video</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Agriculture</th>
                  <th>Art</th>
                  <th>Construction</th>
                  <th>Business</th>
                  <th>Children</th>
                  <th>Religious</th>
                  <th>Fashion</th>
                  <th>Food</th>
                  <th>Games</th>
                  <th>Health</th>
                  <th>Travel</th>
                  <th>Education</th>
                  <th>Pet</th>
                  <th>Home</th>
                  <th>Real Estate</th>
                  <th>Security</th>
                  <th>Law</th>
                  <th>Beauty</th>
                  <th>Creative</th>
                  <th>Sports</th>
                  <th>Science</th>
                  <th>Transport</th>
                  <th>Music</th>
                  <th>Other</th>
                </tr>
              </thead>
              <tbody>
                {Step2VideoData.map((notificat) => (
                  <tr key={notificat.cid}>
                    <td>{notificat.id}</td>
                    <td>{notificat.agriculture}</td>
                    <td>{notificat.art}</td>
                    <td>{notificat.construction}</td>
                    <td>{notificat.business}</td>
                    <td>{notificat.children}</td>
                    <td>{notificat.religious}</td>
                    <td>{notificat.fashion}</td>
                    <td>{notificat.food}</td>
                    <td>{notificat.games}</td>
                    <td>{notificat.health}</td>
                    <td>{notificat.travel}</td>
                    <td>{notificat.education}</td>
                    <td>{notificat.pet}</td>
                    <td>{notificat.home}</td>
                    <td>{notificat.realestate}</td>
                    <td>{notificat.securit}</td>
                    <td>{notificat.law}</td>
                    <td>{notificat.beauty}</td>
                    <td>{notificat.creative}</td>
                    <td>{notificat.sports}</td>
                    <td>{notificat.science}</td>
                    <td>{notificat.transport}</td>
                    <td>{notificat.music}</td>
                    <td>{notificat.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          {showStep2MobileData && (
            <div>
            <h2>Step-2-Mobile</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Agriculture</th>
                  <th>Art</th>
                  <th>Construction</th>
                  <th>Business</th>
                  <th>Children</th>
                  <th>Religious</th>
                  <th>Fashion</th>
                  <th>Food</th>
                  <th>Games</th>
                  <th>Health</th>
                  <th>Travel</th>
                  <th>Education</th>
                  <th>Pet</th>
                  <th>Home</th>
                  <th>Real Estate</th>
                  <th>Security</th>
                  <th>Law</th>
                  <th>Beauty</th>
                  <th>Creative</th>
                  <th>Sports</th>
                  <th>Science</th>
                  <th>Transport</th>
                  <th>Music</th>
                  <th>Other</th>
                </tr>
              </thead>
              <tbody>
                {Step2MobileData.map((notificati) => (
                  <tr key={notificati.cid}>
                    <td>{notificati.id}</td>
                    <td>{notificati.agriculture}</td>
                    <td>{notificati.art}</td>
                    <td>{notificati.construction}</td>
                    <td>{notificati.business}</td>
                    <td>{notificati.children}</td>
                    <td>{notificati.religious}</td>
                    <td>{notificati.fashion}</td>
                    <td>{notificati.food}</td>
                    <td>{notificati.games}</td>
                    <td>{notificati.health}</td>
                    <td>{notificati.travel}</td>
                    <td>{notificati.education}</td>
                    <td>{notificati.pet}</td>
                    <td>{notificati.home}</td>
                    <td>{notificati.realestate}</td>
                    <td>{notificati.securit}</td>
                    <td>{notificati.law}</td>
                    <td>{notificati.beauty}</td>
                    <td>{notificati.creative}</td>
                    <td>{notificati.sports}</td>
                    <td>{notificati.science}</td>
                    <td>{notificati.transport}</td>
                    <td>{notificati.music}</td>
                    <td>{notificati.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
          {showStep3Data && (
            <div>
            <h2>Step-3</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Agriculture</th>
                  <th>Art</th>
                  <th>Construction</th>
                  <th>Business</th>
                  <th>Children</th>
                  <th>Religious</th>
                  <th>Fashion</th>
                  <th>Food</th>
                  <th>Games</th>
                  <th>Health</th>
                  <th>Travel</th>
                  <th>Education</th>
                  <th>Pet</th>
                  <th>Home</th>
                  <th>Real Estate</th>
                  <th>Security</th>
                  <th>Law</th>
                  <th>Beauty</th>
                  <th>Creative</th>
                  <th>Sports</th>
                  <th>Science</th>
                  <th>Transport</th>
                  <th>Music</th>
                  <th>Other</th>
                </tr>
              </thead>
              <tbody>
                {Step3Data.map((notificatio) => (
                  <tr key={notificatio.cid}>
                    <td>{notificatio.id}</td>
                    <td>{notificatio.agriculture}</td>
                    <td>{notificatio.art}</td>
                    <td>{notificatio.construction}</td>
                    <td>{notificatio.business}</td>
                    <td>{notificatio.children}</td>
                    <td>{notificatio.religious}</td>
                    <td>{notificatio.fashion}</td>
                    <td>{notificatio.food}</td>
                    <td>{notificatio.games}</td>
                    <td>{notificatio.health}</td>
                    <td>{notificatio.travel}</td>
                    <td>{notificatio.education}</td>
                    <td>{notificatio.pet}</td>
                    <td>{notificatio.home}</td>
                    <td>{notificatio.realestate}</td>
                    <td>{notificatio.securit}</td>
                    <td>{notificatio.law}</td>
                    <td>{notificatio.beauty}</td>
                    <td>{notificatio.creative}</td>
                    <td>{notificatio.sports}</td>
                    <td>{notificatio.science}</td>
                    <td>{notificatio.transport}</td>
                    <td>{notificatio.music}</td>
                    <td>{notificatio.other}</td>
                  </tr>
                ))}
                
              </tbody>
            </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;

