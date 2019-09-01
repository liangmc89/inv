<template>
  <q-page>
    <div class='absolute-full inv-bg1'>
      <swiper ref='swiper' class="fit" @transitionStart='transitionStart' @slideChange='slideChange' :options="swiperOption">
        <swiper-slide class="inv-bg2">
          <div class="title-box ">
            <div class="title-wrapper">
              <div class="title-border border-2">
              </div>
              <div class="title-border border-1">
              </div>
              <div class="title-content">
                <div class="meet-logo">
                  <q-img src='statics/image/meeting_logo.png'></q-img>
                </div>
                <p class="main-title">
                  <span class="mt">邀</span>
                  <span class="mt">请</span>
                  <span class="mt">函</span>
                </p>
                <p class="main-subtitle">
                  <span class="inve">I</span>
                  <span class="inve">N</span>
                  <span class="inve">V</span>
                  <span class="inve">I</span>
                  <span class="inve">T</span>
                  <span class="inve">A</span>
                  <span class="inve">T</span>
                  <span class="inve">I</span>
                  <span class="inve">O</span>
                  <span class="inve">N</span>
                </p>
                <p class="sec-title stt">
                  <span>2</span>
                  <span>0</span>
                  <span>1</span>
                  <span>9</span>
                  <span>智</span>
                  <span>慧</span>
                  <span>文</span>
                  <span>旅</span>
                  <span>产</span>
                  <span>业</span>
                  <span>发</span>
                  <span>展</span>
                  <span>论</span>
                  <span>坛</span>
                </p>
                <p class="sec-title str">
                  <span>暨</span>
                  <span>第</span>
                  <span>五</span>
                  <span>期</span>
                </p>
                <p class="sec-title stt">
                  <span>智</span>
                  <span>慧</span>
                  <span>旅</span>
                  <span>游</span>
                  <span>建</span>
                  <span>设</span>
                  <span>培</span>
                  <span>训</span>
                  <span>班</span>
                </p>
                <p class="ht">2019.9.3-9.5<br> 中国上海张江博雅酒店</p>
              </div>
            </div>

          </div>
          <div class="nav-box">
            <div class="fit position-relative">
              <div class="nav-wrap">
                <div class="row wrap ">
                  <div class="col-4">
                    <q-btn class="navbtn" @click="slideTo(1)" flat icon='img:statics/image/nav_1.png' label='日程安排'>
                    </q-btn>
                  </div>
                  <div class="col-4">
                    <q-btn class="navbtn" @click="slideTo(2)" flat icon='img:statics/image/nav_2.png' label='论坛报名'>
                    </q-btn>
                  </div>
                  <div class="col-4">
                    <q-btn class="navbtn" @click="slideTo(3)" flat icon='img:statics/image/nav_3.png' label='论坛地址'>
                    </q-btn>
                  </div>
                  <div class="col-4">
                    <q-btn class="navbtn" @click="slideTo(4)" flat icon='img:statics/image/nav_4.png' label='关于论坛'>
                    </q-btn>
                  </div>
                  <div class="col-4">
                    <q-btn class="navbtn" @click="slideTo(5)" flat icon='img:statics/image/nav_5.png' label='特邀专家'>
                    </q-btn>
                  </div>
                  <div class="col-4">
                    <q-btn class="navbtn" @click="slideTo(6)" flat icon='img:statics/image/nav_6.png' label='承办单位'>
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>        
        <swiper-slide class="inv-bg ps">
          <div class="bd1">
            <div class="bd2">
              <div class="slide-box">
                <swiper ref='contentSwiper' style="height:100%" :options='contentOptiont' @touchEnd='touchEnd'>
                  <swiper-slide style="height:auto;box-sizing:border-box;">
                    <q-timeline dark layout="dense" class="q-pa-sm rc" color="teal-12">
                      <q-timeline-entry heading class="rc_head">2019智慧文旅产业发展论坛<br> 暨第五期智慧旅游建设培训班<br> 日程安排
                      </q-timeline-entry>
                      <q-timeline-entry heading class="rc-subhead">
                        报到时间：2019年9月3日<br> 论坛时间：2019年9月4日—5日 <br> 论坛地点：上海博雅酒店（地址：浦东张江碧波路699号，总机021-61621168）
                        <br>
                      </q-timeline-entry>

                      <q-timeline-entry heading class="day_head">
                        9月4日 上午
                      </q-timeline-entry>
                      <q-timeline-entry title="领导致辞" subtitle="09:00—09:15" side="left">
                      </q-timeline-entry>

                      <q-timeline-entry title="主题演讲" subtitle="09:15—10:45" side="right">
                        <div>
                          <div class="yj-title">
                            <p>文化和旅游部信息中心副主任
                              <span>信宏业</span>
                            </p>
                            <p>演讲题目：
                              <span class="sss">智慧推进智慧文旅建设</span>
                            </p>
                          </div>
                          <div class="yj-title">
                            <p>北京大学教授、北京大学旅研与规划中心主任
                              <span>吴必虎</span>
                            </p>
                            <p>演讲题目：
                              <span class="sss">5G时代的产品创新和政策响应</span>
                            </p>
                          </div>
                        </div>
                      </q-timeline-entry>
                      <q-timeline-entry title="签约及授牌仪式" subtitle="10:45-10:55" side="left">
                      </q-timeline-entry>
                      <q-timeline-entry title="狂龙数字智慧文旅建设的思考" subtitle="10:55—11:20" side="left">
                      </q-timeline-entry>
                      <q-timeline-entry title="如何定义新的智慧文旅-圆桌对话" subtitle="11:20—12:00" side="left">
                      </q-timeline-entry>
                      <q-timeline-entry title="午餐" subtitle="12:00—13:30" side="left">
                      </q-timeline-entry>

                      <q-timeline-entry heading class="day_head">9月4日 下午</q-timeline-entry>

                      <q-timeline-entry title="主题演讲" subtitle="13:30—15:50" side="left">
                        <div>
                          <div class="yj-title">北京第二外国语学院教授、文化和旅游部“十三五”规划专家委员会委员
                            <span>张凌云</span>
                            <p>演讲题目：
                              <span class="sss">智慧旅游发展趋势与展望</span>
                            </p>
                          </div>
                          <div class="yj-title"> 复旦大学旅游学系副教授、电子商务研究中心研究员、智慧城市研究中心研究员；兼任上海市经济和信息化发展研究中心专家
                            <span>胡安安</span>
                            <p>演讲题目：
                              <span class="sss">浅谈大数据思维与创新</span>
                            </p>
                          </div>
                          <div class="yj-title text-orange" style="font-weight:700">
                            <p>中场休息10分钟</p>
                          </div>
                          <div class="yj-title"> 国家智慧旅游公共服务平台高级顾问、中国智慧旅游产业联盟秘书长
                            <span>蒋 骏</span>
                            <p>演讲题目：
                              <span class="sss">智慧旅游建设方法与实战案例</span>
                            </p>
                          </div>
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry title="科技如何赋能文旅融合发展-圆桌论坛" subtitle="16:00—17:00" side="right">
                      </q-timeline-entry>
                      <q-timeline-entry heading class="day_head">9月5日 上午</q-timeline-entry>
                      <q-timeline-entry title="主题演讲" subtitle="9:00—12:00" side="left">
                        <div>
                          <div class="yj-title">
                            <p>文化和旅游部产业发展司原二级巡视员，原国家旅游局规划财务司副司长和信息中心副主任
                              <span>蔡家成</span>
                            </p>
                            <p>演讲题目：
                              <span class="sss">全域旅游与智慧旅游</span>
                            </p>
                          </div>
                          <div class="yj-title">
                            <p> 国务院特殊津贴专家、世界旅游城市联合会专家委员会副主任、北京交通大学旅游系主任
                              <span>张 辉</span>
                            </p>
                            <p>演讲题目：
                              <span class="sss">大数据时代与大众化旅游</span>
                            </p>
                          </div>
                          <div class="yj-title">
                            <p>北京第二外国语学院教授、文化和旅游部“十三五”规划专家委员会委员、中国旅游改革发展咨询委员会副秘书长
                              <span>厉新建</span>
                            </p>
                            <p>演讲题目：
                              <span class="sss">文旅融合与科技赋能</span>
                            </p>
                          </div>
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry title="午餐" subtitle="12:00—13:30" side="right">
                      </q-timeline-entry>
                      <q-timeline-entry heading class="day_head">9月5日 下午</q-timeline-entry>
                      <q-timeline-entry title="实地学习" subtitle="13:30—15:30" side="left">
                        <div>
                          <p class="yj-title">A路线：张江国际创新港 <br>B路线：张江科学城展厅<br> C路线：上海国际旅游度假区<br>前往这三条路线三选一实地学习。 </p>

                        </div>
                      </q-timeline-entry>
                    </q-timeline>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>

        </swiper-slide>
        <swiper-slide class="inv-bg ps">
          <div class="bd1">
            <div class="bd2">
              <div class="slide-box">
                <div class="sld-logo">
                  <q-img src='statics/image/meeting_logo.png'></q-img>
                </div>
                <div class="sld-title slt2">
                  <div class="sld-c">论坛报名</div>
                </div>
                <div class="sld-form sf1">
                  <q-input ref='name' bg-color="white" outlined clearable clear-icon="close" lazy-rules :rules="[val => !!val || '请输入您的姓名']" v-model="name" label='姓名' dense class="full-width fi " />
                  <q-input ref='phone' bg-color="white" outlined clearable clear-icon="close" lazy-rules :rules="[val=>!!(/^1[3456789]\d{9}$/.test(val))||'请输入正确的手机号码']" v-model="phone" label="电话" dense class="full-width fi" />
                  <q-input ref='company' bg-color="white" outlined clearable clear-icon="close" lazy-rules :rules="[val => !!val || '请输入您的公司全称']" v-model="company" label="公司" dense class="full-width fi" />
                  <q-input ref='position' bg-color="white" outlined clearable clear-icon="close" lazy-rules :rules="[val => !!val || '请输入您的职位']" v-model="position" label="职位" dense class="full-width fi" />
                  <q-select style="display:none" ref='way' bg-color='white' outlined clearable clear-icon="close" lazy-rules :rules="[val => !!val || '请选择一条学习路线']" v-model="way" dense class='full-width fi' :options="ways" label="路线" />
                </div>
                <div class="sld-form-des sfd1">
                  <p class="ptt">会务组联系人:</p>
                  <p class="ptt">
                    <a href="tel:13918690403">王小姐：13918690403</a>
                  </p>
                  <p class="ptt">
                    <a href="tel:15055021496">罗小姐：15055021496</a>
                  </p>
                  <p class="ptt">（备注：住宿、差旅费用自理）</p>
                </div>
                <div class="submit-box">
                  <q-btn outline class="submit" color="white" @click="submit" label="提交" />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="inv-bg ps">
          <div class="bd1">
            <div class="bd2">
              <div class="slide-box">
                <div class="sld-logo">
                  <q-img src='statics/image/meeting_logo.png'></q-img>
                </div>
                <div class="sld-title sld3">
                  <div class="sld-c">论坛地址</div>
                </div>
                <div class="mapbox">
                  <div class="map-wrap">
                    <q-img src='statics/image/map.jpg' />
                  </div>
                </div>
                <div class="sld-addbox">
                  <div class="sld-add">地址:中国上海市浦东新区张江高科技园区 <br> 碧波路699号 中国上海博雅酒店</div>
                  <a href="tel:862161621168" class="sld-add">电话:+86 21 61621168</a>
                  <div class="sld-add">传真:+86 21 61621169</div>
                  <a href="http://www.parkyardhotel.com" class="sld-add">网站: www.parkyardhotel.com</a>
                </div>
                <div class="welcome">
                  「 欢迎您的到来 」
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="inv-bg ps">
          <div class="bd1">
            <div class="bd2">
              <div class="slide-box">
                <div class="sld-logo">
                  <q-img src='statics/image/meeting_logo.png'></q-img>
                </div>
                <div class="sld-title sld4">
                  <div class="sld-c">关于论坛</div>
                </div>
                <div class="relative-position" style='flex:1'>
                  <swiper class='fit' :options="sw2">
                    <swiper-slide>
                      <div class="sld-d q-mt-md">
                        关于论坛<br>2019 文化和旅游信息化发展峰会暨第五期智慧旅游建设培训班将于9月3-5日，在上海博雅酒店举办。此次活动宗旨：为全国各地文化和旅游信息化建设提供理论经验和实践指导,提升产业价值,提高服务水平,推动文化和旅游行业信息化发展,为各文化和旅游部门与智慧旅游企业搭建一个合作、学习和交流的平台。
                      </div>
                      <div class="sld-d">
                        组织机构<br> 主办单位:中国旅游报社<br> 承办单位:上海狂龙数字科技股份有限公司<br>协办单位:大地风景文旅集团、中国智慧旅游产业联盟、上海迪望旅游文化股份有限公司、上海长沪文化旅游发展有限公司、SMART度假产业智慧平台
                        <br> 媒体支持:中国旅游新闻网
                      </div>
                      <div class="sld-d">
                        参会人员<br> 1.全国部分省、区、市文化和旅游厅(局)领导、国家智慧旅游试点城市代表
                        <br> 2.智慧旅游企业、在线旅游企业、移动通讯厂商、旅游金融服务商等企业代表;<br> 3.各地A级旅游景区、旅行社、酒店负责人及文化和旅游企事业代表
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class='qt'>实地学习路线介绍</div>
                      <div class="sld-d ">
                        A路线：张江国际创新港 作为张江集中力量打造的三大创新创业集聚区之一，吸引了微软、阿里、英特尔、plug&play、中俄联合孵化器等孵化空间相继进驻。
                      </div>
                      <div class="sld-d">B路线：张江科学城展厅 作为上海科创中心核心区和国家级科技高地，集聚了一批大科学设施、科学平台和一流创新型院所。最强光、中国芯、蓝天梦 集聚张江科学城展示厅。</div>
                      <div class="sld-d">C路线：上海国际旅游度假区 该区域将围绕上海建设世界著名旅游城市的发展目标，重点培育和发展主题游乐、旅游度假、文化创意、会议展览、商业零售、体育休闲等产业，打造现代服务业高地，并整合周边旅游资源联动发展,建成能级高、辐射强的国际化旅游度假区。</div>
                      <div class='qt'>前往这三条路线三选一实地学习。</div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                  </swiper>
                </div>

              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="inv-bg ps">
          <div class="bd1">
            <div class="bd2">
              <div class="slide-box">
                <div class="sld-logo">
                  <q-img src='statics/image/meeting_logo.png'></q-img>
                </div>
                <div class="sld-title sld-6">
                  <div class="sld-c">特邀专家</div>
                </div>
                <div class="relative-position" style='flex:1'>
                  <swiper ref='swp2' class='fit' :options="sw2">
                    <swiper-slide>
                      <q-list padding class='text-white lst'>
                        <q-item clickable v-ripple>
                          <q-item-section avatar>
                            <q-avatar size='5rem'>
                              <img src="statics/image/吴必虎.png">
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label lines="1">吴必虎</q-item-label>
                            <q-item-label class="st">
                              北京大学教授、博士生导师，北京大学旅游研究与规划中心主任，国际旅游研究院院士、国际旅游学会秘书长、中国旅游改革发展咨询委员会专家。
                            </q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section class="text-right">
                            <q-item-label lines="1">张辉</q-item-label>
                            <q-item-label class="st">
                              国务院政府特殊津贴专家、 世界旅游城市联合会专家委员会副主席
                            </q-item-label>
                          </q-item-section>
                          <q-item-section avatar>
                            <q-avatar size='5rem'>
                              <img src="statics/image/张辉.png">
                            </q-avatar>
                          </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section avatar>
                            <q-avatar size='5rem'>
                              <img src="statics/image/张凌云.png">
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label lines="1">张凌云</q-item-label>
                            <q-item-label class="st">
                              北京第二外国语学院教授、文化和旅游部“十三五”规划专家委员会委员，《旅游学刊》执行主编。
                            </q-item-label>
                          </q-item-section>
                        </q-item>

                      </q-list>
                    </swiper-slide>
                    <swiper-slide>
                      <q-list padding class="text-white lst1">
                        <q-item clickable v-ripple>
                          <q-item-section class="text-right">
                            <q-item-label lines="1">厉新建</q-item-label>
                            <q-item-label class="st">
                              北京第二外国语学院教授，文化和旅游部“十三五”规划专家委员会委员，中国旅游改革发展咨询委员会副秘书长，世界旅游城市联合会特聘专家
                            </q-item-label>
                          </q-item-section>
                          <q-item-section avatar>
                            <q-avatar size='5rem'>
                              <img src="statics/image/厉新建.png">
                            </q-avatar>
                          </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section avatar>
                            <q-avatar size='5rem'>
                              <img src="statics/image/蒋骏.png">
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label lines="1">蒋骏</q-item-label>
                            <q-item-label class="sl">
                              国家智慧旅游公共服务平台高级顾问、中国智慧旅游产业联盟秘书长
                            </q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section class="text-right">
                            <q-item-label lines="1">胡安安</q-item-label>
                            <q-item-label class="st">
                              复旦大学旅游学系副教授、电子商务研究中心研究员、智慧城市研究中心研究员；兼任上海市经济和信息化发展研究中心专家
                            </q-item-label>
                          </q-item-section>
                          <q-item-section avatar>
                            <q-avatar size='5rem'>
                              <img src="statics/image/胡安安.jpg">
                            </q-avatar>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </swiper-slide>
                    <swiper-slide>
                      <q-list padding class="text-white lst1">
                        <q-item clickable v-ripple class="text-right">
                          <q-item-section>
                            <q-item-label lines="1">蔡家成</q-item-label>
                            <q-item-label class="st">文化和旅游部产业发展司原二级巡视员，原国家旅游局规划财务司副司长和信息中心副主任
                            </q-item-label>
                          </q-item-section>
                          <q-item-section avatar>
                            <q-avatar size='5rem'>
                              <img src="statics/image/蔡家成.jpg">
                            </q-avatar>
                          </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section avatar>
                            <q-avatar size='5rem'>
                              <img src="statics/image/pro.png">
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label lines="1">还有更多神秘嘉宾，敬请期待！</q-item-label>
                            <q-item-label class="sl">
                            </q-item-label>
                          </q-item-section>
                        </q-item>
                        <p class='text-white text-center'>（排名不分先后）</p>
                      </q-list>
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                  </swiper>

                </div>

              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="inv-bg ps">
          <div class="bd1">
            <div class="bd2">
              <div class="slide-box">
                <div class="sld-logo" style="width:5rem">
                  <q-img src='statics/image/inv_logo.png'></q-img>
                </div>
                <div class="sld-title sld-5">
                  <div class="sld-c">承办单位</div>
                </div>
                <div class="sld-e">
                  上海狂龙数字科技股份有限公司秉承“文化为心、旅游为体、智慧为用”的理念,独创“需求诊断、产品定制、智慧赋能”三步走的智慧文旅服务运营模式, 志在用创新科技赋能景区文旅,以智慧文旅创造美好生活!
                </div>
                <div class="sld-f">
                  <q-img src='statics/image/company.png'></q-img>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide class="inv-bg ps" style="display:none">
          <div class="bd1">
            <div class="bd2">
              <div class="slide-box">
                <div class="text-center q-pa-md">
                  <q-img style="width:12rem" src='statics/image/meeting_logo.png'></q-img>
                </div>
                <div class="paybox">
                  <div class="paydesc">门票有限，为及时处理您的订单，请尽快完成付款！</div>
                  <div class="paysubdesc">请您在提交订单后15天内完成支付，否则订单会自动取消。</div>
                </div>
                <div class="payType">
                  请选择支付方式
                </div>
                <div class="pay-type-box">
                  <q-list link>
                    <q-item tag="label" v-ripple>
                      <q-item-section avatar>
                        <q-radio v-model="payType" val="1" color="cyan" dark style="border-color:white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label class="pt">微信支付</q-item-label>
                        <q-item-label>
                          <q-img style="width:7rem" src='statics/image/weixinpay.png'></q-img>
                        </q-item-label>
                        <q-item-label class="pd">
                          您选择支付的费用会支付给上海狂龙数字科技股份有限公司
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item tag="label" v-ripple>
                      <q-item-section avatar top>
                        <q-radio v-model="payType" dark val="2" color="cyan" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label class="pt">线下支付(银行转账)</q-item-label>
                        <q-item-label class="pd">
                          开户银行:上海浦东发展银行卢湾支行<br> 户名:上海狂龙数字科技股份有限公司<br> 账号:98990078801800000606
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide> -->
        <div class="swiper-button-next btnnext" slot="button-next"></div>
      </swiper>
    </div>
    <div class="fixed-top" style="z-index:1">
      <q-btn flat icon='menu' color='white'>
        <q-menu content-class="bg-menu text-white">
          <q-list>
            <q-item @click='slideTo(0)' clickable v-close-popup>
              <q-item-section avatar>
                <q-icon size='1rem' name="img:statics/image/home.png" />
              </q-item-section>
              <q-item-section>首页</q-item-section>
            </q-item>
            <q-item @click='slideTo(1)' clickable v-close-popup>
              <q-item-section avatar>
                <q-icon size='1rem' name="img:statics/image/nav_1.png" />
              </q-item-section>
              <q-item-section>日程安排</q-item-section>
            </q-item>
            <q-item @click='slideTo(2)' clickable v-close-popup>
              <q-item-section avatar>
                <q-icon size='1rem' name="img:statics/image/nav_2.png" />
              </q-item-section>
              <q-item-section>论坛报名</q-item-section>
            </q-item>

            <q-item @click='slideTo(3)' clickable v-close-popup>
              <q-item-section avatar>
                <q-icon size='1rem' name="img:statics/image/nav_3.png" />
              </q-item-section>
              <q-item-section>论坛地址</q-item-section>
            </q-item>
            <q-item @click='slideTo(4)' clickable v-close-popup>
              <q-item-section avatar>
                <q-icon size='1rem' name="img:statics/image/nav_4.png" />
              </q-item-section>
              <q-item-section>关于论坛</q-item-section>
            </q-item>
            <q-item @click='slideTo(5)' clickable v-close-popup>
              <q-item-section avatar>
                <q-icon size='1rem' name="img:statics/image/nav_5.png" />
              </q-item-section>
              <q-item-section>特邀专家</q-item-section>
            </q-item>
            <q-item @click='slideTo(6)' clickable v-close-popup>
              <q-item-section avatar>
                <q-icon size='1rem' name="img:statics/image/nav_6.png" />
              </q-item-section>
              <q-item-section>承办单位</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

  </q-page>
