const path = require("path")
module.exports = { //1. api 요청이 있을때 어디에서 처리할지를 설정 
	devServer: {
		'/ssab': {
			target: 'http://localhost:3000/ssab',
			changeOrign: true,
			pathRewrite: {
				'^/ssab': ''
			}
		}
	},
	outputDir: path.resolve('../backend/public')
}