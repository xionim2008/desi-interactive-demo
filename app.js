const stages = [
  {
    id: "positioning",
    name: "项目定位",
    short: "先明确为什么做，而不是先做形式。",
    summary:
      "从接待对象、传播目标、停留时长与空间位置出发，定义每个展项的使命。对于 DESI，这一步强调空间叙事、品牌气质与现场动线的统一起点，以克制的方式建立强表达。",
    details: [
      ["关键问题", "这个展项服务谁、要讲什么、看完后参观者应该记住什么。"],
      ["输出内容", "展项名称、展示目的、面向人群、空间位置、停留时长、展示形式。"],
      ["设计价值", "把互动设计从“好不好看”拉回到“有没有传达到位”。"],
      ["适合展示", "以展项定位卡形式逐项浏览，适合触摸逐步查看。"]
    ],
    outputs: [
      ["展项定位表", "每个互动屏先输出一张定位卡，统一语言与项目目标。"],
      ["空间关系说明", "标注该屏在参观动线中的前后逻辑。"],
      ["展示优先级", "区分必做互动、可做互动与静态更优内容。"]
    ],
    hints: [
      ["现场交互建议", "首页用总览图呈现 8 个阶段，点击后进入对应内容。"],
      ["讲解模式", "支持自动轮播与人工触摸两种模式，方便接待与自助浏览。"],
      ["展示语气", "采用顾问式表达，突出“方法论”而不是“软件功能”。"]
    ]
  },
  {
    id: "information",
    name: "信息梳理",
    short: "把资料整理成可展示的内容树。",
    summary:
      "把客户资料从文档堆叠转化为品牌层、业务层、技术层、案例层等内容结构，并进一步拆成必看内容、可展开内容与佐证内容。",
    details: [
      ["核心动作", "将原始资料按主题分层，再按重要性拆成三级信息。"],
      ["典型结构", "品牌层、业务层、产品层、技术层、案例层、荣誉层、未来层。"],
      ["展示原则", "互动屏不等于 PPT，不能一次塞满所有信息。"],
      ["适合展示", "用树状结构或分层卡片，让参观者理解内容组织逻辑。"]
    ],
    outputs: [
      ["内容树", "每个展项建立一份清晰的内容树。"],
      ["素材分级", "主标题、摘要、图像、视频、数据、附件分层整理。"],
      ["删减建议", "识别冗余内容，控制屏幕阅读负担。"]
    ],
    hints: [
      ["现场交互建议", "点击一级主题展开二级模块，再进入三级细节。"],
      ["可视化方式", "采用呼吸式节点或层级展开动效增强理解。"],
      ["汇报话术", "强调“内容先于界面”，让客户先确认信息结构。"]
    ]
  },
  {
    id: "planning",
    name: "展项策划",
    short: "为不同内容匹配最适合的展示形式。",
    summary:
      "不是所有内容都该做成复杂互动。企业历程适合时间轴，业务布局适合地图，案例适合分类检索，技术流程适合分步动画。",
    details: [
      ["类型匹配", "企业历程对应时间轴，全球布局对应地图，案例对应筛选浏览。"],
      ["方法价值", "让互动形式服务内容，不让形式反客为主。"],
      ["通用模块", "建立企业介绍、企业历程、业务版图、产品技术、案例库等标准类型库。"],
      ["适合展示", "以展项图库方式横向浏览不同标准类型。"]
    ],
    outputs: [
      ["展项类型库", "形成公司内部可复用的标准互动类型。"],
      ["形式建议", "每种内容对应推荐屏幕表现方式。"],
      ["方案比较", "对比自动播放、触摸互动、感应唤醒等展示策略。"]
    ],
    hints: [
      ["现场交互建议", "支持按内容类型快速筛选适用模板。"],
      ["展示重点", "让客户一眼明白“这块屏为什么这样做”。"],
      ["空间协同", "在内容旁说明与灯光、材质、动线的关系。"]
    ]
  },
  {
    id: "interaction",
    name: "交互定义",
    short: "先定人怎么用，再做界面。",
    summary:
      "明确入口、层级、返回方式、待机逻辑、无操作恢复机制与交互反馈，避免后期开发时出现路径混乱和使用障碍。",
    details: [
      ["交互规则", "谁来触发、如何进入、如何返回、多久回到首页。"],
      ["使用场景", "站立浏览、讲解陪同、自助探索、会议演示。"],
      ["关键机制", "首页入口、二级列表、三级详情、异常状态、待机机制。"],
      ["适合展示", "流程图 + 状态图最适合表达这一阶段。"]
    ],
    outputs: [
      ["交互规则卡", "统一记录入口、路径、返回、待机与反馈。"],
      ["流程图", "把页面流转关系可视化。"],
      ["逻辑说明", "为程序团队提供明确交互依据。"]
    ],
    hints: [
      ["现场交互建议", "屏幕支持触摸操作，也可以外接感应器唤醒首页。"],
      ["体验原则", "每次操作只让用户做一个清晰动作，避免认知负担。"],
      ["演示价值", "这一部分最容易让客户看到你们的专业掌控力。"]
    ]
  },
  {
    id: "ui",
    name: "界面结构",
    short: "先搭结构，再做风格。",
    summary:
      "在视觉设计前先解决页面布局、导航位置、信息主次、媒体区块与操作区的关系，让屏幕既好看也好用。",
    details: [
      ["结构优先", "先做低保真线框图，不急着进入精细视觉。"],
      ["典型模块", "标题区、图像区、数据区、说明区、导航区、返回区。"],
      ["展示逻辑", "每个页面都要写清页面目标、用户动作与下一步去向。"],
      ["适合展示", "采用低保真到高保真的切换对比最直观。"]
    ],
    outputs: [
      ["页面清单", "把所有屏幕页面命名并编号。"],
      ["线框图", "定义每一屏的布局结构。"],
      ["信息层级说明", "告诉视觉与开发哪些内容是第一优先。"]
    ],
    hints: [
      ["现场交互建议", "大屏上可切换查看线框图与最终视觉稿。"],
      ["设计提示", "企业展厅界面要克制，留白比堆信息更重要。"],
      ["落地优势", "结构明确后，视觉和开发效率都会提升。"]
    ]
  },
  {
    id: "motion",
    name: "动效脚本",
    short: "定义节奏，统一质感。",
    summary:
      "多媒体内容的高级感不只来自画面，更来自节奏。通过进入、切换、反馈、待机与转场规则，统一整体气质。",
    details: [
      ["动效维度", "整体气质、速度、进入方式、信息层级、转场方式、反馈机制。"],
      ["控制重点", "主信息先出现，次信息后补充，避免所有内容同时动。"],
      ["技术意义", "让开发团队知道该实现什么，而不是自由发挥。"],
      ["适合展示", "使用时间轴或动画示意条呈现动效节奏。"]
    ],
    outputs: [
      ["动效说明页", "每个展项写清进入动画、切换动画、待机动画。"],
      ["时长规范", "定义如 0.4 秒淡入、3 秒启动等节奏标准。"],
      ["反馈语言", "点击、加载、切换时的视觉反馈统一描述。"]
    ],
    hints: [
      ["现场交互建议", "加入可切换的动效演示按钮，让客户现场体验节奏差异。"],
      ["设计原则", "宁可少而准，也不要满屏飞。"],
      ["品牌表达", "稳重型企业适合柔和慢节奏，科技型企业可适当增强速度感。"]
    ]
  },
  {
    id: "prototype",
    name: "原型验证",
    short: "先验证逻辑，再进入成品开发。",
    summary:
      "通过低保真原型、高保真原型和前端 Demo 先验证逻辑、体验和视觉风格，减少开发返工，提高客户理解效率。",
    details: [
      ["验证层级", "低保真原型验证路径，高保真原型验证风格，前端 Demo 验证真实操作感。"],
      ["客户价值", "相比静态图，可点击原型更容易获得确认。"],
      ["团队价值", "让设计、内容、开发在同一套交互上对齐。"],
      ["适合展示", "设置试用区，让观众现场点击体验。"]
    ],
    outputs: [
      ["流程原型", "体现内容路径与页面关系。"],
      ["视觉原型", "体现品牌调性与屏幕观感。"],
      ["前端 Demo", "可在现场屏幕上直接试运行。"]
    ],
    hints: [
      ["现场交互建议", "原型演示要支持横屏触摸与自动回首页。"],
      ["汇报策略", "先讲逻辑，再演示，再讨论局部细节。"],
      ["技术建议", "尽量用网页原型，便于跨设备部署与修改。"]
    ]
  },
  {
    id: "handoff",
    name: "开发交付",
    short: "把方案变成开发能直接执行的文档。",
    summary:
      "最终不是只交几张效果图，而是交一套可开发包：内容清单、页面结构、交互流程、动效说明、素材清单、设备参数与特殊逻辑。",
    details: [
      ["交付核心", "让程序团队拿到就能开始开发，而不是反复追问。"],
      ["标准内容", "展项概述、素材清单、页面图、流程图、规范说明、设备参数。"],
      ["复杂场景", "如多屏联动、感应唤醒、中控联动需额外注明。"],
      ["适合展示", "用交付清单总览与点击展开文件结构。"]
    ],
    outputs: [
      ["开发需求书", "整合视觉、交互、内容、设备参数。"],
      ["素材清单", "规范图片、视频、数据、字体与分辨率。"],
      ["现场联调说明", "明确待机机制、触摸区域、感应逻辑与中控需求。"]
    ],
    hints: [
      ["现场交互建议", "在展墙展示最终交付包结构，体现公司交付能力。"],
      ["合作策略", "由你们掌握内容与体验定义权，技术公司做实现与联调。"],
      ["商业价值", "这一步能直接形成新的收费模块。"]
    ]
  },
  {
    id: "implementation",
    name: "现场执行实施",
    short: "把交付包真正变成现场可运行的互动设备。",
    summary:
      "这一阶段把前面的策划、原型与开发交付真正转化为现场成果，重点包括设备选型、程序运行方式、开机自启、待机逻辑、安装联调与运维交接。",
    details: [
      ["实施目标", "确保互动内容不是停留在方案层，而是能稳定运行在展墙触摸屏上。"],
      ["核心内容", "屏幕与主机选型、程序部署、开机自启、待机/轮播逻辑、现场联调。"],
      ["执行重点", "确认供电、布线、检修口、触摸精度、全屏显示、断电恢复与运维方式。"],
      ["适合展示", "用设备清单、安装流程和测试清单帮助团队理解真正落地的关键节点。"]
    ],
    outputs: [
      ["实施说明书", "明确运行环境、启动方式、设备参数与现场要求。"],
      ["安装联调清单", "保证安装、测试与交接各环节不遗漏。"],
      ["运维约定", "规定后续更新、异常恢复与远程维护方式。"]
    ],
    hints: [
      ["现场交互建议", "这部分内容适合和设备图、安装流程图一起展示，帮助团队理解最终落地形态。"],
      ["培训价值", "让设计团队不仅会做方法和界面，也知道如何与执行公司高效衔接。"],
      ["流程位置", "建议把它放在开发交付之后，作为完整工作流的最后一段。"]
    ]
  }
];

