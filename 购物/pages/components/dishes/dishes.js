Page({
  data: {
    hidden: false,
    curNav: 1,//当前选中的左边栏id
    curIndex: 0,//当前选中的左边栏的索引
    cart: [], //购物车数组
    cartTotal: 0, //购物车商品数量
    navList: [ //左边栏的数据
      {
        id: 1,
        name: '热销菜品'
      },
      {
        id: 2,
        name: '主食'
      },
      {
        id: 3,
        name: '饮料'
      },
      {
        id: 4,
        name: '套餐'
      }
    ],

    dishesList: [ //使用二维数组,将左边栏和内容区形成对应关系
      [
        {
          name: "红烧肉",
          price: 20,
          num: 0,
          id: 1
        },
        {
          name: "水煮鱼",
          price: 25,
          num: 0,
          id: 2
        },
        {
          name: "小炒日本豆腐",
          price: 15,
          num: 0,
          id: 3
        },
        {
          name: "烤鱼",
          price: 28,
          num: 0,
          id: 4
        }
      ],
      [
        {
          name: "米饭",
          price: 2,
          num: 0,
          id: 5
        },
        {
          name: "蛋炒饭",
          price: 6,
          num: 0,
          id: 6
        },
        {
          name: "米粉",
          price: 6,
          num: 0,
          id: 7
        },
        {
          name:"炒粉",
          price:6,
          num: 0,
          id: 8
        },
        {
          name:"螺蛳粉",
          price:10,
          num: 0,
          id: 9
        }
      ],
      [
        {
          name: "可乐",
          price: 3,
          num: 0,
          id: 10
        },
        {
          name: "雪碧",
          price: 3,
          num: 0,
          id: 11
        },
        {
          name: "橙汁",
          price: 3,
          num: 0,
          id: 12
        }
      ],
      [
        {
          name: "女神套餐",
          price: 30,
          num: 0,
          id: 13
        },
        {
          name: "男神套餐",
          price: 35,
          num: 0,
          id: 14
        }
      ]
    ],
    dishes: []
  },
  selectNav(event) {
    let id = event.target.dataset.id,
        index = parseInt(event.target.dataset.index);
    self = this;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  subtract(event){
    console.log(event);
  },
  plus(event){

  },
  // 选择菜品
  /*selectDish(event) {
    var dishNum = event.currentTarget.dataset.dish;
    console.log(event);
    let dish = event.currentTarget.dataset.dish; //选择的菜品的id
    let flag = true; //true表示可以被添加到购物车中
    let cart = this.data.cart; //购物车数组

    if (cart.length > 0) { //购物车中有商品时
      cart.forEach(function (item, index) {//遍历购物车
        if (item == dish) {//购物车如果有该商品
          cart.splice(index, 1); //删除该商品
          flag = false;//不能被添加到购物车中
        }
      })
    }
    if (flag) cart.push(dish); //添加到购物车
    this.setData({
      cartTotal: cart.length //购物车商品数量
    })
    this.setStatus(dish) //修改状态
  },*/
  /*//修改菜品选中状态
  setStatus(dishId) {
    let dishes = this.data.dishesList;//菜品的二维数组
    for (let dish of dishes) {
      dish.forEach((item) => { //双重循环遍历
        if (item.id == dishId) { //修改对应id的状态
          item.status = !item.status || false
        }
      })
    }

    this.setData({
      dishesList: this.data.dishesList
    })
  },*/

    onLoad() {
    this.loadingChange()
  },
  loadingChange() {
    setTimeout(() => {
    this.setData({
      hidden: true
    })
  }, 2000)
},
})
