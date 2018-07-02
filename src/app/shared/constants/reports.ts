import {APIURL} from './apiUrl';

export const REPORTS = {


  REPORT_TYPE_LIST: [
    {
      id: 1,
      value: 'Comprehensive Audit',
      apiURl: APIURL.getMasterDashboardDetails
    },
    {
      id: 2,
      value: '21-Day Challenge',
      apiURl: APIURL.get21DayChallengeReport
    },
    {
      id: 3,
      value: 'Single Metric over Time',
      apiURl: APIURL.getDashOnlyMetricOverTime
    }
  ],

  REPORT_VIEW_LIST: [
    {
      id: 1,
      value: 'Master-dashboard',
      apiURl: APIURL.getMasterDashboardDetails
    },
    {
      id: 2,
      value: 'IV Dressing By Unit - All Lines',
      apiURl: APIURL.getIVDressingCompByUnitReport
    },
    {
      id: 3,
      value: 'IV Dressing By Unit - Central Lines',
      apiURl: APIURL.getIVDressingCentralLine
    },
    {
      id: 4,
      value: 'IV Dressing By Unit - Peripheral Lines',
      apiURl: APIURL.getIVDressingPeriPheralLine
    },
    {
      id: 5,
      value: 'IV Dressing By Line Type',
      apiURl: APIURL.getIVDressingLineType
    },
    {
      id: 6,
      value: 'Tubing and Disinfecting Port Protector By Unit',
      apiURl: APIURL.getTubingDisinfectingPortByUnit
    }
  ],
  SHIFT_LIST: [
    {
      id: 1,
      value: 'Day'
    },
    {
      id: 2,
      value: 'Night'
    },
    {
      id: 3,
      value: 'Both'
    },
  ],
  REPORT_LIST: [
    {
      id: 1,
      value: 'Master',
      apiURl: APIURL.getMasterDashboardDetails
    },
    {
      id: 2,
      value: 'IV Dressing By Unit - All Lines',
      apiURl: APIURL.getIVDressingCompByUnitReport
    },
    {
      id: 3,
      value: 'IV Dressing By Unit - Central Lines',
      apiURl: APIURL.getIVDressingCentralLine
    },
    {
      id: 4,
      value: 'IV Dressing By Unit - Peripheral Lines',
      apiURl: APIURL.getIVDressingPeriPheralLine
    },
    {
      id: 5,
      value: 'IV Dressing By Line Type',
      apiURl: APIURL.getIVDressingLineType
    },
    {
      id: 6,
      value: 'Tubing and Disinfecting Port Protector By Unit',
      apiURl: APIURL.getTubingDisinfectingPortByUnit
    }
  ],
  KEY_CONSTANTS: {
    GOAL: 'Goal',
    COMMENTS: 'COMMENTS',
    MASTER_DASHBOARD: 'Master-Dashboard'
  },

  COMPREHENSIVE_REPORT: {
    IVDressing: [
      {
        header: "Unit",
        css: "col-xs-2 firstcol",
        icon: false,
        key: "unitName",
        style: 'firstcol'
      }, {
        header: "# IV Sites",
        css: "col-xs-1",
        key: "lineCountPerUnit",
        style: 'seccol',
        icon: false
      }, {
        header: "Insertion Site Visible",
        css: "col-xs-1",
        key: "insertionSiteVisiblePerentage",
        icon: true
      }, {
        header: "CHG Present At Insertion Site",
        css: "col-xs-1",
        key: "chgPresentAtLineSitePercentage",
        icon: true
      }, {
        header: "CHG Placement in Alignment With Facility Protocol",
        css: "col-xs-1",
        key: "chgPlacementAlignmentWithFacilityProtocolPercentage",
        icon: true
      }, {
        header: "Dressings Within Date",
        css: "col-xs-1",
        key: "dressingWithinDatePercentage",
        icon: true
      }, {
        header: "Clean",
        css: "col-xs-1",
        key: "cleanPercentage",
        icon: true
      }, {
        header: "Dry",
        css: "col-xs-1",
        key: "dryPercentage",
        icon: true
      }, {
        header: "Intact",
        css: "col-xs-1",
        key: "intactPercentage",
        icon: true
      }
    ],

    Tubing: [
      {
        header: "Unit",
        css: "col-xs-2 firstcol",
        icon: false,
        key: "unitName",
        style: 'firstcol'
      }, {
        header: "# Patients",
        css: "col-xs-1",
        key: "lineCountPerUnit",
        style: 'seccol',
        icon: false
      }, {
        header: "# Ports",
        css: "col-xs-1",
        key: "portsEvaluated",
        style: 'seccol',
        icon: false
      }, {
        header: "All Tubing Within Date",
        css: "col-xs-1",
        key: "allTubingWithinDatePercentage",
        icon: true
      }, {
        header: "Needleless Connector Patient Compliance",
        css: "col-xs-1",
        key: "needlelessConnectorPatientCompliancePercentage",
        icon: true
      }, {
        header: "Needleless Connector Port Compliance",
        css: "col-xs-1",
        key: "needlelessConnectorPortCompliancePercentage",
        icon: true
      }, {
        header: "Male Luer Patient Compliance",
        css: "col-xs-1",
        key: "maleLuerPatientCompliancePercentage",
        icon: true
      }, {
        header: "Male Luer Cap Compliance",
        css: "col-xs-1",
        key: "maleLuerCapCompliancePercentage",
        icon: true
      }, {
        header: "Open Female Luer Patient Compliance",
        css: "col-xs-1",
        key: "openFemaleLuerPatientCompliancePercentage",
        icon: true
      }, {
        header: "Open Female Luer Port Compliance",
        css: "col-xs-1",
        key: "openFemaleLuerPortCompliancPercentage",
        icon: true
      }, {
        header: "Total Patient Compliance",
        css: "col-xs-1",
        key: "totalPatientCompliancePercentage",
        icon: true
      }, {
        header: "Total Port Compliance Percentage",
        css: "col-xs-1",
        key: "totalPortCompliancePercentagePercentage",
        icon: true
      }, {
        header: "Port Protector Bedside Accessibility",
        css: "col-xs-1",
        key: "portProtectorBedsideAccessibilityPercentage",
        icon: true
      }
    ],

    LineType: [
      {
        header: "Unit",
        css: "col-xs-2 firstcol",
        icon: false,
        key: "lineType",
        style: 'firstcol'
      }, {
        header: "Lines",
        css: "col-xs-1",
        key: "linesAudited",
        style: 'seccol',
        icon: false
      }, {
        header: "Insertion Site Visible",
        css: "col-xs-1",
        key: "insertionSiteVisiblePerentage",
        icon: true
      }, {
        header: "CHG Present at Insertion Site",
        css: "col-xs-1",
        key: "chgPresentAtLineSitePercentage",
        icon: true
      }, {
        header: "Dressings Within Date",
        css: "col-xs-1",
        key: "dressingWithinDatePercentage",
        icon: true
      }, {
        header: "Dry",
        css: "col-xs-1",
        key: "dryPercentage",
        icon: true
      }, {
        header: "Intact",
        css: "col-xs-1",
        key: "intactPercentage",
        icon: true
      }, {
        header: "Comments",
        css: "col-xs-1",
        key: "comments",
        icon: false
      }
    ],

    UnitAllCentralPeripheralLines: [
      {
        header: "Unit",
        css: "col-xs-2 firstcol",
        icon: false,
        key: "unitName",
        style: 'firstcol'
      }, {
        header: "# Lines Audited",
        css: "col-xs-1",
        key: "linesAudited",
        style: 'seccol',
        icon: false
      }, {
        header: "Insertion Site Visible",
        css: "col-xs-1",
        key: "insertionSiteVisiblePerentage",
        icon: true
      }, {
        header: "CHG Present at Insertion Site",
        css: "col-xs-1",
        key: "chgPresentAtLineSitePercentage",
        icon: true
      }, {
        header: "CHG Placement in Alignment With Facility Protocol",
        css: "col-xs-1",
        key: "chgPlacementAlignmentWithFacilityProtocolPercentage",
        icon: true
      }, {
        header: "Dressings Within Date",
        css: "col-xs-1",
        key: "dressingWithinDatePercentage",
        icon: true
      }, {
        header: "Clean",
        css: "col-xs-1",
        key: "cleanPercentage",
        icon: true
      }, {
        header: "Dry",
        css: "col-xs-1",
        key: "dryPercentage",
        icon: true
      }, {
        header: "Intact",
        css: "col-xs-1",
        key: "intactPercentage",
        icon: true
      }, {
        header: "Comments",
        css: "col-xs-1",
        key: "comments",
        icon: false
      }
    ],

    TubingDisinfectingByUnit: [
      {
        header: "Unit",
        css: "col-xs-2 firstcol",
        icon: false,
        key: "unitName",
        style: 'firstcol'
      }, {
        header: "# Patients",
        css: "col-xs-1",
        key: "patientsEvaluated",
        style: 'seccol',
        icon: false
      }, {
        header: "# Ports",
        css: "col-xs-1",
        key: "portsEvaluated",
        style: 'seccol',
        icon: false
      }, {
        header: "All Tubing within date",
        css: "col-xs-1",
        key: "allTubingWithinDatePercentage",
        icon: true
      }, {
        header: "Needleless Connector Patient Compliance",
        css: "col-xs-1",
        key: "needlelessConnectorPatientCompliancePercentage",
        icon: true
      }, {
        header: "Needleless Connector Port Compliance",
        css: "col-xs-1",
        key: "needlelessConnectorPortCompliancePercentage",
        icon: true
      }, {
        header: "Male Luer Patient Compliance",
        css: "col-xs-1",
        key: "maleLuerPatientCompliancePercentage",
        icon: true
      }, {
        header: "Male Luer Port Compliance",
        css: "col-xs-1",
        key: "maleLuerCapCompliancePercentage",
        icon: true
      }, {
        header: "Open Female Luer Patient Compliance",
        css: "col-xs-1",
        key: "openFemaleLuerPatientCompliancePercentage",
        icon: true
      }, {
        header: "Open Female Luer Port Compliance",
        css: "col-xs-1",
        key: "openFemaleLuerPortCompliancPercentage",
        icon: true
      }, {
        header: "Total Patient Compliance",
        css: "col-xs-1",
        key: "totalPatientCompliancePercentage",
        icon: true
      }, {
        header: "Total Port Compliance",
        css: "col-xs-1",
        key: "totalPortCompliancePercentagePercentage",
        icon: true
      }, {
        header: "Port Protector Bedside Accessibility",
        css: "col-xs-1",
        key: "portProtectorBedsideAccessibilityPercentage",
        icon: true
      }, {
        header: "Comments",
        css: "col-xs-1",
        key: "comments",
        icon: false
      }
    ],
  },
    MetricTypeList: [
      {"metricId": 1, "metricName": "Insertion Site Visible"},
      {"metricId": 2, "metricName": "CHG Present at Insertion Site"},
      {"metricId": 3, "metricName": "CHG Placement in Alignment with Facility Protocol"},
      {"metricId": 4, "metricName": "Dressings within Date"},
      {"metricId": 5, "metricName": "Clean"},
      {"metricId": 6, "metricName": "Dry"},
      {"metricId": 7, "metricName": "Intact"},
      {"metricId": 8, "metricName": "All Tubing within Date"},
      {"metricId": 9, "metricName": "Needleless Connector Patient Compliance"},
      {"metricId": 10, "metricName": "Needleless Connector Port Compliance"},
      {"metricId": 11,"metricName": "Male Luer Patient Compliance"},
      {"metricId": 12, "metricName": "Male Luer Port Compliance"},
      {"metricId": 13,"metricName": "Open Female Luer Patient Compliance"},
      {"metricId": 14, "metricName": "Open Female Luer Port Compliance"},
      {"metricId": 15,"metricName": "Total Patient Compliance"},
      {"metricId": 16, "metricName": "Total Port Compliance"},
      {"metricId": 17,"metricName": "Port Protector Bedside Accessibility"}
    ]

};
