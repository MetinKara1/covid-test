import tysClient from '../config/services/client';

const DEFAULT_QUERY = '/offer';

class OfferService {
  getOffer = payload =>
    tysClient.post(`${DEFAULT_QUERY}/getOffer`, payload).then(res => {
      // localStorage.setItem('user_id', res.data.userId);
      return res;
    });
}

export default OfferService;
