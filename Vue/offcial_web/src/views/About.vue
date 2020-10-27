<template>
  <div>
    <div class="content">
      <div class="us-bgi">
        <div class="container">
          <div class="row">
            <div class="title">
              <p><span>关于我们</span></p>
              <p>ABOUT US</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container usBox">
        <div class="row">
          <div class="us hidden-xs">
            <p>
              汽车零部件作为汽车工业的基础，是支撑汽车工业持续健康发展的必要因素。特别是当前汽车行业正在轰轰烈烈、如火如荼开展的自主开发与创新，更需要一个强大的零部件体系作支撑。整车自主品牌与技术创新需要零部件作基础，零部件的自主创新又对整车产业的发展产生强大推动力，他们是相互影响、相互作用的，没有整车的自主品牌，强大零部件体系的研发创新能力难以迸发，没有强大零部件体系的支撑，自主品牌的做大作强将难以为继。
            </p>
            <p>
              中国汽车零部件销售产值已突破2万亿元人民币，未来几年仍将保持20%以上的增幅。预计到2015年中国汽配行业规模产值可达到2.5万亿元人民币。2002年以来，中国汽车产销量保持了近10年的高速增长，汽车工业已发展成为中国经济的支柱产业。2009年，中国汽车产销双双突破1300万辆，跃居全球第一，到2011年，中国汽车产销突破1900万辆，连续3年位居全球第一。
            </p>
          </div>
          <div class="usXS visible-xs">
            <p>
              科技股份有限公司成立于2011年，是一家专注于视音频显控解决方案的创新型高科技公司。秉承深厚的图像处理、音视频编解码、传输技术、系统集成的专业能力，致力于面向全球各行业客户提供优质的显控解决方案。
            </p>
          </div>
          <div class="us_pic">
            <img src="../../static/images/us_pic.png" alt="" />
          </div>
        </div>
      </div>
      <div class="iconcut">
        <div class="container pd-69 clearfix">
          <ul>
            <li>
              <div class="loc">
                <div>
                  <a href="javascript:;"><i class="iconfont icon-icon-"></i></a>
                </div>
                <div class="line"></div>
                <p>自主创新为根本</p>
              </div>
            </li>
            <li>
              <div class="loc">
                <div>
                  <a href="javascript:;"
                    ><i class="iconfont icon-xiangzi"></i
                  ></a>
                </div>
                <div class="line"></div>
                <p>技术领先为目标</p>
              </div>
            </li>
            <li>
              <div class="loc">
                <div>
                  <a href="javascript:;"
                    ><i class="iconfont icon-dunpai1"></i
                  ></a>
                </div>
                <div class="line"></div>
                <p>质量上乘为基础</p>
              </div>
            </li>
            <li>
              <div class="loc">
                <div>
                  <a href="javascript:;"
                    ><i class="iconfont icon-yonghu"></i
                  ></a>
                </div>
                <div class="line"></div>
                <p>服务到位为保障</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="patent container">
        <div class="title">荣誉资质</div>
        <div class="patent-pics">
          <ul class="clearfix">
            <li><img src="../../static/images/zizhi.jpg" alt="" /></li>
            <li><img src="../../static/images/zizhi.jpg" alt="" /></li>
            <li><img src="../../static/images/zizhi.jpg" alt="" /></li>
            <li><img src="../../static/images/zizhi.jpg" alt="" /></li>
            <li><img src="../../static/images/zizhi.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
/* 标题部分 */

.us-bgi {
  background: url(../../static/images/usbgi.png) no-repeat center;
}

.us-bgi {
  text-align: center;
  height: 300px;
  position: relative;
}

.us-bgi .title {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 16px;
}

.us-bgi .title p:first-of-type {
  font-size: 40px;
  margin-bottom: 8px;
}

/* 内容区域 */

.usBox {
  padding: 5vw 5.25vw;
  color: #666666;
  font-size: 14px;
}

.usBox .us p {
  margin-bottom: 30px;
  line-height: 2;
}

.usBox .us_pic {
  position: relative;
  height: 210px;
  overflow: hidden;
}

.usBox .us_pic img {
  position: absolute;
  left: -30px;
  height: 210px;
}

.iconcut {
  height: 306px;
  background-color: #265192;
}

.iconcut .pd-69 {
  padding: 69px 0;
}

.iconcut ul li {
  float: left;
  width: 18%;
  margin-right: 9%;
  text-align: center;
}

.iconcut ul li:last-of-type {
  margin-right: 0;
}

.iconcut li a {
  display: inline-block;
  text-align: center;
  width: 123px;
  height: 96px;
}

.iconcut li a i {
  font-size: 50px;
  color: #ffffff;
}

.iconcut li .line {
  display: inline-block;
  height: 1px;
  width: 40px;
  margin: 15px 0;
  background-color: #fff;
}

.iconcut li p {
  font-size: 16px;
  color: #fff;
}

.patent .title {
  font-size: 30px;
  color: #000;
  text-align: center;
  padding: 50px 0;
}

.patent {
  padding: 10px 0 60px;
}

.patent ul li {
  float: left;
  width: 220px;
  height: 300px;
  margin-left: 18px;
}

.patent ul {
  margin-left: -20px;
}

.patent ul li img {
  width: 220px;
}
</style>