export type Lang = "en" | "zh";

export const site = {
  name: "HomeUP",
  legalName: "HomeUP Management Sdn Bhd",
  phone: "016-255 4355",
  phoneTel: "+60162554355",
  whatsapp: "https://wa.me/60162554355",
  whatsappHomeowner:
    "https://wa.me/60162554355?text=Hi%20HomeUP%2C%20I%27d%20like%20a%20free%20space%20planning%20consultation%20for%20my%20home.",
  whatsappInvestor:
    "https://wa.me/60162554355?text=Hi%20HomeUP%2C%20I%27m%20interested%20in%20Reno-to-Rent%20%2F%20property%20management.",
  whatsappVisit:
    "https://wa.me/60162554355?text=Hi%20HomeUP%2C%20I%27d%20like%20to%20visit%20your%20Damansara%20showroom.",
  email: "homeupsb@gmail.com",
  address: "3-3, Jalan PJU 8/3B, Damansara Perdana",
  city: "Petaling Jaya, Selangor 47820",
  hoursWeekday: "Mon–Fri · by appointment",
  hoursWeekend: "Sat–Sun · 9:00 AM – 6:00 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=3-3+Jalan+PJU+8%2F3B+Damansara+Perdana+Petaling+Jaya+47820",
  social: {
    facebook: "https://www.facebook.com/homeupmanagement",
    instagram: "https://www.instagram.com/homeupmanagement",
  },
} as const;

export const portfolio = [
  {
    src: "/portfolio/living.jpg",
    title: { en: "Living spaces", zh: "客厅空间" },
    caption: {
      en: "Bright, move-in ready interiors for everyday living.",
      zh: "明亮、可直接入住的日常起居空间。",
    },
  },
  {
    src: "/portfolio/kitchen.jpg",
    title: { en: "Kitchen & carpentry", zh: "厨房与定制木作" },
    caption: {
      en: "Custom cabinets, islands, and integrated lighting.",
      zh: "定制柜体、中岛与嵌入式灯光设计。",
    },
  },
  {
    src: "/portfolio/cabinetry.jpg",
    title: { en: "Built-ins", zh: "全屋定制柜" },
    caption: {
      en: "Floor-to-ceiling storage finished for rental or living.",
      zh: "落地收纳柜，适合自住或出租。",
    },
  },
  {
    src: "/portfolio/showroom.jpg",
    title: { en: "HomeUP showroom", zh: "HomeUP 展厅" },
    caption: {
      en: "Visit us in Damansara Perdana to see the finish quality.",
      zh: "欢迎到白沙罗 Perdana 展厅体验装修质感。",
    },
  },
  {
    src: "/portfolio/handover.jpg",
    title: { en: "Project handover", zh: "项目交屋" },
    caption: {
      en: "From worksite to keys — clear handover every time.",
      zh: "从施工到交钥匙，每次都清楚交接。",
    },
  },
  {
    src: "/portfolio/niche.jpg",
    title: { en: "Detail finishes", zh: "细节收尾" },
    caption: {
      en: "Niches, lighting, and carpentry details that elevate the space.",
      zh: "凹龛、灯光与木作细节，提升整体质感。",
    },
  },
] as const;

/** Concept / mood images (stock) — replace with client photos when ready. */
export const heroSlides = [
  "/stock/hero/hero-1.jpg",
  "/stock/hero/hero-2.jpg",
  "/stock/hero/hero-3.jpg",
  "/stock/hero/hero-4.jpg",
  "/stock/hero/hero-5.jpg",
  "/stock/hero/hero-6.jpg",
] as const;

