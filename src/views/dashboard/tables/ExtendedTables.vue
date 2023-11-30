<template>
  <div>
    <div class="row">
      <div>
          <!--drop-down tag="div" class="float-left">
            <base-button type="info" class="pull-left compact">
              <i class="far fa-edit"></i> Edit
            </base-button>
            <ul class="dropdown-menu dropdown-menu-left">
              <a href="#" class="dropdown-item">Send SMS - App. received</a>
            </ul>
          </drop-down-->

          <!--base-button style="margin-right:10px" type="default" class="pull-left compact btn-simple" @click="edit.modal = true">
            <i class="far fa-edit"></i> Edit
          </base-button>

          <base-button style="margin-right:30px" type="default" class="pull-left compact btn-simple" @click="deleteMany">
            <i class="fas fa-trash-alt"></i> Delete
          </base-button-->

          <!--base-button :loading="loading.onHold" style="margin-right:10px" type="info" class="pull-left compact" @click="onHold()">
            Put Emails On Hold
          </base-button>

          <base-button :loading="loading.delay" style="margin-right:10px" type="info" class="pull-left compact" @click="delayReminders()">
            Delay Reminder
          </base-button-->
        </div>
      <div class="col-md-12">
        <vnud-card>
          <div><n-button loading disabled type="info" size="lg">Info</n-button></div>
          <template v-slot:header>
            <div>
              <h4 class="card-title">{{ tablename }}</h4>
              <br />
            </div>
          </template>

          <table-component :tableColumns="tableColumns2" :tableData="tableData"></table-component>
        </vnud-card>
      </div>
    </div>
  </div>
</template>
<script>
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
    TableComponent
  },
  data() {
    return {
      data1: allData.tableData1,
      data2: allData.tableData2,
      tableData: allData.tableData2,
      tablename: "Table 1",
      tableColumns1: [
        {
          prop: "name",
          label: "Name",
          minWidth: 50
        },
        {
          prop: "job",
          label: "Job Position",
          minWidth: 200,
          tooltip: true
        },
        {
          prop: "salary",
          label: "Salary",
          minWidth: 150,
          tooltip: false
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
      tableData1: [
        {
          name: "Andrew Mike",
          job: "Develop",
          salary: "€ 99,225",
          active: false,
        },
        {
          name: "John Doe",
          job: "Design",
          salary: "€ 89,241",
          active: false,
        },
        {
          name: "Alex Mike",
          job: "Design",
          salary: "€ 92,144",
          active: false,
        },
        {
          name: "Mike Monday",
          job: "Marketin",
          salary: "€ 49,990",
          active: true,
        },
        {
          name: "Paul dickens",
          job: "Communication",
          salary: "€ 69,201",
          active: true,
        },
      ],
      tableData2: [
        {
          name: "Adam Jensen",
          email: "aj@mail.com",
          occupation: "Security",
          active: true,
        },
        {
          name: "John Smith",
          email: "js@mail.com",
          occupation: "Admin",
          active: true,
        },
        {
          name: "Sue Jones",
          email: "sj@mail.com",
          occupation: "Finance",
          active: true,
        },
      ],
    };
  },

  methods: {
    delete() {
      //
    }
  },

  mounted () {
    console.log(this)
    //console.log(data)
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
