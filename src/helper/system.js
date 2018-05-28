/**
 * 公用函数库
 * 包括：日期时间转换、表单数据的校验等
 * let system = new System();
 */
import {Base64} from 'js-base64';

class System {
    /**
     * 读取多个cookie的时候使用，一次性读取，然后统一处理
     */
    getNewCookie(){
        let cookies = [];
        let vvv = document.cookie.split(";");
        let a; 
        vvv.forEach(function(e){
            a = e.trim().split("=");
            cookies[a[0]] = a[1];
        })   
        return cookies;
    }

    /**
     * 只读取一个的时候使用
     */   
    getSingleCookie(name){
        let vvv = document.cookie.split(";");
        let a; 
        for(let i=0;i<vvv.length;i++){   
            a = vvv[i].trim().split("=");
            if(a.length>1 && a[0]==name){  
                return a[1];
            }        
        }   
       return '';
    }

    /**
     * json序列化对象+base64编码
     * return 处理后的字符串
     */
    getRequestParams(object) {
        var uid = this.getSingleCookie("userId");
        var nickname = "";
        if( this.getSingleCookie("userName")){
            nickname = Base64.decode(this.getSingleCookie("userName"));
        }
        var token = localStorage.getItem("honeydukesSessionID");

        var newObject = Object.assign({}, object, {
            uid: uid,
            token: token,
            nickname: nickname,
            r: Math.random()
        })

        return Base64.encode(JSON.stringify(newObject));
    }

    /**
     * 解析返回数据
     */
    parseResponseData(data) {
        var respData = new Object();
        if (data) {
            respData = JSON.parse(Base64.decode(data));
        }
        return respData;
    }