export const styleLooks = [
  {
    id: "muji",
    src: "/stock/styles/muji.jpg",
    title: { en: "Muji / Japandi", zh: "MUJI / 日式简约" },
    blurb: {
      en: "Light wood, calm neutrals, uncluttered storage — quiet everyday living.",
      zh: "浅木、低饱和中性色、收纳干净 — 安静的日常感。",
    },
  },
  {
    id: "minimal",
    src: "/stock/styles/minimal.jpg",
    title: { en: "Minimal", zh: "极简" },
    blurb: {
      en: "Clean lines, fewer pieces, maximum light — space that breathes.",
      zh: "干净线条、少而精的家具、光感拉满 — 让空间会呼吸。",
    },
  },
  {
    id: "luxury",
    src: "/stock/styles/luxury.jpg",
    title: { en: "Luxury", zh: "高端奢感" },
    blurb: {
      en: "Statement materials, layered lighting, hotel-level finish.",
      zh: "材质有表情、灯光有层次，接近酒店级收尾。",
    },
  },
  {
    id: "elegant",
    src: "/stock/styles/elegant.jpg",
    title: { en: "Elegant", zh: "贵气" },
    blurb: {
      en: "Deep tones, refined carpentry, polished proportions.",
      zh: "沉稳色调、精致木作、比例讲究 — 一眼有质感。",
    },
  },
  {
    id: "warm",
    src: "/stock/styles/warm.jpg",
    title: { en: "Warm & cosy", zh: "温馨" },
    blurb: {
      en: "Soft textures, warm light, family-friendly layouts.",
      zh: "柔和材质、暖光氛围、适合家庭日常的动线。",
    },
  },
  {
    id: "contemporary",
    src: "/stock/styles/contemporary.jpg",
    title: { en: "Contemporary", zh: "现代都会" },
    blurb: {
      en: "Condo-ready modern looks that photograph well for ownstay or rental.",
      zh: "适合公寓的现代感，自住上镜、出租也好拍。",
    },
  },
] as const;

export const beforeAfterPairs = [
  {
    id: "living",
    before: "/stock/before-after/before-1.jpg",
    after: "/stock/before-after/after-1.jpg",
    title: { en: "Living transformation", zh: "客厅改造" },
    caption: {
      en: "From bare unit to a lived-in layout with carpentry, lighting and furniture rhythm.",
      zh: "从空壳单位到有柜体、灯光与家具节奏的可住空间。",
    },
  },
  {
    id: "kitchen",
    before: "/stock/before-after/before-2.jpg",
    after: "/stock/before-after/after-2.jpg",
    title: { en: "Kitchen & wet works", zh: "厨房与泥作" },
    caption: {
      en: "Work triangle, durable finishes and built-ins planned before site starts.",
      zh: "动线、耐用收尾与柜体 — 动工前先锁方案。",
    },
  },
] as const;

export const journeySteps = [
  {
    step: "01",
    src: "/stock/journey/01-drawing.jpg",
    title: { en: "Drawings & space plan", zh: "平面与效果图" },
    description: {
      en: "Layouts, elevations and look-and-feel locked so the build has a clear target.",
      zh: "平面、立面与氛围先锁定，施工才有明确目标。",
    },
  },
  {
    step: "02",
    src: "/stock/journey/02-electrical.jpg",
    title: { en: "Electrical & services", zh: "电路与管线" },
    description: {
      en: "Power points, lighting circuits and AC routes coordinated before hack-off.",
      zh: "插座、灯路与冷气走线先协调，再进拆除与开槽。",
    },
  },
  {
    step: "03",
    src: "/stock/journey/03-materials.jpg",
    title: { en: "Materials board", zh: "材料确认" },
    description: {
      en: "Tiles, laminates, paints and ironmongery sampled and signed off.",
      zh: "砖、板材、油漆与五金试样确认后才采购。",
    },
  },
  {
    step: "04",
    src: "/stock/journey/04-build.jpg",
    title: { en: "Build & carpentry", zh: "施工与木作" },
    description: {
      en: "Site works, custom cabinets and finishes with progress checkpoints.",
      zh: "现场施工、定制柜体与收尾，按节点回报进度。",
    },
  },
  {
    step: "05",
    src: "/stock/journey/05-furniture.jpg",
    title: { en: "Furniture & styling", zh: "家具与配搭" },
    description: {
      en: "Loose furniture, soft furnishings and details that complete the mood.",
      zh: "活动家具、布艺与小物配搭，把风格落到实处。",
    },
  },
  {
    step: "06",
    src: "/stock/journey/06-handover.jpg",
    title: { en: "Handover", zh: "交屋" },
    description: {
      en: "Walkthrough, snag list cleared, keys handed over — optional management next.",
      zh: "验收、缺陷清单清完交钥匙 — 也可衔接管理。",
    },
  },
] as const;

