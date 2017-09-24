<template>
    <div class="pos">
        <div class="pos-left" id="posLeft">
            <el-tabs type="border-card">
                <el-tab-pane label="点餐">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="name" label="商品名称"></el-table-column>
                        <el-table-column prop="count" label="数量" width="50"></el-table-column>
                        <el-table-column prop="price" label="单价" width="70"></el-table-column>
                        <el-table-column label="操作" width="100" fixed="right">
                            <template scope="scope">
                                <el-button type="text" size="small">删除</el-button>
                                <el-button type="text" size="small">增加</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <div class="pos-order-btns">
                    <el-button type="primary">
                        <i class="el-icon-warning"></i>
                        挂起
                    </el-button>
                    <el-button type="primary">
                        <i class="el-icon-delete2"></i>
                        删除
                    </el-button>
                    <el-button type="primary">
                        <i class="el-icon-check"></i>
                        结账
                    </el-button>
                </div>
                
                <el-tab-pane label="挂单">
                    挂单
                </el-tab-pane>
                <el-tab-pane label="外卖">
                    外卖
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="pos-right">
            <div class="right-title">常用商品</div>
            <ul>
                <li v-for="item in hotList">
                    <span>{{item.name}}</span>
                    <span class="right-price">￥{{item.price}}元</span>
                </li>
            </ul>
            <div class="right-bottom">
                <el-tabs type="border-card">
                    <el-tab-pane label="汉堡">汉堡</el-tab-pane>
                    <el-tab-pane label="小食">小食</el-tab-pane>
                    <el-tab-pane label="饮料">饮料</el-tab-pane>
                    <el-tab-pane label="套餐">套餐</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'pos',
        data : function(){
            return {
                tableData: [
                    {name : '香辣鸡腿堡',count : 1,price : 18},
                    {name : '深海鳕鱼堡',count : 1,price : 14},
                    {name : '可口可乐',count : 1,price : 6}
                ],
                hotList : [
                    {name : '香辣鸡腿堡',price : 18,id : 1},
                    {name : '可口可乐',price : 6,id : 2},
                    {name : '深海鳕鱼堡',price : 14,id : 3},
                    {name : '大份薯条',price : 12,id : 4},
                    {name : '墨西哥鸡肉卷',price : 10,id : 5}
                ]
            }
        },
        mounted : function(){
            //操作实际DOM 需要在 挂载完成钩子函数里面进行；
            //设置订单栏布局的高度；
            var windowHeiht = document.body.clientHeight;
            console.log(windowHeiht);
            document.getElementById('posLeft')
                .style.height = windowHeiht + 'px';
            // document.getElementById('posContent')
            //     .style.height = posOrderDivHeight + 'px';
        }
    }
</script>

<style scoped>
    .pos {
        display: flex;
    }

    .pos-left {
        flex-basis: 400px;
        align-self: stretch;
        background-color: #F9FAFC;
        border-right: 1px solid #C0CCDA;
    }
    .pos-right {
        flex: auto;
        background-color: #eeeeee;
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
        padding: 10px;
        margin: 10px;
        background-color: #ffffff;
        border: 1px solid #E5E9F2;
    }
    .pos-right .right-price {
        color: #58B7FF;
    }

    .pos-right .right-bottom {
        border-top: 1px solid #C0CCDA;
        margin-top: 20px;
    }
    
</style>


