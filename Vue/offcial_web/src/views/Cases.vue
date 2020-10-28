<template>
  <div>
    <!-- 内容区域 开始 -->
    <div class="content">
      <div class="bgi">
        <div class="container">
          <div class="title">
            <p><span>解决方案</span></p>
            <p>SOLUTION</p>
          </div>
        </div>
      </div>
      <div class="cases container">
        <div>
          <ul class="clearfix">
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
export default {};
</script>

<style lang="">
/* 标题部分 */
.bgi {
  background: url(../../static/images/sltbgi.png) no-repeat center;
}
.bgi {
  text-align: center;
  height: 300px;
  position: relative;
}
.bgi .title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .bgi {
    height: 150px;
  }
}
.bgi .title p:first-of-type {
  font-size: 40px;
  margin-bottom: 8px;
}
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