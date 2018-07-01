/**
 * 自定义的删除功能
 * 入口:/del
 * 功能：
 * （1）点击“新增一行”按钮，在表格最上方新增一行；
 * （2）点击每行的“删除”按钮，相应的行将被删除。
 */
import React from 'react';
import {Table,Button,Input} from 'antd';
import {observer} from 'mobx-react';
import Store from 'Store/store';
const delStore = Store.delStore;

@observer
export default class CustomDelete extends React.Component{
    addTr = () => {
        delStore.addData(() =>{
            this.forceUpdate();
        });
    }

    delTr = (key) => {
        delStore.delData(key,() =>{
            this.forceUpdate();
        });
    }

    changeValue = (e,key,index) => {
        const { value } = e.target;
        delStore.updateTableData(index,key,value);
    }

    columns = [
        {
            title: '内容',
            dataIndex: 'content',
            key: 'content',
            render: (text, record) => {
                return(
                    <Input value={text} onChange={(e) => this.changeValue(e,'content',record.key)} /> 
                ) 
            }   
        },
        {
            title: '操作',
            dataIndex: 'operate',
            key: 'operate',
            render: (text,record) => <a onClick={() => this.delTr(record.key)}>删除</a>
        }
    ]


    render(){
        return (
            <div>
                <Button type="primary" style={{marginBottom: '15px'}} onClick={this.addTr} >
                    新增一行
                </Button>
                {/* {
                    delStore.tableData && delStore.tableData.length? */}
                        <Table
                            columns={this.columns} 
                            dataSource={delStore.tableData.slice()}
                        />
                    {/* :''
                } */}
            </div>
        )
    }
}