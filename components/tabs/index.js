// components/tabs/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
    linePositionX: 0,
    lineWidth: 0,
  },
  lifetimes: {
    attached() {
      this.calculateLinePositionX()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTab(e){
      let { index } = e.target.dataset
      this.setData({ 
        current: index
      })
      this.calculateLinePositionX(index)
    },
    calculateLinePositionX(index = 0){
      this.createSelectorQuery().selectAll('.tab').boundingClientRect(res =>{
        const rect = res[index]
        const { width, left } = rect
        const currentCenterX = (left - res[0].left) + width / 2
        const lineWidth = width * 0.8
        const linePositionX = currentCenterX - (lineWidth / 2)
        this.setData({
          lineWidth,
          linePositionX
        })
      }).exec()
    },
  }
})
