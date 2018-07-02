import {DATEFORMAT} from './dateFormat';

export const SETTINGS = {
  MULTISELECT_DROPDOWN: {
    singleSelection: false,
    text: '--Please Select--',
    selectAllText: 'Select All',
    unSelectAllText: 'Deselect All',
    enableSearchFilter: true,
    classes: 'myclass custom-class',
    badgeShowLimit: 2
  },

  MY_DATEPICKER: {
    dateFormat: DATEFORMAT.mmmdd_yyyy,
    showInputField:false,
    showClearDateBtn:false,
    editableDateField: false,
    firstDayOfWeek : 'su'
  }
};
