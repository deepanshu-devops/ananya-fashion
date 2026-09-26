document.documentElement.classList.add("reveal-ready");

const WHATSAPP_NUMBER = "918871876379";

const products = [
  {
    id: "t-shirts",
    name: "T-Shirts",
    tag: "Knitwear",
    category: "knitwear",
    image: "public/images/product-tshirts.jpg",
    width: 1200,
    height: 1200,
    description: "Bulk t-shirt manufacturing for private-label brands, merchandise programmes and distribution requirements.",
    customization: ["Logo and graphic placement", "Neck, sleeve and hem styles", "Colour and size range", "Custom labels and packaging"],
    materials: ["Cotton", "Cotton blends", "Polyester blends", "Other approved materials"],
    sizes: ["XS to 3XL", "Men’s, women’s and unisex", "Custom size sets where technically feasible"],
    production: "Specification, fabric, quantity, decoration method and delivery requirements confirmed before production."
  },
  {
    id: "polo-shirts",
    name: "Polo Shirts",
    tag: "Knitwear",
    category: "knitwear",
    image: "public/images/product-polos.jpg",
    width: 1200,
    height: 1800,
    description: "Contract polo shirt production for corporate, promotional, hospitality and private-label collections.",
    customization: ["Collar and cuff details", "Embroidery and branding", "Placket and button options", "Custom colour combinations"],
    materials: ["Cotton piqué", "Cotton blends", "Performance blends", "Other approved materials"],
    sizes: ["XS to 3XL", "Men’s and women’s fits", "Custom size sets where technically feasible"],
    production: "Fit, fabric GSM, colour, branding and bulk order requirements reviewed before sampling or production."
  },
  {
    id: "formal-shirts",
    name: "Formal Shirts",
    tag: "Shirts",
    category: "shirts",
    image: "public/images/product-shirts.jpg",
    width: 1200,
    height: 800,
    description: "Business shirt manufacturing aligned to approved measurements, construction details and finishing requirements.",
    customization: ["Collar and cuff styles", "Fit and sizing", "Logo and monogram options", "Packaging and labels"],
    materials: ["Cotton", "Cotton blends", "Formal woven fabrics", "Other approved materials"],
    sizes: ["Standard menswear", "Extended and short sizes", "Custom measurements where agreed"],
    production: "Measurement chart, fabric, trims, branding and delivery plan are confirmed during specification review."
  },
  {
    id: "uniforms-workwear",
    name: "Uniforms & Workwear",
    tag: "Uniforms",
    category: "uniforms",
    image: "public/images/product-uniforms.jpg",
    width: 1200,
    height: 356,
    description: "Bulk uniform and workwear solutions for institutions, teams, industrial groups and suppliers.",
    customization: ["Role-based colour combinations", "Company and department logos", "Pockets and reinforcement details", "Name labels and packaging"],
    materials: ["Cotton and cotton blends", "Polyester blends", "Workwear fabrics", "Other approved materials"],
    sizes: ["Standard to extended sizes", "Role-specific size sets", "Measured size charts where required"],
    production: "Application, roles, quantities, fabric performance, branding and delivery requirements reviewed for each order."
  },
  {
    id: "corporate-apparel",
    name: "Corporate Apparel",
    tag: "Uniforms",
    category: "uniforms",
    image: "public/images/product-corporate.jpg",
    width: 1200,
    height: 800,
    description: "Private-label corporate apparel programmes built around your approved product range and brand presentation.",
    customization: ["Logo and emblem application", "Coordinated product ranges", "Size and colour allocation", "Branded labels and packaging"],
    materials: ["Premium cotton", "Cotton blends", "Performance blends", "Other approved materials"],
    sizes: ["Men’s and women’s fits", "XS to 3XL", "Custom size sets where technically feasible"],
    production: "Product range, measurements, branding method, packed quantity and delivery schedule are agreed upfront."
  },
  {
    id: "sportswear",
    name: "Sportswear",
    tag: "Sportswear",
    category: "sportswear",
    image: "public/images/product-activewear.jpg",
    width: 1200,
    height: 1600,
    description: "Activewear manufacturing for performance-led collections, teamwear and branded sports apparel.",
    customization: ["Graphic and logo placement", "Colour blocking", "Fit and panel details", "Custom woven or printed labels"],
    materials: ["Polyester performance fabrics", "Polyester blends", "Stretch fabrics", "Other approved materials"],
    sizes: ["XS to 3XL", "Men’s, women’s and unisex", "Custom size sets where technically feasible"],
    production: "Intended use, fabric, fit, decoration, quantity and quality expectations confirmed before production."
  },
  {
    id: "hoodies-sweatshirts",
    name: "Hoodies & Sweatshirts",
    tag: "Knitwear",
    category: "knitwear",
    image: "public/images/product-sweatshirts.jpg",
    width: 1200,
    height: 1800,
    description: "Bulk sweatshirt and hoodie production for lifestyle labels, promotional ranges and seasonal collections.",
    customization: ["Hood, zipper and rib styles", "Embroidery, print or patches", "Interior and exterior labels", "Custom colour and packaging"],
    materials: ["Cotton fleece", "Cotton blends", "Polyester fleece", "Other approved materials"],
    sizes: ["XS to 3XL", "Oversized and regular fits", "Custom size sets where technically feasible"],
    production: "Fabric weight, construction, fit, branding, quantity and target delivery agreed before production."
  },
  {
    id: "custom-garments",
    name: "Custom Garments",
    tag: "Made to brief",
    category: "custom",
    image: "public/images/sewing-detail.jpg",
    width: 1800,
    height: 1200,
    description: "Custom textile and garment development for brands with a specific product brief, construction or branding need.",
    customization: ["Product and pattern development", "Material and trim sourcing support", "Sampling and revision stages", "Branded finishing options"],
    materials: ["Client-specified materials", "Approved alternatives", "Fabrics selected for product use", "Trims and accessories as briefed"],
    sizes: ["Custom measurement sets", "Standard size adaptation", "Fit and grading requirements as agreed"],
    production: "Custom development is assessed for feasibility, material availability, quantity, timeline and commercial terms."
  }
];

const htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => htmlEntities[character]);

const productCardTemplate = (product) => `
  <article class="product-card" data-category="${escapeHtml(product.category)}">
    <div class="product-image">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} manufactured by Ananya Fashion" width="${product.width}" height="${product.height}" loading="lazy">
      <span class="product-tag">${escapeHtml(product.tag)}</span>
    </div>
    <div class="product-body">
      <h3>${escapeHtml(product.name)}</h3>
      <p>${escapeHtml(product.description)}</p>
      <div class="product-actions">
        <a href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${escapeHtml(product.name)} manufacturing details"><span>View Details</span><span>↗</span></a>
        <button type="button" data-product-quote="${escapeHtml(product.name)}" aria-label="Request a manufacturing quote for ${escapeHtml(product.name)}">Request Quote</button>
      </div>
    </div>
  </article>
`;

const initProductGrid = () => {
  const productGrid = document.querySelector("[data-product-grid]");
  if (!productGrid) return;

  productGrid.innerHTML = products.map(productCardTemplate).join("");

  const filterButtons = document.querySelectorAll("[data-filter]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      productGrid.querySelectorAll("[data-category]").forEach((card) => {
        card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
      });
    });
  });
};

const initNavigation = () => {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobilePanel = document.querySelector("[data-mobile-panel]");
  const firstMobileLink = mobilePanel ? mobilePanel.querySelector("a") : null;
  const backToTop = document.querySelector("[data-back-to-top]");

  const closeMenu = (restoreFocus = false) => {
    const wasOpen = document.body.classList.contains("menu-open");
    document.body.classList.remove("menu-open");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", translate("Open navigation"));
    }
    if (wasOpen && restoreFocus && menuToggle) menuToggle.focus();
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = !document.body.classList.contains("menu-open");
      if (!isOpen) {
        closeMenu(true);
        return;
      }
      document.body.classList.add("menu-open");
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", translate("Close navigation"));
      if (firstMobileLink) firstMobileLink.focus({ preventScroll: true });
    });
  }

  if (mobilePanel) {
    mobilePanel.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeMenu(false)));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu(true);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1020) closeMenu(false);
  });

  const updateScrollElements = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
    if (backToTop) {
      const isVisible = window.scrollY > 700;
      backToTop.classList.toggle("visible", isVisible);
      backToTop.setAttribute("tabindex", isVisible ? "0" : "-1");
    }
  };

  updateScrollElements();
  window.addEventListener("scroll", updateScrollElements, { passive: true });

  if (backToTop) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));
  }
};

const initRevealAnimations = () => {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

  revealElements.forEach((element) => observer.observe(element));
};

const initProductQuoteLinks = () => {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-quote]");
    if (!button) return;

    const productName = button.dataset.productQuote;
    sessionStorage.setItem("ananyaPendingProduct", productName);
    window.location.href = "index.html#contact";
  });
};

