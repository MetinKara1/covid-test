const CORPORATE_URL = '/Corporate';

export const CORPORATE = (id = null, corporateId = null) => {
  return {
    THIS: `${CORPORATE_URL}${id ? `/${id}` : ''}`,
    DOCUMENT: `${CORPORATE_URL}/${id}/document${
      corporateId ? `/${corporateId}` : ''
    }`,
    DOCUMENT_DOWNLOAD: `${CORPORATE_URL}/${id}/document/${corporateId}/download`,
  };
};
