const dimensions = [
  {
    name: "安全",
    className: "b1",
    desc: "以结构、消防、机电、防水与应急能力为底线，强调全过程质量追溯。",
    metrics: [["结构", 95], ["消防", 92], ["防水", 88], ["应急", 86]],
    note: "可视化表达：建筑剖面图 + 风险热区图 + 工序质控时间轴。"
  },
  {
    name: "舒适",
    className: "b2",
    desc: "围绕声、光、热、风与无障碍，提升全龄友好日常体验。",
    metrics: [["隔声", 90], ["采光", 87], ["温湿", 85], ["适老", 84]],
    note: "可视化表达：户型叠层图 + 动线注释框 + 体感雷达图。"
  },
  {
    name: "绿色",
    className: "b3",
    desc: "推进节能降碳与资源循环，突出全寿命周期环境绩效。",
    metrics: [["节能", 89], ["材料", 86], ["低碳", 83], ["水效", 82]],
    note: "可视化表达：碳排趋势线 + 材料替代对比条形图。"
  },
  {
    name: "智慧",
    className: "b4",
    desc: "建设数字化运维体系，实现设备联动、预测维护与服务闭环。",
    metrics: [["感知", 88], ["联动", 85], ["运维", 91], ["服务", 84]],
    note: "可视化表达：设备拓扑图 + 告警看板 + 服务SLA仪表。"
  }
];

const flows = [
  ["01 标准解读", "梳理住建部政策与《住宅项目规范》底线要求，建立项目指标词典。\n【标注框】输出：政策要点树 + 指标清单。"],
  ["02 需求建模", "针对不同客群（青年/家庭/长者）构建差异化需求矩阵。\n【标注框】输出：客群画像 + 痛点优先级。"],
  ["03 方案设计", "把‘好设计’落位到户型、机电、动线、防水与无障碍节点。\n【标注框】输出：叠层方案图 + 关键节点详图。"],
  ["04 建造品控", "围绕‘好材料+好建造’建立样板先行、抽检和追溯台账。\n【标注框】输出：工序检查表 + 合格率看板。"],
  ["05 智慧运维", "围绕‘好运维’建立巡检、告警、维保和居民反馈闭环。\n【标注框】输出：物业运维大屏 + 服务工单分析。"],
  ["06 示范推广", "沉淀可复制示范案例并接入展厅触摸设备宣传。\n【标注框】输出：案例图谱 + 城市对比报表。"]
];

const sources = [
  ["住建部：推动建设安全、舒适、绿色、智慧的‘好房子’（2025）", "https://www.mohurd.gov.cn/xinwen/gzdt/art/2025/art_1523f63e121548dd8c797b948a9eb144.html"],
  ["住建部：加强监督检查推动《住宅项目规范》落地（2025）", "https://www.mohurd.gov.cn/xinwen/gzdt/art/2025/art_e7f49bbed9884d40b4f4797a93e3f16d.html"],
  ["住建部：加快‘好房子’建设提升居住品质（2025）", "https://www.mohurd.gov.cn/xinwen/gzdt/art/2025/art_905cf9a9c42b4fbdb392596512810b96.html"]
];

const timeline = [
  "2025年3月：政府工作报告明确提出建设‘好房子’导向。",
  "2025年：住建部持续部署‘立标准、强科技、抓项目’。",
  "2025年5月1日：《住宅项目规范》正式施行，作为底线型规范。"
];

document.getElementById("policyTimeline").innerHTML = `<h3>政策时间线</h3><ul class='list'>${timeline.map((x) => `<li>${x}</li>`).join("")}</ul>`;

const sourcePanel = document.getElementById("sourcePanel");
sourcePanel.innerHTML = `<h3>权威资料</h3><ul class='source-list'>${sources.map(([t,u]) => `<li><a target='_blank' rel='noreferrer' href='${u}'>${t}</a></li>`).join("")}</ul>`;

const coreBadges = document.getElementById("coreBadges");
dimensions.forEach((d) => {
  coreBadges.insertAdjacentHTML("beforeend", `<div class='badge ${d.className}'><i>注释</i><b>${d.name}</b><span>${d.desc}</span></div>`);
});

const tabBar = document.getElementById("tabBar");
const dimensionView = document.getElementById("dimensionView");
let active = 0;

function renderDimension(i) {
  active = i;
  document.querySelectorAll(".tab").forEach((b, idx) => b.classList.toggle("active", idx === i));
  const d = dimensions[i];
  dimensionView.innerHTML = `
    <div>
      <h4>${d.name}指标剖面</h4>
      <div class='bars'>
        ${d.metrics.map(([n,v]) => `<div class='bar-row'><span>${n}</span><div class='track'><div class='fill' style='width:${v}%'></div></div><span>${v}</span></div>`).join("")}
      </div>
    </div>
    <div class='annot-box'>${d.note}\n\n重点说明：${d.desc}</div>
  `;
}

dimensions.forEach((d, i) => {
  const btn = document.createElement("button");
  btn.className = `tab ${i === 0 ? "active" : ""}`;
  btn.textContent = d.name;
  btn.onclick = () => renderDimension(i);
  tabBar.appendChild(btn);
});
renderDimension(0);

const flowMap = document.getElementById("flowMap");
const flowDetail = document.getElementById("flowDetail");
flows.forEach(([title, detail], i) => {
  const b = document.createElement("button");
  b.className = `flow-btn ${i===0?"active":""}`;
  b.textContent = title;
  b.onclick = () => {
    document.querySelectorAll(".flow-btn").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    flowDetail.textContent = detail;
  };
  flowMap.appendChild(b);
});
flowDetail.textContent = flows[0][1];

document.getElementById("reportPanel").innerHTML = `
<h3>可视化报表</h3>
<div class='kpi-grid'>
  <div class='kpi'><strong>4大维度</strong><br>安全/舒适/绿色/智慧</div>
  <div class='kpi'><strong>5条实施链</strong><br>标准/设计/材料/建造/运维</div>
  <div class='kpi'><strong>6步流程</strong><br>标准解读→示范推广</div>
  <div class='kpi'><strong>3类成果</strong><br>政策图解/项目看板/案例库</div>
</div>`;

document.getElementById("scenarioPanel").innerHTML = `
<h3>图形化讲解结构</h3>
<ul class='list'>
<li>主视觉：写实住宅图 + 几何色块强化层级。</li>
<li>信息层：图标、注释框、流程箭头、报表模块并行排布。</li>
<li>交互层：触摸切换维度、点选流程节点、动态更新详情。</li>
<li>传播层：支持展厅讲解、自助浏览、招商路演三模式。</li>
</ul>`;

document.getElementById("devicePanel").innerHTML = `
<h3>多媒体设备部署建议</h3>
<ul class='list'>
<li>55-86英寸横屏触摸一体机，建议4K分辨率。</li>
<li>本地浏览器全屏运行，30秒无操作自动回首页。</li>
<li>可扩展接入人体感应唤醒与中控联动。</li>
<li>支持离线素材包，保证弱网环境稳定展示。</li>
</ul>`;
