/* 线图*/

/* 直接绑定
var vue_line_chart={
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
  
}
*/

/* 根据数据绑定
var vue_line_chart={
  extends: VueChartJs.Line,
  data: function(){
      return {
          lineDatas: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: 'Data One',
                          backgroundColor: '#f87979',
                          data: [40, 39, 10, 40, 39, 80, 40]
                        }
                      ]
                    } 
    
    }
  },
  mounted () {
    this.renderChart(this.lineDatas, {responsive: true, maintainAspectRatio: false})
  }
  
}

*/

/* 父组件传递 */
const vue_line_chart={
  extends: VueChartJs.Line,
  props: ['lineDatas'],
  mounted () {
    this.renderChart(this.lineDatas, {responsive: true, maintainAspectRatio: false})
  },
  watch: {
      lineDatas () {
        this.renderChart(this.lineDatas, {responsive: true, maintainAspectRatio: false})
        console.log("update line")
      }
    }
}

const vue_bar_chart={
  extends: VueChartJs.Bar,
  props: ['barDatas'],
  mounted () {
    this.renderChart(this.barDatas)
  },
  watch: {
      barDatas () {
        this.renderChart(this.barDatas)
        console.log("update bar")
      }
    }
}
const vue_doughnut_chart={
  extends: VueChartJs.Doughnut,
  props: ['doughnutDatas'],
  mounted () {
    this.renderChart(this.doughnutDatas)
  },
  watch: {
      doughnutDatas () {
        this.renderChart(this.doughnutDatas)
        console.log("update doughnut")
      }
    }
}

const vue_pie_chart={
  extends: VueChartJs.Pie,
  props: ['pieDatas'],
  mounted () {
    this.renderChart(this.pieDatas)
  },
  watch: {
      pieDatas () {
        this.renderChart(this.pieDatas)
        console.log("update pie")
      }
    }
}
