import {observable} from 'mobx';

export default class UserCardStore {
    @observable userInfo = { //用户的相关信息
        userId: 123,//用户id
        name:'Lucky',//用户名
        headSrc: './src/images/user/user1.png',//头像
        level: 8, //等级
        eventCount: 10, //动态
        followCount: 100, //关注
        fansCount: 66 //粉丝
    };

    @observable signIn = false //是否签到

    updateSignIn = () => {
        this.signIn = !this.signIn;
    }
}