const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/community',{useNewUrlParser: true});

let newInfoSchema = new Schema({
    href: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    tagColor: {
        type: String,
        required: true,
    }

});

let newInfo = mongoose.model('newInfo',newInfoSchema);

let newInfos = {data: []};

newInfos.data[0] = new newInfo({
    href: 'http://ant.design',
    title: '中国要求外国科技公司提交源代码',
    avatar: "https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
    description: "9分钟前",
    comment:"27",
    tag:"置顶",
    tagColor:"purple",
});

newInfos.data[1] = new newInfo({
    href: 'http://ant.design',
    title: 'Adobe完成大笔收购：可以买到创意的网站 ',
    avatar:"https://i.loli.net/2019/04/06/5ca877e0cc40e.jpg",
    description:"三天前",
    comment:"37",
    tag:"置顶",
    tagColor:"gold",
});

newInfos.data[2] = new newInfo({
    href: 'http://ant.design',
    title: '阿里遭华尔街集体调低股价',
    avatar:"https://i.loli.net/2019/04/06/5ca877e27c961.jpg",
    description:"一周前",
    comment:"127",
    tag:"推荐",
    tagColor:"volcano",
});

newInfos.data[3] = new newInfo({
    href: 'http://ant.design',
    title: '互联网思维造车，汽车只共享不售卖',
    avatar:"https://i.loli.net/2019/04/06/5ca877ef85b0a.jpg",
    description:"2019/4/7",
    comment:"127",
    tag:"推荐",
    tagColor:"cyan",
});

newInfos.data.forEach(key =>{
    key.save();
});


module.exports = newInfos;
