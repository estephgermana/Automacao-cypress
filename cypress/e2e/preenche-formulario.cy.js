import VehicleDataPage from '../pages/VehicleDataPage';
import InsurantDataPage from 'pages/InsurantDataPage.js';
import ProductDataPage from '../pages/ProductDataPage';
import PriceOptionPage from '../pages/PriceOptionPage';
import SendQuotePage from '../pages/SendQuotePage';

describe('Formulário de Cotação de Seguro', () => {
  const vehicleDataPage = new VehicleDataPage();
  const insurantDataPage = new InsurantDataPage();
  const productDataPage = new ProductDataPage();
  const priceOptionPage = new PriceOptionPage();
  const sendQuotePage = new SendQuotePage();

  it('Deve preencher o formulário completo e enviar a cotação', () => {
    vehicleDataPage.visit();
    vehicleDataPage.fillForm();
    vehicleDataPage.clickNext();

    insurantDataPage.fillForm();
    insurantDataPage.clickNext();

    productDataPage.fillForm();
    productDataPage.clickNext();

    priceOptionPage.selectPriceOption();
    priceOptionPage.clickNext();

    sendQuotePage.fillForm();
    sendQuotePage.clickSend();
    sendQuotePage.verifyLoadingComplete();
  });
});
