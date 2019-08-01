const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/community',{useNewUrlParser: true});

let techWebsiteSchema = new Schema({
    name: {
        type: String,
        required: true // 必须有
    },
    href: {
        type: String,
        required: true
    },
    tag: [
        {
           tagName: {
               type: String,
               required: true
           },
           tagColor: {
               type: String,
               required: true
           }
        }
    ]

});

let techWebsite = mongoose.model('techWebsites', techWebsiteSchema);

let techWebsites = {data: []};

techWebsites.data[0] = new techWebsite({
    name: '菜鸟教程--学的不仅仅是技术，更是梦想',
    href: 'http://www.runoob.com/',
    tag:[
        {
            tagName: '前端',
            tagColor: 'magenta'
        },
        {
            tagName: '后端',
            tagColor: 'orange'
        },
        {
            tagName: '网站开发',
            tagColor: 'blue'
        }
    ]
});

techWebsites.data[1] = new techWebsite({
    name: '阮一峰的网络日志--阿里前端大牛的个人技术博客',
    href: 'http://www.ruanyifeng.com',
    tag:[
        {
            tagName: '前端',
            tagColor: 'magenta'
        },
        {
            tagName: 'Javascript',
            tagColor: 'geekblue'
        },
        {
            tagName: 'React',
            tagColor: 'purple'
        }
    ]
});

techWebsites.data[2] = new techWebsite({
    name: '廖雪峰的官方网站--全栈工程师叫你学python，Java,区块链',
    href: 'https://www.liaoxuefeng.com',
    tag:[
        {
            tagName: 'Python',
            tagColor: 'volcano'
        },
        {
            tagName: 'Java',
            tagColor: 'cyan'
        }
    ]
});

techWebsites.data[3] = new techWebsite({
    name: 'Github--全球最常用的面向开源及私有软件项目的托管平台',
    href: 'https://github.com',
    tag:[
        {
            tagName: '代码仓库',
            tagColor: 'skyblue'
        }
    ]
});

techWebsites.data[4] = new techWebsite({
    name: 'React中文网站--从零开始的前端框架学习之旅',
    href: 'https://react.docschina.org/',
    tag:[
        {
            tagName: 'React',
            tagColor: 'purple'
        }
    ]
});

techWebsites.data[5] = new techWebsite({
    name: 'Vue中文网站--从零开始的前端框架学习之旅',
    href: 'https://cn.vuejs.org/',
    tag:[
        {
            tagName: 'Vue',
            tagColor: 'gold'
        }
    ]
});

techWebsites.data[6] = new techWebsite({
    name: 'Angular中文网站--从零开始的前端框架学习之旅',
    href: 'https://docs.angularjs.org/',
    tag:[
        {
            tagName: 'Aguilar',
            tagColor: 'pink'
        }
    ]
});

techWebsites.data.forEach(key => {
   key.save();
});


module.exports = techWebsites;


