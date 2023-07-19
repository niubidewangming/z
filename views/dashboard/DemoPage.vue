<template>
  <page-header-wrapper :title="false" :content="'新增二级商协议'">
    <a-divider :dashed="true">1.协议主体</a-divider>
    <a-card>
      <a-form>
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item label="协议客户" :required="true">
              <a-button>选择客户</a-button>
              上海正也医药有限公司
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="协议状态" :required="false">
              <a-select default-value="正常" style="width: 200px">
                <a-select-option value="正常">
                  正常
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="购进指标" :required="false">
              <a-space>
                <a-select default-value="金额" style="width: 100px">
                  <a-select-option value="金额">
                    金额
                  </a-select-option>
                </a-select>
                <a-input placeholder="输入金额/数量" disabled></a-input>
              </a-space>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="纯销指标" :required="false">
              <a-space>
                <a-input placeholder="金额" style="width: 100px"></a-input>
                <a-input placeholder="输入金额/数量" disabled></a-input>
              </a-space>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="销售区域" :required="false">
              <a-space>
                <a-input placeholder="选择区域" style="width: 100px"></a-input>
                <a-tag color="blue" closable>全国</a-tag>
              </a-space>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="签订时间" :required="false">
              <a-space>
                <a-date-picker :default-value="moment('2020/02/01 18：25', dateFormat)" :format="dateFormat" style="width: 200px" />
              </a-space>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="购进渠道" :required="false">
              <a-space>
                <a-select default-value="指定渠道" style="width: 100px">
                  <a-select-option value="指定渠道">
                    指定渠道
                  </a-select-option>
                </a-select>
                <a-input placeholder="请选择渠道" style="width: 100px"></a-input>
              </a-space>
            </a-form-item>
          </a-col>
          <a-table :columns="columns" :data-source="data" size="middle" :pagination="false"></a-table>
        </a-row>
      </a-form>
    </a-card>
    <a-divider :dashed="true">2.产品政策</a-divider>
    <div>
      <a-space size="large" align="center">
        <a-button type="primary">添加产品</a-button>
        <p style="margin-bottom:0">购进总指标(万元): ¥152.65</p>
        <p style="margin-bottom:0">指标按季度分解(万元): 【Q1】 ¥12.5,【Q2】 ¥12.5,[Q3] ¥12.5,[Q4] ¥12.5</p>
        <p style="margin-bottom:0">纯销总指标(万元): ¥152.65</p>
      </a-space>
    </div>
    <a-card>
      <div style="display:flex;justify-content: space-between">
        <a-form>
          <a-row :gutter="24">
            <a-col :span="12">
              <a-form-item label="产品">
                <a-space>
                  <a-select placeholder="选择产品" style="width: 150px">
                    <a-select-option value="内容">
                      内容
                    </a-select-option>
                  </a-select>
                  <span style="color:#75A6FF">美复胶丸</span>
                  <span style="color:#75A6FF">24粒/盒</span>
                </a-space>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="协议效期" :required="false">
                <a-range-picker
                  :default-value="[moment('2020/02/01', dateFormat), moment('2020/05/01', dateFormat)]"
                  :format="dateFormat"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <a-button>删除</a-button>
      </div>
    </a-card>
    <a-card>
      <a-table :columns="columnsTop" :data-source="dataTop" size="middle" :pagination="false">
        <template slot="name">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
        <template slot="age">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
        <template slot="address">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
        <template slot="first">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
        <template slot="two">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
        <template slot="three">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
        <template slot="four">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
      </a-table>
      <a-table :columns="columnsBottom" :data-source="dataBottom" size="middle" :pagination="false">
        <template slot="name">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
        <template slot="age">
          <a-select placeholder="单选项1" style="width: 150px">
            <a-select-option value="单选项1">
              单选项1
            </a-select-option>
          </a-select>
        </template>
        <template slot="address">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
        <template slot="first">
          <a-select placeholder="多选项1" style="width: 150px">
            <a-select-option value="多选项1">
              多选项1
            </a-select-option>
          </a-select>
        </template>
        <template slot="two">
          <a-input disabled placeholder="请输入"></a-input>
        </template>
        <template slot="three">
          <a-select placeholder="多选项1" style="width: 150px">
            <a-select-option value="多选项1">
              多选项1
            </a-select-option>
          </a-select>
        </template>
        <template slot="four">
          <a-date-picker :default-value="moment('2020/05/15 18：25', dateFormat)" :format="dateFormat" style="width: 200px" />
        </template>
        <template slot="five">
          <a-date-picker :default-value="moment('2020/05/15 18：25', dateFormat)" :format="dateFormat" style="width: 200px" />
        </template>
      </a-table>
    </a-card>
    <a-divider :dashed="true">3.补充协议</a-divider>
    <a-tabs type="card">
      <a-tab-pane key="1" tab="补充协议1">
        <a-card>
          <div style="display:flex;justify-content: space-between">
            <p>协议内容：</p>
            <a-button>删除</a-button>
          </div>
          <a-textarea></a-textarea>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="2" tab="补充协议2">
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="补充协议3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
    <a-card>
      <a-button type="primary">保存</a-button>
    </a-card>
  </page-header-wrapper>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import moment from 'moment'
