<template>
  <div>
    <!-- footer区域 开始 -->
    <div class="footer">
      <div class="container footer_box clearfix hidden-xs">
        <div class="info fl">
          <p class="tel">
            <a href="javascript:;">电话： 400xxx8888</a>
          </p>
          <p>
            <a href="javascript:;"> 传真： 010xxxx8888 </a>
          </p>
          <p class="email">
            <a href="javascript:;"> 邮箱： name@example.xxx</a>
          </p>
          <p>
            <a href="javascript:;">地址： 中国北京市东城区某某大厦8-88室</a>
          </p>
        </div>
        <div class="QR fr">
          <div class="QRcode">
            <img src="../../static/images/QRCode.jpg" alt="二维码" />
          </div>
          <span>扫一扫 关注我们</span>
        </div>
      </div>
      <div class="copyright hidden-xs">
        <a href="javascript:;">版权所有 © 某某有限公司</a>
      </div>
      <div class="copyrightXS visible-xs">
        <a href="javascript:;">版权所有 © 某某有限公司</a>
      </div>
    </div>
    <!-- footer区域 结束 -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
/* footer 页脚区域 */

/* .footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
} */

.footer,
.copyright {
  background-color: rgb(51, 51, 51);
}
.copyrightXS {
  background-color: #265192;
  text-align: center;
  padding: 20px 0;
}
.copyrightXS a {
  color: #fff !important;
}
.copyright {
  text-align: center;
  border-top: 1px solid rgb(89, 89, 89);
  padding: 6px 0 12px 0;
}

.footer a {
  font-size: 14px;
  color: #999999;
}

.footer_box {
  position: relative;
  height: 220px;
}

.footer_box .info {
  position: absolute;
  top: 60px;
  left: 64px;
}

.footer_box .info p {
  margin-bottom: 8px;
}

.QRcode {
  position: absolute;
  top: 49px;
  right: 11px;
  background-color: #fff;
  padding: 7px;
}

.QRcode img {
  width: 110px;
  height: 110px;
}

.QR span {
  position: absolute;
  right: 25px;
  bottom: 15px;
  color: #888888;
  font-size: 12px;
}
</style>