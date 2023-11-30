<template>
  <div>
    <el-table :data="tableData">
        <el-table-column min-width="50" type="index"></el-table-column>
        <el-table-column type="selection" width="60" label="#" align="center">
        </el-table-column>
        <el-table-column
            v-for="column in tableColumns"
            :key="column.label"
            :min-width="column.minWidth"
            :prop="column.prop"
            :label="column.label"
            :show-overflow-tooltip="column.tooltip || false"
        >
        </el-table-column>
        <el-table-column
            min-width="150"
            header-align="right"
            label="Actions"
        >
            <div class="text-right table-actions">
            <el-tooltip content="Info" :open-delay="300" placement="top">
                <n-button type="info" size="sm" icon>
                <i class="now-ui-icons users_single-02"></i>
                </n-button>
            </el-tooltip>

            <el-tooltip
                content="Settings"
                :open-delay="300"
                placement="top"
            >
                <n-button type="success" size="sm" icon>
                <i class="now-ui-icons ui-2_settings-90"></i>
                </n-button>
            </el-tooltip>

            <el-tooltip content="Delete" :open-delay="300" placement="top">
                <n-button type="danger" size="sm" icon>
                <i class="now-ui-icons ui-1_simple-remove"></i>
                </n-button>
            </el-tooltip>
            </div>
        </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { ElTable, ElTableColumn } from "element-plus";
import { Checkbox } from "@/components";
export default {
  components: {
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
    [Checkbox.name]: Checkbox
  },
  props:['tableData', 'tableColumns'],
  data() {
    return {
      stuff: 'abc'
    };
  },
  mounted () {
    console.log(this)
    //console.log(this.tableColumns)
    //console.log(this.dat)
  },
};
</script>
<style lang="scss">
.checkbox-cell {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
