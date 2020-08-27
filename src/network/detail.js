import {request} from './request'

export function getDetail(id){
  return request({
    url:'/detail',
    params:{
      iid:id
    }
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
