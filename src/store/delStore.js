import {observable} from 'mobx';

 class DelStore {
    @observable tableData = []; 

    //查找key对应的数组的序号
    findArrayIndex = (key) => {
        return this.tableData.findIndex((value) => {
            return value.key == key
        });
    }

    addData = (callback) => {
        this.tableData.unshift({
            key: this.tableData.length + 1,
            content: ''           
        })
        console.log('111',this.tableData)
        callback && typeof callback == "function" && callback();
    }

    delData = (key,callback) => {
        let index = this.findArrayIndex(key);
        this.tableData.splice(index,1);
        callback && typeof callback == "function" && callback();
    }

    updateTableData = (index,key,value) => {
        let arrIndex = this.findArrayIndex(index);
        this.tableData[arrIndex] = Object.assign({},this.tableData[arrIndex],{[key]: value});
    }
}
export default DelStore;