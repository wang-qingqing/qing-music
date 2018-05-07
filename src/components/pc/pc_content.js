import React from 'react';
import ReactDOM from 'react-dom'; 
import {
   Layout,
   Carousel,
   BackTop 
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
                            imageUrls.map((url,index) => {
                                return (
                                    <div key={index}> <img src={url} /></div>
                                )                             
                            })
                        }
                    </Carousel>
                    {/* 这块暂时不展示 */
                        1==2?
                            <div className="download">
                                下载客户端(二维码)
                            </div>
                        :''       
                    }                    
                </div>
                <div className="main_area">
                   <PCCollapse />
                   <PCSide />
                </div>
                <BackTop />
            </Content>
        )
    }
}

export default PCContent;