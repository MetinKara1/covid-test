import tysClient from '../config/services/client';

const DEFAULT_QUERY = '/api';

class OfferService {
  addOffer = payload =>
    tysClient.post(`${DEFAULT_QUERY}/addOfferCorporate`, payload).then(res => {
      // localStorage.setItem('user_id', res.data.userId);
      return res;
    });
}

export default OfferService;