const deliverables = [
  ["展项定位表", "定义目的、人群、位置、停留时长与展示形式。"],
  ["内容树", "把资料整理为可展示的信息层级。"],
  ["页面清单", "梳理所有页面编号与对应目标。"],
  ["交互流程图", "明确入口、路径、返回与待机机制。"],
  ["线框图", "确认各屏结构与信息布局。"],
  ["视觉风格板", "统一色彩、字体、图形与品牌调性。"],
  ["高保真界面稿", "形成客户可感知的最终界面表达。"],
  ["动效脚本", "把节奏、反馈与转场文字化、标准化。"],
  ["开发说明书", "作为程序开发与现场联调的依据。"],
  ["实施说明书", "作为设备部署、开机自启、联调测试与运维交接的依据。"]
];

const roles = [
  ["主创设计师", "定义展项目标、参观逻辑与空间中的内容关系。"],
  ["视觉设计师", "负责界面审美、信息节奏与品牌统一表达。"],
  ["内容策划", "整理资料、建立内容树并提炼叙事重点。"],
  ["技术开发", "完成前端程序、设备适配与现场联调。"],
  ["AI 协作", "辅助生成结构方案、交互逻辑、动效脚本与原型内容。"]
];

const schedule = [
  ["第 1 周", "收集资料，拆分所有展项，确定优先级。"],
  ["第 2 周", "完成展项定位与内容树，明确展示形式。"],
  ["第 3 周", "画流程图与线框图，确认交互路径。"],
  ["第 4 周", "完成视觉稿与动效方向，准备提案。"],
  ["第 5 周", "制作关键展项原型，组织客户评审。"],
  ["第 6 周", "输出开发交付包并开始技术对接。"],
  ["第 7 周", "完成设备部署说明、安装联调与运维交接。"]
];

