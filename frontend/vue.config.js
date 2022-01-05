const path = require("path")
module.exports = { //1. api 요청이 있을때 어디에서 처리할지를 설정 
	devServer: {
		'/api': {
			target: 'http://localhost:3000/ssab',
			changeOrign: true,
			pathRewrite: {
				'^/api': ''
			}
		}
	},
	outputDir: path.resolve('../backend/public')
}