const columns = [
  {
    title: '指定渠道编码',
    dataIndex: 'name'
  },
  {
    title: '指定渠道名称',
    dataIndex: 'age'
  },
  {
    title: '所在省',
    dataIndex: 'address'
  }
]
const data = [
  {
    key: '1',
    name: 'BJ000090',
    age: '宁波九州通药业有限公司',
    address: '浙江省'
  },
  {
    key: '2',
    name: 'BJ000192',
    age: '国药控股精华有限公司',
    address: '浙江省'
  },
  {
    key: '3',
    name: 'BJ000283',
    age: '老百姓药业有限公司',
    address: '浙江省'
  }
]
const columnsTop = [
  {
    title: '协议价(元)',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '票折(元)',
    dataIndex: 'age',
    scopedSlots: { customRender: 'age' }
  },
  {
    title: '购进指标量(大单位)',
    dataIndex: 'address',
    scopedSlots: { customRender: 'address' }
  },
   {
    title: '购进指标量(小单位)',
    dataIndex: 'first',
    scopedSlots: { customRender: 'first' }
  },
  {
    title: '购进金额(万元)',
    dataIndex: 'two',
    scopedSlots: { customRender: 'two' }
  },
  {
    title: '纯销指标量(小单位)',
    dataIndex: 'three',
    scopedSlots: { customRender: 'three' }
  },
  {
    title: '纯销指标金额(万元)',
    dataIndex: 'four',
    scopedSlots: { customRender: 'four' }
  }
]
const dataTop = [
  {}
]
const columnsBottom = [
  {
    title: '分销奖励',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '费用科目',
    dataIndex: 'age',
    scopedSlots: { customRender: 'age' }
  },
  {
    title: '零售配送',
    dataIndex: 'address',
    scopedSlots: { customRender: 'address' }
  },
   {
    title: '费用科目',
    dataIndex: 'first',
    scopedSlots: { customRender: 'first' }
  },
  {
    title: '医疗配送商',
    dataIndex: 'two',
    scopedSlots: { customRender: 'two' }
  },
  {
    title: '费用科目',
    dataIndex: 'three',
    scopedSlots: { customRender: 'three' }
  },
  {
    title: '自定义7',
    dataIndex: 'four',
    scopedSlots: { customRender: 'four' }
  },
  {
    title: '自定义5',
    dataIndex: 'five',
    scopedSlots: { customRender: 'five' }
  }
]
const dataBottom = [
  {}
]
export default {
// import引入的组件需要注入到对象中才能使用
components: {},
data () {
// 这里存放数据
return {
dateFormat: 'YYYY/MM/DD',
columns,
data,
columnsTop,
dataTop,
dataBottom,
columnsBottom
}
},
// 监听属性 类似于data概念
computed: {},
// 监控data中的数据变化
watch: {},
// 方法集合
methods: {
moment
},
beforeCreate () {}, // 生命周期 - 创建之前
// 生命周期 - 创建完成（可以访问当前this实例）
created () {

},
beforeMount () {}, // 生命周期 - 挂载之前
// 生命周期 - 挂载完成（可以访问DOM元素）
mounted () {

},
beforeUpdate () {}, // 生命周期 - 更新之前
updated () {}, // 生命周期 - 更新之后
beforeDestroy () {}, // 生命周期 - 销毁之前
destroyed () {}, // 生命周期 - 销毁完成
activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>
.ant-form-item {
  display: flex;
}
</style>
