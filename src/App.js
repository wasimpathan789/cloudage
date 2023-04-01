import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import Deliver from './components/deliver/Deliver';
import Why from './components/why/Why';
import Navbar from './components/navbar/Navbar';
import ServicePage from './pages/servicepage/ServicePage';
import HomePage from './pages/homepage/HomePage';
import CorporatePage from './pages/corporatepage/CorporatePage';
import AboutPage from './pages/aboutpage/AboutPage';
import ContactPage from './pages/contactpage/ContactPage';
import AluminiPage from './pages/alumunipages/AluminiPage';
import EdgePage from './pages/edgepage/EdgePage';
import DataWareHousePage from './pages/datawarehousepage/DataWareHousePage';
import AiPage from './pages/AIpage/AiPage';
import AzureMicrosoftPage from './pages/futuristicPages/azureMicrosoftPage/AzureMicrosoftPage';
import CloudPage from './pages/cloudpage/CloudPage';
import DatabricksPage from './pages/futuristicPages/databricks/DatabricksPage';
import AwsMlPage from './pages/futuristicPages/awsMlPage/AwsMlPage';
import AzureMlPage from './pages/futuristicPages/azureMlPage/AzureMlPage';
import GcpMlPage from './pages/futuristicPages/gcpMlPage/GcpMlPage';
import HadoopPage from './pages/futuristicPages/hadoopPage/HadoopPage';
import EmrPage from './pages/futuristicPages/emrPage/EmrPage';
import HdInsightPage from './pages/futuristicPages/hdInsightPage/HdInsightPage';
import BiqQueryPage from './pages/futuristicPages/bigqueryPage/BiqQueryPage';
import GcpGooglePage from './pages/futuristicPages/gcpGooglePage/GcpGooglePage';
import AOS from "aos";
import 'aos/dist/aos.css';
import AmazonAwsPage from './pages/futuristicPages/amazonAwsPage/AmazonAwsPage';

AOS.init();
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/about" element = {<AboutPage/>}/>
        <Route path="/service" element = {<ServicePage/>}/>
        <Route path="/contact" element = {<ContactPage/>}/>
        <Route path="/corporate" element = {<CorporatePage/>}/>
        <Route path="/alumini" element = {<AluminiPage/>}/>
        <Route path="/edge" element = {<EdgePage/>}/>
        <Route path="/datawarehouse" element = {<DataWareHousePage/>}/>
        <Route path="/ai" element = {<AiPage/>}/>
        <Route path="/cloud" element = {<CloudPage/>}/>

        <Route path="/azuremicrosoft" element = {<AzureMicrosoftPage/>}/>
        <Route path="/databricks" element = {<DatabricksPage/>}/>
        <Route path="/awsml" element = {<AwsMlPage/>}/>
        <Route path="/azureml" element = {<AzureMlPage/>}/>
        <Route path="/gcpml" element = {<GcpMlPage/>}/>
        <Route path="/hadoop" element = {<HadoopPage/>}/>
        <Route path="/emr" element = {<EmrPage/>}/>
        <Route path="/hdinsight" element = {<HdInsightPage/>}/>
        <Route path="/bigquery" element = {<BiqQueryPage/>}/>
        <Route path="/gcpgoogle" element = {<GcpGooglePage/>}/>
        <Route path="/amazonaws" element = {<AmazonAwsPage/>}/>



        







        
















      </Routes>

    </BrowserRouter>
  );
}

export default App;
