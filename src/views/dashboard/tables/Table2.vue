<template>
  <div>
    <div class="row">
      <div>
        </div>
      <div class="col-md-12">
        <vnud-card>
          <div>
            <n-button loading :disabled="multipleSelection.length === 0" type="info" size="lg" @click="deleteMany()">Delete</n-button>
            <n-button loading :disabled="multipleSelection.length === 0" type="info" size="lg" @click="removeEmail()">Remove Email</n-button>
          </div>
          <template v-slot:header>
            <div>
              <h4 class="card-title">{{ tablename }}</h4>
              <br />
            </div>
          </template>

          <div>
            <el-table ref="table" @selection-change="handleSelectionChange" :data="tableData">
                <el-table-column type="selection" width="60" label="#" align="center">
                </el-table-column>
                <el-table-column
                    v-for="column in tableColumns2"
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
        </vnud-card>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from "@/components";
import { ElTable, ElTableColumn } from "element-plus";
import { Checkbox } from "@/components";
import TableComponent from "./ExtendedTables/TableComponent";
//import data from "./data.js"
import * as allData from "./data.js"
export default {
  components: {
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
    [Checkbox.name]: Checkbox,
    TableComponent,
    Modal
  },
  data() {
    return {
      tableData: allData.tableData2,
      tablename: "Table 2",
      tableColumns1: [
        {
          prop: "name",
          label: "Name",
          minWidth: 50
        },
        {
          prop: "job",
          label: "Job Position",
          minWidth: 180,
          tooltip: true
        },
        {
          prop: "salary",
          label: "Salary",
          minWidth: 150,
          tooltip: false
        },
        {
          prop: "status",
          label: "Status",
          minWidth: 50
        }
      ],
      tableColumns2: [
        {
          prop: "name",
          label: "Name",
          minWidth: 50
        },
        {
          prop: "email",
          label: "Email",
          minWidth: 200,
          tooltip: true
        },
        {
          prop: "occupation",
          label: "Occupation",
          minWidth: 150,
          tooltip: false
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    deleteMany() {
      for(let i = 0; i < this.multipleSelection.length; i++) {
        let itemIndex = this.tableData.indexOf(this.multipleSelection[i])
        console.log(itemIndex)
        this.tableData.splice(itemIndex, 1)
        console.log(this.tableData)
      }
      this.$refs.table.clearSelection()
    },
    removeEmail() {
      for(let i = 0; i < this.multipleSelection.length; i++) {
        this.multipleSelection[i].email = ""
      }
      this.$refs.table.clearSelection()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  },

  mounted () {
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
