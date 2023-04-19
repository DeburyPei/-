<template>
    <div>
        <el-input v-model="input" placeholder="请输入查询货物" clearable class="search"></el-input>
        <el-radio v-model="radio" label="1">货号</el-radio>
        <el-radio v-model="radio" label="2">货名</el-radio>
        <el-button size="medium">查询</el-button>
        <el-button size="medium" @click="dialogFormVisible=true">添加货物</el-button>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="id"
            label="货物号"
            width="70">
            </el-table-column>
            <el-table-column
            prop="name"
            label="货名"
            width="100">
            </el-table-column>
            <el-table-column
            prop="type"
            label="货物类型"
            width="100"
            >
            
            </el-table-column>
            <el-table-column
            prop="weight"
            label="重量"
            width="140"
            >
            
            </el-table-column>
            <el-table-column
            prop="capacity"
            label="体积"
            width="140"
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
            <el-form-item label="货名" >
                    <el-input  v-model="cargoForm.cargo_name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="货型" >
                    <el-input  v-model="cargoForm.cargo_type" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="体积" >
                    <el-input  v-model="cargoForm.capacity" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="重量" >
                    <el-input  v-model="cargoForm.weight" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item style="">
                    <el-button type="primary" @click="()=>{}" style="margin-left: 10vw;margin-top: 10px;">提交</el-button>
                    <el-button @click="resetForm('cargoForm')" >重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "UserManager",
    data() {
      return {
        dialogFormVisible:false,
        input: '',
        radio: '1',
        cargoForm:{
            cargo_name:'',
            cargo_type:'',
            capacity:'',
            weight:'',
        },
        tableData: [{
            id: '10001',
          name: 'nike',
          type: '衣服',
          weight:"1000",
          capacity:'1000',
          
        }, {
             id: '10001',
          name: 'nike',
          type: '衣服',
          weight:"1000",
          capacity:'1000',
          
          
        }, {
            id: '10001',
          name: 'nike',
          type: '衣服',
          weight:"1000",
          capacity:'1000',
          
        }, {
            id: '10001',
          name: 'nike',
          type: '衣服',
          weight:"1000",
          capacity:'1000',
          
        }]
      }
    },
    methods: {
        resetForm(formName) {
         Object.assign(this.cargoForm,{
            cargo_name:'',
            cargo_type:'',
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