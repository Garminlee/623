<template>
  <div id="app">
    <nav
      class="navbar navbar-default navbar-fixed-top"
      id="index"
      name="index"
      style="background-color: transparent"
    >
      <div class="container-fluid navbar-fluid">
        <div class="clearfix navbar-control">
          <div class="col-md-8 col-md-offset-2">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-expanded="false"
              >
                <span>菜单</span>
              </button>
              <a class="navbar-brand" href="javascript:scroll(0,0)">
                <img src="../static/images/LOGO.png" />
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse">
              <ul
                id="nav"
                class="nav navbar-nav navbar-right"
                style="position: relative"
              >
                <li class="">
                  <a href="http://www.ppgtechnology.com/" target="_blank"
                    >WHY</a
                  >
                </li>
                <li class="">
                  <a href="#features">优势</a>
                </li>
                <li class="">
                  <a href="#capacity">功能</a>
                </li>
                <li class="">
                  <a href="#service">定价</a>
                </li>
                <li class="">
                  <a href="#users">社区</a>
                </li>
                <li>
                  <a href="https://www.time-cost.com/blog/listblog.html"
                    >Blog</a
                  >
                </li>

                <li>
                  <a class="sign-up" href="https://www.time-cost.com/reg.jsp"
                    ><i>免费试用</i></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid container-page">
      <div
        class="swiper-container swiper-container-fade swiper-container-horizontal"
      >
        <div class="swiper-wrapper" style="transition-duration: 3000ms">
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            data-swiper-slide-index="3"
            style="
              width: 1903px;
              transition-duration: 3000ms;
              opacity: 1;
              transform: translate3d(0px, 0px, 0px);
            "
          >
            <img src="../static/images/swiper6.png" alt="" />
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate-next"
            data-swiper-slide-index="0"
            style="
              width: 1903px;
              transition-duration: 3000ms;
              opacity: 1;
              transform: translate3d(-1903px, 0px, 0px);
            "
          >
            <img src="../static/images/swiper2.png" alt="" />
          </div>
          <div
            class="swiper-slide"
            data-swiper-slide-index="1"
            style="
              width: 1903px;
              transition-duration: 3000ms;
              opacity: 1;
              transform: translate3d(-3806px, 0px, 0px);
            "
          >
            <img src="../static/images/swiper4.png" alt="" />
          </div>
          <div
            class="swiper-slide swiper-slide-prev"
            data-swiper-slide-index="2"
            style="
              width: 1903px;
              transition-duration: 3000ms;
              opacity: 1;
              transform: translate3d(-5709px, 0px, 0px);
            "
          >
            <img src="../static/images/swiper5.png" alt="" />
          </div>
          <div
            class="swiper-slide swiper-slide-active"
            data-swiper-slide-index="3"
            style="
              width: 1903px;
              transition-duration: 3000ms;
              opacity: 1;
              transform: translate3d(-7612px, 0px, 0px);
            "
          >
            <img src="../static/images/swiper6.png" alt="" />
          </div>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-next"
            data-swiper-slide-index="0"
            style="
              width: 1903px;
              transition-duration: 3000ms;
              opacity: 0;
              transform: translate3d(-9515px, 0px, 0px);
            "
          >
            <img src="../static/images/swiper2.png" alt="" />
          </div>
        </div>
        <div
          class="swiper-pagination top-pagination swiper-pagination-clickable swiper-pagination-bullets"
        >
          <span class="swiper-pagination-bullet"></span
          ><span class="swiper-pagination-bullet"></span
          ><span class="swiper-pagination-bullet"></span
          ><span
            class="swiper-pagination-bullet swiper-pagination-bullet-active"
          ></span>
        </div>
        <div class="swiper-content">
          <div class="row">
            <div class="swiper-item">
              <div class="swiper-itemtitle">
                <img src="../static/images/LOGO.png" alt="" />&nbsp;
                设计公司冲刺管理工具
              </div>
              <div class="swiper-itemafter">
                冲刺过清晰量化管控，及时扫除障碍，保证按时交付成果
              </div>
              <div class="reg-item">
                <img src="../static/images/QRCode.png" alt="" />
                <p>微信扫码开始冲刺</p>
              </div>
              <span class="swiper-itemicon"
                ><a href="https://www.time-cost.com/#features"
                  ><img src="../static/images/swiper-down.png" alt="" /></a
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-line clearfix">
        <div class="col-md-8 col-md-offset-2 clearfix" style="padding: 0">
          <div class="swiper-line-item col-lg-2 swiper-line-item1">
            <div class="swiper-line-first"></div>
            <span>step 1</span>
            <span>创建团队</span>
          </div>
          <div class="swiper-line-item col-lg-2 swiper-line-item2">
            <img src="../static/images/right-icons.png" alt="" />
            <span>step 2</span>
            <span>邀请队员</span>
          </div>
          <div class="swiper-line-item col-lg-2 swiper-line-item3">
            <img src="../static/images/right-icons.png" alt="" />
            <span>step 3</span>
            <span>创建项目和冲刺</span>
          </div>
          <div class="swiper-line-item col-lg-2 swiper-line-item4">
            <img src="../static/images/right-icons.png" alt="" />
            <span>step 4</span>
            <span>创建任务</span>
            <span>设定故事点</span>
            <span>分配任务</span>
          </div>
          <div class="swiper-line-item col-lg-2 swiper-line-item5">
            <img src="../static/images/right-icons.png" alt="" />
            <span>step 5</span>
            <span>团队成员每日更新任务</span>
          </div>
          <div class="swiper-line-item col-lg-2 swiper-line-item6">
            <img src="../static/images/right-icons.png" alt="" />
            <span>工作进度和团队效率尽在掌控</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="myModal-content">
        <img src="../static/images/QRCode.png" alt="" />
        <p>微信扫码开始冲刺</p>
        <span class="myModal-close" data-dismiss="modal"
          ><img src="../static/images/close.png" alt=""
        /></span>
      </div>
    </div>
    <div class="container-fluid" style="padding: 0">
      <div class="sections" id="features">
        <div class="sections-title"><span>优势</span></div>
        <div class="sections-content">
          <div class="clearfix">
            <div class="col-md-8 col-md-offset-2">
              <div class="row">
                <div class="col-md-4 features-wrap">
                  <span class="ys-icon"
                    ><img src="../static/images/ys-jdyy.png" alt=""
                  /></span>
                  <div class="features-item">
                    <p class="features-item-title">简单方便易用</p>
                    <p class="features-item-ctx">
                      在微信小程序中，随时随地随心操作，无需学习，凭直觉与常识即可上手
                    </p>
                  </div>
                </div>
                <div class="col-md-4 features-wrap">
                  <span class="ys-icon"
                    ><img src="../static/images/ys-jdxl.png" alt=""
                  /></span>
                  <div class="features-item">
                    <p class="features-item-title">高效收集数据</p>
                    <p class="features-item-ctx">
                      员工每天只需花费15秒录入工时,管理者定期回顾,就能高效完成数据录入
                    </p>
                  </div>
                </div>
                <div class="col-md-4 features-wrap">
                  <span class="ys-icon"
                    ><img src="../static/images/ys-ssfk.png" alt=""
                  /></span>
                  <div class="features-item">
                    <p class="features-item-title">实时提供反馈</p>
                    <p class="features-item-ctx">
                      小程序每日更新燃尽图，及时检测冲刺是否能够如期完成，定位导致进度滞后的成员，提醒注意。小程序自动统计工作量和工作效率
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sections ability" id="capacity">
        <div class="sections-title">
          <span>功能</span>
          <p class="sectitle-tips">您去设计世界.我们来数据管理</p>
        </div>
        <div class="sections-content">
          <div class="sections-content">
            <div class="clearfix">
              <div class="col-md-8 col-md-offset-2">
                <div class="row">
                  <div class="col-md-3">
                    <p class="service-wrap-title">任务分配、工作量评估</p>
                    <div class="service-wrap">
                      <img src="../static/images/task.png" alt="" />
                    </div>
                  </div>

                  <div class="col-md-3">
                    <p class="service-wrap-title">工作进度追踪</p>
                    <div class="service-wrap">
                      <img src="../static/images/process.png" alt="" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <p class="service-wrap-title">团队延误预警</p>
                    <div class="service-wrap">
                      <img src="../static/images/teamDelay.png" alt="" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <p class="service-wrap-title">队员延误预警</p>
                    <div class="service-wrap">
                      <img src="../static/images/mateDelay.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sections ability"
        id="service"
        style="background-color: #ffffff"
      >
        <div class="sections-title"><span>定价</span></div>
        <div class="sections-content">
          <div class="clearfix">
            <div class="col-md-8 col-md-offset-2">
              <div class="row center-row">
                <div class="col-md-3">
                  <div class="row">
                    <div class="service-wrap-only">
                      <div class="service-wraptitle" style="color: #52be8a">
                        团队版
                      </div>
                      <div
                        class="service-wraptitle service-wraptitle2"
                        style="color: #52be8a; height: 70px"
                      >
                        <span class="yuan-sign">¥</span
                        ><span class="service-price">1500</span
                        ><span class="service-size">年/团队</span>
                      </div>
                      <p style="font-size: 10px; height: 40px">
                        建议10人以下的设计小组长担任队长，公司领导作为观察者
                      </p>
                      <button
                        type="button"
                        class="sw-item-btn"
                        style="background-color: #52be8a"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        创建团队
                      </button>
                      <div class="sw-item-btndes">免费试用期14天</div>
                      <div class="service-wrap-item">
                        <ul>
                          <li>队长、队员、观察者三种角色</li>
                          <li>任务分解</li>
                          <li>工作量评估</li>
                          <li>过程管控</li>
                          <li>延期预期</li>

                          <li>效率评价</li>
                        </ul>
                      </div>
                      <div class="service-wrap-item">
                        <div style="font-size: 15px">服务 :</div>
                        <ul>
                          <li>5*8在线支持</li>
                          <li>客户成功服务支持</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="sections" id="service">
        <div class="sections-title"><span>定价</span></div>
        <div class="sections-content">
            <div class="clearfix">
                <div class="col-md-8 col-md-offset-2">
                    <div class="row">
                        <div class="col-md-4 service-wrap">
                            <div class="service-wraptitle">免费版</div>
                            <div class="service-wraptitle service-wraptitle2"><span class="yuan-sign">¥</span><span class="service-price">0</span><span class="service-size"></span></div>
                            <div class="service-wrap-item">
                                <ul>
                                    <li>项目经营数据录入</li>
                                    <li>员工工时填报</li>
                                    <li>公司经营状态报表</li>
                                    <li>项目运营状态报表</li>
                                    <li>员工工作负荷报表</li>
                                    <li>项目数量不限</li>
                                    <li>两种权限,组织拥有者与队员</li>
                                    <li>组织成员容量限制为10人</li>
                                    <li>基本项目权限控制</li>
                                    <li>每个项目最多允许有10个参与者</li>
                                </ul>
                                <div class="sw-item-tips">何不熟悉一下TC?</div>
                                <button type="button" class="sw-item-btn" onclick="javascript:top.location='/reg.jsp'" style="background-color: #52bE8A;">立即开通</button>
                            </div>
                        </div>
                        <div class="col-md-4 service-wrap service-wrap2">
                            <div class="service-wraptitle" style="color:#52bE8A ">专业版</div>
                            <div class="service-wraptitle service-wraptitle2" style="color:#52bE8A "><span class="yuan-sign">¥</span><span class="service-price">30</span><span class="service-size">月/人（最少购买10人容量）</span>
                                <span style="font-size:30px;color:#52bE8A;font-weight:600;position:relative;top:5px;">+</span></span><span class="yuan-sign">¥</span><span class="service-price">300</span><span class="service-size">月/组织</span></div> 
                            <div class="service-wrap-item">
                                <ul class="sw-lastcenter">
                                    <li>项目经营数据录入</li>
                                    <li>员工工时填报</li>
                                    <li>公司经营状态报表</li>
                                    <li>项目运营状态报表</li>
                                    <li>员工工作负荷报表</li>
                                    <li>项目数量不限</li>
                                    <li>三种组织权限,组织拥有者,组织管理者,队员</li>
                                     <li>在项目上增加项目管理者角色</li>
                                    <li>项目和组织角色权限控制</li>
                                    <li>组织成员容量不限</li>
                                    <li>每个项目数量参与者不限</li>
                                </ul>
                                <div class="sw-item-tips" style="padding: 0 45px;">每月一杯咖啡的价格,实时监控公司和项目的运营状态</div>
                                <button type="button" class="sw-item-btn" style="background-color: #52bE8A;" onclick="javascript:top.location='/reg.jsp'">立即开通</button>
                            </div>
                        </div>
                        <div class="col-md-4 service-wrap">
                            <div class="service-wraptitle" style="color:#2facb2 ">企业版</div>
                            <div class="service-wraptitle service-wraptitle2" style="color:#2facb2 "><span class="yuan-sign">¥</span><span class="service-price">30</span><span class="service-size">月/人</span><img
                                    src="index/indexindex/indeximages/priceadd.png" alt="" class="service-img" style="vertical-align: middle;width: 25px;height: 25px;"><span style="font-size:30px;color:#2facb2;font-weight:600;position:relative;top:5px;">+</span></span><span class="yuan-sign">¥</span><span class="service-price">3000</span><span class="service-size">月/组织</span></div>
                            <div class="service-wrap-item">
                                <ul class="sw-last">
                                    <li>专业版全部功能</li>
                                    <li>更多的工作角色(管理员,人力资源,财务,项目拥有者)</li>
                                    <li>对员工分组(团队)分析比较数据</li>
                                    <li>对项目分组比较数据( 按类型, 业主等 )</li>
                                </ul>
                                <div class="sw-item-tips"><span style="color:#2facb2">在专业版的基础上, </span>增加3000元/月/组织, 享有TC全部功能让您实时监控公司和项目运营状态</div>
                                <button type="button" class="sw-item-btn" style="background-color: #ddd">Coming soon......</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

      <!-- <div class="sections-line newsections-line">
       	 掌控项目,及时了解项目和公司运状态,只需让您和您的员工每天同 <img src="resources/images/index/LOGO.png" alt=""> 交谈1分钟.
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="col-md-6"><div class="sl-tl">现在开始, 免费使用</div><div class="sl-btn" onclick="javascript:top.location='/reg.jsp'">立即体验</div></div>
                <div class="col-md-6"><div class="sl-tl">点击一下, 查看演示</div><div class="sl-btn" onclick="javascript:top.location='/visitors.jsp'">查看演示</div></div>
            </div>
        </div>
    </div> -->
      <div class="sections-line newsections-line">
        <div style="font-size: 42px">现在开始冲刺管理</div>
        <div style="color: #eee; margin: 7px 0 60px">
          及时了解公司和项目的运行状态, 一切尽在掌握
        </div>
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            <div class="col-md-4 col-md-offset-4">
              <div class="sl-btn" data-toggle="modal" data-target="#myModal">
                免费试用
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sections" id="users">
        <div class="sections-title"><span>服务用户</span></div>
        <div class="sections-content" style="display: none">
          <div class="clearfix">
            <div class="col-md-10 col-md-offset-1">
              <div class="row">
                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.daqianjg.com/" target="_blank">
                                <img src="resources/images/index/t1.png" alt="">
                            </a>
                        </div> -->
                <!--  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.rongzhitong.com/" target="_blank">
                                <img src="resources/images/index/t19.jpg" alt="">
                            </a>
                        </div> -->
                <!--  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="https://www.dyxnet.com/" target="_blank">
                                <img src="resources/images/index/t3.png" alt="">
                            </a>
                        </div> -->
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://srtdesign.com/" target="_blank">
                    <img src="../static/images/t4.jpg" alt="" />
                  </a>
                </div>
                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.ddot-us.com/" target="_blank">
                                <img src="resources/images/index/t5.jpg" alt="">
                            </a>
                        </div> -->
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.housefiction.com/" target="_blank">
                    <img src="../static/images/t29.jpg" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.gbtech-srt.com/" target="_blank">
                    <img src="../static/images/t6.jpg" alt="" />
                  </a>
                </div>
                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.archicreation.com.cn/index.jsp" target="_blank">
                                <img src="resources/images/index/t7.jpg" alt="">
                            </a>
                        </div> -->
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://wadistudio.com/" target="_blank">
                    <img src="../static/images/t8.jpg" alt="" />
                  </a>
                </div>
                <!--  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://isbim.com.cn/" target="_blank">
                                <img src="resources/images/index/t9.jpg" alt="">
                            </a>
                        </div> -->
                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <img src="resources/images/index/t27.png" alt="">
                            <div>厚承设计</div>
                        </div> -->
                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.cfecc.com/" target="_blank">
                                <img src="resources/images/index/t10.png" alt="">
                            </a>
                        </div> -->
                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.hhdesign.cn/" target="_blank">
                                <img src="resources/images/index/t11.png" alt="">
                            </a>
                        </div> -->
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a
                    href="http://www.peoples-architecture.com/pao/en"
                    target="_blank"
                  >
                    <img src="../static/images/t26.png" alt="" />
                  </a>
                </div>
                <!--   <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.ramon.com.cn/" target="_blank">
                                <img src="resources/images/index/t12.png" alt="">
                            </a>
                        </div> -->
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a
                    href="http://www.chinaecocityacademy.com/#page1/1"
                    target="_blank"
                  >
                    <img src="../static/images/t25.jpg" alt="" />
                  </a>
                </div>
                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://widescape.cn/" target="_blank">
                                <img src="resources/images/index/t14.jpg" alt="">
                            </a>
                        </div> -->
                <!--  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.spigroup.cn/index.php?in=1" target="_blank">
                                <img src="resources/images/index/t15.png" alt="">
                            </a>
                        </div> -->
                <!--   <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.bambuspace.com/" target="_blank">
                                <img src="resources/images/index/t16.png" alt="">
                            </a>
                        </div> -->
                <!--  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.gxhanhe.com/" target="_blank">
                                <img src="resources/images/index/t17.png" alt="" style="cursor: pointer;">
                            </a>
                        </div> -->

                <!--  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.chinagadri.com" target="_blank">
                                <img src="resources/images/index/t18.jpg" alt="">
                            </a>
                        </div> -->
                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.cqlandiao.com/index.shtml" target="_blank">
                                <img src="resources/images/index/nandiao.png" alt="">
                            </a>
                        </div> -->
                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                            <a href="http://www.sidex.cn/" target="_blank">
                                <img src="resources/images/index/side.png" alt="">
                            </a>
                        </div> -->
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.smallstudio.cn/" target="_blank">
                    <img src="../static/images/SmallStudio.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://archmap.com.au/" target="_blank">
                    <img src="../static/images/t30.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://domustiandi.com/" target="_blank">
                    <img src="../static/images/t31.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <img src="../static/images/t32.png" alt="" />
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.szfengjing.com/" target="_blank">
                    <img src="../static/images/szfengjing.jpg" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://hatchgroup.cn/" target="_blank">
                    <img
                      src="../static/images/hatch.png"
                      alt=""
                      style="width: 180px; height: 60px"
                    />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.isbim.com.cn/index.html" target="_blank">
                    <img src="../static/images/isbm.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.bjzhuhe.com/" target="_blank">
                    <img
                      src="../static/images/bjzhuhe.jpg"
                      alt=""
                      style="width: 400px; height: 70px"
                    />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.jiananplan.com/home" target="_blank">
                    <img src="../static/images/jianan.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.arcxtec.com/" target="_blank">
                    <img src="../static/images/daguan.jpg" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a
                    href="http://www.tadi.net.cn/channels/3.html"
                    target="_blank"
                  >
                    <img src="../static/images/Screenshot-0.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sections-title sections-title2"><span>朋友们</span></div>
        <div class="sections-content" style="display: none">
          <div class="clearfix">
            <div class="col-md-10 col-md-offset-1">
              <div class="row">
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.cqzfj.com/" target="_blank">
                    <img src="../static/images/t19.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.sheencity.com/" target="_blank">
                    <img src="../static/images/t20.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://archist.cn/archist.do" target="_blank">
                    <img src="../static/images/t21.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a
                    href="http://drawnet.com/xt/xtdl/login/sign?path=112.67.73.233:80&amp;sign=0"
                    target="_blank"
                  >
                    <img src="../static/images/t22.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.czloud.com/" target="_blank">
                    <img src="../static/images/t23.png" alt="" />
                  </a>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6 users-wrap">
                  <a href="http://www.bjzhuhe.com/" target="_blank">
                    <img src="../static/images/bjzhuhe.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sections" id="lastarea">
        <div class="sections-content">
          <div class="clearfix">
            <div class="col-md-8 col-md-offset-2">
              <div class="col-md-4 col-sm-10 col-xs-8 footnav">
                <ul class="clearfix">
                  <li class="active">
                    <a href="https://www.time-cost.com/#features">优势</a>
                  </li>
                  <li><a href="https://www.time-cost.com/#prices">定价</a></li>
                  <li><a href="https://www.time-cost.com/#prices">功能</a></li>
                  <li><a href="https://www.time-cost.com/#users">社区</a></li>
                  <li>
                    <a href="https://www.time-cost.com/blog/listblog.html"
                      >博客</a
                    >
                  </li>
                </ul>
              </div>
              <div class="row">
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-4 last-wrap">
                  <a href="https://www.time-cost.com/#" class="last-logo"
                    ><img src="../static/images/LOGO.png" alt=""
                  /></a>
                  <div class="lastarea-word">
                    <p class="lastarea-wordt">论坛</p>
                    <p class="lastarea-wordc">欢迎关注我们的论坛账号</p>
                  </div>
                  <div class="lastarea-link">
                    <a
                      href="https://zhuanlan.zhihu.com/time-cost"
                      target="_blank"
                      style="cursor: pointer; text-decoration: none"
                    >
                      <img src="../static/images/fw-zh.png" alt="" />
                      <p class="text-center">知乎</p>
                      <p class="text-center">[Scrum]</p>
                    </a>
                  </div>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-4 last-wrap">
                  <a href="https://www.time-cost.com/#" class="last-logo"></a>
                  <div class="lastarea-word">
                    <p class="lastarea-wordt">关注我们</p>
                    <p class="lastarea-wordc">欢迎关注我们的社区账号</p>
                  </div>
                  <div class="lastarea-link lastarea-linkcode">
                    <div class="linkcode-wrap">
                      <img src="../static/images/QRCode.png" alt="" />
                    </div>
                    <img src="../static/images/fw-wx.png" alt="" />
                    <p class="text-center">微信公众号</p>
                  </div>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-4 last-wrap">
                  <div class="lastarea-word">
                    <p class="lastarea-wordt">联系我们</p>
                    <p class="lastarea-wordc">有任何疑问, 请联络我们客服人员</p>
                  </div>
                  <div class="lastarea-words">
                    <p
                      class="lastarea-wordsc"
                      style="margin-top: 7px; height: 20px; position: relative"
                    >
                      微信客服:
                      <img
                        src="../static/images/qrcode2.png"
                        alt=""
                        class="wxcs"
                      />
                    </p>
                  </div>
                  <div class="lastarea-words">
                    <p class="lastarea-wordsc">服务时间</p>
                    <p class="lastarea-wordsc">
                      工作日 09:00 - 11:00; 14:00 - 17:00
                    </p>
                  </div>
                  <div class="lastarea-words">
                    <p class="lastarea-wordsc">您还可以发送邮件到</p>
                    <p class="lastarea-wordsc">lihaile@time-cost.com</p>
                  </div>
                  <p class="end-words">我们将尽快回复您!</p>
                </div>
              </div>

              <div class="copyright-word">
                CopyRight © Time-Cost 重庆丕丕基科技有限公司
                <a
                  href="http://www.beian.miit.gov.cn/"
                  target="_blank"
                  style="
                    cursor: pointer;
                    color: #cccdd0;
                    text-decoration: none;
                    margin-left: 0rem !important;
                  "
                  >渝ICP备15010108号-1</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("data-spy", "scroll");
    document.querySelector("body").setAttribute("data-target", "#index");
    document.querySelector("body").setAttribute("data-offset", "50");
  },
};
</script>

<style>
</style>
