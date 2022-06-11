// components/progress-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    color: {
      type: String,
      value: '',
    },
    trackColor: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      value: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    trackStyle: null,
    barStyle: null
  },
  lifetimes: {
    attached(){
      this.buildTrackStyle()
      this.buildBarStyle()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    buildTrackStyle(){
      let trackStyle = ''
      trackStyle +=  this.properties.trackColor && 'background-color:' + this.properties.trackColor + ';'
      this.setData({
        trackStyle
      })
    },
    buildBarStyle(){
      // width: {{ value + '%' }};{{ color && 'background-color:' + color }}
      let barStyle = ''
      let width = 0;
      if(this.properties.value > 0 && this.properties.value < 100) {
        width = this.properties.value
      }
      barStyle += `width: ${width}%;`;
      barStyle += this.properties.color && `background-color: ${this.properties.color};`;
      this.setData({
        barStyle
      })
    }
  }
})
