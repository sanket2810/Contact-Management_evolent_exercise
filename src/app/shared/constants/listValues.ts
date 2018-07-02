export const LOV = {
  incoTermsCodeList: [
    {code: 'DDP', description: 'Delivered Duty Paid'},
    {code: 'DDU', description: 'Delivered Duty Unpaid'},
    {code: 'DEQ', description: 'Delivered Ex Quay'},
    {code: 'DES', description: 'Delivered Ex Ship'},
    {code: 'DAF', description: 'Delivered At Frontier'},
  ],

  unitList: [
    {code: 'KG', description: 'KG'},
    {code: 'Dozen', description: 'Dozen'},
    {code: 'Tray', description: 'Tray'}
  ],

  taxList: [
    {code: 'A_GEN_TAX', description: 'Always Taxable'},
    {code: 'A_GEN_NOTAX', description: 'Always Nontaxable'}
  ],

  freightChargeTypeList: [
    {code: 'consigneeCollects', description: 'Consignee Collects'},
    {code: 'prepay', description: 'Prepay and Add'},
    {code: 'thirdParty', description: ' Third Party'},
    {code: 'cod', description: 'Cash on Delivery'},
    {code: 'fob', description: 'Free-on-Board'},
  ],

  paymentList: [
    {code: 'Cash', description: 'Cash'},
    {code: 'Cheque', description: 'Cheque'},
    {code: 'DD', description: 'DD'}
  ],

  creditorAccountList: [
    {code: 'IBAN', description: 'IBAN'}
  ],

  creditorAccountTypeList: [
    {code: 'Cash', description: 'Cash'}
  ],

  partyList: [
    {code: 'p1', description: 'Party1'},
    {code: 'p2', description: 'Party2'},
    {code: 'p3', description: 'Party3'},
    {code: 'p4', description: 'Party4'},
  ],

  contractWizardLabelList: [
    {label: 'Basic Info'},
    {label: 'Trigger Data'},
    {label: 'Buyer Details'},
    {label: 'Seller Info'},
    {label: 'Bill To Details'},
    {label: 'Ship To Details'},
    {label: 'Purchase Order'},
    {label: 'Goods Details'},
    {label: 'Payment Terms'},
    {label: 'Settlement Terms'},
    {label: 'Contract Signatories'},
  ],

  goodsWizardLabelList: [
    {label: 'Line item details'},
    {label: 'Buyer/Seller define info'},
    {label: 'Transportation means'},
    {label: 'Summary'}
  ]
};