const initRfqForm = () => {
  const form = document.querySelector("[data-rfq-form]");
  if (!form) return;

  const submitButton = form.querySelector('[type="submit"]');
  if (submitButton) submitButton.disabled = false;
  const status = form.querySelector("[data-form-status]");
  const fileInput = form.querySelector('input[type="file"]');
  const fileName = form.querySelector("[data-file-name]");
  const productType = form.elements.productType;
  const productCategory = form.elements.productCategory;

  const pendingProduct = sessionStorage.getItem("ananyaPendingProduct");
  if (pendingProduct) {
    productType.value = pendingProduct;
    const matchedProduct = products.find((product) => product.name === pendingProduct);
    if (matchedProduct) {
      const option = Array.from(productCategory.options).find((item) => item.text === matchedProduct.name || item.text.includes(matchedProduct.name.split(" ")[0]));
      if (option) productCategory.value = option.value;
    }
    status.innerHTML = `${escapeHtml(pendingProduct)} <span>has been added to your enquiry. Please complete the remaining requirements.</span>`;
    status.classList.add("visible");
    sessionStorage.removeItem("ananyaPendingProduct");
  }

  const showStatus = (text) => {
    status.textContent = text;
    status.classList.add("visible");
    applyLanguage();
  };

  if (fileInput && fileName) {
    fileInput.addEventListener("change", () => {
      fileName.textContent = fileInput.files.length ? fileInput.files[0].name : "No file selected";
      applyLanguage();
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const value = (name) => String(data.get(name) || translate("Not provided")).trim();
    const referenceFile = fileInput && fileInput.files.length ? fileInput.files[0].name : translate("Not provided");
    const message = [
      translate("Hello Ananya Fashion, I would like to request a textile or garment manufacturing quote."),
      "",
      `${translate("Full Name:")} ${value("fullName")}`,
      `${translate("Company:")} ${value("companyName")}`,
      `${translate("Business Email:")} ${value("email")}`,
      `${translate("Phone:")} ${value("phone")}`,
      `${translate("Product Category:")} ${value("productCategory")}`,
      `${translate("Supply Requirement:")} ${value("supplyModel")}`,
      `${translate("Customer Sample / Reference:")} ${value("sampleAvailability")}`,
      `${translate("Product / Garment:")} ${value("productType")}`,
      `${translate("Estimated Quantity:")} ${value("quantity")}`,
      `${translate("Required Timeline:")} ${value("timeline")}`,
      "",
      `${translate("Manufacturing Requirement:")}`,
      value("requirement"),
      "",
      `${translate("Additional Specifications:")}`,
      value("specifications"),
      "",
      `${translate("Reference file to attach:")} ${referenceFile}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;
    showStatus(whatsappWindow
      ? "Your manufacturing enquiry is ready in WhatsApp. Review the details, attach the reference file if selected, then tap Send."
      : "Your browser blocked the WhatsApp window. Allow pop-ups for this site or use the floating WhatsApp button to contact our team.");
  });
};

const setTextList = (selector, items) => {
  const element = document.querySelector(selector);
  if (!element) return;
  element.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
};

const initProductPage = () => {
  const page = document.querySelector('[data-page="product"]');
  if (!page) return;

  const productId = new URLSearchParams(window.location.search).get("id");
  const product = products.find((item) => item.id === productId);

  if (!product) {
    window.location.replace("index.html#products");
    return;
  }

  document.title = `${product.name} Manufacturing | Ananya Fashion`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", `${product.name} contract manufacturing by Ananya Fashion. Request a bulk quotation based on your product specifications and order requirements.`);

  const image = document.querySelector("[data-product-image]");
  if (image) {
    image.src = product.image;
    image.alt = `${product.name} manufacturing by Ananya Fashion`;
    image.width = product.width;
    image.height = product.height;
  }

  const elements = {
    tag: document.querySelector("[data-product-tag]"),
    title: document.querySelector("[data-product-title]"),
    description: document.querySelector("[data-product-description]"),
    breadcrumb: document.querySelector("[data-product-breadcrumb]")
  };

  if (elements.tag) elements.tag.textContent = product.tag;
  if (elements.title) elements.title.textContent = product.name;
  if (elements.description) elements.description.textContent = product.description;
  if (elements.breadcrumb) elements.breadcrumb.textContent = product.name;

  setTextList("[data-product-customization]", product.customization);
  setTextList("[data-product-materials]", product.materials);
  setTextList("[data-product-sizes]", product.sizes);

  const productionDetail = document.querySelector("[data-product-production]");
  if (productionDetail) productionDetail.textContent = product.production;

  const quoteButtons = document.querySelectorAll(".product-page-copy [data-product-quote], .closing-cta [data-product-quote]");
  quoteButtons.forEach((button) => {
    button.dataset.productQuote = product.name;
    button.setAttribute("aria-label", `Request a manufacturing quote for ${product.name}`);
  });
  const sampleButton = document.querySelector("[data-product-sample]");
  if (sampleButton) {
    sampleButton.dataset.productQuote = `${product.name} — sample request`;
    sampleButton.setAttribute("aria-label", `Request a sample for ${product.name}`);
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);
  const relatedGrid = document.querySelector("[data-related-products]");
  if (relatedGrid) relatedGrid.innerHTML = relatedProducts.map(productCardTemplate).join("");
};

const initCurrentYear = () => {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
};

const translationsHi = {
  "Skip to main content": "मुख्य सामग्री पर जाएँ",
  "Ananya Fashion home": "अनन्या फैशन होम",
  "Select language": "भाषा चुनें",
  "Open navigation": "नेविगेशन खोलें",
  "Close navigation": "नेविगेशन बंद करें",
  "Back to top": "ऊपर जाएँ",
  "Breadcrumb": "ब्रेडक्रम्ब",
  "Primary navigation": "मुख्य नेविगेशन",
  "Mobile navigation": "मोबाइल नेविगेशन",
  "Chat with Ananya Fashion on WhatsApp": "व्हाट्सएप पर अनन्या फैशन से बात करें",
  "Home": "होम",
  "About Us": "हमारे बारे में",
  "About": "परिचय",
  "Contact": "संपर्क",
  "Contact Our Team": "हमारी टीम से संपर्क करें",
  "Products": "उत्पाद",
  "Capabilities": "क्षमताएँ",
  "Quality": "गुणवत्ता",
  "Industries": "उद्योग",
  "Business": "व्यवसाय",
  "Quick Links": "त्वरित लिंक",
  "Leadership": "नेतृत्व",
  "Manufacturing Expertise Built for Business": "व्यवसाय के लिए निर्माण विशेषज्ञता",
  "Ananya Fashion. All Rights Reserved.": "अनन्या फैशन। सर्वाधिकार सुरक्षित।",
  "Back to Website": "वेबसाइट पर वापस जाएँ",
  "Built for business manufacturing": "व्यावसायिक निर्माण के लिए तैयार",
  "Your Trusted Partner for": "आपका भरोसेमंद साथी",
  "Textile & Garment": "टेक्सटाइल और गारमेंट",
  "Contract Manufacturing": "कॉन्ट्रैक्ट मैन्युफैक्चरिंग",
  "Request a Manufacturing Quote": "मैन्युफैक्चरिंग कोटेशन माँगें",
  "Explore Our Capabilities": "हमारी क्षमताएँ देखें",
  "Bulk Production": "बल्क प्रोडक्शन",
  "Quality Focused": "गुणवत्ता पर केन्द्रित",
  "Scalable Capacity": "बढ़ती हुई क्षमता",
  "Wholesale & Retail Supply": "थोक और रिटेल सप्लाई",
  "Built to Your Product Brief": "आपकी प्रोडक्ट ब्रीफ के अनुसार",
  "Ananya Fashion is an India-based textile and garment contract manufacturer supporting bulk production, OEM, private-label and custom manufacturing requirements.": "अनन्या फैशन भारत में स्थित टेक्सटाइल और गारमेंट कॉन्ट्रैक्ट निर्माता है, जो बल्क प्रोडक्शन, ओईएम, प्राइवेट-लेबल और कस्टम निर्माण आवश्यकताओं का समर्थन करता है।",
  "The Ananya advantage": "अनन्या का लाभ",
  "A clear, professional manufacturing approach built around your product, your order and your commercial requirements.": "आपके प्रोडक्ट, ऑर्डर और वाणिज्यिक आवश्यकताओं के आधार पर स्पष्ट और पेशेवर निर्माण दृष्टिकोण।",
  "One accountable production partner.": "एक जवाबदेह प्रोडक्शन पार्टनर।",
  "Partner with confidence": "आत्मविश्वास से साझेदारी करें",
  "See how we work": "देखें कि हम कैसे काम करते हैं",
  "A clear production journey": "स्पष्ट प्रोडक्शन यात्रा",
  "From Requirement to Finished Product": "आवश्यकता से तैयार उत्पाद तक",
  "A structured workflow keeps your brief, approvals and delivery expectations aligned at every stage.": "एक व्यवस्थित कार्यप्रवाह हर चरण में आपकी ब्रीफ, मंज़ूरी और डिलीवरी अपेक्षाओं को एक साथ रखता है।",
  "01": "01",
  "02": "02",
  "03": "03",
  "04": "04",
  "05": "05",
  "06": "06",
  "07": "07",
  "Requirement": "आवश्यकता",
  "Product and order needs shared": "प्रोडक्ट और ऑर्डर की जरूरतें साझा की गईं",
  "Specification": "विनिर्देश",
  "Materials and details reviewed": "सामग्री और विवरण की समीक्षा",
  "Sample": "सैंपल",
  "Customer reference or prototype as required": "आवश्यकता अनुसार ग्राहक संदर्भ या प्रोटोटाइप",
  "Approval": "मंज़ूरी",
  "Final sample or brief confirmed": "अंतिम सैंपल या ब्रीफ की पुष्टि",
  "Production": "प्रोडक्शन",
  "Bulk manufacturing begins": "बल्क निर्माण शुरू होता है",
  "Quality Check": "गुणवत्ता जाँच",
  "Products inspected for dispatch": "डिस्पैच से पहले उत्पादों की जाँच",
  "Dispatch": "डिस्पैच",
  "Packing and delivery as agreed": "तय अनुसार पैकिंग और डिलीवरी",
  "One Manufacturer. Multiple Supply Requirements.": "एक निर्माता। कई सप्लाई आवश्यकताएँ।",
  "Flexible supply options": "लचीली सप्लाई विकल्प",
  "Whether you need contract production, wholesale quantities or retail-ready supply, the manufacturing plan is structured around your product, channel, quantity and delivery requirement.": "चाहे आपको कॉन्ट्रैक्ट प्रोडक्शन, थोक मात्रा या रिटेल-रेडी सप्लाई चाहिए, निर्माण योजना आपके प्रोडक्ट, चैनल, मात्रा और डिलीवरी आवश्यकता के अनुसार बनाई जाती है।",
  "Wholesale Supply": "थोक सप्लाई",
  "Bulk quantities for distributors, resellers and garment wholesalers, packed according to the agreed supply requirement.": "वितरकों, रीसेलर्स और गारमेंट थोक व्यापारियों के लिए बल्क मात्रा, तय सप्लाई आवश्यकता के अनुसार पैक की गई।",
  "Retail Supply": "रिटेल सप्लाई",
  "Retail-ready quantities, presentation and packing can be planned as per the customer's market and channel requirement.": "रिटेल-रेडी मात्रा, प्रस्तुति और पैकिंग ग्राहक के बाजार और चैनल आवश्यकता के अनुसार तय की जा सकती है।",
  "Products manufactured to your approved specification, quality requirements, quantity and agreed commercial terms.": "आपके स्वीकृत विनिर्देश, गुणवत्ता आवश्यकताओं, मात्रा और तय वाणिज्यिक शर्तों के अनुसार निर्मित उत्पाद।",
  "Optional": "वैकल्पिक",
  "Customer Sample / Reference": "ग्राहक सैंपल / संदर्भ",
  "Customers may provide an existing sample as a reference. We review it against the requested product, material, construction and quantity before confirming feasibility, quotations and timelines.": "ग्राहक संदर्भ के रूप में मौजूदा सैंपल दे सकते हैं। व्यवहार्यता, कोटेशन और समय-सीमा की पुष्टि से पहले हम उसकी आवश्यक प्रोडक्ट, सामग्री, निर्माण और मात्रा के अनुसार समीक्षा करते हैं।",
  "Share Your Requirement": "अपनी आवश्यकता साझा करें",
  "Share it with our team": "हमारी टीम के साथ साझा करें",
  "Our process is organised around the approved product specification, the agreed order quantity and the client’s delivery requirement.": "हमारी प्रक्रिया स्वीकृत प्रोडक्ट विनिर्देश, तय ऑर्डर मात्रा और ग्राहक की डिलीवरी आवश्यकता के आधार पर व्यवस्थित है।",
  "Manufacturing Requirement": "निर्माण आवश्यकता",
  "Discuss Your Production Requirement": "अपनी प्रोडक्शन आवश्यकता पर चर्चा करें",
  "Client shares the product category, quantity, supply channel, timeline and key expectations.": "ग्राहक प्रोडक्ट श्रेणी, मात्रा, सप्लाई चैनल, समय-सीमा और मुख्य अपेक्षाएँ साझा करता है।",
  "Specification-led manufacturing": "विनिर्देश-आधारित निर्माण",
  "Fabric, dimensions, design details and quality requirements are reviewed.": "कपड़ा, आयाम, डिज़ाइन विवरण और गुणवत्ता आवश्यकताओं की समीक्षा की जाती है।",
  "Approval and feasibility": "मंज़ूरी और व्यवहार्यता",
  "Final feasibility, material selection, minimum order quantity, production method and commercial terms are shared after specification review.": "विनिर्देश समीक्षा के बाद अंतिम व्यवहार्यता, सामग्री चयन, न्यूनतम ऑर्डर मात्रा, प्रोडक्शन विधि और वाणिज्यिक शर्तें साझा की जाती हैं।",
  "Material check": "सामग्री जाँच",
  "Materials selected for the product brief": "प्रोडक्ट ब्रीफ के अनुसार चुनी गई सामग्री",
  "Production begins according to the approved product specification.": "स्वीकृत प्रोडक्ट विनिर्देश के अनुसार प्रोडक्शन शुरू होता है।",
  "Inspection and finishing": "जाँच और फिनिशिंग",
  "Finished goods are checked against the agreed quality standards.": "तैयार माल को तय गुणवत्ता मानकों के अनुसार जाँचा जाता है।",
  "Start a Conversation": "बातचीत शुरू करें",
  "Looking for a Reliable Textile Manufacturing Partner?": "भरोसेमंद टेक्सटाइल निर्माण पार्टनर खोज रहे हैं?",
  "Request a Quote": "कोटेशन माँगें",
  "Our Manufacturing Capabilities": "हमारी निर्माण क्षमताएँ",
  "Manufacturing scope": "निर्माण क्षेत्र",
  "Discuss Manufacturing": "निर्माण पर चर्चा करें",
  "Discuss custom or private-label manufacturing with our team.": "हमारी टीम से कस्टम या प्राइवेट-लेबल निर्माण पर चर्चा करें।",
  "Production approach": "प्रोडक्शन दृष्टिकोण",
  "Production based on your specifications, quantities and agreed commercial terms.": "आपके विनिर्देश, मात्रा और तय वाणिज्यिक शर्तों के आधार पर प्रोडक्शन।",
  "Order model": "ऑर्डर मॉडल",
  "Per-piece / per-unit where applicable": "लागू होने पर प्रति-पीस / प्रति-यूनिट",
  "Quality and compliance": "गुणवत्ता और अनुपालन",
  "Quality requirements are agreed with the client and used as the reference throughout material review, production, finishing and final inspection.": "गुणवत्ता आवश्यकताओं पर ग्राहक से सहमति होती है और सामग्री समीक्षा, प्रोडक्शन, फिनिशिंग और अंतिम जाँच में संदर्भ के रूप में उपयोग होती हैं।",
  "End-to-end support": "समग्र सहायता",
  "From material planning to dispatch": "सामग्री योजना से डिस्पैच तक",
  "From requirement review to dispatch, every stage is aligned to your approved specifications and commercial agreement.": "आवश्यकता समीक्षा से डिस्पैच तक, हर चरण आपके स्वीकृत विनिर्देश और वाणिज्यिक समझौते के अनुसार होता है।",
  "Manufacturing portfolio": "निर्माण पोर्टफोलियो",
  "Our Textile & Garment Products": "हमारे टेक्सटाइल और गारमेंट उत्पाद",
  "Selected product categories demonstrate our manufacturing scope for contract, wholesale and retail supply. Specifications, materials, packing and minimum quantities are confirmed for each business requirement.": "चयनित प्रोडक्ट श्रेणियाँ कॉन्ट्रैक्ट, थोक और रिटेल सप्लाई के लिए हमारा निर्माण क्षेत्र दर्शाती हैं। विनिर्देश, सामग्री, पैकिंग और न्यूनतम मात्रा हर व्यावसायिक आवश्यकता के लिए तय होती है।",
  "All Products": "सभी उत्पाद",
  "Knitwear": "निटवेयर",
  "Shirts": "शर्ट्स",
  "Sportswear": "स्पोर्ट्सवियर",
  "Uniforms": "यूनिफॉर्म",
  "Custom": "कस्टम",
  "Made to brief": "ब्रीफ के अनुसार",
  "T-Shirts": "टी-शर्ट",
  "Polo Shirts": "पोलो शर्ट",
  "Formal Shirts": "फॉर्मल शर्ट",
  "Uniforms & Workwear": "यूनिफॉर्म और वर्कवियर",
  "Corporate Apparel": "कॉर्पोरेट अपैरल",
  "Track Pants": "ट्रैक पैंट",
  "Hoodies & Sweatshirts": "हुडीज़ और स्वेटशर्ट",
  "Custom Garments": "कस्टम गारमेंट",
  "Other Textile Products": "अन्य टेक्सटाइल उत्पाद",
  "Bulk t-shirt manufacturing for private-label brands, merchandise programmes and distribution requirements.": "प्राइवेट-लेबल ब्रांड, मर्चेंडाइज़ प्रोग्राम और वितरण आवश्यकताओं के लिए बल्क टी-शर्ट निर्माण।",
  "Contract polo shirt production for corporate, promotional, hospitality and private-label collections.": "कॉर्पोरेट, प्रमोशनल, हॉस्पिटेलिटी और प्राइवेट-लेबल कलेक्शन के लिए कॉन्ट्रैक्ट पोलो शर्ट प्रोडक्शन।",
  "Business shirt manufacturing aligned to approved measurements, construction details and finishing requirements.": "स्वीकृत माप, निर्माण विवरण और फिनिशिंग आवश्यकताओं के अनुसार बिज़नेस शर्ट निर्माण।",
  "Bulk uniform and workwear solutions for institutions, teams, industrial groups and suppliers.": "संस्थानों, टीमों, औद्योगिक समूहों और सप्लायरों के लिए बल्क यूनिफॉर्म और वर्कवियर समाधान।",
  "Private-label corporate apparel programmes built around your approved product range and brand presentation.": "आपके स्वीकृत प्रोडक्ट रेंज और ब्रांड प्रेज़ेंटेशन के आधार पर प्राइवेट-लेबल कॉर्पोरेट अपैरल प्रोग्राम।",
  "Activewear manufacturing for performance-led collections, teamwear and branded sports apparel.": "परफ़ॉर्मेंस-आधारित कलेक्शन, टीमवियर और ब्रांडेड स्पोर्ट्स अपैरल के लिए एक्टिववियर निर्माण।",
  "Bulk sweatshirt and hoodie production for lifestyle labels, promotional ranges and seasonal collections.": "लाइफ़स्टाइल लेबल, प्रमोशनल रेंज और सीज़नल कलेक्शन के लिए बल्क स्वेटशर्ट और हुडी प्रोडक्शन।",
  "Custom textile and garment development for brands with a specific product brief, construction or branding need.": "विशिष्ट प्रोडक्ट ब्रीफ, निर्माण या ब्रांडिंग आवश्यकता वाले ब्रांडों के लिए कस्टम टेक्सटाइल और गारमेंट डेवलपमेंट।",
  "View Details": "विवरण देखें",
  "Request Quote": "कोटेशन माँगें",
  "View T-Shirts manufacturing details": "टी-शर्ट निर्माण विवरण देखें",
  "Request a manufacturing quote for T-Shirts": "टी-शर्ट के लिए निर्माण कोटेशन माँगें",
  "View Polo Shirts manufacturing details": "पोलो शर्ट निर्माण विवरण देखें",
  "Request a manufacturing quote for Polo Shirts": "पोलो शर्ट के लिए निर्माण कोटेशन माँगें",
  "View Formal Shirts manufacturing details": "फॉर्मल शर्ट निर्माण विवरण देखें",
  "Request a manufacturing quote for Formal Shirts": "फॉर्मल शर्ट के लिए निर्माण कोटेशन माँगें",
  "View Uniforms and Workwear manufacturing details": "यूनिफॉर्म और वर्कवियर निर्माण विवरण देखें",
  "Request a manufacturing quote for Uniforms and Workwear": "यूनिफॉर्म और वर्कवियर के लिए निर्माण कोटेशन माँगें",
  "View Corporate Apparel manufacturing details": "कॉर्पोरेट अपैरल निर्माण विवरण देखें",
  "Request a manufacturing quote for Corporate Apparel": "कॉर्पोरेट अपैरल के लिए निर्माण कोटेशन माँगें",
  "View Sportswear manufacturing details": "स्पोर्ट्सवियर निर्माण विवरण देखें",
  "Request a manufacturing quote for Sportswear": "स्पोर्ट्सवियर के लिए निर्माण कोटेशन माँगें",
  "View Hoodies and Sweatshirts manufacturing details": "हुडीज़ और स्वेटशर्ट निर्माण विवरण देखें",
  "Request a manufacturing quote for Hoodies and Sweatshirts": "हुडीज़ और स्वेटशर्ट के लिए निर्माण कोटेशन माँगें",
  "View Custom Garments manufacturing details": "कस्टम गारमेंट निर्माण विवरण देखें",
  "Request a manufacturing quote for Custom Garments": "कस्टम गारमेंट के लिए निर्माण कोटेशन माँगें",
  "T-shirt manufacturing by Ananya Fashion": "अनन्या फैशन द्वारा टी-शर्ट निर्माण",
  "Polo shirt manufacturing by Ananya Fashion": "अनन्या फैशन द्वारा पोलो शर्ट निर्माण",
  "Formal shirt manufacturing by Ananya Fashion": "अनन्या फैशन द्वारा फॉर्मल शर्ट निर्माण",
  "Uniform and workwear manufacturing by Ananya Fashion": "अनन्या फैशन द्वारा यूनिफॉर्म और वर्कवियर निर्माण",
  "Corporate apparel manufacturing by Ananya Fashion": "अनन्या फैशन द्वारा कॉर्पोरेट अपैरल निर्माण",
  "Sportswear manufacturing by Ananya Fashion": "अनन्या फैशन द्वारा स्पोर्ट्सवियर निर्माण",
  "Hoodie and sweatshirt manufacturing by Ananya Fashion": "अनन्या फैशन द्वारा हुडी और स्वेटशर्ट निर्माण",
  "Garment specialist working with fabric in a manufacturing facility": "निर्माण सुविधा में कपड़े के साथ काम करता गारमेंट विशेषज्ञ",
  "Commercial model": "वाणिज्यिक मॉडल",
  "Flexible Manufacturing Contracts": "लचीले निर्माण अनुबंध",
  "Manufacturing and supply agreements can be structured according to product type, production quantity, specifications and mutually agreed commercial terms, including per-piece or per-unit production pricing where applicable. Wholesale and retail quantities are planned according to the customer's channel requirement.": "निर्माण और सप्लाई अनुबंध प्रोडक्ट प्रकार, प्रोडक्शन मात्रा, विनिर्देश और आपसी सहमत वाणिज्यिक शर्तों के अनुसार तय किए जा सकते हैं, जिनमें लागू होने पर प्रति-पीस या प्रति-यूनिट प्रोडक्शन मूल्य शामिल है। थोक और रिटेल मात्रा ग्राहक के चैनल आवश्यकता के अनुसार तय होती है।",
  "Requirement-based pricing": "आवश्यकता-आधारित मूल्य",
  "Pricing is provided based on product specifications and order requirements.": "मूल्य प्रोडक्ट विनिर्देश और ऑर्डर आवश्यकताओं के आधार पर दिए जाते हैं।",
  "Request a Custom Quote": "कस्टम कोटेशन माँगें",
  "Per-Piece Manufacturing": "प्रति-पीस निर्माण",
  "Suitable for standardized garment and textile products with repeatable specifications.": "दोहराने योग्य विनिर्देशों वाले मानकised गारमेंट और टेक्सटाइल उत्पादों के लिए उपयुक्त।",
  "Large volume": "बड़ी मात्रा",
  "Bulk Order Contracts": "बल्क ऑर्डर अनुबंध",
  "Structured for large-volume production requirements and coordinated delivery planning.": "बड़ी मात्रा में प्रोडक्शन आवश्यकताओं और समन्वित डिलीवरी योजना के लिए संरचित।",
  "Custom Manufacturing": "कस्टम निर्माण",
  "Pricing based on specifications, materials, product complexity and production requirements.": "विनिर्देश, सामग्री, प्रोडक्ट जटिलता और प्रोडक्शन आवश्यकताओं के आधार पर मूल्य।",
  "Discuss your requirement": "अपनी आवश्यकता पर चर्चा करें",
  "Quality Is Built Into Every Production Stage": "गुणवत्ता हर प्रोडक्शन चरण में निहित है",
  "Defined quality checks throughout production, finishing and final inspection.": "प्रोडक्शन, फिनिशिंग और अंतिम जाँच के दौरान तय गुणवत्ता जाँच।",
  "Fabric / Material Inspection": "कपड़ा / सामग्री निरीक्षण",
  "Stitching & Finishing Inspection": "सिलाई और फिनिशिंग निरीक्षण",
  "Final Product Inspection": "अंतिम उत्पाद निरीक्षण",
  "Requirement-led checks": "आवश्यकता-आधारित जाँच",
  "Quality checkpoints, testing and compliance requirements are confirmed for the applicable product and contract. Website content does not claim certifications or test standards that have not been separately confirmed.": "गुणवत्ता जाँच, परीक्षण और अनुपालन आवश्यकताएँ लागू प्रोडक्ट और अनुबंध के लिए तय होती हैं। वेबसाइट सामग्री ऐसे प्रमाणन या परीक्षण मानकों का दावा नहीं करती जो अलग से पुष्ट न हों।",
  "Who We Work With": "हम किनके साथ काम करते हैं",
  "Apparel Brands": "अपैरल ब्रांड",
  "Fashion Companies": "फ़ैशन कंपनियाँ",
  "Garment Wholesalers": "गारमेंट थोक व्यापारी",
  "Uniform Suppliers": "यूनिफॉर्म सप्लायर",
  "Workwear Companies": "वर्कवियर कंपनियाँ",
  "Private Label Brands": "प्राइवेट लेबल ब्रांड",
  "Textile Brands": "टेक्सटाइल ब्रांड",
  "Corporate Apparel Companies": "कॉर्पोरेट अपैरल कंपनियाँ",
  "Sportswear Brands": "स्पोर्ट्सवियर ब्रांड",
  "Large Textile Businesses": "बड़े टेक्सटाइल व्यवसाय",
  "We support businesses that need a dependable production partner for branded, institutional or wholesale textile and apparel requirements.": "हम उन व्यवसायों का समर्थन करते हैं जिन्हें ब्रांडेड, संस्थागत या थोक टेक्सटाइल और अपैरल आवश्यकताओं के लिए भरोसेमंद प्रोडक्शन पार्टनर चाहिए।",
  "Why Businesses Choose Us": "व्यवसाय हमें क्यों चुनते हैं",
  "Contract-based production": "कॉन्ट्रैक्ट-आधारित प्रोडक्शन",
  "Manufacturing governed by agreed product and commercial requirements.": "तय प्रोडक्ट और वाणिज्यिक आवश्यकताओं के अनुसार निर्माण।",
  "Bulk order capability": "बल्क ऑर्डर क्षमता",
  "Production planning suited to large-volume sourcing requirements.": "बड़ी मात्रा की सोर्सिंग आवश्यकताओं के अनुरूप प्रोडक्शन योजना।",
  "Consistent specifications": "सामान्य विनिर्देश",
  "Approved product details remain central to the manufacturing brief.": "स्वीकृत प्रोडक्ट विवरण निर्माण ब्रीफ का केंद्र बने रहते हैं।",
  "Quality-focused approach": "गुणवत्ता-केंद्रित दृष्टिकोण",
  "Defined checks support consistent production and final inspection.": "तय जाँच सामान्य प्रोडक्शन और अंतिम निरीक्षण में सहायक होती हैं।",
  "Transparent discussions": "पारदर्शी चर्चा",
  "Pricing and order terms are aligned before production begins.": "प्रोडक्शन शुरू होने से पहले मूल्य और ऑर्डर शर्तें तय होती हैं।",
  "Professional communication": "पेशेवर संवाद",
  "A clear point of contact throughout the manufacturing cycle.": "पूरी निर्माण प्रक्रिया में स्पष्ट संपर्क बिंदु।",
  "Reliable fulfilment": "विश्वसनीय पूर्ति",
  "Planning focused on agreed quantities and delivery requirements.": "तय मात्रा और डिलीवरी आवश्यकताओं पर केंद्रित योजना।",
  "Long-term partnership": "दीर्घकालिक साझेदारी",
  "A relationship approach built on consistency and trust.": "सामान्यता और भरोसे पर आधारित संबंध दृष्टिकोण।",
  "Wholesale-ready quantities": "थोक-तैयार मात्रा",
  "Bulk supply structured for distributors, resellers and garment wholesalers.": "वितरकों, रीसेलर्स और गारमेंट थोक व्यापारियों के लिए संरचित बल्क सप्लाई।",
  "Retail-ready supply": "रिटेल-रेडी सप्लाई",
  "Quantity, packing and presentation aligned to your retail channel requirement.": "मात्रा, पैकिंग और प्रस्तुति आपकी रिटेल चैनल आवश्यकता के अनुसार।",
  "About Ananya Fashion": "अनन्या फैशन के बारे में",
  "About the company": "कंपनी के बारे में",
  "Ananya Fashion is a registered textile and garment manufacturing company focused on providing contract-based production, wholesale supply and retail-ready supply solutions to established textile, apparel and clothing businesses.": "अनन्या फैशन एक पंजीकृत टेक्सटाइल और गारमेंट निर्माण कंपनी है, जो स्थापित टेक्सटाइल, अपैरल और क्लोदिंग व्यवसायों को कॉन्ट्रैक्ट-आधारित प्रोडक्शन, थोक सप्लाई और रिटेल-रेडी सप्लाई समाधान देती है।",
  "The company works with clients who need products manufactured to defined specifications, quality requirements, quantities and agreed per-piece or per-unit commercial terms. Customers may optionally provide a reference sample. Our business approach is focused on clear communication, requirement review and production planning that supports long-term partnerships.": "कंपनी ऐसे ग्राहकों के साथ काम करती है जिन्हें तय विनिर्देश, गुणवत्ता आवश्यकताओं, मात्रा और सहमत प्रति-पीस या प्रति-यूनिट वाणिज्यिक शर्तों के अनुसार उत्पाद बनाए जाने की आवश्यकता होती है। ग्राहक वैकल्पिक रूप से संदर्भ सैंपल दे सकते हैं। हमारा दृष्टिकोण स्पष्ट संवाद, आवश्यकता समीक्षा और प्रोडक्शन योजना पर केंद्रित है, जो दीर्घकालिक साझेदारी का समर्थन करता है।",
  "Manufacturing focus": "निर्माण पर केन्द्रित",
  "Production aligned to client-approved product briefs.": "ग्राहक-स्वीकृत प्रोडक्ट ब्रीफ के अनुसार प्रोडक्शन।",
  "Quality commitment": "गुणवत्ता प्रतिबद्धता",
  "Defined checks from material review to final inspection.": "सामग्री समीक्षा से अंतिम निरीक्षण तक तय जाँच।",
  "Partnership approach": "साझेदारी दृष्टिकोण",
  "Reliable communication and transparent commercial discussions.": "भरोसेमंद संवाद और पारदर्शी वाणिज्यिक चर्चा।",
  "Flexible supply": "लचीली सप्लाई",
  "Contract, wholesale and retail requirements planned as per customer need.": "ग्राहक की जरूरत के अनुसार कॉन्ट्रैक्ट, थोक और रिटेल आवश्यकताओं की योजना।",
  "Learn More About Us": "हमारे बारे में और जानें",
  "Owner, Ananya Fashion": "स्वामी, अनन्या फैशन",
  "Umesh Kushwaha": "उमेश कुशवाहा",
  "Tell Us About Your Manufacturing Requirement": "अपनी निर्माण आवश्यकता बताएँ",
  "Share the product, estimated quantity, supply requirement and key specifications. If you have an existing sample, you may optionally upload its photo or attach the sample details for review.": "प्रोडक्ट, अनुमानित मात्रा, सप्लाई आवश्यकता और मुख्य विनिर्देश साझा करें। यदि आपके पास मौजूदा सैंपल है, तो आप वैकल्पिक रूप से उसकी फ़ोटो अपलोड कर सकते हैं या समीक्षा के लिए विवरण जोड़ सकते हैं।",
  "Your form opens a pre-filled WhatsApp message to our manufacturing team. Attach reference files there before sending.": "आपका फ़ॉर्म हमारी निर्माण टीम के लिए पहले से भरा WhatsApp संदेश खोलता है। भेजने से पहले वहाँ संदर्भ फ़ाइलें संलग्न करें।",
  "Full Name": "पूरा नाम",
  "Company Name": "कंपनी का नाम",
  "Business Email": "व्यावसायिक ईमेल",
  "Phone Number": "फ़ोन नंबर",
  "Product Category": "प्रोडक्ट श्रेणी",
  "Supply Requirement": "सप्लाई आवश्यकता",
  "Product / Garment Type": "प्रोडक्ट / गारमेंट प्रकार",
  "Estimated Quantity": "अनुमानित मात्रा",
  "Required Production Timeline": "आवश्यक प्रोडक्शन समय-सीमा",
  "Additional Specifications": "अतिरिक्त विनिर्देश",
  "Upload Sample Photo / Specification File": "सैंपल फ़ोटो / विनिर्देश फ़ाइल अपलोड करें",
  "PDF, DOC, DOCX, XLS, XLSX, JPG or PNG": "PDF, DOC, DOCX, XLS, XLSX, JPG या PNG",
  "No file selected": "कोई फ़ाइल चयनित नहीं",
  "I confirm that the information provided is for a business manufacturing enquiry.": "मैं पुष्टि करता/करती हूँ कि दी गई जानकारी व्यावसायिक निर्माण पूछताछ के लिए है।",
  "By submitting, your enquiry will open in WhatsApp for direct review and sending. Please do not include sensitive personal or financial information.": "सबमिट करने पर आपकी पूछताछ सीधे समीक्षा और भेजने के लिए WhatsApp में खुलेगी। कृपया संवेदनशील व्यक्तिगत या वित्तीय जानकारी न शामिल करें।",
  "Submit Manufacturing Inquiry": "निर्माण पूछताछ भेजें",
  "Chat for a quote": "कोटेशन के लिए चैट करें",
  "Business hours": "व्यावसायिक समय",
  "Phone": "फ़ोन",
  "Email": "ईमेल",
  "Office address": "कार्यालय का पता",
  "Questions may be sent by calling": "प्रश्न भेजने के लिए कॉल करें",
  "or email": "या ईमेल करें",
  "for an initial manufacturing discussion.": "प्रारंभिक निर्माण चर्चा के लिए।",
  "Questions about this policy, call": "इस नीति से जुड़े प्रश्नों के लिए कॉल करें",
  "Need a Quotation for Your Product?": "अपने प्रोडक्ट के लिए कोटेशन चाहिए?",
  "Need a product not shown here?": "क्या आपको यहाँ न दिखाया गया प्रोडक्ट चाहिए?",
  "Request details for another textile or garment category from our contract manufacturing team.": "हमारी कॉन्ट्रैक्ट निर्माण टीम से अन्य टेक्सटाइल या गारमेंट श्रेणी के विवरण माँगें।",
  "Request Bulk Quote": "बल्क कोटेशन माँगें",
  "Related manufacturing": "संबंधित निर्माण",
  "Explore Other Product Capabilities": "अन्य प्रोडक्ट क्षमताएँ देखें",
  "Discuss this product with our team": "हमारी टीम से इस प्रोडक्ट पर चर्चा करें",
  "Request Sample": "सैंपल माँगें",
  "Request a manufacturing quote for": "निर्माण कोटेशन माँगें",
  "Request a sample for": "सैंपल माँगें",
  "Product Details": "प्रोडक्ट विवरण",
  "Product visuals": "प्रोडक्ट चित्र",
  "Product-category visuals on this website are illustrative unless Ananya Fashion identifies them as client-approved manufacturing samples. Final product appearance depends on the approved specification, materials, trims, production method and bulk quantity.": "इस वेबसाइट पर प्रोडक्ट-श्रेणी चित्र केवल दृश्य उदाहरण हैं, जब तक अनन्या फैशन उन्हें ग्राहक-स्वीकृत निर्माण सैंपल के रूप में स्पष्ट रूप से निर्दिष्ट न करे। अंतिम उत्पाद का रूप स्वीकृत विनिर्देश, सामग्री, ट्रिम, प्रोडक्शन विधि और बल्क मात्रा पर निर्भर है।",
  "Available customisation": "उपलब्ध अनुकूलन",
  "Fabric / material options": "कपड़ा / सामग्री विकल्प",
  "Size options": "आकार विकल्प",
  "Minimum quantity": "न्यूनतम मात्रा",
  "Production details": "प्रोडक्शन विवरण",
  "Share your product type, estimated quantity, preferred fabric, size range, branding requirements and delivery timeline for commercial and production review.": "वाणिज्यिक और प्रोडक्शन समीक्षा के लिए अपना प्रोडक्ट प्रकार, अनुमानित मात्रा, पसंदीदा कपड़ा, आकार रेंज, ब्रांडिंग आवश्यकताएँ और डिलीवरी समय-सीमा साझा करें।",
  "Request a manufacturing quote for your product with Ananya Fashion. Please share product type, quantity, fabric, sizes, branding, delivery location and timeline.": "अनन्या फैशन के साथ अपने प्रोडक्ट के लिए निर्माण कोटेशन माँगें। कृपया प्रोडक्ट प्रकार, मात्रा, कपड़ा, आकार, ब्रांडिंग, डिलीवरी स्थान और समय-सीमा साझा करें।",
  "Need a product not shown here? Request details for another textile or garment category from our contract manufacturing team.": "क्या आपको यहाँ न दिखाया गया प्रोडक्ट चाहिए? हमारी कॉन्ट्रैक्ट निर्माण टीम से अन्य टेक्सटाइल या गारमेंट श्रेणी के विवरण माँगें।",
  "Privacy Policy": "गोपनीयता नीति",
  "Last updated: 25 September 2026": "अंतिम अपडेट: 25 सितंबर 2026",
  "Terms & Conditions": "नियम और शर्तें",
  "This policy explains how business enquiry information is handled when you use the Ananya Fashion website and Request for Quotation form.": "यह नीति बताती है कि अनन्या फैशन वेबसाइट और कोटेशन अनुरोध फ़ॉर्म का उपयोग करने पर व्यावसायिक पूछताछ की जानकारी को कैसे संभाला जाता है।",
  "This policy may be updated when the website or its enquiry process changes. The latest update date will appear on this page.": "वेबसाइट या इसकी पूछताछ प्रक्रिया बदलने पर यह नीति अपडेट हो सकती है। नवीनतम अपडेट तिथि इस पृष्ठ पर दिखाई देगी।",
  "Information you provide": "आपकी दी गई जानकारी",
  "When you submit a manufacturing enquiry, you may provide your name, company, business email, phone number, product requirements, estimated quantity, timeline, specifications and an optional reference file.": "निर्माण पूछताछ भेजते समय आप अपना नाम, कंपनी, व्यावसायिक ईमेल, फ़ोन नंबर, प्रोडक्ट आवश्यकताएँ, अनुमानित मात्रा, समय-सीमा, विनिर्देश और एक वैकल्पिक संदर्भ फ़ाइल दे सकते हैं।",
  "Use of business information": "व्यावसायिक जानकारी का उपयोग",
  "Enquiry information is intended to review your manufacturing requirement, prepare a quotation, respond to questions and discuss potential business arrangements. Please do not send sensitive personal, financial or password information through the form.": "पूछताछ की जानकारी आपकी निर्माण आवश्यकता की समीक्षा, कोटेशन तैयार करने, प्रश्नों के उत्तर देने और संभावित व्यावसायिक व्यवस्था पर चर्चा के लिए है। कृपया फ़ॉर्म के माध्यम से संवेदनशील व्यक्तिगत, वित्तीय या पासवर्ड जानकारी न भेजें।",
  "Information is not sold. Information may be shared only as reasonably necessary to evaluate or fulfil a legitimate manufacturing enquiry, subject to applicable law and confidentiality obligations.": "जानकारी बेची नहीं जाती। जानकारी केवल उचित रूप से आवश्यक होने पर किसी वैध निर्माण पूछताछ के मूल्यांकन या पूर्ति के लिए साझा की जा सकती है, और यह लागू कानून तथा गोपनीयता दायित्वों के अधीन है।",
  "Website analytics and cookies": "वेबसाइट एनालिटिक्स और कुकीज़",
  "This website does not currently include a company-specific analytics or advertising cookie system. If analytics are added in future, this policy should be updated before the service is enabled.": "इस वेबसाइट में वर्तमान में कंपनी-विशिष्ट एनालिटिक्स या विज्ञापन कुकी सिस्टम नहीं है। यदि भविष्य में एनालिटिक्स जोड़ा जाता है, तो सेवा सक्षम होने से पहले इस नीति को अपडेट किया जाना चाहिए।",
  "WhatsApp and external services": "व्हाट्सएप और बाहरी सेवाएँ",
  "The website prepares your information in a pre-filled WhatsApp message. The website does not store the form or uploaded file on a server. WhatsApp opens only after you review and send the message, and WhatsApp's own privacy terms apply to that conversation. If you select a reference file, attach it manually in WhatsApp.": "वेबसाइट आपकी जानकारी एक पहले से भरे WhatsApp संदेश में तैयार करता है। वेबसाइट फ़ॉर्म या अपलोड की गई फ़ाइल को सर्वर पर संग्रह नहीं करता। संदेश की समीक्षा और भेजने के बाद ही WhatsApp खुलता है, और उस बातचीत पर WhatsApp की अपनी गोपनीयता शर्तें लागू होती हैं। यदि आप संदर्भ फ़ाइल चुनते हैं, तो उसे WhatsApp में स्वयं संलग्न करें।",
  "Data retention and security": "डेटा प्रतिधारण और सुरक्षा",
  "Enquiry information is used for the enquiry and is not retained by this website after the message is prepared. Access to your device, WhatsApp account and files remains under your control and is subject to your own security practices.": "पूछताछ की जानकारी का उपयोग पूछताछ के लिए होता है और संदेश तैयार होने के बाद यह वेबसाइट इसे प्रतिधारित नहीं करता। आपके डिवाइस, WhatsApp खाते और फ़ाइलों तक पहुँच आपके नियंत्रण में रहती है और आपकी अपनी सुरक्षा प्रथाओं के अधीन है।",
  "Your rights and choices": "आपके अधिकार और विकल्प",
  "You may choose not to provide optional information, and you may ask us to correct or delete information that has already been shared by contacting us. We respond to reasonable requests in line with applicable law.": "आप वैकल्पिक जानकारी देने से इनकार कर सकते हैं, और हमसे संपर्क करके साझा की गई जानकारी में सुधार या हटाने का अनुरोध कर सकते हैं। हम लागू कानून के अनुरूप उचित अनुरोधों का उत्तर देते हैं।",
  "Policy updates": "नीति अपडेट",
  "Limitation and governing principles": "सीमा और शासी सिद्धांत",
  "To the extent permitted by law, website use is at the user's risk. Any manufacturing engagement is governed by the written agreement accepted by both parties and applicable laws of India.": "कानून की अनुमति सीमा तक, वेबसाइट का उपयोग उपयोगकर्ता के जोखिम पर है। कोई भी निर्माण व्यवसाय दोनों पक्षों द्वारा स्वीकृत लिखित समझौते और भारत के लागू कानूनों से शासित होता है।",
  "These terms apply to the use of the Ananya Fashion website and to preliminary manufacturing enquiries submitted through it.": "ये शर्तें अनन्या फैशन वेबसाइट के उपयोग और इसके माध्यम से भेजे गए प्रारंभिक निर्माण पूछताछ पर लागू होती हैं।",
  "Website information": "वेबसाइट जानकारी",
  "Website content is provided for general information about contract textile and garment manufacturing capabilities. Product examples, processes and available options may change and are confirmed against the specific manufacturing requirement.": "वेबसाइट सामग्री कॉन्ट्रैक्ट टेक्सटाइल और गारमेंट निर्माण क्षमताओं की सामान्य जानकारी के लिए दी जाती है। प्रोडक्ट उदाहरण, प्रक्रियाएँ और उपलब्ध विकल्प बदल सकते हैं और विशिष्ट निर्माण आवश्यकता के अनुसार तय होते हैं।",
  "Enquiries and quotations": "पूछताछ और कोटेशन",
  "An online or WhatsApp enquiry is a request for review, not an order or a binding quotation. Pricing, minimum order quantity, production method, materials, lead time, payment terms, delivery terms and quality scope are confirmed only in a written commercial agreement or approved quotation.": "ऑनलाइन या WhatsApp पूछताछ समीक्षा का अनुरोध है, कोई ऑर्डर या बाध्यकारी कोटेशन नहीं। मूल्य, न्यूनतम ऑर्डर मात्रा, प्रोडक्शन विधि, सामग्री, लीड टाइम, भुगतान शर्तें, डिलीवरी शर्तें और गुणवत्ता का दायरा केवल लिखित वाणिज्यिक समझौते या स्वीकृत कोटेशन में तय होते हैं।",
  "Client responsibilities": "ग्राहक की ज़िम्मेदारियाँ",
  "For manufacturing review, the client should provide accurate product requirements, reference materials, measurements, quantities, delivery expectations and any required compliance information. Changes after approval may affect feasibility, price and timing.": "निर्माण समीक्षा के लिए ग्राहक को सटीक प्रोडक्ट आवश्यकताएँ, संदर्भ सामग्री, माप, मात्रा, डिलीवरी अपेक्षाएँ और आवश्यक अनुपालन जानकारी देनी चाहिए। मंज़ूरी के बाद बदलाव व्यवहार्यता, मूल्य और समय को प्रभावित कर सकते हैं।",
  "Intellectual property": "बौद्धिक संपत्ति",
  "Client-owned designs, trademarks, specifications and reference materials remain the property of the client. Reproduction or use requires the relevant rights. Ananya Fashion content and branding may not be copied or reused without permission, except as permitted by law.": "ग्राहक के स्वामित्व वाले डिज़ाइन, ट्रेडमार्क, विनिर्देश और संदर्भ सामग्री ग्राहक की संपत्ति रहती है। उनका पुनरुत्पादन या उपयोग संबंधित अधिकारों की आवश्यकता होता है। कानून की अनुमति के सिवाय, अनन्या फैशन की सामग्री और ब्रांडिंग की अनुमति के बिना नकल या पुनः उपयोग नहीं किया जा सकता।",
  "We do not claim certifications or compliance standards unless they are confirmed for the specific product and scope.": "हम प्रमाणन या अनुपालन मानकों का दावा नहीं करते, जब तक वे विशिष्ट प्रोडक्ट और दायरे के लिए पुष्ट न हों।",
  "Quality certifications": "गुणवत्ता प्रमाणन",
  "Quality checks, testing, certifications and compliance requirements are confirmed for the applicable product and contract. Website content does not claim certifications or test standards that have not been separately confirmed.": "गुणवत्ता जाँच, परीक्षण, प्रमाणन और अनुपालन आवश्यकताएँ लागू प्रोडक्ट और अनुबंध के लिए तय होती हैं। वेबसाइट सामग्री ऐसे प्रमाणन या परीक्षण मानकों का दावा नहीं करती जो अलग से पुष्ट न हों।",
  "Commercial Agreement": "वाणिज्यिक समझौता",
  "Final feasibility, material selection, minimum order quantity, production method and commercial terms are shared after specification review. Quantity, per-piece or per-unit pricing, timelines and terms are agreed.": "विनिर्देश समीक्षा के बाद अंतिम व्यवहार्यता, सामग्री चयन, न्यूनतम ऑर्डर मात्रा, प्रोडक्शन विधि और वाणिज्यिक शर्तें साझा की जाती हैं। मात्रा, प्रति-पीस या प्रति-यूनिट मूल्य, समय-सीमा और शर्तें तय होती हैं।",
  "Products and delivery": "उत्पाद और डिलीवरी",
  "Products are prepared and delivered according to the agreed process. Production begins according to the approved product specification. Finished goods are checked against the agreed quality standards. Packing and delivery are as agreed.": "उत्पाद तय प्रक्रिया के अनुसार तैयार और सुपुर्द किए जाते हैं। प्रोडक्शन स्वीकृत प्रोडक्ट विनिर्देश के अनुसार शुरू होता है। तैयार माल को तय गुणवत्ता मानकों के अनुसार जाँचा जाता है। पैकिंग और डिलीवरी तय अनुसार होती है।",
  "How the enquiry form works": "पूछताछ फ़ॉर्म कैसे काम करता है",
  "The website prepares your information in a pre-filled WhatsApp message. The website does not store the form or uploaded file on a server. If you select a reference file, attach it manually in WhatsApp.": "वेबसाइट आपकी जानकारी एक पहले से भरे WhatsApp संदेश में तैयार करता है। वेबसाइट फ़ॉर्म या अपलोड की गई फ़ाइल को सर्वर पर संग्रह नहीं करता। यदि आप संदर्भ फ़ाइल चुनते हैं, तो उसे WhatsApp में स्वयं संलग्न करें।",
  "Direct business enquiry": "प्रत्यक्ष व्यावसायिक पूछताछ",
  "Share your product requirements, estimated quantity and specifications with our team. We will review your requirement and discuss the appropriate manufacturing and commercial model.": "अपनी प्रोडक्ट आवश्यकताएँ, अनुमानित मात्रा और विनिर्देश हमारी टीम के साथ साझा करें। हम आपकी आवश्यकता की समीक्षा करेंगे और उपयुक्त निर्माण और वाणिज्यिक मॉडल पर चर्चा करेंगे।",
  "Contact details": "संपर्क विवरण",
  "Address: [Office / Facility Address]": "पता: [कार्यालय / सुविधा पता]",
  "Email: [Business Email]": "ईमेल: [व्यावसायिक ईमेल]",
  "Hours: [Business Hours]": "समय: [व्यावसायिक समय]",
  "Select category": "श्रेणी चुनें",
  "Select supply type": "सप्लाई प्रकार चुनें",
  "Select sample availability": "सैंपल उपलब्धता चुनें",
  "Customer can provide a sample": "ग्राहक सैंपल दे सकता है",
  "Sample available on request": "सैंपल अनुरोध पर उपलब्ध",
  "No sample available": "कोई सैंपल उपलब्ध नहीं",
  "Your full name": "आपका पूरा नाम",
  "Company or brand name": "कंपनी या ब्रांड का नाम",
  "name@company.com": "name@company.com",
  "e.g. 5,000 pieces": "जैसे 5,000 पीस",
  "e.g. 8–10 weeks": "जैसे 8–10 सप्ताह",
  "e.g. Crew-neck cotton T-shirt": "जैसे क्रू-नेक कॉटन टी-शर्ट",
  "Describe the product, order model, delivery location and any other key requirements": "प्रोडक्ट, ऑर्डर मॉडल, डिलीवरी स्थान और अन्य मुख्य आवश्यकताओं का वर्णन करें",
  "Fabric, GSM, sizes, colours, branding, packaging, quality requirements or other details": "कपड़ा, GSM, आकार, रंग, ब्रांडिंग, पैकिंग, गुणवत्ता आवश्यकताएँ या अन्य विवरण",
  "Filter products": "उत्पाद फ़िल्टर करें",
  "Manufacturing categories": "निर्माण श्रेणियाँ",
  "Manufacturing strengths": "निर्माण शक्तियाँ",
  "has been added to your enquiry. Please complete the remaining requirements.": "आपकी पूछताछ में जोड़ दिया गया है। कृपया शेष आवश्यकताएँ पूरी करें।",
  "Hello Ananya Fashion, I would like to request a textile or garment manufacturing quote.": "नमस्ते अनन्या फैशन, मैं टेक्सटाइल या गारमेंट निर्माण कोटेशन माँगना चाहता/चाहती हूँ।",
  "Full Name:": "पूरा नाम:",
  "Company:": "कंपनी:",
  "Business Email:": "व्यावसायिक ईमेल:",
  "Phone:": "फ़ोन:",
  "Product Category:": "प्रोडक्ट श्रेणी:",
  "Product / Garment:": "प्रोडक्ट / गारमेंट:",
  "Estimated Quantity:": "अनुमानित मात्रा:",
  "Required Timeline:": "आवश्यक समय-सीमा:",
  "Additional Specifications:": "अतिरिक्त विनिर्देश:",
  "Reference file to attach:": "संलग्न करने के लिए संदर्भ फ़ाइल:",
  "Not provided": "प्रदान नहीं किया गया",
  "Your manufacturing enquiry is ready in WhatsApp. Review the details, attach the reference file if selected, then tap Send.": "आपकी निर्माण पूछताछ WhatsApp में तैयार है। विवरण की समीक्षा करें, चयनित संदर्भ फ़ाइल संलग्न करें, फिर भेजें दबाएँ।",
  "Your browser blocked the WhatsApp window. Allow pop-ups for this site or use the floating WhatsApp button to contact our team.": "आपके ब्राउज़र ने WhatsApp विंडो अवरुद्ध की। इस साइट के लिए पॉप-अप की अनुमति दें या हमारी टीम से संपर्क करने के लिए तैरता WhatsApp बटन का उपयोग करें।",
  "Enable JavaScript to view the product range, or contact our team for current manufacturing options.": "उत्पाद श्रृंखला देखने के लिए JavaScript सक्षम करें, या वर्तमान निर्माण विकल्पों के लिए हमारी टीम से संपर्क करें।",
  "Product details require JavaScript. Please call +91 88718 76379 for current manufacturing options and quotations.": "प्रोडक्ट विवरण के लिए JavaScript आवश्यक है। वर्तमान निर्माण विकल्पों और कोटेशन के लिए कृपया +91 88718 76379 पर कॉल करें।",
  "JavaScript is required to prepare this enquiry in WhatsApp. Please call +91 88718 76379 or enable JavaScript to submit the form.": "यह पूछताछ WhatsApp में तैयार करने के लिए JavaScript आवश्यक है। फ़ॉर्म भेजने के लिए कृपया +91 88718 76379 पर कॉल करें या JavaScript सक्षम करें।",
  "Privacy information for the Ananya Fashion contract manufacturing website.": "अनन्या फैशन कॉन्ट्रैक्ट निर्माण वेबसाइट के लिए गोपनीयता जानकारी।",
  "Website terms for Ananya Fashion textile and garment contract manufacturing enquiries.": "अनन्या फैशन टेक्सटाइल और गारमेंट कॉन्ट्रैक्ट निर्माण पूछताछ के लिए वेबसाइट शर्तें।",
  "We manufacture textile and garment products for established brands and businesses through reliable, scalable and quality-focused contract manufacturing, wholesale and retail supply solutions.": "हम स्थापित ब्रांड और व्यवसायों के लिए भरोसेमंद, बढ़ती हुई क्षमता और गुणवत्ता पर केन्द्रित कॉन्ट्रैक्ट मैन्युफैक्चरिंग, थोक और रिटेल सप्लाई समाधानों के माध्यम से टेक्सटाइल और गारमेंट उत्पाद निर्मित करते हैं।",
  "We help established textile and apparel businesses outsource production while maintaining clear specifications, agreed quality requirements and delivery commitments. Supply can be structured for contract manufacturing, wholesale distribution or retail-ready requirements.": "हम स्थापित टेक्सटाइल और अपैरल व्यवसायों को स्पष्ट विनिर्देश, तय गुणवत्ता आवश्यकताओं और डिलीवरी प्रतिबद्धताओं के साथ प्रोडक्शन आउटसोर्स करने में मदद करते हैं। सप्लाई कॉन्ट्रैक्ट मैन्युफैक्चरिंग, थोक वितरण या रिटेल-रेडी आवश्यकताओं के अनुसार तय हो सकती है।",
  "We partner with textile and apparel companies that require dependable production support. Products are manufactured against client-approved materials, specifications, quality standards and order requirements under mutually agreed contract terms.": "हम उन टेक्सटाइल और अपैरल कंपनियों के साथ काम करते हैं जिन्हें भरोसेमंद प्रोडक्शन सहायता चाहिए। उत्पाद ग्राहक-स्वीकृत सामग्री, विनिर्देश, गुणवत्ता मानकों और ऑर्डर आवश्यकताओं के अनुसार आपसी सहमत कॉन्ट्रैक्ट शर्तों के तहत बनाए जाते हैं।",
  "Supporting established brands, suppliers and apparel businesses with a clear, requirement-led production process.": "स्पष्ट, आवश्यकता-आधारित प्रोडक्शन प्रक्रिया के साथ स्थापित ब्रांड, सप्लायर और अपैरल व्यवसायों का समर्थन।",
  "Structured manufacturing support for large-volume textile and garment requirements.": "बड़ी मात्रा में टेक्सटाइल और गारमेंट आवश्यकताओं के लिए संरचित निर्माण सहायता।",
  "Production planning focused on agreed quantities, timelines and dispatch requirements.": "तय मात्रा, समय-सीमा और डिस्पैच आवश्यकताओं पर केंद्रित प्रोडक्शन योजना।",
  "Production built around your requirements": "आपकी आवश्यकताओं के अनुसार निर्माण",
  "Production capabilities": "प्रोडक्शन क्षमताएँ",
  "Manufacturing capabilities": "निर्माण क्षमताएँ",
  "Reliable Delivery": "विश्वसनीय डिलीवरी",
  "Quality Control": "गुणवत्ता नियंत्रण",
  "Quality Inspection": "गुणवत्ता निरीक्षण",
  "Quality inspection": "गुणवत्ता निरीक्षण",
  "Quality assurance": "गुणवत्ता आश्वासन",
  "Quality checkpoint": "गुणवत्ता जाँच बिंदु",
  "Facility & production units": "सुविधा और प्रोडक्शन यूनिट",
  "Monthly production capacity": "मासिक प्रोडक्शन क्षमता",
  "Fabric sourcing": "कपड़ा सोर्सिंग",
  "Fabric to finished product": "कपड़े से तैयार उत्पाद तक",
  "Material planning": "सामग्री योजना",
  "Production Monitoring": "प्रोडक्शन मॉनिटरिंग",
  "Packing & Dispatch": "पैकिंग और डिस्पैच",
  "Garment assembly": "गारमेंट असेंबली",
  "Cutting": "कटिंग",
  "Stitching": "सिलाई",
  "Finishing": "फिनिशिंग",
  "Construction": "निर्माण तकनीक",
  "Packaging": "पैकिंग",
  "Customisation": "अनुकूलन",
  "Product and branding options": "प्रोडक्ट और ब्रांडिंग विकल्प",
  "Commercial terms": "वाणिज्यिक शर्तें",
  "Business partnerships": "व्यावसायिक साझेदारी",
  "Final stage": "अंतिम चरण",
  "Sharing": "साझा करना",
  "RFQ": "RFQ",
  "Request for quotation": "कोटेशन अनुरोध",
  "Product": "प्रोडक्ट",
  "Manufacturing product": "निर्माण उत्पाद",
  "Manufacturing enquiry": "निर्माण पूछताछ",
  "Bulk manufacturing enquiry": "बल्क निर्माण पूछताछ",
  "Bulk Manufacturing": "बल्क निर्माण",
  "Bulk contract manufacturing": "बल्क कॉन्ट्रैक्ट निर्माण",
  "Contract manufacturing": "कॉन्ट्रैक्ट निर्माण",
  "Custom manufacturing": "कस्टम निर्माण",
  "Custom product manufacturing": "कस्टम प्रोडक्ट निर्माण",
  "Requirement-led manufacturing": "आवश्यकता-आधारित निर्माण",
  "Bulk orders": "बल्क ऑर्डर",
  "Bulk production": "बल्क प्रोडक्शन",
  "OEM production": "ओईएम प्रोडक्शन",
  "Private label": "प्राइवेट लेबल",
  "Wholesale supply": "थोक सप्लाई",
  "Retail supply": "रिटेल सप्लाई",
  "Per-unit contracts": "प्रति-यूनिट अनुबंध",
  "OEM / Private Label": "ओईएम / प्राइवेट लेबल",
  "Custom Textile Products": "कस्टम टेक्सटाइल उत्पाद",
  "Mixed Requirement": "मिश्रित आवश्यकता",
  "Contract Textile & Garment Manufacturing Partner": "कॉन्ट्रैक्ट टेक्सटाइल और गारमेंट निर्माण पार्टनर",
  "Contract textile & garment manufacturing from India": "भारत से कॉन्ट्रैक्ट टेक्सटाइल और गारमेंट निर्माण",
  "Requirement Discussion": "आवश्यकता चर्चा",
  "Sample / Approval": "सैंपल / मंज़ूरी",
  "Customers may optionally provide a reference sample. Samples or production specifications are reviewed and finalised.": "ग्राहक वैकल्पिक रूप से संदर्भ सैंपल दे सकते हैं। सैंपल या प्रोडक्शन विनिर्देश की समीक्षा और पुष्टि की जाती है।",
  "Product & Specification Review": "प्रोडक्ट और विनिर्देश समीक्षा",
  "Discuss Your Quality Requirements": "अपनी गुणवत्ता आवश्यकताओं पर चर्चा करें",
  "Discuss your production requirement": "अपनी प्रोडक्शन आवश्यकता पर चर्चा करें",
  "Manufacturing details are confirmed against your selected product, approved material, quantity, branding method and delivery requirement. The list below shows the typical options available for discussion.": "निर्माण विवरण आपके चयनित प्रोडक्ट, स्वीकृत सामग्री, मात्रा, ब्रांडिंग विधि और डिलीवरी आवश्यकता के अनुसार तय होते हैं। नीचे दिए गए विकल्प चर्चा के लिए सामान्य विकल्प हैं।",
  "Explore the available manufacturing options and request a requirement-based quotation for your business.": "उपलब्ध निर्माण विकल्प देखें और अपने व्यवसाय के लिए आवश्यकता-आधारित कोटेशन माँगें।",
  "Start a manufacturing conversation": "निर्माण चर्चा शुरू करें",
  "Based on approved specification": "स्वीकृत विनिर्देश के आधार पर",
  "Confirmed during product review": "प्रोडक्ट समीक्षा के दौरान पुष्ट",
  "Confirmed against applicable product requirements": "लागू प्रोडक्ट आवश्यकताओं के अनुसार पुष्ट",
  "Shared against confirmed product scope": "पुष्ट प्रोडक्ट दायरे के अनुसार साझा",
  "Inspect against approved specifications": "स्वीकृत विनिर्देशों के अनुसार निरीक्षण",
  "Details available during commercial review": "विवरण वाणिज्यिक समीक्षा के दौरान उपलब्ध",
  "Have a sourcing requirement outside these categories?": "इन श्रेणियों के बाहर सोर्सिंग आवश्यकता है?",
  "Return to Ananya Fashion": "अनन्या फैशन पर वापस जाएँ",
  "or emailing": "या ईमेल करके",
  "For questions about this policy, call": "इस नीति से जुड़े प्रश्नों के लिए कॉल करें",
  "Business email": "व्यावसायिक ईमेल",
  "Phone: +91 88718 76379": "फ़ोन: +91 88718 76379",
  "XS to 3XL": "XS से 3XL",
  "Men’s, women’s and unisex": "पुरुष, महिला और यूनिसेक्स",
  "Men’s and women’s fits": "पुरुष और महिला फ़िट",
  "Oversized and regular fits": "ओवरसाइज़ और रेगुलर फ़िट",
  "Standard menswear": "स्टैंडर्ड मेंसवेयर",
  "Extended and short sizes": "एक्सटेंडेड और शॉर्ट साइज़",
  "Standard to extended sizes": "स्टैंडर्ड से एक्सटेंडेड साइज़",
  "Standard size adaptation": "स्टैंडर्ड साइज़ अनुकूलन",
  "Custom size sets where technically feasible": "तकनीकी रूप से संभव होने पर कस्टम साइज़ सेट",
  "Custom measurement sets": "कस्टम माप सेट",
  "Custom measurements where agreed": "तय होने पर कस्टम माप",
  "Fit and grading requirements": "फ़िट और ग्रेडिंग आवश्यकताएँ",
  "Fit and grading requirements as agreed": "तय फ़िट और ग्रेडिंग आवश्यकताएँ",
  "Fit and sizing": "फ़िट और साइज़िंग",
  "Role-specific size sets": "भूमिका-विशिष्ट साइज़ सेट",
  "Measured size charts where required": "आवश्यकता होने पर माप साइज़ चार्ट",
  "Cotton": "कॉटन",
  "Cotton blends": "कॉटन मिश्रित",
  "Cotton and cotton blends": "कॉटन और कॉटन मिश्रित",
  "Cotton piqué": "कॉटन पिके",
  "Cotton fleece": "कॉटन फ़्लीस",
  "Premium cotton": "प्रीमियम कॉटन",
  "Polyester blends": "पॉलिएस्टर मिश्रित",
  "Polyester fleece": "पॉलिएस्टर फ़्लीस",
  "Polyester performance fabrics": "पॉलिएस्टर परफ़ॉर्मेंस कपड़े",
  "Performance blends": "परफ़ॉर्मेंस मिश्रित",
  "Formal woven fabrics": "फॉर्मल वोवन कपड़े",
  "Stretch fabrics": "स्ट्रेच कपड़े",
  "Workwear fabrics": "वर्कवियर कपड़े",
  "Other approved materials": "अन्य स्वीकृत सामग्री",
  "Approved alternatives": "स्वीकृत विकल्प",
  "Client-specified materials": "ग्राहक द्वारा तय सामग्री",
  "Fabrics selected for product use": "प्रोडक्ट उपयोग के लिए चुने गए कपड़े",
  "Trims and accessories as briefed": "ब्रीफ के अनुसार ट्रिम और सामग्री",
  "Material and trim sourcing support": "सामग्री और ट्रिम सोर्सिंग सहायता",
  "Logo and graphic placement": "लोगो और ग्राफ़िक placement",
  "Logo and emblem application": "लोगो और एम्ब्लेम लगाना",
  "Logo and monogram options": "लोगो और मोनोग्राम विकल्प",
  "Colour and size range": "रंग और आकार रेंज",
  "Colour blocking": "कलर ब्लॉकिंग",
  "Collar and cuff details": "कॉलर और कफ़ विवरण",
  "Collar and cuff styles": "कॉलर और कफ़ स्टाइल",
  "Neck, sleeve and hem styles": "गर्दन, आस्तीन और हेम स्टाइल",
  "Placket and button options": "प्लैकेट और बटन विकल्प",
  "Embroidery and branding": "एम्ब्रॉइडरी और ब्रांडिंग",
  "Embroidery, print or patches": "एम्ब्रॉइडरी, प्रिंट या पैच",
  "Hood, zipper and rib styles": "हुड, ज़िपर और रिब स्टाइल",
  "Role-based colour combinations": "भूमिका-आधारित रंग संयोजन",
  "Company and department logos": "कंपनी और विभाग लोगो",
  "Pockets and reinforcement details": "जेब और मज़बूती विवरण",
  "Name labels and packaging": "नाम लेबल और पैकिंग",
  "Branded labels and packaging": "ब्रांडेड लेबल और पैकिंग",
  "Branded finishing options": "ब्रांडेड फिनिशिंग विकल्प",
  "Custom labels and packaging": "कस्टम लेबल और पैकिंग",
  "Custom colour combinations": "कस्टम रंग संयोजन",
  "Custom colour and packaging": "कस्टम रंग और पैकिंग",
  "Packaging and labels": "पैकिंग और लेबल",
  "Size and colour allocation": "आकार और रंग आवंटन",
  "Coordinated product ranges": "समन्वित प्रोडक्ट रेंज",
  "Custom woven or printed labels": "कस्टम वोवन या प्रिंटेड लेबल",
  "Interior and exterior labels": "आंतरिक और बाहरी लेबल",
  "Product and pattern development": "प्रोडक्ट और पैटर्न डेवलपमेंट",
  "Sampling and revision stages": "सैंपलिंग और संशोधन चरण",
  "Graphic and logo placement": "ग्राफ़िक और लोगो placement",
  "Fit and panel details": "फ़िट और पैनल विवरण",
  "Specification, fabric, quantity, decoration method and delivery requirements confirmed before production.": "प्रोडक्शन से पहले विनिर्देश, कपड़ा, मात्रा, सजावट विधि और डिलीवरी आवश्यकताओं की पुष्टि की जाती है।",
  "Fit, fabric GSM, colour, branding and bulk order requirements reviewed before sampling or production.": "सैंपलिंग या प्रोडक्शन से पहले फ़िट, कपड़े का GSM, रंग, ब्रांडिंग और बल्क ऑर्डर आवश्यकताओं की समीक्षा की जाती है।",
  "Measurement chart, fabric, trims, branding and delivery plan are confirmed during specification review.": "विनिर्देश समीक्षा के दौरान माप चार्ट, कपड़ा, ट्रिम, ब्रांडिंग और डिलीवरी योजना की पुष्टि की जाती है।",
  "Application, roles, quantities, fabric performance, branding and delivery requirements reviewed for each order.": "प्रत्येक ऑर्डर के लिए उपयोग, भूमिकाएँ, मात्रा, कपड़े की performance, ब्रांडिंग और डिलीवरी आवश्यकताओं की समीक्षा की जाती है।",
  "Product range, measurements, branding method, packed quantity and delivery schedule are agreed upfront.": "प्रोडक्ट रेंज, माप, ब्रांडिंग विधि, पैक की गई मात्रा और डिलीवरी समय-सीमा पहले ही तय कर ली जाती है।",
  "Intended use, fabric, fit, decoration, quantity and quality expectations confirmed before production.": "प्रोडक्शन से पहले अभिप्रायित उपयोग, कपड़ा, फ़िट, सजावट, मात्रा और गुणवत्ता अपेक्षाओं की पुष्टि की जाती है।",
  "Fabric weight, construction, fit, branding, quantity and target delivery agreed before production.": "प्रोडक्शन से पहले कपड़े का वज़न, निर्माण, फ़िट, ब्रांडिंग, मात्रा और लक्ष्य डिलीवरी तय होती है।",
  "Custom development is assessed for feasibility, material availability, quantity, timeline and commercial terms.": "कस्टम डेवलपमेंट का आकलन व्यवहार्यता, सामग्री उपलब्धता, मात्रा, समय-सीमा और वाणिज्यिक शर्तों के अनुसार किया जाता है।",
  "Quantity, per-piece or per-unit pricing, timelines and terms are agreed.": "मात्रा, प्रति-पीस या प्रति-यूनिट मूल्य, समय-सीमा और शर्तें तय होती हैं।",
  "Products are prepared and delivered according to the agreed process.": "उत्पाद तय प्रक्रिया के अनुसार तैयार और सुपुर्द किए जाते हैं।",
  "Custom garment manufacturing process by Ananya Fashion": "अनन्या फैशन द्वारा कस्टम गारमेंट निर्माण प्रक्रिया",
  "Fabric quality inspection inside a garment facility": "गारमेंट सुविधा के भीतर कपड़े की गुणवत्ता निरीक्षण",
  "Industrial textile machinery and fabric production detail": "औद्योगिक टेक्सटाइल मशीनरी और कपड़ा प्रोडक्शन विवरण",
  "Manufacturing product details from Ananya Fashion": "अनन्या फैशन से निर्माण उत्पाद विवरण",
  "Rolls of textile fabric in warm and neutral tones": "गर्म और उदासीन रंगों में टेक्सटाइल कपड़े की रोल",
  "Workers operating an industrial garment production facility": "औद्योगिक गारमेंट प्रोडक्शन सुविधा में काम करते श्रमिक",
  "Ananya Fashion | Textile & Garment Contract Manufacturer": "अनन्या फैशन | टेक्सटाइल और गारमेंट कॉन्ट्रैक्ट निर्माता",
  "Privacy Policy | Ananya Fashion": "गोपनीयता नीति | अनन्या फैशन",
  "Terms & Conditions | Ananya Fashion": "नियम और शर्तें | अनन्या फैशन",
  "T-Shirts Manufacturing | Ananya Fashion": "T-Shirts निर्माण | अनन्या फैशन",
  "Polo Shirts Manufacturing | Ananya Fashion": "Polo Shirts निर्माण | अनन्या फैशन",
  "Formal Shirts Manufacturing | Ananya Fashion": "Formal Shirts निर्माण | अनन्या फैशन",
  "Uniforms & Workwear Manufacturing | Ananya Fashion": "Uniforms & Workwear निर्माण | अनन्या फैशन",
  "Corporate Apparel Manufacturing | Ananya Fashion": "Corporate Apparel निर्माण | अनन्या फैशन",
  "Sportswear Manufacturing | Ananya Fashion": "Sportswear निर्माण | अनन्या फैशन",
  "Hoodies & Sweatshirts Manufacturing | Ananya Fashion": "Hoodies & Sweatshirts निर्माण | अनन्या फैशन",
  "Custom Garments Manufacturing | Ananya Fashion": "Custom Garments निर्माण | अनन्या फैशन",
};

const translationsHinglish = {
  "Skip to main content": "Main content par jaayein",
  "Ananya Fashion home": "Ananya Fashion ghar",
  "Select language": "Bhasha chunein",
  "Open navigation": "Navigation kholein",
  "Close navigation": "Navigation band karein",
  "Back to top": "Upar jaayein",
  "Breadcrumb": "Rasta",
  "Primary navigation": "Main menu",
  "Mobile navigation": "Mobile menu",
  "Chat with Ananya Fashion on WhatsApp": "WhatsApp par Ananya Fashion se baat karein",
  "Home": "Ghar",
  "About Us": "Hamare baare mein",
  "About": "Parichay",
  "Contact": "Sampark",
  "Contact Our Team": "Hamari team se sampark karein",
  "Products": "Utpad",
  "Capabilities": "Kshamataayein",
  "Quality": "Gunavata",
  "Industries": "Udyog",
  "Business": "Vyapar",
  "Quick Links": "Quick links",
  "Leadership": "Nirdeshak",
  "Manufacturing Expertise Built for Business": "Business ke liye manufacturing expertise",
  "Ananya Fashion. All Rights Reserved.": "Ananya Fashion. Sabhi adhikar surakshit.",
  "Back to Website": "Website par wapas jaayein",
  "Built for business manufacturing": "Business manufacturing ke liye taiyaar",
  "Your Trusted Partner for": "Aapka bharosemand saathi",
  "Textile & Garment": "Textile aur Garment",
  "Contract Manufacturing": "Contract Manufacturing",
  "Request a Manufacturing Quote": "Manufacturing quote maangein",
  "Explore Our Capabilities": "Hamari capabilities dekhein",
  "Bulk Production": "Bulk production",
  "Quality Focused": "Quality par focused",
  "Scalable Capacity": "Badhti hui capacity",
  "Wholesale & Retail Supply": "Wholesale aur Retail supply",
  "Built to Your Product Brief": "Aapki product brief ke anusar",
  "Ananya Fashion is an India-based textile and garment contract manufacturer supporting bulk production, OEM, private-label and custom manufacturing requirements.": "Ananya Fashion India-based textile aur garment contract manufacturer hai, jo bulk production, OEM, private-label aur custom manufacturing requirements ko support karta hai.",
  "The Ananya advantage": "Ananya ka fayda",
  "A clear, professional manufacturing approach built around your product, your order and your commercial requirements.": "Aapke product, order aur commercial requirements ke aadhar par saaf aur professional manufacturing approach.",
  "One accountable production partner.": "Ek accountable production partner.",
  "Partner with confidence": "Confidence ke saath partner karein",
  "See how we work": "Dekhein hum kaise kaam karte hain",
  "A clear production journey": "Saaf production journey",
  "From Requirement to Finished Product": "Requirement se finished product tak",
  "A structured workflow keeps your brief, approvals and delivery expectations aligned at every stage.": "Ek structured workflow har stage par aapki brief, approvals aur delivery expectations ko align rakhta hai.",
  "Requirement": "Zaroorat",
  "Product and order needs shared": "Product aur order ki needs share ki gayi",
  "Specification": "Visheshta",
  "Materials and details reviewed": "Material aur details ki review",
  "Sample": "Namuna",
  "Customer reference or prototype as required": "Requirement ke anusar customer reference ya prototype",
  "Approval": "Sankhati",
  "Final sample or brief confirmed": "Final sample ya brief confirm",
  "Production": "Utpadan",
  "Bulk manufacturing begins": "Bulk manufacturing shuru hoti hai",
  "Quality Check": "Quality check",
  "Products inspected for dispatch": "Dispatch se pehle products inspect",
  "Dispatch": "Bhejna",
  "Packing and delivery as agreed": "Taiyaar packing aur delivery",
  "One Manufacturer. Multiple Supply Requirements.": "Ek manufacturer. Kai supply requirements.",
  "Flexible supply options": "Supply ke vikalp",
  "Whether you need contract production, wholesale quantities or retail-ready supply, the manufacturing plan is structured around your product, channel, quantity and delivery requirement.": "Chahe aapko contract production, wholesale quantity ya retail-ready supply chahiye, manufacturing plan aapke product, channel, quantity aur delivery requirement ke anusar banaya jaata hai.",
  "Wholesale Supply": "Wholesale Supply",
  "Bulk quantities for distributors, resellers and garment wholesalers, packed according to the agreed supply requirement.": "Distributors, resellers aur garment wholesalers ke liye bulk quantity, taiyaar supply requirement ke anusar packed.",
  "Retail Supply": "Retail Supply",
  "Retail-ready quantities, presentation and packing can be planned as per the customer's market and channel requirement.": "Retail-ready quantity, presentation aur packing customer ke market aur channel requirement ke anusar tay ki ja sakti hai.",
  "Products manufactured to your approved specification, quality requirements, quantity and agreed commercial terms.": "Aapke approved specification, quality requirements, quantity aur agreed commercial terms ke anusar manufactured products.",
  "Optional": "Optional",
  "Customer Sample / Reference": "Customer sample / Reference",
  "Customers may provide an existing sample as a reference. We review it against the requested product, material, construction and quantity before confirming feasibility, quotations and timelines.": "Customer reference ke liye existing sample de sakte hain. Hum feasibility, quotation aur timeline confirm karne se pehle usse requested product, material, construction aur quantity ke mutabiq review karte hain.",
  "Share Your Requirement": "Apni requirement share karein",
  "Share it with our team": "Hamari team ke saath share karein",
  "Our process is organised around the approved product specification, the agreed order quantity and the client’s delivery requirement.": "Hamara process approved product specification, agreed order quantity aur client ki delivery requirement ke charon taraf organised hai.",
  "Manufacturing Requirement": "Manufacturing requirement",
  "Discuss Your Production Requirement": "Apni production requirement par charcha karein",
  "Client shares the product category, quantity, supply channel, timeline and key expectations.": "Client product category, quantity, supply channel, timeline aur key expectations share karta hai.",
  "Specification-led manufacturing": "Visheshta ke hisaab se manufacturing",
  "Fabric, dimensions, design details and quality requirements are reviewed.": "Fabric, dimensions, design details aur quality requirements ki review hoti hai.",
  "Approval and feasibility": "Approval aur feasibility",
  "Final feasibility, material selection, minimum order quantity, production method and commercial terms are shared after specification review.": "Specification review ke baad final feasibility, material selection, minimum order quantity, production method aur commercial terms share kiye jaate hain.",
  "Material check": "Saman ki jaanch",
  "Materials selected for the product brief": "Product brief ke liye chune gaye material",
  "Production begins according to the approved product specification.": "Approved product specification ke anusar production shuru hota hai.",
  "Inspection and finishing": "Inspection aur finishing",
  "Finished goods are checked against the agreed quality standards.": "Finished goods ko agreed quality standards ke khilaf check kiya jaata hai.",
  "Start a Conversation": "Baat cheet shuru karein",
  "Looking for a Reliable Textile Manufacturing Partner?": "Bharosemand textile manufacturing partner dhundh rahe hain?",
  "Request a Quote": "Quote maangein",
  "Our Manufacturing Capabilities": "Hamari manufacturing capabilities",
  "Manufacturing scope": "Manufacturing ka scope",
  "Production approach": "Utpadan ka tareeka",
  "Production based on your specifications, quantities and agreed commercial terms.": "Aapke specifications, quantity aur agreed commercial terms par based production.",
  "Order model": "Order ka model",
  "Per-piece / per-unit where applicable": "Jahan applicable ho, per-piece / per-unit",
  "Quality and compliance": "Quality aur compliance",
  "Quality requirements are agreed with the client and used as the reference throughout material review, production, finishing and final inspection.": "Quality requirements client ke saath tay hoti hain aur poore material review, production, finishing aur final inspection mein reference ki tarah use hoti hain.",
  "End-to-end support": "Poore order ke samarthan",
  "From material planning to dispatch": "Material planning se dispatch tak",
  "From requirement review to dispatch, every stage is aligned to your approved specifications and commercial agreement.": "Requirement review se dispatch tak, har stage aapke approved specifications aur commercial agreement ke anusar hota hai.",
  "Manufacturing portfolio": "Hamare utpad",
  "Our Textile & Garment Products": "Hamare Textile aur Garment products",
  "Selected product categories demonstrate our manufacturing scope for contract, wholesale and retail supply. Specifications, materials, packing and minimum quantities are confirmed for each business requirement.": "Selected product categories contract, wholesale aur retail supply ke liye hamara manufacturing scope dikhate hain. Specifications, materials, packing aur minimum quantities har business requirement ke liye confirm hoti hain.",
  "All Products": "All products",
  "Knitwear": "Knitwear",
  "Shirts": "Shirts",
  "Sportswear": "Sportswear",
  "Uniforms": "Uniforms",
  "Custom": "Aapke hisaab se",
  "Made to brief": "Brief ke anusar",
  "T-Shirts": "T-Shirts",
  "Polo Shirts": "Polo Shirts",
  "Formal Shirts": "Formal Shirts",
  "Uniforms & Workwear": "Uniforms aur Workwear",
  "Corporate Apparel": "Corporate Apparel",
  "Track Pants": "Track Pants",
  "Hoodies & Sweatshirts": "Hoodies aur Sweatshirts",
  "Custom Garments": "Custom Garments",
  "Other Textile Products": "Other textile products",
  "Bulk t-shirt manufacturing for private-label brands, merchandise programmes and distribution requirements.": "Private-label brands, merchandise programmes aur distribution requirements ke liye bulk t-shirt manufacturing.",
  "Contract polo shirt production for corporate, promotional, hospitality and private-label collections.": "Corporate, promotional, hospitality aur private-label collections ke liye contract polo shirt production.",
  "Business shirt manufacturing aligned to approved measurements, construction details and finishing requirements.": "Approved measurements, construction details aur finishing requirements ke anusar business shirt manufacturing.",
  "Bulk uniform and workwear solutions for institutions, teams, industrial groups and suppliers.": "Institutions, teams, industrial groups aur suppliers ke liye bulk uniform aur workwear solutions.",
  "Private-label corporate apparel programmes built around your approved product range and brand presentation.": "Aapke approved product range aur brand presentation ke charon taraf banaye gaye private-label corporate apparel programmes.",
  "Activewear manufacturing for performance-led collections, teamwear and branded sports apparel.": "Performance-led collections, teamwear aur branded sports apparel ke liye activewear manufacturing.",
  "Bulk sweatshirt and hoodie production for lifestyle labels, promotional ranges and seasonal collections.": "Lifestyle labels, promotional ranges aur seasonal collections ke liye bulk sweatshirt aur hoodie production.",
  "Custom textile and garment development for brands with a specific product brief, construction or branding need.": "Specific product brief, construction ya branding need wale brands ke liye custom textile aur garment development.",
  "View Details": "Details dekhein",
  "Request Quote": "Quote maangein",
  "Commercial model": "Vyapar ka model",
  "Flexible Manufacturing Contracts": "Flexible manufacturing contracts",
  "Manufacturing and supply agreements can be structured according to product type, production quantity, specifications and mutually agreed commercial terms, including per-piece or per-unit production pricing where applicable. Wholesale and retail quantities are planned according to the customer's channel requirement.": "Manufacturing aur supply agreements product type, production quantity, specifications aur dono taraf se agreed commercial terms ke anusar tay kiye ja sakte hain, jahan applicable ho per-piece ya per-unit production pricing bhi shamil hai. Wholesale aur retail quantities customer ke channel requirement ke anusar plan hoti hain.",
  "Requirement-based pricing": "Zaroorat ke hisaab se daam",
  "Pricing is provided based on product specifications and order requirements.": "Pricing product specifications aur order requirements ke basis par di jaati hai.",
  "Request a Custom Quote": "Custom quote maangein",
  "Per-Piece Manufacturing": "Per-piece manufacturing",
  "Suitable for standardized garment and textile products with repeatable specifications.": "Repeatable specifications wale standardized garment aur textile products ke liye suitable.",
  "Large volume": "Badi quantity",
  "Bulk Order Contracts": "Bulk order contracts",
  "Structured for large-volume production requirements and coordinated delivery planning.": "Large-volume production requirements aur coordinated delivery planning ke liye structured.",
  "Custom Manufacturing": "Custom manufacturing",
  "Pricing based on specifications, materials, product complexity and production requirements.": "Specifications, materials, product complexity aur production requirements ke basis par pricing.",
  "Discuss your requirement": "Apni requirement par charcha karein",
  "Quality Is Built Into Every Production Stage": "Quality har production stage mein bani hui hai",
  "Defined quality checks throughout production, finishing and final inspection.": "Production, finishing aur final inspection ke dauran defined quality checks.",
  "Fabric / Material Inspection": "Fabric / Material inspection",
  "Stitching & Finishing Inspection": "Stitching aur finishing inspection",
  "Final Product Inspection": "Final product inspection",
  "Requirement-led checks": "Zaroorat ke hisaab se check",
  "Quality checkpoints, testing and compliance requirements are confirmed for the applicable product and contract. Website content does not claim certifications or test standards that have not been separately confirmed.": "Quality checkpoints, testing aur compliance requirements applicable product aur contract ke liye confirm hoti hain. Website content aise certifications ya test standards ka daava nahi karta jo alag se confirm na hue hon.",
  "Who We Work With": "Hum kiske saath kaam karte hain",
  "Apparel Brands": "Apparel brands",
  "Fashion Companies": "Fashion companies",
  "Garment Wholesalers": "Garment wholesalers",
  "Uniform Suppliers": "Uniform suppliers",
  "Workwear Companies": "Workwear companies",
  "Private Label Brands": "Private label brands",
  "Textile Brands": "Textile brands",
  "Corporate Apparel Companies": "Corporate apparel companies",
  "Sportswear Brands": "Sportswear brands",
  "Large Textile Businesses": "Large textile businesses",
  "We support businesses that need a dependable production partner for branded, institutional or wholesale textile and apparel requirements.": "Hum un businesses ka support karte hain jinhe branded, institutional ya wholesale textile aur apparel requirements ke liye dependable production partner chahiye.",
  "Why Businesses Choose Us": "Businesses humein kyun choose karte hain",
  "Contract-based production": "Contract ke hisaab se utpadan",
  "Manufacturing governed by agreed product and commercial requirements.": "Agreed product aur commercial requirements ke mutabiq manufacturing.",
  "Bulk order capability": "Bulk order ki kshamata",
  "Production planning suited to large-volume sourcing requirements.": "Large-volume sourcing requirements ke liye suited production planning.",
  "Consistent specifications": "Ek jaisi visheshta",
  "Approved product details remain central to the manufacturing brief.": "Approved product details manufacturing brief ke center mein rehte hain.",
  "Quality-focused approach": "Gunavata par kendra",
  "Defined checks support consistent production and final inspection.": "Defined checks consistent production aur final inspection mein madad karte hain.",
  "Transparent discussions": "Khuli baat-cheet",
  "Pricing and order terms are aligned before production begins.": "Production shuru hone se pehle pricing aur order terms align kiye jaate hain.",
  "Professional communication": "Professional baat-cheet",
  "A clear point of contact throughout the manufacturing cycle.": "Poore manufacturing cycle mein clear point of contact.",
  "Reliable fulfilment": "Bharosemand poora karan",
  "Planning focused on agreed quantities and delivery requirements.": "Agreed quantities aur delivery requirements par focused planning.",
  "Long-term partnership": "Lambi saathniedi",
  "A relationship approach built on consistency and trust.": "Consistency aur trust par bana relationship approach.",
  "Wholesale-ready quantities": "Wholesale ke liye taiyaar quantity",
  "Bulk supply structured for distributors, resellers and garment wholesalers.": "Distributors, resellers aur garment wholesalers ke liye structured bulk supply.",
  "Retail-ready supply": "Retail ke liye taiyaar supply",
  "Quantity, packing and presentation aligned to your retail channel requirement.": "Quantity, packing aur presentation aapke retail channel requirement ke anusar.",
  "About Ananya Fashion": "Ananya Fashion ke baare mein",
  "About the company": "Company ke baare mein",
  "Ananya Fashion is a registered textile and garment manufacturing company focused on providing contract-based production, wholesale supply and retail-ready supply solutions to established textile, apparel and clothing businesses.": "Ananya Fashion ek registered textile aur garment manufacturing company hai, jo established textile, apparel aur clothing businesses ko contract-based production, wholesale supply aur retail-ready supply solutions deti hai.",
  "The company works with clients who need products manufactured to defined specifications, quality requirements, quantities and agreed per-piece or per-unit commercial terms. Customers may optionally provide a reference sample. Our business approach is focused on clear communication, requirement review and production planning that supports long-term partnerships.": "Company un clients ke saath kaam karti hai jinko defined specifications, quality requirements, quantities aur agreed per-piece ya per-unit commercial terms ke anusar products chahiye. Customer optional reference sample de sakte hain. Hamara business approach clear communication, requirement review aur production planning par focused hai, jo long-term partnerships ko support karta hai.",
  "Manufacturing focus": "Manufacturing par dhyan",
  "Production aligned to client-approved product briefs.": "Client-approved product briefs ke anusar production.",
  "Quality commitment": "Gunavata ka vaada",
  "Defined checks from material review to final inspection.": "Material review se final inspection tak defined checks.",
  "Partnership approach": "Saathniedi ka tareeka",
  "Reliable communication and transparent commercial discussions.": "Reliable communication aur transparent commercial discussions.",
  "Flexible supply": "Vikalp supply",
  "Contract, wholesale and retail requirements planned as per customer need.": "Contract, wholesale aur retail requirements customer ki need ke anusar planned.",
  "Learn More About Us": "Hamare baare mein aur jaanein",
  "Owner, Ananya Fashion": "Owner, Ananya Fashion",
  "Umesh Kushwaha": "Umesh Kushwaha",
  "Tell Us About Your Manufacturing Requirement": "Apni manufacturing requirement batayein",
  "Share the product, estimated quantity, supply requirement and key specifications. If you have an existing sample, you may optionally upload its photo or attach the sample details for review.": "Product, estimated quantity, supply requirement aur key specifications share karein. Agar aapke paas existing sample hai, to aap optional uski photo upload kar sakte hain ya sample details attach kar sakte hain.",
  "Your form opens a pre-filled WhatsApp message to our manufacturing team. Attach reference files there before sending.": "Aapka form hamari manufacturing team ke liye pre-filled WhatsApp message kholta hai. Bhejne se pehle wahan reference files attach karein.",
  "Full Name": "Full name",
  "Company Name": "Company ka naam",
  "Business Email": "Business email",
  "Phone Number": "Phone number",
  "Product Category": "Product category",
  "Supply Requirement": "Supply requirement",
  "Product / Garment Type": "Product / Garment type",
  "Estimated Quantity": "Estimated quantity",
  "Required Production Timeline": "Required production timeline",
  "Additional Specifications": "Additional specifications",
  "Upload Sample Photo / Specification File": "Sample photo / Specification file upload karein",
  "PDF, DOC, DOCX, XLS, XLSX, JPG or PNG": "PDF, DOC, DOCX, XLS, XLSX, JPG ya PNG",
  "No file selected": "Koi file select nahi ki",
  "I confirm that the information provided is for a business manufacturing enquiry.": "Main confirm karta/karti hoon ki di gayi information business manufacturing enquiry ke liye hai.",
  "By submitting, your enquiry will open in WhatsApp for direct review and sending. Please do not include sensitive personal or financial information.": "Submit karne par aapki enquiry WhatsApp mein khulegi jahan aap directly review aur bhej sakte hain. Kripya sensitive personal ya financial information na shamil karein.",
  "Submit Manufacturing Inquiry": "Manufacturing inquiry bhejein",
  "Chat for a quote": "Quote ke liye chat karein",
  "Business hours": "Business ka samay",
  "Phone": "Phone",
  "Email": "Email",
  "Office address": "Office ka pata",
  "Questions may be sent by calling": "Sawal bhejne ke liye call karein",
  "or email": "ya email karein",
  "for an initial manufacturing discussion.": "initial manufacturing discussion ke liye.",
  "Questions about this policy, call": "Is policy se sabhi sawalon ke liye, call karein",
  "Need a Quotation for Your Product?": "Apne product ke liye quotation chahiye?",
  "Need a product not shown here?": "Kya aapko yahan nahi dikhaya gaya product chahiye?",
  "Request details for another textile or garment category from our contract manufacturing team.": "Hamari contract manufacturing team se doosre textile ya garment category ke details maangein.",
  "Request Bulk Quote": "Bulk quote maangein",
  "Related manufacturing": "Aage padhne layak manufacturing",
  "Explore Other Product Capabilities": "Other product capabilities dekhein",
  "Discuss this product with our team": "Hamari team se is product par charcha karein",
  "Request Sample": "Sample maangein",
  "Request a manufacturing quote for": "Manufacturing quote maangein",
  "Request a sample for": "Sample maangein",
  "Product Details": "Product details",
  "Product visuals": "Product ki tasveerein",
  "Product-category visuals on this website are illustrative unless Ananya Fashion identifies them as client-approved manufacturing samples. Final product appearance depends on the approved specification, materials, trims, production method and bulk quantity.": "Is website par product-category visuals sirf illustrative hain, jab tak Ananya Fashion unhe client-approved manufacturing samples ke roop mein clearly na bataaye. Final product ka look approved specification, materials, trims, production method aur bulk quantity par depend karta hai.",
  "Available customisation": "Upyaapt badlav",
  "Fabric / material options": "Kapda / material vikalp",
  "Size options": "Size vikalp",
  "Minimum quantity": "Kam se kam quantity",
  "Production details": "Utpadan ki jaankari",
  "Share your product type, estimated quantity, preferred fabric, size range, branding requirements and delivery timeline for commercial and production review.": "Commercial aur production review ke liye apna product type, estimated quantity, preferred fabric, size range, branding requirements aur delivery timeline share karein.",
  "Privacy Policy": "Gopaniya neeti",
  "Last updated: 25 September 2026": "Aakhri update: 25 September 2026",
  "Terms & Conditions": "Shartein aur niyam",
  "This policy explains how business enquiry information is handled when you use the Ananya Fashion website and Request for Quotation form.": "Ye policy batata hai ki Ananya Fashion website aur Request for Quotation form use karne par business enquiry information kaise handle hoti hai.",
  "This policy may be updated when the website or its enquiry process changes. The latest update date will appear on this page.": "Website ya iski enquiry process badalne par ye policy update ho sakti hai. Latest update date is page par dikhega.",
  "Information you provide": "Aapki di hui information",
  "When you submit a manufacturing enquiry, you may provide your name, company, business email, phone number, product requirements, estimated quantity, timeline, specifications and an optional reference file.": "Manufacturing enquiry bhejte waqt aap apna naam, company, business email, phone number, product requirements, estimated quantity, timeline, specifications aur ek optional reference file de sakte hain.",
  "Use of business information": "Business information ka use",
  "Enquiry information is intended to review your manufacturing requirement, prepare a quotation, respond to questions and discuss potential business arrangements. Please do not send sensitive personal, financial or password information through the form.": "Enquiry information aapki manufacturing requirement ki review, quotation tay karne, sawalon ke jawab dene aur possible business arrangements par charcha ke liye hai. Kripya form ke zariye sensitive personal, financial ya password information na bhejein.",
  "Information is not sold. Information may be shared only as reasonably necessary to evaluate or fulfil a legitimate manufacturing enquiry, subject to applicable law and confidentiality obligations.": "Information bechi nahi jaati. Information sirf jitni zaroorat ho legit manufacturing enquiry evaluate ya poore karne ke liye share ki ja sakti hai, aur ye applicable law aur confidentiality obligations ke mutabiq hai.",
  "Website analytics and cookies": "Website analytics aur cookies",
  "This website does not currently include a company-specific analytics or advertising cookie system. If analytics are added in future, this policy should be updated before the service is enabled.": "Is website mein abhi company-specific analytics ya advertising cookie system nahi hai. Agar future mein analytics add kiya jaye, to service enable hone se pehle ye policy update honi chahiye.",
  "WhatsApp and external services": "WhatsApp aur external services",
  "The website prepares your information in a pre-filled WhatsApp message. The website does not store the form or uploaded file on a server. WhatsApp opens only after you review and send the message, and WhatsApp's own privacy terms apply to that conversation. If you select a reference file, attach it manually in WhatsApp.": "Website aapki information ek pre-filled WhatsApp message mein tay karta hai. Website form ya uploaded file ko server par store nahi karti. Message review aur bhejne ke baad hi WhatsApp khulta hai, aur us conversation par WhatsApp ke apne privacy terms lagte hain. Agar aap reference file select karte hain, to use WhatsApp mein khud attach karein.",
  "Data retention and security": "Data retention aur security",
  "Enquiry information is used for the enquiry and is not retained by this website after the message is prepared. Access to your device, WhatsApp account and files remains under your control and is subject to your own security practices.": "Enquiry information enquiry ke liye use hoti hai aur message tay hone ke baad ye website use retain nahi karti. Aapke device, WhatsApp account aur files ka access aapke control mein rehta hai aur aapki apni security practices ke mutabiq hai.",
  "Your rights and choices": "Aapke rights aur choices",
  "You may choose not to provide optional information, and you may ask us to correct or delete information that has already been shared by contacting us. We respond to reasonable requests in line with applicable law.": "Aap optional information dene se inkaar kar sakte hain, aur humse sampark karke already share ki gayi information mein sudhaar ya delete karne ka request kar sakte hain. Hum applicable law ke mutabiq reasonable requests ka jawab dete hain.",
  "Policy updates": "Neeti ke update",
  "Limitation and governing principles": "Limitation aur governing principles",
  "To the extent permitted by law, website use is at the user's risk. Any manufacturing engagement is governed by the written agreement accepted by both parties and applicable laws of India.": "Jitna law izaj deta hai, website ka use user ke risk par hai. Koi bhi manufacturing engagement dono parties ke sweekar kiye written agreement aur India ke applicable laws se governed hota hai.",
  "These terms apply to the use of the Ananya Fashion website and to preliminary manufacturing enquiries submitted through it.": "Ye terms Ananya Fashion website ke use aur iske zariye bheje gaye preliminary manufacturing enquiries par lagte hain.",
  "Website information": "Website ki jaankari",
  "Website content is provided for general information about contract textile and garment manufacturing capabilities. Product examples, processes and available options may change and are confirmed against the specific manufacturing requirement.": "Website content contract textile aur garment manufacturing capabilities ki general information ke liye diya gaya hai. Product examples, processes aur available options badal sakte hain aur specific manufacturing requirement ke mutabiq confirm hote hain.",
  "Enquiries and quotations": "Enquiries aur quotations",
  "An online or WhatsApp enquiry is a request for review, not an order or a binding quotation. Pricing, minimum order quantity, production method, materials, lead time, payment terms, delivery terms and quality scope are confirmed only in a written commercial agreement or approved quotation.": "Online ya WhatsApp enquiry review ka request hai, order ya binding quotation nahi. Pricing, minimum order quantity, production method, materials, lead time, payment terms, delivery terms aur quality scope sirf written commercial agreement ya approved quotation mein confirm hote hain.",
  "Client responsibilities": "Client ki zimmedari",
  "For manufacturing review, the client should provide accurate product requirements, reference materials, measurements, quantities, delivery expectations and any required compliance information. Changes after approval may affect feasibility, price and timing.": "Manufacturing review ke liye client ko accurate product requirements, reference materials, measurements, quantities, delivery expectations aur required compliance information dene chahiye. Approval ke baad changes feasibility, price aur timing ko asar kar sakte hain.",
  "Intellectual property": "Bhaagik adhikar",
  "Client-owned designs, trademarks, specifications and reference materials remain the property of the client. Reproduction or use requires the relevant rights. Ananya Fashion content and branding may not be copied or reused without permission, except as permitted by law.": "Client ke designs, trademarks, specifications aur reference materials client ki property rehte hain. Inka reproduction ya use relevant rights ke liye zaroori hai. Law ki ijazat ke ilawa, bina permission ke Ananya Fashion content aur branding copy ya reuse nahi kiye ja sakte.",
  "We do not claim certifications or compliance standards unless they are confirmed for the specific product and scope.": "Hum certifications ya compliance standards ka daava nahi karte jab tak woh specific product aur scope ke liye confirm na hon.",
  "Quality certifications": "Gunavata praman",
  "Quality checks, testing, certifications and compliance requirements are confirmed for the applicable product and contract. Website content does not claim certifications or test standards that have not been separately confirmed.": "Quality checks, testing, certifications aur compliance requirements applicable product aur contract ke liye confirm hoti hain. Website content aise certifications ya test standards ka daava nahi karta jo alag se confirm na hue hon.",
  "Commercial Agreement": "Vyapar samjhauta",
  "Final feasibility, material selection, minimum order quantity, production method and commercial terms are shared after specification review. Quantity, per-piece or per-unit pricing, timelines and terms are agreed.": "Specification review ke baad final feasibility, material selection, minimum order quantity, production method aur commercial terms share kiye jaate hain. Quantity, per-piece ya per-unit pricing, timelines aur terms tay kiye jaate hain.",
  "Products and delivery": "Products aur delivery",
  "Products are prepared and delivered according to the agreed process. Production begins according to the approved product specification. Finished goods are checked against the agreed quality standards. Packing and delivery are as agreed.": "Products agreed process ke mutabiq tay aur deliver kiye jaate hain. Production approved product specification ke anusar shuru hota hai. Finished goods ko agreed quality standards ke khilaf check kiya jaata hai. Packing aur delivery tay ke mutabiq hoti hai.",
  "How the enquiry form works": "Enquiry form kaise kaam karta hai",
  "The website prepares your information in a pre-filled WhatsApp message. The website does not store the form or uploaded file on a server. If you select a reference file, attach it manually in WhatsApp.": "Website aapki information ek pre-filled WhatsApp message mein tay karta hai. Website form ya uploaded file ko server par store nahi karti. Agar aap reference file select karte hain, to use WhatsApp mein khud attach karein.",
  "Direct business enquiry": "Seedha business puchh-taach",
  "Share your product requirements, estimated quantity and specifications with our team. We will review your requirement and discuss the appropriate manufacturing and commercial model.": "Apni product requirements, estimated quantity aur specifications hamari team ke saath share karein. Hum aapki requirement review karke suitable manufacturing aur commercial model par charcha karenge.",
  "Contact details": "Sampark ki jaankari",
  "Address: [Office / Facility Address]": "Pata: [Office / Facility Address]",
  "Email: [Business Email]": "Email: [Business Email]",
  "Hours: [Business Hours]": "Samay: [Business Hours]",
  "Select category": "Category chunein",
  "Select supply type": "Supply type chunein",
  "Select sample availability": "Sample availability chunein",
  "Customer can provide a sample": "Customer sample de sakta hai",
  "Sample available on request": "Sample request par available",
  "No sample available": "Koi sample available nahi",
  "Your full name": "Aapka full name",
  "Company or brand name": "Company ya brand ka naam",
  "e.g. 5,000 pieces": "jaise 5,000 pieces",
  "e.g. 8–10 weeks": "jaise 8–10 weeks",
  "e.g. Crew-neck cotton T-shirt": "jaise Crew-neck cotton T-shirt",
  "Describe the product, order model, delivery location and any other key requirements": "Product, order model, delivery location aur koi bhi key requirement batayein",
  "Fabric, GSM, sizes, colours, branding, packaging, quality requirements or other details": "Fabric, GSM, sizes, colours, branding, packaging, quality requirements ya koi aur details",
  "Filter products": "Utpad filter karein",
  "Manufacturing categories": "Utpad ki categories",
  "Manufacturing strengths": "Hamari taakat",
  "has been added to your enquiry. Please complete the remaining requirements.": "aapki enquiry mein add kar diya gaya hai. Kripya baaki requirements poore karein.",
  "Hello Ananya Fashion, I would like to request a textile or garment manufacturing quote.": "Hello Ananya Fashion, main textile ya garment manufacturing quote maangna chahta/chahti hoon.",
  "Full Name:": "Full name:",
  "Company:": "Company:",
  "Business Email:": "Business email:",
  "Phone:": "Phone:",
  "Product Category:": "Product category:",
  "Product / Garment:": "Utpad / Kapda:",
  "Estimated Quantity:": "Estimated quantity:",
  "Required Timeline:": "Required timeline:",
  "Additional Specifications:": "Additional specifications:",
  "Reference file to attach:": "Attach karne ke liye reference file:",
  "Not provided": "Diya nahi gaya",
  "Your manufacturing enquiry is ready in WhatsApp. Review the details, attach the reference file if selected, then tap Send.": "Aapki manufacturing enquiry WhatsApp mein tay hai. Details review karein, chuna hua reference file attach karein, phir Send dabayein.",
  "Your browser blocked the WhatsApp window. Allow pop-ups for this site or use the floating WhatsApp button to contact our team.": "Aapke browser ne WhatsApp window block kar di. Is site ke liye pop-ups allow karein ya hamari team se sampark karne ke liye floating WhatsApp button use karein.",
  "Enable JavaScript to view the product range, or contact our team for current manufacturing options.": "Product range dekhne ke liye JavaScript enable karein, ya current manufacturing options ke liye hamari team se sampark karein.",
  "Product details require JavaScript. Please call +91 88718 76379 for current manufacturing options and quotations.": "Product details ke liye JavaScript chahiye. Current manufacturing options aur quotations ke liye kripya +91 88718 76379 par call karein.",
  "JavaScript is required to prepare this enquiry in WhatsApp. Please call +91 88718 76379 or enable JavaScript to submit the form.": "Ye enquiry WhatsApp mein tay karne ke liye JavaScript chahiye. Form bhejne ke liye kripya +91 88718 76379 par call karein ya JavaScript enable karein.",
  "Privacy information for the Ananya Fashion contract manufacturing website.": "Ananya Fashion contract manufacturing website ke liye privacy information.",
  "Website terms for Ananya Fashion textile and garment contract manufacturing enquiries.": "Ananya Fashion textile aur garment contract manufacturing enquiries ke liye website terms.",
  "We manufacture textile and garment products for established brands and businesses through reliable, scalable and quality-focused contract manufacturing, wholesale and retail supply solutions.": "Hum established brands aur businesses ke liye reliable, scalable aur quality-focused contract manufacturing, wholesale aur retail supply solutions ke zariye textile aur garment products manufacture karte hain.",
  "We help established textile and apparel businesses outsource production while maintaining clear specifications, agreed quality requirements and delivery commitments. Supply can be structured for contract manufacturing, wholesale distribution or retail-ready requirements.": "Hum established textile aur apparel businesses ko clear specifications, agreed quality requirements aur delivery commitments ke saath production outsource karne mein madad karte hain. Supply contract manufacturing, wholesale distribution ya retail-ready requirements ke anusar tay ho sakti hai.",
  "We partner with textile and apparel companies that require dependable production support. Products are manufactured against client-approved materials, specifications, quality standards and order requirements under mutually agreed contract terms.": "Hum un textile aur apparel companies ke saath kaam karte hain jinhe dependable production support chahiye. Products client-approved materials, specifications, quality standards aur order requirements ke anusar dono taraf se agreed contract terms ke tahat banaye jaate hain.",
  "Supporting established brands, suppliers and apparel businesses with a clear, requirement-led production process.": "Clear, requirement-led production process ke saath established brands, suppliers aur apparel businesses ka support.",
  "Structured manufacturing support for large-volume textile and garment requirements.": "Large-volume textile aur garment requirements ke liye structured manufacturing support.",
  "Production planning focused on agreed quantities, timelines and dispatch requirements.": "Agreed quantities, timelines aur dispatch requirements par focused production planning.",
  "Production built around your requirements": "Aapki requirements ke anusar production",
  "Production capabilities": "Utpadan kshamata",
  "Manufacturing capabilities": "Manufacturing kshamata",
  "Reliable Delivery": "Reliable delivery",
  "Quality Control": "Quality control",
  "Quality Inspection": "Quality inspection",
  "Quality inspection": "Gunavata ki jaanch",
  "Quality assurance": "Gunavata ka vishwas",
  "Quality checkpoint": "Gunavata ki jaanch",
  "Quality and compliance": "Quality aur compliance",
  "Facility & production units": "Facility aur production units",
  "Monthly production capacity": "Mahine ka utpadan",
  "Fabric sourcing": "Kapda lena",
  "Fabric to finished product": "Fabric se finished product tak",
  "Material planning": "Material ki yojana",
  "Production Monitoring": "Production monitoring",
  "Packing & Dispatch": "Packing aur dispatch",
  "Garment assembly": "Kapde jodna",
  "Cutting": "Cutting",
  "Stitching": "Stitching",
  "Finishing": "Finishing",
  "Construction": "Construction",
  "Packaging": "Packaging",
  "Customisation": "Customisation",
  "Product and branding options": "Product aur branding options",
  "Commercial terms": "Vyapar ki shartein",
  "Business partnerships": "Business saathniedi",
  "Final stage": "Aakhri stage",
  "Sharing": "Sharing",
  "RFQ": "RFQ",
  "Request for quotation": "Quotation maangna",
  "Product": "Product",
  "Manufacturing product": "Manufacturing utpad",
  "Manufacturing enquiry": "Manufacturing puchh-taach",
  "Bulk manufacturing enquiry": "Bulk manufacturing puchh-taach",
  "Bulk Manufacturing": "Bulk manufacturing",
  "Bulk contract manufacturing": "Bulk contract manufacturing",
  "Contract manufacturing": "Contract manufacturing",
  "Custom manufacturing": "Custom manufacturing",
  "Custom product manufacturing": "Custom product manufacturing",
  "Requirement-led manufacturing": "Zaroorat ke hisaab se manufacturing",
  "Bulk orders": "Bulk orders",
  "Bulk production": "Bulk production",
  "OEM production": "OEM production",
  "Private label": "Private label",
  "Wholesale supply": "Wholesale supply",
  "Retail supply": "Retail supply",
  "Per-unit contracts": "Per-unit contracts",
  "OEM / Private Label": "OEM / Private label",
  "Custom Textile Products": "Custom textile products",
  "Mixed Requirement": "Mixed requirement",
  "Contract Textile & Garment Manufacturing Partner": "Contract textile aur garment manufacturing partner",
  "Contract textile & garment manufacturing from India": "India se contract textile aur garment manufacturing",
  "Requirement Discussion": "Requirement discussion",
  "Sample / Approval": "Namuna / Sankhati",
  "Customers may optionally provide a reference sample. Samples or production specifications are reviewed and finalised.": "Customer optional reference sample de sakte hain. Sample ya production specification ki review aur finalisation ki jati hai.",
  "Product & Specification Review": "Product aur specification review",
  "Discuss Your Quality Requirements": "Apni quality requirements par charcha karein",
  "Discuss your production requirement": "Apni production requirement par charcha karein",
  "Manufacturing details are confirmed against your selected product, approved material, quantity, branding method and delivery requirement. The list below shows the typical options available for discussion.": "Manufacturing details aapke selected product, approved material, quantity, branding method aur delivery requirement ke anusar tay hote hain. Neeche diye gaye options discussion ke liye typical options hain.",
  "Explore the available manufacturing options and request a requirement-based quotation for your business.": "Available manufacturing options dekhein aur apne business ke liye requirement-based quotation maangein.",
  "Start a manufacturing conversation": "Manufacturing conversation shuru karein",
  "Based on approved specification": "Approved specification ke basis par",
  "Confirmed during product review": "Product review ke dauran confirm",
  "Confirmed against applicable product requirements": "Applicable product requirements ke anusar confirm",
  "Shared against confirmed product scope": "Confirmed product scope ke anusar shared",
  "Inspect against approved specifications": "Approved specifications ke khilaf inspect",
  "Details available during commercial review": "Details commercial review ke dauran available",
  "Have a sourcing requirement outside these categories?": "In categories ke bahar sourcing requirement hai?",
  "Return to Ananya Fashion": "Ananya Fashion par wapas jaayein",
  "or emailing": "ya email karke",
  "For questions about this policy, call": "Is policy se sabhi sawalon ke liye call karein",
  "Business email": "Business email",
  "Phone: +91 88718 76379": "Phone: +91 88718 76379",
  "XS to 3XL": "XS se 3XL",
  "Men’s, women’s and unisex": "Men, women aur unisex",
  "Men’s and women’s fits": "Men aur women fits",
  "Oversized and regular fits": "Oversized aur regular fits",
  "Standard menswear": "Standard menswear",
  "Extended and short sizes": "Extended aur short sizes",
  "Standard to extended sizes": "Standard se extended sizes",
  "Standard size adaptation": "Standard size badlav",
  "Custom size sets where technically feasible": "Technically feasible ho par custom size sets",
  "Custom measurement sets": "Aapke measurement",
  "Custom measurements where agreed": "Agreed ho par custom measurements",
  "Fit and grading requirements": "Fit aur grading requirements",
  "Fit and grading requirements as agreed": "Agreed fit aur grading requirements",
  "Fit and sizing": "Fit aur sizing",
  "Role-specific size sets": "Role ke hisaab se size",
  "Measured size charts where required": "Requirement ho par measured size charts",
  "Cotton": "Cotton",
  "Cotton blends": "Cotton blends",
  "Cotton and cotton blends": "Cotton aur cotton blends",
  "Cotton piqué": "Cotton piqué",
  "Cotton fleece": "Cotton fleece",
  "Premium cotton": "Premium cotton",
  "Polyester blends": "Polyester blends",
  "Polyester fleece": "Polyester fleece",
  "Polyester performance fabrics": "Polyester performance fabrics",
  "Performance blends": "Performance blends",
  "Formal woven fabrics": "Formal woven fabrics",
  "Stretch fabrics": "Stretch fabrics",
  "Workwear fabrics": "Workwear fabrics",
  "Other approved materials": "Other approved materials",
  "Approved alternatives": "Approved vikalp",
  "Client-specified materials": "Client ke bataye material",
  "Fabrics selected for product use": "Product use ke liye chune gaye fabrics",
  "Trims and accessories as briefed": "Brief ke anusar trims aur accessories",
  "Material and trim sourcing support": "Material aur trim sourcing support",
  "Logo and graphic placement": "Logo aur graphic placement",
  "Logo and emblem application": "Logo aur emblem lagana",
  "Logo and monogram options": "Logo aur monogram options",
  "Colour and size range": "Colour aur size range",
  "Colour blocking": "Colour ke tukde",
  "Collar and cuff details": "Collar aur cuff details",
  "Collar and cuff styles": "Collar aur cuff styles",
  "Neck, sleeve and hem styles": "Neck, sleeve aur hem styles",
  "Placket and button options": "Placket aur button options",
  "Embroidery and branding": "Embroidery aur branding",
  "Embroidery, print or patches": "Embroidery, print ya patches",
  "Hood, zipper and rib styles": "Hood, zipper aur rib styles",
  "Role-based colour combinations": "Role ke hisaab se rangeen",
  "Company and department logos": "Company aur department logos",
  "Pockets and reinforcement details": "Pockets aur reinforcement details",
  "Name labels and packaging": "Name labels aur packaging",
  "Branded labels and packaging": "Branded labels aur packaging",
  "Branded finishing options": "Brand finishing vikalp",
  "Custom labels and packaging": "Custom labels aur packaging",
  "Custom colour combinations": "Aapke hisaab se rangeen",
  "Custom colour and packaging": "Custom colour aur packaging",
  "Packaging and labels": "Packaging aur labels",
  "Size and colour allocation": "Size aur colour allocation",
  "Coordinated product ranges": "Mil-jul range",
  "Custom woven or printed labels": "Custom woven ya printed labels",
  "Interior and exterior labels": "Interior aur exterior labels",
  "Product and pattern development": "Product aur pattern development",
  "Sampling and revision stages": "Sampling aur revision stages",
  "Graphic and logo placement": "Graphic aur logo placement",
  "Fit and panel details": "Fit aur panel details",
  "Specification, fabric, quantity, decoration method and delivery requirements confirmed before production.": "Production se pehle specification, fabric, quantity, decoration method aur delivery requirements confirm kiye jaate hain.",
  "Fit, fabric GSM, colour, branding and bulk order requirements reviewed before sampling or production.": "Sampling ya production se pehle fit, fabric GSM, colour, branding aur bulk order requirements ki review hoti hai.",
  "Measurement chart, fabric, trims, branding and delivery plan are confirmed during specification review.": "Specification review ke dauran measurement chart, fabric, trims, branding aur delivery plan confirm kiye jaate hain.",
  "Application, roles, quantities, fabric performance, branding and delivery requirements reviewed for each order.": "Har order ke liye application, roles, quantities, fabric performance, branding aur delivery requirements ki review hoti hai.",
  "Product range, measurements, branding method, packed quantity and delivery schedule are agreed upfront.": "Product range, measurements, branding method, packed quantity aur delivery schedule pehle hi tay kar li jaati hai.",
  "Intended use, fabric, fit, decoration, quantity and quality expectations confirmed before production.": "Production se pehle intended use, fabric, fit, decoration, quantity aur quality expectations confirm kiye jaate hain.",
  "Fabric weight, construction, fit, branding, quantity and target delivery agreed before production.": "Production se pehle fabric weight, construction, fit, branding, quantity aur target delivery tay hoti hai.",
  "Custom development is assessed for feasibility, material availability, quantity, timeline and commercial terms.": "Custom development ka assessment feasibility, material availability, quantity, timeline aur commercial terms ke anusar kiya jaata hai.",
  "Quantity, per-piece or per-unit pricing, timelines and terms are agreed.": "Quantity, per-piece ya per-unit pricing, timelines aur terms tay hote hain.",
  "Products are prepared and delivered according to the agreed process.": "Products agreed process ke mutabiq tay aur deliver kiye jaate hain.",
  "Custom garment manufacturing process by Ananya Fashion": "Ananya Fashion dwara custom garment manufacturing process",
  "Fabric quality inspection inside a garment facility": "Garment facility ke andar fabric quality inspection",
  "Industrial textile machinery and fabric production detail": "Industrial textile machinery aur fabric production detail",
  "Manufacturing product details from Ananya Fashion": "Ananya Fashion se manufacturing product details",
  "Rolls of textile fabric in warm and neutral tones": "Warm aur neutral tones mein textile fabric ke rolls",
  "Workers operating an industrial garment production facility": "Industrial garment production facility mein kaam karte workers",
  "Ananya Fashion | Textile & Garment Contract Manufacturer": "Ananya Fashion | Textile aur garment contract manufacturer",
  "Privacy Policy | Ananya Fashion": "Gopaniya neeti | Ananya Fashion",
  "Terms & Conditions | Ananya Fashion": "Shartein aur niyam | Ananya Fashion",
};

const translations = {
  hi: translationsHi,
  hinglish: translationsHinglish
};

const LANGUAGE_STORAGE_KEY = "ananyaLanguage";
const SUPPORTED_LANGUAGES = ["en", "hi", "hinglish"];
const DEFAULT_LANGUAGE = "hi";
const TRANSLATABLE_ATTRIBUTES = ["placeholder", "aria-label", "title", "alt"];
const TRANSLATION_SKIP_SELECTOR = ".svg-sprite, .lang-option, [data-no-translate], [data-year]";

let currentLanguage = DEFAULT_LANGUAGE;

const translate = (value) => {
  const table = translations[currentLanguage];
  return (table && table[value]) || value;
};

let originalDocumentTitle = null;

const applyLanguage = () => {
  const table = translations[currentLanguage] || null;

  if (originalDocumentTitle === null) originalDocumentTitle = document.title;
  if (originalDocumentTitle) document.title = (table && table[originalDocumentTitle]) || originalDocumentTitle;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "SVG" || tag === "TITLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
      if (parent.closest(TRANSLATION_SKIP_SELECTOR)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  let node = walker.nextNode();
  while (node) {
    if (node.ananyaSource === undefined) {
      node.ananyaSource = node.nodeValue;
      node.ananyaKey = node.nodeValue.trim().replace(/\s+/g, " ");
    }
    const source = node.ananyaSource;
    const key = node.ananyaKey;
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    node.nodeValue = leading + ((table && table[key]) || key) + trailing;
    node = walker.nextNode();
  }

  document.querySelectorAll(TRANSLATABLE_ATTRIBUTES.map((name) => `[${name}]`).join(", ")).forEach((element) => {
    if (element.closest(TRANSLATION_SKIP_SELECTOR)) return;
    if (!element.ananyaAttributes) {
      element.ananyaAttributes = {};
      TRANSLATABLE_ATTRIBUTES.forEach((name) => {
        if (element.hasAttribute(name)) element.ananyaAttributes[name] = element.getAttribute(name);
      });
    }
    TRANSLATABLE_ATTRIBUTES.forEach((name) => {
      const source = element.ananyaAttributes[name];
      if (source === undefined) return;
      element.setAttribute(name, (table && table[source]) || source);
    });
  });
};

const setLanguage = (language, persist = true) => {
  currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;

  if (persist) {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
    } catch (error) {
      currentLanguage = currentLanguage;
    }
  }

  document.documentElement.lang = currentLanguage === "hi" ? "hi" : currentLanguage === "hinglish" ? "hi-Latn" : "en";

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  applyLanguage();
};

const initLanguage = () => {
  let stored = null;
  try {
    stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (error) {
    stored = null;
  }

  setLanguage(stored && SUPPORTED_LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE, false);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
};

const runSafely = (name, fn) => {
  try {
    fn();
  } catch (error) {
    if (window.console && console.warn) console.warn(name + " failed to initialise:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  runSafely("initNavigation", initNavigation);
  runSafely("initRevealAnimations", initRevealAnimations);
  runSafely("initProductGrid", initProductGrid);
  runSafely("initProductQuoteLinks", initProductQuoteLinks);
  runSafely("initRfqForm", initRfqForm);
  runSafely("initProductPage", initProductPage);
  runSafely("initCurrentYear", initCurrentYear);
  runSafely("initLanguage", initLanguage);
});