const devices = [
  ["55-65 英寸电容触摸一体机", "最适合墙面互动屏。建议 4K 分辨率、横屏、10 点触控，系统可选 Windows 或 Android。"],
  ["迷你主机或工控主机", "如果内容用网页或前端程序实现，推荐外接 Windows 迷你主机，稳定且便于维护。"],
  ["壁挂支架与隐藏布线", "保证屏幕与墙面一体化，同时预留检修口和电源、网线接口。"],
  ["中控或定时开关", "用于统一控制开关机、待机唤醒与与其他多媒体设备联动。"],
  ["网络与远程维护", "建议保留有线网络，便于远程更新页面内容与排查问题。"],
  ["音响或感应设备", "如果需要声音提示或人来即亮，可增加定向音响和人体感应器。"]
];

const deploymentSteps = [
  ["内容定稿", "先把这套工作流内容、图片、图标、演示逻辑全部确认下来。"],
  ["原型制作", "用网页原型方式做成可点击内容，适配 16:9 横屏。"],
  ["设备选型", "确定屏幕尺寸、系统类型、是否触摸、是否外接主机。"],
  ["程序部署", "将网页原型部署到本地浏览器壳或开机自启动程序中。"],
  ["现场安装", "完成屏幕上墙、供电、网络、隐藏布线和结构收口。"],
  ["联调测试", "测试触摸、自动轮播、待机恢复、字体显示和分辨率。"],
  ["运维交接", "设置开机自动运行、远程更新方式和异常恢复方案。"]
];

