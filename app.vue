<template>
  <div>
    <el-table :data="tableData" border stripe>
      <el-table-column
        v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const tableData = [];
const columns = [
  {
    id: "name",
    label: "name",
  },
  {
    id: "age",
    label: "age",
  },
  {
    id: "address",
    label: "address",
  },
];
</script>

<style scoped></style>
