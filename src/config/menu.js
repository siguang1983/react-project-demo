const menuTree = [
    {
        permission: "home",
        index: "",
        title: "首页",
        icon: "fa fa-home"
    },
    {
        permission: "account:manage",
        index: "accountManagement",
        title: "账户管理",
        icon: "fa fa-user-circle-o"
    },
    {
        permission: "loan:audit",
        index: "financialApproval",
        title: "财务信息审批",
        icon: "fa fa-pencil-square-o",
    },
    {
        permission: "prepay:audit",
        index: "payAgentApproval",
        title: "代付管理",
        icon: "fa fa-pencil-square-o",
    },
    {
        permission: "repayment",
        index: "repayment",
        title: "划扣/还款管理",
        icon: "fa fa-credit-card",
    },
    {
        permission: "refund:audit",
        index: "afterSale",
        title: "售后管理",
        icon: "fa fa-phone",
    },
    {
        permission: "deration",
        index: "deration",
        title: "减免管理",
        icon: "fa fa-minus-square-o",
    },
    {
        permission: "remittanceConfirm:audit",
        index: "remittance",
        title: "汇款确认管理",
        icon: "fa fa-check-square-o",
        children: [
            {
                permission: "remittanceDetail:manage",
                index: "remittanceDetail",
                title: "汇款明细",
            },
            {
                permission: "remittanceConfirm:manage",
                index: "remittanceConfirmation",
                title: "汇款确认",
            }
        ]
    },
    {
        permission: "account_check_report",
        index: "accountCheckReport",
        title: "对账报表",
        icon: "fa fa-table",
    },
    {
        permission: "money_advance_import",
        index: "moneyAdvanceImport",
        title: "垫款记录导入",
        icon: "fa fa-upload",
    },
];

export default menuTree;