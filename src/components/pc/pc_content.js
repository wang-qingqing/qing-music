import React from 'react';
import ReactDOM from 'react-dom'; 
import {
   Layout,
   Carousel 
} from 'antd';
const {Header,Content,Footer,Sider} = Layout;
import PCCollapse from './pc_collapse';
import PCSide from './side/pc_side';

//定义轮播图的图片地址
const imageUrls = [
    './src/images/carousel1.jpg',
    './src/images/carousel2.jpg'
];

class PCContent extends React.Component{
    render(){
        return (
            <Content>
                <div className="topContent">
                    <Carousel className="carousel" autoplay>
                        {
                            imageUrls.map(function(url,index){
                                return (
                                    <div key={index}> <img src={url} /></div>
                                )                             
                            })
                        }
                    </Carousel>
                    <div className="download">
                        下载客户端(二维码)
                    </div>
                </div>
                <div className="main_area">
                   <PCCollapse />
                   <PCSide />
                </div>
            </Content>
        )
    }
}

export default PCContent = PCContent;