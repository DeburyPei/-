<template>
    <div>
        <el-input v-model="input" placeholder="请输入查询货物" clearable class="search"></el-input>
        <el-radio v-model="radio" label="1">船号</el-radio>
        <el-radio v-model="radio" label="2">船名</el-radio>
        <el-button size="medium">查询</el-button>
        <el-button size="medium" @click="dialogFormVisible=true">添加货物</el-button>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="id"
            label="船号"
            width="70">
            </el-table-column>
            <el-table-column
            prop="name"
            label="船名"
            width="100">
            </el-table-column>
            <el-table-column
            prop="type"
            label="船型"
            width="100"
            >
            
            </el-table-column>
            <el-table-column
            prop="capacity"
            label="容量（立方英尺）"
            width="140"
            >
            
            </el-table-column>
            <el-table-column
            prop="port"
            label="现处港口"
            width="120"
            >
            
            </el-table-column>
            <el-table-column
            prop="build_year"
            label="建造年份"
            width="120"
            >
            
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="添加货物" :visible.sync="dialogFormVisible" width="30%"  >
            <el-form >
            <el-form-item label="船名" >
                    <el-input  v-model="shipForm.ship_name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="船型" >
                    <el-input  v-model="shipForm.ship_type" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="容量" >
                    <el-input  v-model="shipForm.capacity" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="现处港口" >
                    <el-input  v-model="shipForm.port" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年份" >
                    <el-input  v-model="shipForm.build_year" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item style="">
                    <el-button type="primary" @click="()=>{}" style="margin-left: 10vw;margin-top: 10px;">提交</el-button>
                    <el-button @click="resetForm('shipForm')" >重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "CargoInfoManager",
    data() {
      return {
        dialogFormVisible:false,
        input: '',
        radio: '1',
        shipForm:{
            ship_name:'',
            ship_type:'',
            capacity:'',
            port:'',
            build_year:''
        },
        tableData: [{
          id: '10001',
          name: '起航号',
          type: '重型',
          capacity:'1000',
          port:'张家港',
          build_year:'2010-10-22'
        }, {
            id: '10001',
          name: '起航号',
          type: '重型',
          capacity:'1000',
          port:'张家港',
          build_year:'2010-10-22'
        }, {
            id: '10001',
          name: '起航号',
          type: '重型',
          port:'张家港',
          capacity:'1000',
          build_year:'2010-10-22'
        }, {
            id: '10001',
          name: '起航号',
          type: '重型',
          port:'张家港',
          capacity:'1000',
          build_year:'2010-10-22'
        }]
      }
    },
    methods: {
        resetForm(formName) {
         Object.assign(this.shipForm,{
            ship_name:'',
            ship_type:'',
            capacity:'',
            build_year:''
        })
      }
    }
}
</script>

<style scoped>
.search{
    width: 200px;
    margin-bottom: 10px;
    margin-right: 5px;
}
/* .el-radio{
    font-size: 10px;
} */
.el-form-item{
    margin-bottom: 0;
}
.el-form{
    margin-top: 0;
}

</style>