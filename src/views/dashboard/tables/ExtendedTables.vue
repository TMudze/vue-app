<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vnud-card>
          <template v-slot:header>
            <div>
              <h4 class="card-title">{{ tablename }}</h4>
              <br />
            </div>
          </template>

          <table-component :tableColumns="tableColumns2" :tableData="tableData2"></table-component>
        </vnud-card>
      </div>
    </div>
  </div>
</template>
<script>
import { ElTable, ElTableColumn } from "element-plus";
import { Checkbox } from "@/components";
import TableComponent from "./ExtendedTables/TableComponent";
export default {
  components: {
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
    [Checkbox.name]: Checkbox,
    TableComponent
  },
  data() {
    return {
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
