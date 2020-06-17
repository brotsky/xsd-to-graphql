const { toArray } = require('lodash');

const CONFIGS = {
  IBKR_ADVISOR_ACCOUNT_ID: '4732914', // shareGRO Advisor Account ID on IBKR
  USER_PREFIX: 'share',
  USER_ACCOUNT_TYPE: 'INDIVIDUAL',
  COUNTRY: 'USA',
  CURRENCY: 'USD',
  PHONE_TYPE: 'Mobile',
  TIN_TYPE: 'SSN',
  W9_CUSTOMER_TYPE: 'Individual',
  W9_FORM_NUMBER: 5002,
  W9_TAX_FORM_FILE: 'Form5002.pdf',
  ACCOUNT_TITLE: 'Account Holder',
  MARGIN_TYPE: 'CASH',
}

const REGULATORY_INFORMATION = {
  AFFILIATION: 'AFFILIATION',
  IBACCOUNTS: 'IBACCOUNTS',
  REGULATORYCONTROL: 'REGULATORYCONTROL',
  EXCHANGEMEMBERSHIP: 'EXCHANGEMEMBERSHIP', 
}

const COUNTRIES = {
  UNITED_STATES: 'UNITED STATES',
}

const ALL_COUNTRIES = toArray(COUNTRIES);

const PRODUCTS = {
  STOCKS: 'STOCKS',
}

const ALL_PRODUCTS = toArray(PRODUCTS);

const ALL_TRADING_PERMISSIONS = [];
ALL_COUNTRIES.forEach(country => {
  ALL_PRODUCTS.forEach(product => {
    ALL_TRADING_PERMISSIONS.push({
      country,
      product,
    })
  })
})

const DOCUMENT_NUMBERS = [5002, 1005, 2109, 2192, 3024, 3044, 3070, 3071, 3074, 3077, 3094, 3230, 4009, 4016, 4035, 4036, 6105, 6108, 9130, 9490, 3007, 3076, 4003, 5013]

module.exports = {
  CONFIGS,
  REGULATORY_INFORMATION,
  COUNTRIES,
  ALL_COUNTRIES,
  PRODUCTS,
  ALL_PRODUCTS,
  ALL_TRADING_PERMISSIONS,
  DOCUMENT_NUMBERS,
}