const copy = {
  en: {
    nav: {
      services: "Services",
      styles: "Styles",
      packages: "Packages",
      works: "Works",
      beforeAfter: "Before / After",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
      whatsapp: "WhatsApp",
    },
    hero: {
      brand: "HomeUP",
      tagline: "Design & Build · Klang Valley",
      headline: "From mood board to keys — one accountable team.",
      support:
        "Interior design, custom carpentry, Reno-to-Rent and management. Free space planning consult at our Damansara showroom.",
      ctaPrimary: "Free consultation",
      ctaSecondary: "See styles",
    },
    trust: {
      items: [
        { value: "1 team", label: "Design · Build · Manage" },
        { value: "6 steps", label: "Drawing → handover" },
        { value: "Showroom", label: "Damansara Perdana" },
        { value: "Weekends", label: "Open 9AM–6PM" },
      ],
    },
    styles: {
      eyebrow: "Style gallery",
      title: "Pick a mood. We build the detail.",
      support:
        "Browse looks homeowners ask for most — then we tailor layout, materials and carpentry to your unit.",
      note: "Concept visuals for style reference. We’ll replace these with your approved project photos.",
      cta: "Discuss this style",
    },
    beforeAfter: {
      eyebrow: "Before & after",
      title: "See the jump — empty shell to finished home.",
      support:
        "Drag the slider to compare. Real HomeUP case photos will replace these concept pairs once confirmed.",
      before: "Before",
      after: "After",
      note: "Placeholder concept imagery — swap in client site photos anytime.",
    },
    services: {
      eyebrow: "What we do",
      title: "Full-stack property solutions.",
      support:
        "Unlike hiring separate designers, contractors and agents — HomeUP keeps design, carpentry, build and management accountable under one team.",
      items: [
        {
          title: "Interior Design",
          description:
            "Space planning, materials and finishes built around how you live — with layouts locked before works begin.",
        },
        {
          title: "Custom Carpentry",
          description:
            "Wardrobes, kitchens and built-ins measured for your unit — not off-the-shelf compromises.",
        },
        {
          title: "Design & Build",
          description:
            "One contract from concept to handover. Clear milestones, coordinated trades, progress updates.",
        },
        {
          title: "Reno-to-Rent",
          description:
            "Investor-first renovations that lift rental appeal, tenancy speed and returns in the Klang Valley.",
        },
        {
          title: "Property Management",
          description:
            "Tenant sourcing, agreements, collections and upkeep — so your unit keeps earning.",
        },
      ],
    },
    packages: {
      eyebrow: "Packages",
      title: "Choose your path.",
      support:
        "Whether you are moving in or investing for yield — start with a clear package, then we tailor scope and budget.",
      items: [
        {
          title: "Ownstay Design & Build",
          audience: "For homeowners",
          points: [
            "Consultation & space planning",
            "Layout, materials & costing",
            "Custom carpentry & site works",
            "Handover, move-in ready",
          ],
          cta: "Plan my home",
          hrefKey: "homeowner" as const,
        },
        {
          title: "Reno-to-Rent",
          audience: "For investors",
          points: [
            "Rental-optimised design",
            "Durable finishes that photograph well",
            "Faster to tenant-ready",
            "Optional management after handover",
          ],
          cta: "Maximise rental",
          hrefKey: "investor" as const,
          featured: true,
        },
        {
          title: "Property Management",
          audience: "For landlords",
          points: [
            "Tenant sourcing & screening",
            "Tenancy agreements",
            "Rent collection support",
            "Maintenance coordination",
          ],
          cta: "Manage my unit",
          hrefKey: "investor" as const,
        },
      ],
    },
    why: {
      eyebrow: "Why HomeUP",
      title: "Built like the best one-stop firms.",
      support:
        "Inspired by what serious Design & Build and Reno-to-Rent operators do well — clarity, accountability, and a showroom you can visit.",
      items: [
        {
          title: "Single point of accountability",
          description:
            "One team owns design, carpentry and site coordination — fewer gaps than juggling separate vendors.",
        },
        {
          title: "Design locked before build",
          description:
            "Layouts, materials and costing are confirmed first — so mid-project surprises stay under control.",
        },
        {
          title: "Ownstay + investor dual track",
          description:
            "Move-in homes and rental-ready units need different priorities. We plan for the outcome you want.",
        },
        {
          title: "Visit before you commit",
          description:
            "See finish quality at our Damansara Perdana showroom — then book a free space planning consult.",
        },
      ],
    },
    areas: {
      eyebrow: "Service area",
      title: "Serving the Klang Valley.",
      support:
        "Based in Damansara Perdana — covering Petaling Jaya, KL and surrounding neighbourhoods.",
      items: [
        "Damansara / PJ",
        "Kuala Lumpur",
        "Mont Kiara / Sri Hartamas",
        "Subang / Shah Alam",
        "Cheras / Ampang",
        "Other KV areas",
      ],
    },
    works: {
      eyebrow: "Selected works",
      title: "Site moments & showroom finishes.",
      support:
        "HomeUP project and showroom captures — more on Facebook & Instagram. Style / before-after sections above use concept visuals until case photos are confirmed.",
      moreFb: "More on Facebook",
      moreIg: "Instagram",
    },
    process: {
      eyebrow: "The reno journey",
      title: "From drawings to keys.",
      support:
        "Drawing → wiring → materials → build → style → handover — every layer of a professional reno, made clear.",
      note: "Journey photos are concept references until project documentation is published.",
    },
    who: {
      eyebrow: "Who we help",
      title: "Two outcomes. One partner.",
      homeownersTitle: "Homeowners",
      homeownersBody:
        "Turn a bare or tired unit into a home you want to return to — planned around lifestyle, storage and comfort.",
      homeownersCta: "Book home consult",
      investorsTitle: "Investors",
      investorsBody:
        "Reno-to-Rent and management that keep units rental-ready, tenanted and earning across the Klang Valley.",
      investorsCta: "Talk investment reno",
    },
    testimonials: {
      eyebrow: "Social proof",
      title: "What clients say after handover.",
      support:
        "Handover moments and referrals from our Facebook community — the same people who trusted us with their keys.",
      items: [
        {
          quote:
            "Clear communication from design to handover. The carpentry and finishes felt intentional — not rushed.",
          name: "Homeowner · Klang Valley",
        },
        {
          quote:
            "We needed the unit rental-ready fast. HomeUP aligned layout and built-ins for tenants, then helped us move forward.",
          name: "Investor · Petaling Jaya",
        },
        {
          quote:
            "Visiting the Damansara showroom helped us decide. Weekend consult made it easy for our family.",
          name: "Family · Damansara",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions buyers ask before hiring.",
      items: [
        {
          q: "Do you offer Design & Build, or design only?",
          a: "HomeUP is a one-stop Design & Build partner — interior design, custom carpentry and site coordination under one team, with optional rental management after handover.",
        },
        {
          q: "Is the first consultation free?",
          a: "Yes. We offer a free space planning consultation. Bring your unit details, budget range and whether the goal is ownstay or rental.",
        },
        {
          q: "What’s the difference between ownstay and Reno-to-Rent?",
          a: "Ownstay prioritises lifestyle and long-term comfort. Reno-to-Rent prioritises durability, photo appeal and tenant flow so the unit rents faster and earns better.",
        },
        {
          q: "Where do you operate?",
          a: "We’re based in Damansara Perdana, Petaling Jaya, and serve projects across the Klang Valley.",
        },
        {
          q: "Can I visit before deciding?",
          a: "Yes — visit our showroom at Damansara Perdana. Weekends we’re open 9:00 AM – 6:00 PM; weekdays by appointment.",
        },
        {
          q: "Do you manage the property after renovation?",
          a: "Yes. After Reno-to-Rent or ownstay works, you can continue with tenant sourcing and property management under HomeUP.",
        },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Book a free space planning consult.",
      support:
        "Tell us your property type, budget and goal — ownstay, Reno-to-Rent or management. We’ll reply on WhatsApp.",
      cta: "WhatsApp HomeUP",
      ctaVisit: "Book showroom visit",
      call: "Call",
      email: "Email",
      visit: "Showroom",
      hours: "Hours",
      company: "Company",
    },
    footer: {
      tagline: "Your One-Stop Property Solutions",
      rights:
        "Design & Build Renovation and Property Management in Klang Valley.",
    },
  },
  zh: {
    nav: {
      services: "服务",
      styles: "风格",
      packages: "方案",
      works: "作品",
      beforeAfter: "改造对比",
      process: "流程",
      faq: "问答",
      contact: "联络",
      whatsapp: "WhatsApp",
    },
    hero: {
      brand: "HomeUP",
      tagline: "设计施工 · 巴生谷",
      headline: "从风格板到交钥匙，同一团队负责到底",
      support:
        "室内设计、定制木作、装修出租与物业管理。白沙罗展厅提供免费空间规划咨询。",
      ctaPrimary: "免费咨询",
      ctaSecondary: "看看风格",
    },
    trust: {
      items: [
        { value: "一团队", label: "设计 · 施工 · 管理" },
        { value: "六步", label: "图纸 → 交屋" },
        { value: "展厅", label: "白沙罗 Perdana" },
        { value: "周末", label: "营业 上午9–下午6" },
      ],
    },
    styles: {
      eyebrow: "风格馆",
      title: "先选感觉，再落到细节",
      support:
        "这些是业主最常问的装修气质 — 我们再按你的单位定制布局、材料与木作。",
      note: "目前为风格参考效果图，客户确认后可换成真实案例照片。",
      cta: "聊聊这个风格",
    },
    beforeAfter: {
      eyebrow: "改造对比",
      title: "拖一拖，看空壳到成品的落差",
      support:
        "左右滑动对比。真实 HomeUP 案例图确认后，会替换这组概念对比图。",
      before: "之前",
      after: "之后",
      note: "占位效果图 — 随时可换成客户工地实拍。",
    },
    services: {
      eyebrow: "我们的服务",
      title: "全链路房产解决方案",
      support:
        "不必分开找设计师、承包商与中介 — HomeUP 让设计、木作、施工与管理同一团队负责。",
      items: [
        {
          title: "室内设计",
          description: "空间规划、材料与收尾，贴合生活习惯；动工前先锁定方案。",
        },
        {
          title: "定制木作",
          description: "衣柜、厨柜与嵌入式收纳按单位量身定制，不做现成凑合。",
        },
        {
          title: "设计与施工",
          description: "从概念到交屋一份合约，里程碑清楚、工种协调、进度可追踪。",
        },
        {
          title: "装修出租",
          description: "以投资者回报为导向，提升出租卖相、出租速度与租金表现。",
        },
        {
          title: "物业管理",
          description: "招租、租约、收租与维修协调，让单位持续产生收益。",
        },
      ],
    },
    packages: {
      eyebrow: "方案",
      title: "先选路径，再细化预算",
      support: "自住或投资出租目标不同 — 我们按结果规划范围与材料。",
      items: [
        {
          title: "自住设计施工",
          audience: "适合屋主",
          points: [
            "咨询与空间规划",
            "布局、材料与报价",
            "定制木作与现场施工",
            "交钥匙，可直接入住",
          ],
          cta: "规划我家",
          hrefKey: "homeowner" as const,
        },
        {
          title: "装修出租",
          audience: "适合投资者",
          points: [
            "出租导向设计",
            "耐用又上镜的收尾",
            "更快达到可出租状态",
            "交屋后可选管理",
          ],
          cta: "提升租金回报",
          hrefKey: "investor" as const,
          featured: true,
        },
        {
          title: "物业管理",
          audience: "适合房东",
          points: ["招租与筛选", "租约处理", "收租协助", "维修协调"],
          cta: "管理我的单位",
          hrefKey: "investor" as const,
        },
      ],
    },
    why: {
      eyebrow: "为何选 HomeUP",
      title: "对标专业一站式公司的做法",
      support:
        "吸收 Design & Build 与 Reno-to-Rent 业者的共通优点：流程清楚、责任单一、可实地看展厅。",
      items: [
        {
          title: "单一责任窗口",
          description: "设计、木作与现场协调同一团队，减少多方扯皮。",
        },
        {
          title: "先锁定设计再施工",
          description: "布局、材料与报价确认后才动工，控制中途加价与变更。",
        },
        {
          title: "自住 / 投资双轨",
          description: "自住重生活与收纳；出租重耐用与租客动线 — 目标不同，方案不同。",
        },
        {
          title: "先参观再决定",
          description: "到白沙罗展厅看实景质感，再预约免费空间规划咨询。",
        },
      ],
    },
    areas: {
      eyebrow: "服务范围",
      title: "深耕巴生谷",
      support: "据点在白沙罗 Damansara Perdana，覆盖八打灵、吉隆坡与周边。",
      items: [
        "白沙罗 / 八打灵",
        "吉隆坡",
        "蒙奇亚拉 / Sri Hartamas",
        "梳邦 / 沙亚南",
        "蕉赖 / 安邦",
        "其他巴生谷地区",
      ],
    },
    works: {
      eyebrow: "精选作品",
      title: "工地瞬间与展厅质感",
      support:
        "HomeUP 项目与展厅实拍 — 更多见 Facebook / Instagram。上方风格与对比区暂用效果图，案例确认后替换。",
      moreFb: "Facebook 看更多",
      moreIg: "Instagram",
    },
    process: {
      eyebrow: "装修旅程",
      title: "从图纸到交钥匙",
      support:
        "图纸 → 电路 → 材料 → 施工 → 配搭 → 交屋：六步看清专业装修怎么落地。",
      note: "流程配图为概念参考，项目实拍档案就绪后可替换。",
    },
    who: {
      eyebrow: "我们服务谁",
      title: "两种结果，一个伙伴",
      homeownersTitle: "屋主",
      homeownersBody:
        "把毛坯或旧屋变成真正想回家的地方 — 围绕生活、收纳与舒适度规划。",
      homeownersCta: "预约自住咨询",
      investorsTitle: "投资者",
      investorsBody:
        "装修出租与持续管理，让单位随时可租、稳定收租，覆盖巴生谷。",
      investorsCta: "洽谈投资装修",
    },
    testimonials: {
      eyebrow: "客户反馈",
      title: "交屋之后，他们怎么说",
      support: "来自交屋与社群推荐的真实感受 — 把钥匙交给我们的人。",
      items: [
        {
          quote: "从设计到交屋沟通清楚，木作与收尾有想法，不赶工。",
          name: "屋主 · 巴生谷",
        },
        {
          quote: "单位需要尽快可租，HomeUP 按租客需求调整布局与柜体，推进很顺。",
          name: "投资者 · 八打灵",
        },
        {
          quote: "先去白沙罗展厅看过才决定。周末咨询对全家都很方便。",
          name: "家庭客户 · 白沙罗",
        },
      ],
    },
    faq: {
      eyebrow: "常见问题",
      title: "委托前最常被问到的事",
      items: [
        {
          q: "你们是纯设计，还是设计施工一条龙？",
          a: "HomeUP 是一站式 Design & Build：室内设计、定制木作与现场协调同一团队，交屋后也可衔接租务管理。",
        },
        {
          q: "第一次咨询收费吗？",
          a: "不收。我们提供免费空间规划咨询。请准备单位资料、预算范围，以及自住或出租目标。",
        },
        {
          q: "自住装修和装修出租有什么不同？",
          a: "自住强调生活方式与长期舒适；装修出租强调耐用、上镜与租客动线，帮助更快出租、更好回报。",
        },
        {
          q: "服务范围在哪里？",
          a: "据点在八打灵白沙罗 Damansara Perdana，项目覆盖巴生谷。",
        },
        {
          q: "决定前可以先参观吗？",
          a: "可以。欢迎参观展厅。周末上午 9 点至下午 6 点营业；平日请先预约。",
        },
        {
          q: "装修后可以帮忙管理物业吗？",
          a: "可以。装修出租或自住工程后，可继续由 HomeUP 协助招租与物业管理。",
        },
      ],
    },
    contact: {
      eyebrow: "联络我们",
      title: "预约免费空间规划咨询",
      support:
        "告诉我们单位类型、预算与目标 — 自住、装修出租或管理。我们会在 WhatsApp 回复。",
      cta: "WhatsApp 联系 HomeUP",
      ctaVisit: "预约参观展厅",
      call: "电话",
      email: "电邮",
      visit: "展厅",
      hours: "营业时间",
      company: "公司",
    },
    footer: {
      tagline: "一站式房产解决方案",
      rights: "巴生谷设计施工装修与物业管理。",
    },
  },
} as const;

export type Copy = (typeof copy)["en"];

export function getCopy(lang: Lang): Copy {
  return copy[lang] as Copy;
}

export function whatsappByKey(key: "homeowner" | "investor" | "visit") {
  if (key === "homeowner") return site.whatsappHomeowner;
  if (key === "visit") return site.whatsappVisit;
  return site.whatsappInvestor;
}
