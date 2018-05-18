import Mock from 'mockjs';

Mock.setup({timeout: '1200-2600'});

Mock.mock('/data',{
    data:{
        first: 'test'
    }
})