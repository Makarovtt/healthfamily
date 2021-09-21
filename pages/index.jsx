import Layout from '../components/layout/Layout';
import AboutUs from '../components/pages/HomePage/AboutUs';
import Banner from '../components/pages/HomePage/Banner';
import MainContainer from '../components/UI/MainContainer';
import PriceOfService from '../components/pages/HomePage/PriceOfService';
import Questions from '../components/pages/HomePage/Questions';
import FormQuestion from '../components/pages/HomePage/FormQuestion';
import Advanteges from '../components/pages/HomePage/Advanteges';
import IndicationProcedure from '../components/pages/HomePage/IndicationProcedure';

function index() {
    return (
        <MainContainer>
            <Layout
                title=''
                description='Гинекология в Астрахани'>
                <Banner />
                <IndicationProcedure />
                <Advanteges />
                <PriceOfService />
                <Questions />
                <AboutUs />
                <FormQuestion />
            </Layout>
        </MainContainer>
    )
}



export default index;
