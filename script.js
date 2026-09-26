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

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

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
      menuToggle.setAttribute("aria-label", "Open navigation");
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
      menuToggle.setAttribute("aria-label", "Close navigation");
      if (firstMobileLink) firstMobileLink.focus();
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
    status.textContent = `${pendingProduct} has been added to your enquiry. Please complete the remaining requirements.`;
    status.classList.add("visible");
    sessionStorage.removeItem("ananyaPendingProduct");
  }

  if (fileInput && fileName) {
    fileInput.addEventListener("change", () => {
      fileName.textContent = fileInput.files.length ? fileInput.files[0].name : "No file selected";
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const value = (name) => String(data.get(name) || "Not provided").trim();
    const referenceFile = fileInput && fileInput.files.length ? fileInput.files[0].name : "Not provided";
    const message = [
      "Hello Ananya Fashion, I would like to request a textile or garment manufacturing quote.",
      "",
      `Full Name: ${value("fullName")}`,
      `Company: ${value("companyName")}`,
      `Business Email: ${value("email")}`,
      `Phone: ${value("phone")}`,
      `Product Category: ${value("productCategory")}`,
      `Product / Garment: ${value("productType")}`,
      `Estimated Quantity: ${value("quantity")}`,
      `Required Timeline: ${value("timeline")}`,
      "",
      "Manufacturing Requirement:",
      value("requirement"),
      "",
      "Additional Specifications:",
      value("specifications"),
      "",
      `Reference file to attach: ${referenceFile}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;
    status.textContent = whatsappWindow
      ? "Your manufacturing enquiry is ready in WhatsApp. Review the details, attach the reference file if selected, then tap Send."
      : "Your browser blocked the WhatsApp window. Allow pop-ups for this site or use the floating WhatsApp button to contact our team.";
    status.classList.add("visible");
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

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initRevealAnimations();
  initProductGrid();
  initProductQuoteLinks();
  initRfqForm();
  initProductPage();
  initCurrentYear();
});