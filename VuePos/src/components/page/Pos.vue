<template>
    <div class="pos">
        <div class="pos-left" id="posLeft">
            <el-tabs type="border-card">
                <el-tab-pane label="点餐">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                        <el-table-column prop="count" label="数量" width="50"></el-table-column>
                        <el-table-column prop="price" label="单价" width="70"></el-table-column>
                        <el-table-column label="操作" width="100" fixed="right">
                            <template scope="scope">
                                <el-button type="text" size="small" @click="deleteSingle(scope.row)">删除</el-button>
                                <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="pos-order-total">
                        <small>总金额：￥{{ totalMoney }}元</small>
                    </div>
                    <div class="pos-order-btns">
                        <el-button type="primary">
                            <i class="el-icon-warning"></i>
                            挂起
                        </el-button>
                        <el-button type="primary" @click="delAllGoods()">
                            <i class="el-icon-delete2"></i>
                            删除
                        </el-button>
                        <el-button type="primary" @click="checkout()">
                            <i class="el-icon-check"></i>
                            结账
                        </el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="挂单">
                    挂单
                </el-tab-pane>
                <el-tab-pane label="外卖">
                    外卖
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="pos-right" id="posRight">
            <div class="right-title">常用商品</div>
            <ul>
                <li v-for="item in hotList">
                    <a :id="item.goodsId" @click="addOrderList(item)">
                        <el-tag type="primary">{{item.goodsName}}&nbsp;&nbsp;￥{{item.price}}元</el-tag>
                    </a>
                </li>
            </ul>
            <div class="right-bottom">
                <el-tabs type="border-card">
                    <el-tab-pane label="汉堡">
                        <ul class="cookList">
                            <li v-for="cook in type0Goods">
                                <img :src="cook.goodsImg" @click="addOrderList(cook)"/>
                                <div class="foodText">
                                    <span class="foodName">{{ cook.goodsName }}</span>
                                    <span>￥{{ cook.price }}元</span>
                                </div>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="小食">
                        <ul class="cookList">
                            <li v-for="cook in type1Goods" @click="addOrderList(cook)">
                                <img :src="cook.goodsImg"/>
                                <div class="foodText">
                                    <span class="foodName">{{ cook.goodsName }}</span>
                                    <span>￥{{ cook.price }}元</span>
                                </div>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="饮料">
                        <ul class="cookList">
                            <li v-for="cook in type2Goods" @click="addOrderList(cook)">
                                <img :src="cook.goodsImg"/>
                                <div class="foodText">
                                    <span class="foodName">{{ cook.goodsName }}</span>
                                    <span>￥{{ cook.price }}元</span>
                                </div>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="套餐">
                        <ul class="cookList">
                            <li v-for="cook in type3Goods" @click="addOrderList(cook)">
                                <img :src="cook.goodsImg"/>
                                <div class="foodText">
                                    <span class="foodName">{{ cook.goodsName }}</span>
                                    <span>￥{{ cook.price }}元</span>
                                </div>
                            </li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name : 'pos',
        data : function(){
            return {
                tableData: [],
                hotList : [],
                type0Goods : [],
                type1Goods : [],
                type2Goods : [],
                type3Goods : [],
                totalMoney : 0
            }
        },
        methods : {
            addOrderList : function(item){
                // console.log(item);
                let isHave = false;
                //判断当前点击的商品是否在订单列表中
                for(let i = 0; i < this.tableData.length; i++){
                    //console.log(this.tableData[i].goodsId);
                    if(this.tableData[i].goodsId === item.goodsId){
                        isHave = true;
                        break;
                    }
                }
                //根据isHave的值判断订单列表中是否已经有此商品
                if(isHave){
                    //存在就进行数量的添加
                    let arr = this.tableData.filter(o => o.goodsId === item.goodsId);
                    arr[0].count++;
                }
                else{
                    let newGoods = {goodsId:item.goodsId,goodsName:item.goodsName,price:item.price,count:1};
                    this.tableData.push(newGoods);
                }
                this.getAllMoney();
            },
            deleteSingle : function(item){
                 this.tableData=this.tableData.filter(o => o.goodsId != item.goodsId);
                 this.getAllMoney();
            },
            getAllMoney(){
                this.totalMoney=0;
                if(this.tableData){
                    this.tableData.forEach((element) => {
                        this.totalMoney=this.totalMoney+(element.price*element.count);   
                    });
                }
                
            },
            delAllGoods() {
                this.tableData = [];
                this.totalMoney = 0;
            },
            checkout() {
                if (this.totalCount!=0) {
                    this.tableData = [];
                    this.totalCount = 0;
                    this.totalMoney = 0;
                    this.$message({
                        message: '结账成功，感谢你又为店里出了一份力!',
                        type: 'success'
                    });
            
                }else{
                    this.$message.error('不能空结。老板了解你急切的心情！');
                }
            }
        },
        //钩子函数
        mounted : function(){
            //操作实际DOM 需要在 挂载完成钩子函数里面进行；
            //设置订单栏布局的高度；
            var windowHeiht = document.body.clientHeight;
            console.log(windowHeiht);
            document.getElementById('posLeft')
                .style.height = windowHeiht + 'px';
            // document.getElementById('posContent')
            //     .style.height = posOrderDivHeight + 'px';
        },
        created : function(){
            axios.get('http://jspang.com/DemoApi/oftenGoods.php')
                .then(response => {
                    // console.log(response)
                    this.hotList = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            
            axios.get('http://jspang.com/DemoApi/typeGoods.php')
                .then(response=>{
                    // console.log(response);
                    this.type0Goods = response.data[0];
                    this.type1Goods = response.data[1];
                    this.type2Goods = response.data[2];
                    this.type3Goods = response.data[3];
                })
                .catch(error=>{
                    console.log(error);
                });
        }
    }
</script>

<style scoped>

    /*容器，开启弹性盒子*/
    .pos {
        display: flex;
    }
    
    /*左边盒子，固定宽度*/
    .pos-left {
        /* flex-basis: 400px; */
        flex: 1 1 30%;
        align-self: stretch;
        background-color: #F9FAFC;
        border-right: 1px solid #C0CCDA;
    }
    .pos-left .pos-order-btns {
        margin-top: 20px;
    }

    /*右边盒子，弹性伸缩*/
    .pos-right {
        /* flex: auto; */
        flex: 1 1 70%;
        background-color: #F9FAFC;
    }
    .pos-right .right-top {
        height: 50%;
    }
    .pos-right .right-title {
        height: 22px;
        border-bottom: 1px solid #D3dce6;
        background-color: #F9FAFC;
        padding: 10px;
        text-align: left;
    }
    .pos-right > ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        
    }
    .pos-right > ul > li {
        flex: none;
        padding: 5px;
        margin: 5px;
    }
    .pos-right > ul > li > a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 5px;
    }
    .pos-right > ul > li > a:hover {
        cursor: pointer;
    }
    .pos-right .right-price {
        color: #58B7FF;
    }

    /*右边底部盒子*/
    .pos-right .right-bottom {
        border-top: 1px solid #C0CCDA;
        margin-top: 20px;
    }
    .pos-right .right-bottom .cookList {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    .pos-right .right-bottom .cookList > li {
        border: 1px solid #E5E9F2;
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 200px;
        margin: 10px 10px;
    }
    .pos-right .right-bottom .cookList > li > img {
        height: 100px;
        width: 100px;
        cursor: pointer;
    }
    .pos-right .right-bottom .cookList > li .foodText {
        display: flex;
        flex-direction: column;
        width: 100px;
    }
    .pos-right .right-bottom .cookList > li .foodText .foodName {
        padding: 10px 10px;
        color: red;
    }
</style>


