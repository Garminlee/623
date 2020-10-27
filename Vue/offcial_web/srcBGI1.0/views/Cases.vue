<template>
  <div>
    <!-- 内容区域 开始 -->
    <div class="content">
      <TitleBgi />
      <div class="cases container">
        <div>
          <ul class="clearfix" @click="caseBgi(4)">
            <li class="col-xs-4">
              <div>
                <a href="./info.html">
                  <div class="img">
                    <img src="../../static/images/news1.png" alt="" />
                  </div>
                  <div class="mask">
                    <p class="maskname">
                      加盟刷脸支付代理创业者的机遇：刷脸支付、错过就只有后悔!
                    </p>
                    <p class="maskinfo">
                      2019年，“刷脸支付”这一新的移动支付方式如雨后春笋般涌现。一夜爆发，街头巷尾都能看到。便利店、超市、商场、医院、银行等......在有支付需求的地方，刷脸支付刷的是消费者的脸，同时也“刷”消费者自己的存在感。
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="col-xs-4">
              <div>
                <a href="./info.html">
                  <div class="img">
                    <img src="../../static/images/news2.png" alt="" />
                  </div>
                  <div class="mask">
                    <p class="maskname">
                      加盟刷脸支付代理创业者的机遇：刷脸支付、错过就只有后悔!
                    </p>
                    <p class="maskinfo">
                      2019年，“刷脸支付”这一新的移动支付方式如雨后春笋般涌现。一夜爆发，街头巷尾都能看到。便利店、超市、商场、医院、银行等......在有支付需求的地方，刷脸支付刷的是消费者的脸，同时也“刷”消费者自己的存在感。
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="col-xs-4">
              <div>
                <a href="./info.html">
                  <div class="img">
                    <img src="../../static/images/news4.png" alt="" />
                  </div>
                  <div class="mask">
                    <p class="maskname">
                      加盟刷脸支付代理创业者的机遇：刷脸支付、错过就只有后悔!
                    </p>
                    <p class="maskinfo">
                      2019年，“刷脸支付”这一新的移动支付方式如雨后春笋般涌现。一夜爆发，街头巷尾都能看到。便利店、超市、商场、医院、银行等......在有支付需求的地方，刷脸支付刷的是消费者的脸，同时也“刷”消费者自己的存在感。
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 内容区域 结束 -->
  </div>
</template>

<script>
import TitleBgi from "../components/TitleBgi";

export default {
  methods: {
    caseBgi(flag) {
      this.$store.dispatch("TitleBgi", flag);
    },
  },
  components: {
    TitleBgi,
  },
};
</script>

<style>
/* 内容区域 */

.cases ul li div:first-of-type {
  position: relative;
}

.cases {
  padding: 100px 0;
}

.cases ul li,
.cases ul li .img {
  overflow: hidden;
}
.cases ul li:hover .img img {
  transform: scale(1.1);
}
.cases ul li img {
  height: 252px;
  width: auto;
  transition: all 0.3s;
  margin-left: -40px;
}

.cases ul li:hover .mask {
  top: 0px;
  left: 0px;
  padding: 80px 8px;
}

.cases li .mask {
  position: absolute;
  top: 220px;
  width: 100%;
  padding: 0 8px;
  background-color: #00000090;
}

.cases li .mask .maskname {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  color: #ffffff;
  line-height: 2.3;
}

.cases li .mask .maskinfo {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  color: #ffffff;
  font-size: 12px;
  line-height: 2;
}
</style>