</template>
<script>
import wx from "weixin-js-sdk";
import { wxConfig } from "../lib/weixin.js";
import anime from "animejs/lib/anime.es.js";
import { Promise } from "q";
export default {
  name: "Invitation",
  data () {
    return {
      way: { label: "A路线：张江国际创新港", value: "A" },
      payType: "2",
      name: "",
      phone: "",
      position: "",
      company: "",
      ways: [
        { label: "A路线：张江国际创新港", value: "A" },
        { label: "B路线：张江科学城展厅", value: "B" },
        { label: "C路线：上海国际旅游度假区", value: "C" }
      ],
      sw2: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      contentOptiont: {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        mousewheel: true
      },
      swiperOption: {
        // noSwiping:true,
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        // freeMode: true,
        direction: "vertical",
        pagination: {
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next"
        }
      },
      animeArray: [],
      animeOptions: [
        [
          {
            option: {
              targets: ".main-title",
              scale: [0, 1],
              opacity: [0, 1],
              easing: "easeOutElastic",
              duration: 2000
            }
          },
          {
            option: {
              targets: ".inve",
              opacity: [0, 1],
              scale: [0.3, 1],
              delay: anime.stagger(50),
              color: ["#fdd", "#fff"]
            },
            offset: "-=2000"
          },
          {
            option: {
              targets: ".sec-title",
              delay: anime.stagger(100),
              translateX: (e, i, l) => {
                return i % 2 == 0 ? ["-120%", 0] : ["120%", 0];
              },
              duration: 1000,
              easing: "easeInOutQuad"
            },
            offset: "-=1000"
          },
          {
            option: {
              targets: ".sec-title span",
              delay: anime.stagger(120),
              keyframes: [
                {
                  scale: 1
                },
                {
                  scalel: 0.5
                },
                {
                  scale: 1
                },
                {
                  scale: 1.1
                },
                {
                  scale: 1.2
                },
                {
                  scale: 1
                }
              ],
              easing: "linear",
              duration: 1000
            }
          },
          {
            option: {
              targets: ".ht",
              opacity: [0, 1]
            },
            offset: "-=4000"
          }
        ],
        [
          {
            option: {
              targets: ".slt1",
              translateY: [-200, 0],
              easing: "easeOutBounce",
              duration: 1000
            }
          },
          {
            option: {
              targets: ".sld-lst",
              translateX: ["-120%", 0],
              delay: anime.stagger(200),
              easing: "easeOutCirc"
            },
            offset: "0"
          }
        ],
        [
          {
            option: {
              targets: ".slt2",
              translateY: [-200, 0],
              easing: "easeOutBounce",
              duration: 1000
            }
          },
          {
            option: {
              targets: ".sf1 .q-field",
              translateX: ["-130%", 0],
              delay: anime.stagger(200),
              easing: "easeOutCirc",
              duration: 1500
            },
            offset: "0"
          },
          {
            option: {
              targets: ".sfd1",
              rotateX: [90, 0],
              easing: "easeOutBounce",
              duration: 1000
            },
            offset: "-=500"
          },
          {
            option: {
              targets: ".submit-box .q-btn",
              opacity: [0, 1]
            }
          }
        ],
        [
          {
            option: {
              targets: ".sld3",
              translateY: [-200, 0],
              easing: "easeOutBounce",
              duration: 1000
            }
          },
          // {
          //   option: {
          //     targets: ".map-wrap",
          //     rotate: [0, 720],
          //     translateX: ["-140%", 0],
          //     opacity: [0.5, 1],
          //     duration: 1500
          //   },
          //   offset: "0"
          // },
          // {
          //   option: {
          //     targets: ".sld-add",
          //     translateY: [400, 0],
          //     delay: anime.stagger(100),
          //     easing: "easeOutBounce",
          //     duration: 2000
          //   },
          //   offset: "0"
          // },
          {
            option: {
              targets: ".welcome",
              opacity: [0, 1]
            }
          }
        ],
        [
          {
            option: {
              targets: ".sld4",
              translateY: [-200, 0],
              easing: "easeOutBounce",
              duration: 1000
            }
          }
          // {
          //   option: {
          //     targets: ".sld-d",
          //     translateX: ["130%", 0],
          //     delay: anime.stagger(200),
          //     easing: "easeOutCirc",
          //     duration: 1000
          //   },
          //   offset: "0"
          // }
        ],
        [
          {
            option: {
              targets: ".sld-6",
              translateY: [-200, 0],
              easing: "easeOutBounce",
              duration: 1000,
              loop: true
            }
          }
        ],
        [
          {
            option: {
              targets: ".sld-5",
              translateY: [-200, 0],
              easing: "easeOutBounce",
              duration: 1000
            }
          },
          {
            option: {
              targets: ".sld-e",
              translateX: ["130%", 0],
              easing: "easeOutCirc",
              duration: 1000
            },
            offset: "0"
          },
          {
            option: {
              targets: ".sld-f",
              translateX: ["-130%", 0],
              easing: "easeOutCirc",
              duration: 1000
            },
            offset: "0"
          }
        ]
        // [{
        //     option: {
        //       targets: ".paybox",
        //       translateY: ["-200%", 0],
        //       translateX: ["-130%", 0]
        //     }
        //   },
        //   {
        //     option: {
        //       targets: ".payType,.pay-type-box",
        //       translateY: ["200%", 0],
        //       translateX: ["130%", 0]
        //     },
        //     offset: 0
        //   }
        // ]
      ]
    };
  },
  computed: {
    contentSwiper () {
      return this.$refs.contentSwiper.swiper;
    },
    swp2 () {
      return this.$refs.swp2.swiper;
    },
    swiper () {
      return this.$refs.swiper.swiper;
    },
    realIndex () {
      return this.$refs.swiper.swiper.realIndex;
    },
    activeIndex () {
      return this.$refs.swiper.swiper.activeIndex;
    }
  },
  methods: {
    touchEnd (e) {
      if (this.contentSwiper.isEnd) {
        this.swiper.slideNext();
      }
      if (this.contentSwiper.isBeginning)  {
        this.swiper.slidePrev();
      }
    },

    reset () {
      this.name = "";
      this.phone = "";
      this.company = "";
      this.position = "";
      // this.way = "";
      this.$refs.name.resetValidation();
      this.$refs.phone.resetValidation();
      this.$refs.company.resetValidation();
      this.$refs.position.resetValidation();
      this.$refs.way.resetValidation();
    },
    slideTo (index) {
      this.swiper.slideTo(index, 1000);
    },
    initAnimates () {
      this.animeOptions.forEach((f, i) => {
        let animeObj = anime.timeline({
          easing: "easeInOutQuad"
        });
        f.forEach(e => {
          if (e.offset !== undefined) {
            animeObj.add(e.option, e.offset);
          } else {
            animeObj.add(e.option);
          }
          if (i != 0) {
            animeObj.pause();
          }
        });
        this.animeArray[i] = animeObj;
      });
    },
    slideChange () {
      setTimeout(() => {
        if (this.realIndex == 2) {
          this.reset();
        } else if (this.realIndex == 5) {
          this.swp2.slideTo(1);
        }
        this.animeArray[this.realIndex].restart();
      }, 1000);
    },
    transitionStart () {
      // console.log(this.$refs.swiper.swiper.previousIndex)
      // console.log(this.realIndex)
      // if(this.$refs.swiper.swiper.previousIndex){
      //   this.animeArray[this.$refs.swiper.swiper.previousIndex].reverse()
      // }
    },
    checkPhone () {
      return new Promise((resolve, reject) => {
        this.$axios("activity/ckeMobile", {
          params: {
            mobile: this.phone
          }
        })
          .then(res => {
            if (res.code == 200) {
              if (res.desc == true) {
                reject({
                  msg: `报名失败！该手机号已提交过报名信息`
                });
              } else {
                resolve();
              }
            } else {
              reject({
                msg: `报名失败！${res.msg}`
              });
            }
          })
          .catch(e => {
            reject({
              msg: `网络错误！请稍后重试`
            });
          });
      });
    },
    signIn () {
      return new Promise((resolve, reject) => {
        this.$axios("activity/signIn", {
          method: "post",
          data: {
            companyName: this.company,
            jobTitle: this.position,
            mobile: this.phone,
            ordersn: "13",
            payType: this.payType,
            userName: this.name,
            way: this.way.label
          }
        })
          .then(res => {
            if (res.code == 200) {
              this.reset();
              resolve({
                msg: "恭喜您！报名成功。"
              });
            } else {
              this.loadingState = false;
              reject({
                msg: `报名失败！${res.msg}`
              });
            }
          })
          .catch(err => {
            this.loadingState = false;
            reject({
              msg: "网络错误，请稍后重试！"
            });
          });
      });
    },
    submit () {
      this.$refs.name.validate();
      this.$refs.phone.validate();
      this.$refs.company.validate();
      this.$refs.position.validate();
      this.$refs.way.validate();
      if (
        !(
          this.$refs.phone.hasError ||
          this.$refs.name.hasError ||
          this.$refs.company.hasError ||
          this.$refs.position.hasError ||
          this.$refs.way.hasError
        )
      ) {
        this.loadingState = true;
        this.checkPhone()
          .then(res => {
            return this.signIn();
          })
          .then(res => {
            this.$q.dialog({
              title: "报名",
              message: res.msg
            });
          })
          .catch(err => {
            this.$q.dialog({
              title: "报名",
              message: err.msg || err.message
            });
          });
      }
    }
  },
  mounted () {
    let _title = "2019智慧文旅产业发展论坛-邀请函",
      _desc = "2019智慧文旅产业发展论坛暨第五期智慧旅游建设培训班",
      _imgurl =
        "http://bigdata.ipguide.com.cn/summit/statics/image/inv_share_logo.png";

    wxConfig()
      .then(res => {
        wx.updateAppMessageShareData({
          title: _title, // 分享标题
          desc: _desc, // 分享描述
          link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _imgurl, // 分享图标
          success: function () {
            // 设置成功
          }
        });

        wx.updateTimelineShareData({
          title: _title, // 分享标题
          link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _imgurl, // 分享图标
          success: function () {
            // 设置成功
          }
        });

        //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
        wx.onMenuShareTimeline({
          title: _title, // 分享标题
          link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _imgurl, // 分享图标
          success: function () {
            // 用户点击了分享后执行的回调函数
          }
        });

        //获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
        wx.onMenuShareAppMessage({
          title: _title, // 分享标题
          desc: _desc, // 分享描述
          link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _imgurl, // 分享图标
          type: "", // 分享类型,music、video或link，不填默认为link
          dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            // 用户点击了分享后执行的回调函数
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
    setTimeout(() => {
      this.initAnimates();
    }, 500);
  }
};
</script>

<style>
.sss{
  /* font-weight: 900 !important; */
  margin-left:0 !important;
  color: rgb(49,204,236) !important;
  letter-spacing: 1px;
  font-size: 1.05rem;
  

}
.rc .yj-title p {
  margin: 0;
}
.rc .yj-title span {
  margin-left: 16px;
  color: #cddc39;
  font-weight: 700;
  
}
.rc .yj-title {
  /* font-size: .625rem; */
  font-family: shsn;
  margin-bottom: 16px;
}
.rc .q-timeline__content {
  padding-bottom: 10px;
}
.rc h6 {
  /* font-size: 1rem !important; */
  margin-bottom: 8px !important;
  font-weight: 700;
  color: orange;
}
.day_head {
  color: #00dcb4;
}
.rc_head .q-timeline__heading-title {
  font-size: 1.4rem !important;
  line-height: 1.9rem;
  text-align: center;
  font-family: shsn;
  padding: 0.7rem;
}
.rc-subhead .q-timeline__heading-title {
  font-size: 0.875rem !important;
  line-height: 1.45rem;
  padding: 0.4rem;
  font-family: shsn;
}
.day_head .q-timeline__heading-title {
  font-size: 1rem;
  font-weight: bold;
  padding: 0.3rem;
  font-family: shsn;
}
.qt {
  font-size: 0.75rem;
  line-height: 1.1rem;
  color: white;
  font-family: shsn;
  position: relative;
  padding: 1rem 1.8rem;
  letter-spacing: 1px;
}
.ht {
  font-size: 0.625rem;
  letter-spacing: 0.5px;
}

.swiper-pagination {
  bottom: 10% !important;
}

.swiper-button-disabled {
  display: none;
}

.swiper-button-next {
  background: url("../statics/image/arrow.png") no-repeat 0 0/100% 100%;
  margin-right: -1rem;
  left: inherit;
  width: 2rem !important;
  height: 1.6rem !important;
  top: 95% !important;
  right: 50% !important;
  animation: nx_ani 1s infinite ease-in-out;
}

@keyframes nx_ani {
  0% {
    transform: translateY(5px);
    opacity: 0.8;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.btnnext:focus {
  outline: none;
}

.bg-menu {
  background-color: rgba(0, 0, 0, 0.7);
}

.bg-menu .q-item__section--avatar {
  min-width: inherit;
}

@keyframes isv_ani {
  0% {
    opacity: 0;
  }

  49% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  99% {
    opacity: 1;
  }
}

.lst1 .q-item {
  padding: 8px 12px;
}

/* .lst1 {
    opacity: 0;
    position: relative;
    animation: vs 18s infinite;
  } */

@keyframes vs {
  0% {
    opacity: 1;
  }

  49% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  99% {
    opacity: 0;
  }
}

/* .lst {
    opacity: 0;
    animation: isv_ani 18s infinite;
  } */

.sld-add {
  display: block;
  text-decoration: none;
  line-height: 1.5rem;
}

.navbtn {
  animation: scbtn_ani 3s infinite;
}

@keyframes scbtn_ani {
  25% {
    transform: scale(1.02);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

.sec-title span {
  display: inline-block;
}

.sec-title {
  transform: translateX(120%);
}

.inve {
  display: inline-block;
  /* transform: rotateX(90deg); */
}

.pay-type-box {
  margin: 1rem;
  border: 1px solid transparent;
  border-image: linear-gradient(to bottom, #5699ca, #1573e0) 1 10;
}

.pt {
  font-size: 0.875rem;
  color: white;
  font-family: shsn;
}

.pd {
  font-size: 0.625rem;
  color: white;
}

.payType {
  padding: 0 1rem;
  font-size: 1rem;
  font-family: shsn;
  color: white;
}

.paysubdesc {
  color: #ed4040;
  font-size: 0.6875rem;
  margin-top: 0.5rem;
}

.paydesc {
  font-size: 1rem;
  font-family: shsn;
  color: rgb(0, 80, 146);
}

.paybox {
  border-radius: 5px;
  background: white;
  margin: 0 1rem 1rem;
  padding: 1rem 0.5rem;
}

.lst .q-item {
  margin-bottom: 1rem;
  padding-bottom: 0;
}

.st {
  font-size: 0.925rem;
  line-height: 1.5rem !important;
}

.sld-f {
  padding: 0 2rem;
}

.sld-e {
  font-family: shsn;
  font-size: 0.875rem;
  color: white;
  padding: 1rem 2rem;
  line-height: 1.4rem;
}

.sld-d {
  font-size: 0.75rem;
  line-height: 1.1rem;
  color: white;
  font-family: shsn;
  position: relative;
  padding: 0.2rem 1.8rem;
  letter-spacing: 1px;
}

.sld-d::before {
  content: "";
  position: absolute;
  left: 0.7rem;
  top: 0.4rem;
  width: 0.8rem;
  height: 0.8rem;
  background: url("../statics/image/right_ic.png") no-repeat 0 0 /100% 100%;
}

.sld-add::before {
  position: absolute;
  left: -0.75rem;
  top: 0.35rem;
  content: "";
  font-family: fzssjw;
  width: 0.75rem;
  height: 0.75rem;
  background: url("../statics/image/right_ic.png") no-repeat 0 0/100% 100%;
}

.welcome {
  color: white;
  font-family: shsn;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 1rem;
  transform-origin: 50% 50%;
  animation: ani_welcome 2s infinite ease-in-out;
}

@keyframes ani_welcome {
  0% {
    transform: rotate(-1deg) scale(1.05);
  }

  25% {
    transform: rotate(0) scale(1);
  }

  50% {
    transform: rotate(1deg) scale(1.05);
  }

  75% {
    transform: rotate(0) scale(1);
  }

  100% {
    transform: rotate(-1deg) scale(1.05);
  }
}

.sld-add {
  color: white;
  /* text-decoration: none; */
}

.sld-addbox {
  font-size: 1rem;
  font-family: shsn;
  color: white;
  padding: 0 2rem;
  line-height: 2rem;
}

.mapbox {
  padding: 1rem 2rem;
}

.map-wrap {
  transform-origin: 50% 50%;
  width: 100%;
  /* background: yellow; */
}

.q-field__label {
  color: rgb(25, 117, 186);
  font-family: shsn;
}

.submit {
  background: rgb(25, 117, 186) !important;
  padding: 0.2rem 6rem !important;
  font-size: 1rem;
  min-height: inherit !important;
}

.sld-form {
  text-align: center;
  padding: 1rem 3rem 0rem;
}

.sld-form .q-field__bottom {
  padding-top: 1px !important;
}
.sld-form .q-field--with-bottom {
  padding-bottom: 14px !important;
}

.submit-box {
  text-align: center;
  width: 100%;
}

.sld-form-des {
  text-decoration: none;
  padding: 0 3rem 0.3rem;
  text-align: left;
  color: white;
  font-family: shsn;
  font-size: 0.875rem;
}

.sld-form-des a {
  text-decoration: none;
  color: white;
}
.sld-form-des p {
  margin: 0.1rem 0;
}

.sld-lst {
  line-height: 3rem;
  position: relative;
}

.sld-lst::before {
  position: absolute;
  left: 0;
  width: 6px;
  height: 6px;
  background: white;
  content: "";
  top: 50%;
  transform: translateY(-50%);
}

.sld-lst::after {
  position: absolute;
  right: 0;
  width: 6px;
  height: 6px;
  background: white;
  content: "";
  top: 50%;
  transform: translateY(-50%);
}

.sld-lbox {
  color: white;
  font-size: 1rem;
  font-family: shsn;
  padding: 1rem 2rem;
  text-align: center;
}

.sld-c {
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
}

.sld-c::before {
  position: absolute;
  content: "";
  width: 1rem;
  left: -1rem;
  height: 0.5px;
  background: rgb(93, 159, 207);
  top: 50%;
  transform: translateY(-50%);
}

.sld-c::after {
  position: absolute;
  content: "";
  width: 1rem;
  right: -1rem;
  height: 0.5px;
  background: rgb(93, 159, 207);
  top: 50%;
  transform: translateY(-50%);
}

.sld-title {
  line-height: 2.2rem;
  transform: translateY(-200px);
  margin: 0 2rem;
  border: 1px solid rgb(93, 159, 207);
  text-align: center;
  font-size: 1.25rem;
  color: white;
  font-family: shsn;
  border-radius: 20px;
  background: rgb(0, 80, 146);
}

.sld-logo {
  width: 6rem;
  margin: 0.5rem;
}

.slide-box {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 80, 146, 0.7);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.ps {
  padding: 3rem 1rem 2rem;
  box-sizing: border-box;
}

.bd1 {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(44, 115, 167);
  padding: 0.5rem;
  animation: bd_ani 4s infinite ease-in-out;
}

@keyframes bd_ani {
  0% {
    border-color: #00dcb4;
  }

  25% {
    border-color: #03a9f4;
  }

  50% {
    border-color: rgb(44, 115, 167);
  }

  75% {
    border-color: #1565c0;
  }

  100% {
    border-color: #00dcb4;
  }
}

.bd2 {
  /* background: radial-gradient(farthest-corner circle at 50px 50px,
        rgba(0, 80, 146, 0.5),
        rgba(9, 172, 236, 0.4) 50%,
        rgba(0, 80, 146, 0.7) 70%,
        rgba(4, 243, 183, 0.4) 80%); */
  width: 100%;
  height: 100%;
  border: 1px solid rgb(107, 157, 198);
}

.nav-wrap {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.navbtn {
  width: 100%;
  color: white;
  font-size: 1rem;
  font-family: shsn;
  margin-bottom: 0.5rem;
}

.navbtn .q-btn__content div {
  width: 100%;
}

.navbtn .q-btn__content img {
  margin: 0;
  width: 2rem;
  height: 2rem;
}

.sec-title {
  font-family: stst;
  font-size: 1.125rem;
  /* font-weight: 700; */
}

.main-subtitle {
  font-size: 1.625rem;
  font-family: fzssjw;
  letter-spacing: 2px;
  line-height: 2rem;
}

.title-content p {
  margin: 0;
  text-align: center;
  color: white;
}

.main-title {
  transform: scale(0);
  font-size: 3.375rem;
  font-family: shsn;
  /* font-family: fzssjw; */
  letter-spacing: 5px;
  line-height: 3.375rem;
  margin: 0.5rem 0 0 0;
}

.meet-logo {
  padding: 0.5rem 5rem 0 5rem;
}

.inv-bg1 {
  background: url("../statics/image/inv_bg2.png") no-repeat 0 0/100% 100%;
}

.inv-bg2 {
  background: url("../statics/image/inv-bg1.png") no-repeat 0 0/100% 100%;
}

.title-box {
  position: relative;
  box-sizing: border-box;
  height: 60%;
  padding: 3rem 1rem 0;
}

.nav-box {
  box-sizing: border-box;
  position: absolute;
  height: 35%;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(2, 77, 143);
}

.title-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
}

.title-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
}

.title-border {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../statics/image/tborder.png") no-repeat 0 0/100% 100%;
  transform-origin: 50% 50%;
}

.border-1 {
  animation: border-rotate 4s ease-in-out infinite;
}

@keyframes border-rotate {
  from {
    transform: rotate(20deg);
  }

  to {
    transform: rotate(380deg);
  }
}

@media screen and (max-width: 321px) {
  .main-title {
    margin: 0;
    font-size: 3.375rem;
  }

  .sld-lbox {
    padding: 1rem;
  }

  .sld-form {
    text-align: center;
    padding: 0.6rem 3rem 0;
  }

  .main-subtitle {
    font-size: 1.425rem;
    line-height: 1.3rem;
  }

  .sld-logo {
    width: 4.1rem;
    margin: 0.3rem;
  }

  .ps {
    padding: 2rem 0.6rem 0.8rem;
    box-sizing: border-box;
  }

  .sld-addbox {
    padding: 0 1rem;
  }

  .q-mt-md {
    margin-top: 8px;
  }

  .sld-d {
    padding: 0.2rem 1.2rem;
    line-height: 1.1rem;
  }

  .sld-d::before {
    left: 0.3rem;
    top: 0.35rem;
  }

  .sld-e {
    padding: 1rem 1.5rem;
  }

  .sld-add {
    line-height: 1.4rem;
    font-size: 0.875rem;
  }

  .sec-title {
    font-size: 1rem;
  }

  .meet-logo {
    padding: 0rem 4rem 0 4rem;
  }

  .st {
    font-family: shsn;
    font-size: 0.625rem;
    line-height: 1.23rem !important;
  }
}
</style>