const implementationNotes = [
  ["推荐实现方式", "优先用 HTML/CSS/JavaScript 做成全屏互动页面，成本更可控，也便于后续修改。"],
  ["现场运行方式", "Windows 主机上可用 Chrome 全屏运行，或封装为 Electron 应用实现开机自启。正式项目建议设置系统开机自动启动与浏览器全屏。"],
  ["内容更新方式", "简单项目可直接替换本地文件；长期项目可接一个轻量 CMS 做远程更新。"],
  ["稳定性要求", "屏幕要设置无操作返回首页、断电自动恢复、字体离线可用、媒体本地缓存。"],
  ["设计建议", "触摸热点要大、层级不要深、每一步操作都给明确反馈。视觉上建议保持大留白、白底黑字与硬边框。"],
  ["适合你们的分工", "你们负责内容、审美与交互定义，我可以帮你们先做可演示原型，再决定是否交给技术团队深化。"]
];

const operatorSteps = [
  ["01 拷贝完整文件夹", "不要只拷贝 index.html。需要把 index.html、styles.css、app.js、desilogo.jpg 放在同一个文件夹里。"],
  ["02 放到本地主机", "建议放在多媒体屏幕背后的 Windows 主机中，例如 D:\\DESI互动屏\\，不要放在微信或下载临时目录。"],
  ["03 打开 index.html", "双击 index.html，用 Chrome 或 Edge 打开。它本质上是一套本地网页形式的交互原型。"],
  ["04 全屏显示", "打开后按 F11 进入全屏，再按一次 F11 可以退出全屏。正式现场不建议露出浏览器地址栏。"],
  ["05 现场操作", "点击待机页的“点击进入”，进入首页总览；点击阶段卡片查看内容；点击“返回首页”回到总览。"],
  ["06 开机自动运行", "正式运行时请执行公司设置 Windows 开机自动登录，并自动全屏打开本地 index.html。"]
];

const operatorChecklist = [
  ["文件完整", "确认 index.html、styles.css、app.js、desilogo.jpg 都在同一个文件夹。"],
  ["显示正常", "确认 logo、首页总览、9 个阶段、交付模板、落地实施、运行指南都能显示。"],
  ["触摸正常", "确认点击进入、阶段切换、返回首页、顶部按钮都能操作。"],
  ["全屏正常", "确认 F11 或 Kiosk 模式下没有地址栏和系统界面干扰。"],
  ["自动逻辑正常", "确认自动轮播、无操作回待机、断电重启恢复运行都能通过测试。"]
];

const state = {
  activeStage: stages[0].id,
  view: "overview"
};

const stageNav = document.getElementById("stageNav");
const stageTitle = document.getElementById("stageTitle");
const stageSummary = document.getElementById("stageSummary");
const contentGrid = document.getElementById("contentGrid");
const actionButtons = Array.from(document.querySelectorAll(".action-btn"));
const standbyScreen = document.getElementById("standbyScreen");
const wakeButton = document.getElementById("wakeButton");
const homeButton = document.getElementById("homeButton");

