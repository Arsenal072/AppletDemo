//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
        partyName: 'Yellow',
        mobileNumber: '18969122530',
        email: 'zjutGQchen@163.com',
        showImg: false,
        showButton: true
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(log => {
                return util.formatTime(new Date(log))
            })
        })
    },
    beMyGf() {
        let that = this
        wx.showModal({
            title: '提示',
            content: '小鱼，你愿意做我的女朋友吗？',
            success: function (res) {
                if (res.confirm) {
                    that.setData({
                        showImg: true,
                        showButton: false
                    })
                } else {
                    that.setData({
                        showImg: true,
                        showButton: false
                    })
                }
            }
        })
    }
})
