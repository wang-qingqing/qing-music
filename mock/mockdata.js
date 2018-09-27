import Mock from 'mockjs';

Mock.setup({timeout: '1200-2600'});

Mock.mock('/data',{
    data:{
        first: 'test'
    }
})

/**
 * TODO
 * 1.改成hash路由 (Completed)
 * 
 * 2.搭建一个nodejs的服务端
 * 
 * 3.页面：
 * （1）/user/home?id=     个人主页    (20180730Completed)
 * （2）/user/level  等级   (20180915Completed)
 * （3）/discover/artist  入驻歌手 (20180916Completed)
 * （4）/user/event  动态  (20180927Completed)
 * （5）/user/follows  关注 (20180919Completed)
 * （6）/user/fans   粉丝   (20180920Completed)
 * （7）/discover/playlist/   热门推荐
 * （8）/discover/album/   新碟上架
 * （9）/discover/toplist/  榜单
 * （10）/album?id=   专辑
 * （11）/artist?id=  歌手
 * （12）/my   我的
 * （13）/friend  朋友
 * （14）/store  商城
 * （15）/musician  音乐人
 * （16）/download 下载客户端
 * （17）/level/details  等级详情
 * 
 */