const idleTimeoutMs = 45000;
const rotateIntervalMs = 9000;
let idleTimer = null;
let rotateTimer = null;

function renderStageNav() {
  stageNav.innerHTML = stages
    .map(
      (stage, index) => `
        <button class="stage-btn ${stage.id === state.activeStage ? "active" : ""}" data-stage="${stage.id}">
          <span class="stage-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="stage-name">${stage.name}</span>
          <span class="stage-sub">${stage.short}</span>
        </button>
      `
    )
    .join("");
}

function createBulletList(items) {
  return items
    .map(
      ([title, body]) => `
        <article class="bullet-item">
          <strong>${title}</strong>
          <span>${body}</span>
        </article>
      `
    )
    .join("");
}

function renderWorkflow(stage) {
  const tpl = document.getElementById("workflowTemplate").content.cloneNode(true);
  tpl.getElementById("detailCards").innerHTML = stage.details
    .map(
      ([title, body]) => `
        <article class="detail-card">
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
  tpl.getElementById("outputList").innerHTML = createBulletList(stage.outputs);
  tpl.getElementById("interactionHints").innerHTML = createBulletList(stage.hints);
  return tpl;
}

function renderOverview() {
  const tpl = document.getElementById("overviewTemplate").content.cloneNode(true);
  tpl.getElementById("currentStageIndex").textContent = String(
    stages.findIndex((item) => item.id === state.activeStage) + 1
  ).padStart(2, "0");
  tpl.getElementById("overviewGrid").innerHTML = stages
    .map(
      (stage, index) => `
        <button class="overview-card ${stage.id === state.activeStage ? "active" : ""}" data-stage-card="${stage.id}">
          <span class="overview-card-index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${stage.name}</h3>
          <span class="overview-card-summary">${stage.short}</span>
        </button>
      `
    )
    .join("");

  tpl.getElementById("overviewSignals").innerHTML = createBulletList([
    ["待机逻辑", "屏幕默认显示待机页，点击进入后进入首页总览，适合展墙公共展示。"],
    ["自动轮播", "首页状态下自动轮播 9 个阶段，帮助来访者快速理解从策划到实施的完整框架。"],
    ["触摸导览", "可直接点选任意阶段进入详细页，也可切换到交付模板和落地实施。"] 
  ]);

  tpl.getElementById("overviewValues").innerHTML = createBulletList([
    ["提案价值", "比平面方案更直观地展示 DESI 的内容方法与交付能力。"],
    ["展墙价值", "适合在公司接待空间长期运行，作为品牌方法展示屏。"],
    ["执行价值", "结构清晰，便于继续扩展为真实案例屏或品牌馆互动内容。"] 
  ]);

  return tpl;
}

function renderDeliverables() {
  const tpl = document.getElementById("deliverablesTemplate").content.cloneNode(true);
  tpl.getElementById("deliverableCards").innerHTML = deliverables
    .map(
      ([title, body], index) => `
        <article class="deliverable-card">
          <h3>${String(index + 1).padStart(2, "0")} ${title}</h3>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
  tpl.getElementById("roleList").innerHTML = createBulletList(roles);
  tpl.getElementById("scheduleList").innerHTML = createBulletList(schedule);
  return tpl;
}

function renderDeployment() {
  const tpl = document.getElementById("deploymentTemplate").content.cloneNode(true);
  tpl.getElementById("deviceCards").innerHTML = devices
    .map(
      ([title, body]) => `
        <article class="device-card">
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
  tpl.getElementById("deploymentSteps").innerHTML = createBulletList(deploymentSteps);
  tpl.getElementById("implementationNotes").innerHTML = createBulletList(implementationNotes);
  return tpl;
}

function renderOperatorGuide() {
  const tpl = document.getElementById("operatorTemplate").content.cloneNode(true);
  tpl.getElementById("operatorCards").innerHTML = operatorSteps
    .map(
      ([title, body]) => `
        <article class="deliverable-card">
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `
    )
    .join("");

  tpl.getElementById("operatorQuickTip").innerHTML = createBulletList([
    ["一句话说明", "请把整个互动屏文件夹拷贝到多媒体主机里，双击 index.html 用 Chrome 或 Edge 打开，然后按 F11 全屏；正式运行时请设置开机自动全屏打开这个 index.html。"],
    ["推荐方式", "临时演示可以手动打开；正式展厅建议用 Chrome/Edge 的全屏或 Kiosk 模式本地运行。"],
    ["不推荐方式", "不建议只拷贝单个文件，也不建议正式展厅长期依赖在线链接运行。"]
  ]);

  tpl.getElementById("operatorChecklist").innerHTML = createBulletList(operatorChecklist);
  return tpl;
}

function render() {
  const stage = stages.find((item) => item.id === state.activeStage);
  stageTitle.textContent =
    state.view === "overview"
      ? "DESI 企业展厅数字内容完整工作流"
      : state.view === "workflow"
      ? stage.name
      : state.view === "deliverables"
        ? "标准交付模板"
        : state.view === "deployment"
          ? "现场落地实施方案"
          : "非技术人员运行指南";
  stageSummary.textContent =
    state.view === "overview"
      ? "这是一块适合放置在 DESI 展墙中的正式互动屏首页。它以品牌化的总览方式展示 9 个核心阶段，并把现场执行实施正式纳入工作流，帮助团队完整理解从内容策划到现场落地的全过程。"
      : state.view === "workflow"
      ? stage.summary
      : state.view === "deliverables"
        ? "把方法论沉淀为标准模板，能帮助空间设计团队在每个展厅项目中稳定复制同样的提案质量、交付清晰度与跨团队协作效率。"
        : state.view === "deployment"
          ? "推荐用墙面触摸一体机 + 本地主机或一体机内置系统运行网页原型，实现成本可控、维护方便、视觉表达完整的企业展厅互动屏。"
          : "这一部分面向不会代码的现场人员，说明如何拷贝完整文件、放到多媒体主机、打开 index.html、进入全屏，以及如何交给执行公司设置开机自动运行。";

  renderStageNav();
  actionButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });

  contentGrid.innerHTML = "";

  contentGrid.classList.add("is-transitioning");

  if (state.view === "overview") {
    contentGrid.appendChild(renderOverview());
  } else if (state.view === "workflow") {
    contentGrid.appendChild(renderWorkflow(stage));
  } else if (state.view === "deliverables") {
    contentGrid.appendChild(renderDeliverables());
  } else if (state.view === "deployment") {
    contentGrid.appendChild(renderDeployment());
  } else {
    contentGrid.appendChild(renderOperatorGuide());
  }

  window.setTimeout(() => {
    contentGrid.classList.remove("is-transitioning");
  }, 30);
}

function goHome() {
  state.activeStage = stages[0].id;
  state.view = "overview";
  render();
}

function showStandby() {
  standbyScreen.classList.remove("is-hidden");
}

function hideStandby() {
  standbyScreen.classList.add("is-hidden");
}

function resetIdleTimer() {
  window.clearTimeout(idleTimer);
  idleTimer = window.setTimeout(() => {
    goHome();
    showStandby();
  }, idleTimeoutMs);
}

function startRotation() {
  window.clearInterval(rotateTimer);
  rotateTimer = window.setInterval(() => {
    if (!standbyScreen.classList.contains("is-hidden")) return;
    if (state.view !== "overview") return;

    const currentIndex = stages.findIndex((item) => item.id === state.activeStage);
    const nextStage = stages[(currentIndex + 1) % stages.length];
    state.activeStage = nextStage.id;
    render();
  }, rotateIntervalMs);
}

function wakeScreen() {
  hideStandby();
  goHome();
  resetIdleTimer();
  startRotation();
}

stageNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-stage]");
  if (!button) return;
  state.activeStage = button.dataset.stage;
  state.view = "workflow";
  render();
  resetIdleTimer();
});

contentGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-stage-card]");
  if (!card) return;
  state.activeStage = card.dataset.stageCard;
  state.view = "workflow";
  render();
  resetIdleTimer();
});

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.dataset.view) return;
    state.view = button.dataset.view;
    render();
    resetIdleTimer();
  });
});

homeButton.addEventListener("click", () => {
  goHome();
  resetIdleTimer();
});

wakeButton.addEventListener("click", wakeScreen);

["click", "touchstart", "mousemove", "keydown"].forEach((eventName) => {
  document.addEventListener(eventName, () => {
    if (standbyScreen.classList.contains("is-hidden")) {
      resetIdleTimer();
    }
  }, { passive: true });
});

render();
showStandby();
