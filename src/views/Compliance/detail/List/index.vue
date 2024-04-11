<template>
  <div class="flex-between mgb-20">
    <h3>高级搜索</h3>
  </div>
  <el-divider border-style="dashed" />
  <div class="flex-between mgb-20">
    <h4>学术活动相关制度</h4>
    <el-text class="mx-1">合规知识库</el-text>
  </div>
  <el-divider border-style="dashed" />
  <div class="list-box">
    <div v-for="item in tableData" :key="item.id">
      <el-descriptions>
        <el-descriptions-item label="">
          <el-text class="text-color-default" truncated>
            {{ item.title }}
          </el-text>
        </el-descriptions-item>
        <el-descriptions-item label="">
          {{ item.dateValue }}
        </el-descriptions-item>
        <el-descriptions-item label="">{{ item.type }}</el-descriptions-item>
        <el-descriptions-item label="" span="3">
          <el-text class="font-size-12" line-clamp="5">
            {{ item.content }}
          </el-text>
          <div style="text-align: right">
            <el-button type="primary" plain size="small">查看详情</el-button>
          </div>
        </el-descriptions-item>
      </el-descriptions>
      <el-divider class="list-divider" border-style="dashed" />
    </div>
  </div>
  <el-pagination
    class="mgt-20"
    v-model:current-page="currentPage1"
    :page-size="pageSize"
    layout="total, prev, pager, next"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const apiData = [
  {
    id: 1,
    title: '《药品经营和使用质量监督管理...',
    dateValue: '2021-03-25',
    type: '行业监管',
    content:
      '（十五）加强合理用药监管。国家卫生健康委制定合理用药监测指标体系并组织实施，充分利用现代信息手段，提高监管效率和水平。国家卫生健康委会同相关部门建立抽查机制，每年组织对各省（区、市）处方有关情况按一定比例进行抽查，各地也要相应加大抽查和公布力度。（十六）规范药品推广和公立医疗机构药房管理。医疗机构要加强对参加涉及药品耗材推广的学术活动的管理，由企业举办或赞助的学术会议、培训项目等邀请由医疗机构统筹安排，并公示、备案备查。坚持公立医疗机构药房的公益性，公立医疗机构不得承包、出租药房，不得向营利性企业托管药房，不得以任何形式开设营利性药店。公立医疗机构与企业合作开展物流延伸服务的，应当按企业所提供的服务向企业支付相关费用，企业不得以任何形式参与医疗机构的药事管理工作。',
  },
  {
    id: 2,
    title: '《药品经营质量管理规范》',
    dateValue: '2021-03-25',
    type: '行业监管',
    content:
      '（十五）加强合理用药监管。国家卫生健康委制定合理用药监测指标体系并组织实施，充分利用现代信息手段，提高监管效率和水平。国家卫生健康委会同相关部门建立抽查机制，每年组织对各省（区、市）处方有关情况按一定比例进行抽查，各地也要相应加大抽查和公布力度。（十六）规范药品推广和公立医疗机构药房管理。医疗机构要加强对参加涉及药品耗材推广的学术活动的管理，由企业举办或赞助的学术会议、培训项目等邀请由医疗机构统筹安排，并公示、备案备查。坚持公立医疗机构药房的公益性，公立医疗机构不得承包、出租药房，不得向营利性企业托管药房，不得以任何形式开设营利性药店。公立医疗机构与企业合作开展物流延伸服务的，应当按企业所提供的服务向企业支付相关费用，企业不得以任何形式参与医疗机构的药事管理工作。',
  },
  {
    id: 3,
    title: '《药品生产质量管理规范》',
    dateValue: '2021-03-25',
    type: '行业监管',
    content:
      '（十五）加强合理用药监管。国家卫生健康委制定合理用药监测指标体系并组织实施，充分利用现代信息手段，提高监管效率和水平。国家卫生健康委会同相关部门建立抽查机制，每年组织对各省（区、市）处方有关情况按一定比例进行抽查，各地也要相应加大抽查和公布力度。（十六）规范药品推广和公立医疗机构药房管理。医疗机构要加强对参加涉及药品耗材推广的学术活动的管理，由企业举办或赞助的学术会议、培训项目等邀请由医疗机构统筹安排，并公示、备案备查。坚持公立医疗机构药房的公益性，公立医疗机构不得承包、出租药房，不得向营利性企业托管药房，不得以任何形式开设营利性药店。公立医疗机构与企业合作开展物流延伸服务的，应当按企业所提供的服务向企业支付相关费用，企业不得以任何形式参与医疗机构的药事管理工作。',
  },
  {
    id: 4,
    title: '《医药行业合规管理规范》',
    dateValue: '2021-03-25',
    type: '行业监管',
    content:
      '（十五）加强合理用药监管。国家卫生健康委制定合理用药监测指标体系并组织实施，充分利用现代信息手段，提高监管效率和水平。国家卫生健康委会同相关部门建立抽查机制，每年组织对各省（区、市）处方有关情况按一定比例进行抽查，各地也要相应加大抽查和公布力度。（十六）规范药品推广和公立医疗机构药房管理。医疗机构要加强对参加涉及药品耗材推广的学术活动的管理，由企业举办或赞助的学术会议、培训项目等邀请由医疗机构统筹安排，并公示、备案备查。坚持公立医疗机构药房的公益性，公立医疗机构不得承包、出租药房，不得向营利性企业托管药房，不得以任何形式开设营利性药店。公立医疗机构与企业合作开展物流延伸服务的，应当按企业所提供的服务向企业支付相关费用，企业不得以任何形式参与医疗机构的药事管理工作。',
  },
  {
    id: 5,
    title: '《医疗机构工作人员廉洁从优九...',
    dateValue: '2021-03-25',
    type: '行业监管',
    content:
      '（十五）加强合理用药监管。国家卫生健康委制定合理用药监测指标体系并组织实施，充分利用现代信息手段，提高监管效率和水平。国家卫生健康委会同相关部门建立抽查机制，每年组织对各省（区、市）处方有关情况按一定比例进行抽查，各地也要相应加大抽查和公布力度。（十六）规范药品推广和公立医疗机构药房管理。医疗机构要加强对参加涉及药品耗材推广的学术活动的管理，由企业举办或赞助的学术会议、培训项目等邀请由医疗机构统筹安排，并公示、备案备查。坚持公立医疗机构药房的公益性，公立医疗机构不得承包、出租药房，不得向营利性企业托管药房，不得以任何形式开设营利性药店。公立医疗机构与企业合作开展物流延伸服务的，应当按企业所提供的服务向企业支付相关费用，企业不得以任何形式参与医疗机构的药事管理工作。',
  },
]
const tableData: Rules[] = reactive(apiData)
const currentPage1 = ref(1)
const pageSize = ref(10)
const total = ref(100)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>
<style lang="scss" scoped>
:deep(.el-text.is-line-clamp) {
  width: 98%;
}
:deep(.el-pagination) {
  display: flex;
  justify-content: right;
}
:deep(.el-divider.el-divider--horizontal) {
  margin: 8px 0;
}
.text-color-default {
  color: #101010;
}
.list-box {
  height: calc(100% - 200px);
  overflow: auto;
  width: calc(100% + 22px);
  padding-right: 15px;
  // height: calc(100vh - $base-nav-bar-height - 60px);
}
</style>