    /**
     * 日期时间格式化
     */
    dateFormat(date, format){
        //兼容Firefox 处理日期时间格式
        function getDateForStringDate(strDate){
            //切割年月日与时分秒称为数组
            if (strDate.length >10 ) {//格式为：2016-10-10 10:10:10
                //切割年月日与时分秒称为数组
                var s = strDate.split(" "); 
                var s1 = s[0].split("-"); 
                var s2 = s[1].split(":");
                if(s2.length==2){
                    s2.push("00");
                }
            }else{//格式为：2016-10-10
                var s1 = strDate.split("-");
                s2=["00","00","00"];
            }
            date = new Date(s1[0],s1[1]-1,s1[2],s2[0],s2[1],s2[2]);
            return date.toString();
        }
        date = new Date(getDateForStringDate(date));
        var map = {
            "M": date.getMonth() + 1, //月份 
            "d": date.getDate(), //日 
            "h": date.getHours(), //小时 
            "m": date.getMinutes(), //分 
            "s": date.getSeconds(), //秒 
            "q": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        format = format.replace(/([yMdhmsqS])+/g, function(all, t){
            var v = map[t];
            if(v !== undefined){
                if(all.length > 1){
                    v = '0' + v;
                    v = v.substr(v.length-2);
                }
                return v;
            }
            else if(t === 'y'){
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return format;
    }

    /**
     * 比较时间大小，格式“HH:mm”
     * timeStart 与 timeEnd 比较 
     */
    compareStrTime(timeStart,timeEnd){
        var dateA = new Date("1900/1/1 " + timeStart);   
        var dateB = new Date("1900/1/1 " + timeEnd);   
        if(isNaN(dateA) || isNaN(dateB)) 
            return null;   
        if(dateA > dateB) {
            return 1; 
        }  
        if(dateA < dateB) {
            return -1;   
        }
        return 0; 
    }
    
    /**
     * 获取日期
     */
    getDate(strDate){
        var st = strDate;
        try{
            var a = st.split(" ");
        }catch(e){
            var a = ['',''];
        }
        try{			
            var b = a[0].split("-");
        }catch(e){
            var b = ['','',''];
        }
        try{			
            var c = a[1].split(":");
        }catch(e){
            var c = ['','',''];
        }
        var date = new Date(b[0], b[1]-1, b[2], c[0], c[1], c[2]);
        return date;
    }

    /**
     * 计算字符长度
     */
    getByteLength(data){
        var len = 0;
        for(var i = 0; i < data.length; i++){
            var a = data.charAt(i);
            if(a.match(/[^\x00-\xff]/ig) != null){
                len += 2;
            }else{
                len += 1;
            }
        }
        return len;
    }

    /**
     * 获取当前URL参数值
     * @param name	参数名称
     * @return	参数值
     */
    getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null)
            return unescape(r[2]);
        return '';

    }

    /**
     * 输入框校验正则对象
     */
    checkByRegExp = {
        //国内手机验证
        cell: function (cell){
            var test = /^[1][0-9]{10}$/; //校验是否11位以及首位是否为1
            return test.test(cell);
        },
        //固话区号
        telCode: function (telCode){
            var test = /^(0[\d]{2,3})$/;
            return test.test(telCode);
        },
        //固话号码
        tel: function (tel){
            var test = /^\d{6,8}$/;
            return test.test(tel);
        },
        //固话区号加号码
        telAll: function (tel){
            var test1 = /^(0[\d]{2,3}-)?\d{6,8}(-\d{3,6})?$/; //带“-”的
            var test2 = /^(0[\d]{2,3})?\d{6,8}(-\d{3,6})?$/;//不带“-”的
            return test1.test(tel) || test2.test(tel);
        },
        //传真 区号固话号码+分机号
        fax: function (tel){
            var test = /^(0[\d]{2,3})?\d{6,8}(\+\d{3,6})?$/;
            return test.test(tel);
        },
        //日期YYYY-MM-DD
        date: function (date){
            var test = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
            return test.test(date);
        },
        //开始日期和结束日期
        rangeDate: function (dates){
            var start = dates.slice(0,10);
            var end = dates.slice(12,22);
            var test = /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
            return test.test(start) && test.test(end);
        },
        //电子邮件
        email: function (email){
            var test = /^[A-Za-z0-9]+(\.?[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
            return test.test(email);
        },
        //url
        url: function (url){
            var test = /(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i;
            return test.test(url);
        },
        //特殊字符
        charReg: function (ch){
            var test = /[!@#$%^&*?~\'\"]/;
            return test.test(ch);
        },
        //匹配由数字和26个英文字母组成的字符串
        letterAndNum: function (letterAndNum){
            var test = /^[A-Za-z0-9\s]+$/;
            return test.test(letterAndNum);
        },
        //匹配价格(整数和小数--包含0)
        price: function (price){
            var test = /^\d+[\.]?\d{0,2}$/;
            return test.test(price);
        },        
        //匹配价格(整数和小数--不包含0)
        positivePrice: function (positivePrice){
            if(positivePrice > 0){
                var test = /^\d+[\.]?\d{0,2}$/; 
                return test.test(positivePrice);
            }else{
                return false;
            }				
        },
        num: function (num){
            var test = /^(-?\d+)(\.\d+)?$/;
            return test.test(num);
        },
        //正整数
        positiveInt: function (positiveInt){
            var test = /^[0-9]*[1-9][0-9]*$/;
            return test.test(positiveInt);
        },
        //非负整数
        nonnegativeInt: function (nonnegativeInt){
            var test = /^\d+$/;
            return test.test(nonnegativeInt);
        },
        nonnegativeIntNum: function (nonnegativeIntNum){
            var test = /^\d+$/;
            return test.test(nonnegativeIntNum);
        },
        //年份
        yearInt: function (year){
            var test = /^[\d]{4}$/;
            return test.test(year);
        },
        //日期YYYY-MM
        dateEx: function (date){
            var test = /([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-((0[1-9])|(1[012])){1}$/;
            return test.test(date);
        },
        //固话区号加号码加分机号
        telNum: function (tel){
            var test = /^(0[\d]{2,3}-)\d{6,8}(-\d{3,6})$/;
            return test.test(tel);
        },
        //时长的小时（0~9999整数）
        hourInt: function(hourInt){
            if( hourInt >= 0 && hourInt <= 9999 ){
                var test = /^\d+$/;
                return test.test(hourInt);
            }else{
                return false;
            }	
        },
        //时长的分钟（0~59整数）
        minInt: function(minInt){		
            if( minInt >= 0 && minInt <= 59 ){
                var test = /^\d+$/;
                return test.test(minInt);
            }else{
                return false;
            }			
        },
        //国际手机号验证
        intlCell: function (cell){
            var test = /^[1-9][0-9]{4,10}$/;
            return test.test(cell);
        },
        //英文字母验证
        letter: function (letter){
            var test = /^[A-Za-z]+$/;
            return test.test(letter);
        }
    }

    /*
    * 校验方法
    * 包括：身份证、护照等
    * */
    verify = {
        /**
         * 身份证
         */
        checkIdCard: function(idcard){
            var Errors=[
                true,
                "身份证号码位数不对!",
                "身份证号码出生日期超出范围或含有非法字符!",
                "身份证号码校验错误!",
                "身份证地区非法!"
            ];
            if (idcard === '') {
                return true;
            }
            var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}

            var idcard,Y,JYM,JYM_X,ereg;
            var S,M,M_X;
            var idcard_array = [];
            idcard_array = idcard.split("");
            /*地区检验*/
            if(area[parseInt(idcard.substr(0,2))]==null)
            {
                //return Errors[4];
                return false;
            }
            /*身份号码位数及格式检验*/
            switch(idcard.length){
                case 15:
                    if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 400 == 0 )){
                        ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
                    } else {
                        ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
                    }
                    if(ereg.test(idcard)){
                        return true; //15位验证通过
                    }
                    else {		
                        //return Errors[2];	
                        return false;
                    }
                    break;

                case 18:
                    //18位身份号码检测
                    //出生日期的合法性检查
                    //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
                    //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
                    if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){
                        ereg=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
                    } else {
                        ereg=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
                    }
                    if(ereg.test(idcard)){//测试出生日期的合法性
                        //计算校验位
                        S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
                        + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
                        + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
                        + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
                        + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
                        + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
                        + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
                        + parseInt(idcard_array[7]) * 1
                        + parseInt(idcard_array[8]) * 6
                        + parseInt(idcard_array[9]) * 3 ;
                        Y = S % 11;
                        M = "F";

                        JYM = "10x98765432";
                        JYM_X = "10X98765432";
                        M = JYM.substr(Y,1);/*判断校验位*/
                        M_X = JYM_X.substr(Y,1);/*判断校验位*/

                        if(M == idcard_array[17] || M_X == idcard_array[17]){
                            return true;
                        }
                        else {
                            //return Errors[3];
                            return false;
                        }
                    }
                    else {
                        //return Errors[2];
                        return false;
                    }
                    break;

                default:
                    return false;
                    break;
            }
        },

        /**
         * 护照
         */
        checkPassport: function(passport){
            var Errors=[
                true,
                "护照号码首字母必须大写!",
                "护照号码必须是E或者G开头!"
            ];
            if (passport === '') {
                return true;
            }

            /*因私护照格式检验*/
            if ( passport.substr(0,1) == 'E' || passport.substr(0,1) == 'G' ){
                return true;
            } else if ( passport.substr(0,1) == 'e' || passport.substr(0,1) == 'g' ){
                //return Errors[1];
                return false;
            } else {
                //return Errors[2];
                return false;
            }
        }
    }

}

export default System;
























