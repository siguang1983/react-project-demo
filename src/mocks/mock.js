
var Mock = require('mockjs');
let Random = Mock.Random;

Mock.mock('/login', 'post', {
	statue: "0",
	message: '',
	data: {
		"perms": {
			"dataPerms": [], 
			"isAdmin": false, 
			"isNeedResetPwd": "true",
			"email":"用户邮箱",
			"realName":"真实姓名",
			"menuPerms": [   
				{
					"description": "用户登入", 
					"name": "testperm", 
					"permission": "login:*", 
					"type": "ACTION",  
					"url": "/testPerm"
				}
			]
		}
	}
})

Mock.mock('/logout', 'post', {
	"data": {},
	"message": "",
	"status": "0"
})

// 汇款明细
Mock.mock('/remittanceDetail/findAllRemittanceDetails', {
    "message": "",
    "data": {
        "pagination": {
            "pageSize": 20,
            "currentPage|1-10": 1
        },
        "list|20": [
            {
                "number|+1": 1,
                "incomeTime": Random.datetime('yyyy-MM-dd HH:mm:ss'),
                "serialNumber": /\d{10}/,
                "incomeBank": /建行|工行|人民银行|招商银行/,
                "incomeAccount": /\d{16}/,
                "amount|100-500": 100,
                "balance|0-200": 100,
                "paymentBank": /建行|工行|人民银行|招商银行/,
                "paymentAccount": /\d{16}/,
                "paymentAccountName|6": /\w/,
                "remittanceType": /微信|支付宝|现金|支票/,
                "summary|8-16": /\w/,
                "branch": /建行|工行|人民银行|招商银行/,
                "status": /未匹配|已匹配|等待处理/
            }
        ],
        "recordsTotal|100-400": 100
    },
    "status": 0
})

export default Mock