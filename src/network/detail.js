import {request} from './request'

export function getDetail(id){
  return request({
    url:'/detail',
    params:{
      iid:id
    }
  })
}
//请求详情页中的推荐数据
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
export function DetailGoods(itemInfo,columns,services){
  this.title = itemInfo.title
  this.desc = itemInfo.desc
  this.newPrice = itemInfo.price
  this.oldPrice = itemInfo.oldPrice
  this.discount = itemInfo.discountDesc
  this.discountBgColor = itemInfo.discountBgColor
  this.columns = columns
  this.services = services
  this.realPrice = itemInfo.lowNowPrice
}

export function ShopInfo(shopInfo){
  this.logo = shopInfo.shopLogo
  this.name = shopInfo.name
  this.fans = shopInfo.cfans
  this.sells = shopInfo.cSells
  this.score = shopInfo.score
  this.goodsCount = shopInfo.cGoods
}

export function GoodsParam (info, rule) {
   // 注: images可能没有值(某些商品有值, 某些没有值)
  this.image = info.images ? info.images[0] : '';
  this.infos = info.set;
  this.sizes = rule.tables;
}


