import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import SeoInsighterX from './SeoInsighterX';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './Login';
import Signup from './Signup';
import Step1 from './Step1';
import Step2 from './Step2';
import Step2logo from './Step2logo';
import Step2Web from './Step2Web';
import Step2Video from './Step2Video';
import Step2Mobile from './Step2Mobile';
import WebsiteType from './Websitetype';
import VideoServices from './VideoServices';
import MobilePlatform from './MobilePlatform';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Contact from './Contact';
import About from './About';
import reportWebVitals from './reportWebVitals';
import Marketing from './Marketing';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import Logo from './Logo';
import WebDesign from './WebDesign';
import VideoAnimation from './VideoAnimation';
import MobileApp from './MobileApp';
import Colorpicker from './Colorpicker';
import Brief from './Brief';
import AdminPanel from './AdminPanel';
import Adp from './Adp';
import CheckoutForm from './CheckoutForm';
import Apps from './Apps';
import SelectionTable from './SelectionTable';
import PaymentForm from './PaymentForm';
import CheckboxList from './CheckboxList';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/adp",
    element: <Adp/>,
  },
  {
    path: "/pay",
    element: <PaymentForm/>,
  },
  {
    path: "/check",
    element: <CheckboxList/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/apps",
    element: <Apps/>,
  },
  {
    path: "/selectiontable",
    element: <SelectionTable/>,
  },
  {
    path: "/step1",
    element: <Step1/>,
  },
  {
    path: "/admin-panel",
    element: <AdminPanel />,
  },
  {
    path: "/step2",
    element: <Step2/>,
  },
  {
    path: "/checkout",
    element: <CheckoutForm/>,
  },
  {
    path: "/step2-logo",
    element: <Step2logo/>,
  },
  {
    path: "/step2-web-design",
    element: <Step2Web/>,
  },
  {
    path: "/step2-video-services",
    element: <Step2Video/>,
  },
  {
    path: "/step2-mobile-app",
    element: <Step2Mobile/>,
  },
  {
    path: "/website-type",
    element: <WebsiteType/>,
  },
  {
    path: "/video-services",
    element: <VideoServices/>,
  },
  {
    path: "/mobile-platform",
    element: <MobilePlatform/>,
  },
  {
    path: "/step3",
    element: <Step3/>,
  },
  {
    path: "/color-picker",
    element: <Colorpicker/>,
  },
  {
    path: "/brief",
    element: <Brief/>,
  },
  {
    path: "/step4",
    element: <Step4/>,
  },
  {
    path: "/finalstep",
    element: <Step5/>,
  },
  {
    path: "/",
    element: <SeoInsighterX/>,
  },
  {
    path:"SeoInsighterX/home",
    element: <SeoInsighterX/>
  },
  {
    path: "/homepage",
    element: <Homepage/>,
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/digital-marketing-service",
    element: <Marketing />
  },
  {
    path:"/portfolio",
    element: <Portfolio />
  },
  {
    path:"/pricing",
    element: <Pricing />
  },
  {
    path:"/logo-and-branding-identity",
    element: <Logo />
  },
  {
    path:"/web-design-services",
    element: <WebDesign />
  },
  {
    path:"/animation-videos",
    element: <VideoAnimation />
  },
  {
    path:"/mobile-app-developers",
    element: <MobileApp />
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-gnvzq5vwhs28hdlu.us.auth0.com"
    clientId="ymhfN8EREKIJ9HotvhDKsQ2Pce5j1UVs"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    {/* <Question3 /> */}
    {/* <ButtonAppBar /> */}
    {/* <Homepage /> */}
    {/* <Designcater /> */}
    {/* <Questions /> */}
    {/* <Question2 /> */}
    {/* <Question4 /> */}
    <RouterProvider router={router} />
    {/* <Onskip /> */}
    {/* <Rough /> */}
    {/* <App /> */}
  </React.StrictMode>
  </Auth0Provider>
);
reportWebVitals();
