// Product database with detailed information
const productsDatabase = {
    'drills': {
        name: 'Drills',
        image: './Images/SELECTED/FR4 DRILL 1.JPG',
        subtitle: 'High-precision drilling solutions for PCB manufacturing',
        description: 'Our premium FR4 drills are engineered for exceptional precision and durability in PCB manufacturing. These high-quality drilling tools are designed to deliver consistent performance, ensuring accurate hole placement and clean cutting surfaces. Ideal for both small-scale prototyping and large-scale production runs.',
        features: [
            'Ultra-precise hole drilling for PCBs',
            'Extended tool life with premium materials',
            'Compatible with standard PCB drilling machines',
            'Suitable for FR4 and other common PCB substrates',
            'Consistent performance across production runs',
            'Reduced burr formation for cleaner cuts'
        ],
        specifications: {
            'Material': 'Premium carbide',
            'Application': 'FR4 PCBs',
            'Precision': 'High accuracy',
            'Durability': 'Extended life'
        }
    },
    'fr4-drills': {
        name: 'FR4 Drills',
        image: './Images/SELECTED/FR4 DRILL 2.JPG',
        subtitle: 'Premium FR4 drilling solutions for high-quality PCBs',
        description: 'Specialized FR4 drilling tools engineered for the demanding requirements of professional PCB manufacturing. These drills offer superior performance with enhanced wear resistance and precise cutting capabilities.',
        features: [
            'Optimized for FR4 substrate',
            'Enhanced wear resistance',
            'Precise diameter control',
            'Smooth surface finish',
            'Reduced chip formation',
            'Cost-effective production'
        ],
        specifications: {
            'Material': 'High-grade carbide',
            'Application': 'FR4 PCBs',
            'Quality': 'Premium grade',
            'Performance': 'High efficiency'
        }
    },
    'micro-drills': {
        name: 'Micro Drills',
        image: './Images/SELECTED/FR4 MICRO DRILL.JPG',
        subtitle: 'Ultra-precise micro drilling for fine-pitch PCBs',
        description: 'Advanced micro drilling solutions designed for fine-pitch PCB applications. These precision tools enable drilling of extremely small holes required for modern high-density circuit boards.',
        features: [
            'Sub-millimeter hole drilling',
            'Ultra-fine precision',
            'Ideal for HDI PCBs',
            'Minimal breakout',
            'High aspect ratio capability',
            'Specialized for microelectronics'
        ],
        specifications: {
            'Size Range': '0.1mm - 0.5mm',
            'Application': 'Fine-pitch PCBs',
            'Precision': 'Ultra-high',
            'Technology': 'Advanced'
        }
    },
    'slot-drills': {
        name: 'Slot Drills',
        image: './Images/SELECTED/FR4 SLOT DRILL.JPG',
        subtitle: 'Specialized slot drilling tools for PCB fabrication',
        description: 'Professional slot drilling tools designed for creating precise slots and elongated holes in PCBs. Perfect for edge connectors and specialized routing applications.',
        features: [
            'Precise slot creation',
            'Clean edge finishing',
            'Versatile applications',
            'Extended tool life',
            'Compatible with standard machines',
            'Consistent slot dimensions'
        ],
        specifications: {
            'Type': 'Slot cutting',
            'Application': 'PCB slots',
            'Precision': 'High',
            'Finish': 'Smooth'
        }
    },
    'routers': {
        name: 'Routers',
        image: './Images/SELECTED/FR4 ROUTER.JPG',
        subtitle: 'Advanced routing equipment for circuit board processing',
        description: 'High-performance routing blades designed for efficient PCB contouring and edge routing. These tools deliver clean cuts with minimal burr formation and excellent edge quality.',
        features: [
            'Clean edge routing',
            'Minimal burr formation',
            'High cutting speeds',
            'Long tool life',
            'Precise contour following',
            'Versatile PCB applications'
        ],
        specifications: {
            'Material': 'Carbide',
            'Application': 'PCB routing',
            'Quality': 'Professional',
            'Performance': 'High-speed'
        }
    },
    'mcpcb-routers': {
        name: 'MCPCB Routers',
        image: './Images/SELECTED/MCPCB ROUTER.JPG',
        subtitle: 'Specialized routers for metal core PCB routing',
        description: 'Specialty routing tools engineered specifically for Metal Core PCB (MCPCB) applications. These routers handle the unique challenges of routing through metal substrates while maintaining precision.',
        features: [
            'Metal core PCB optimized',
            'Enhanced durability',
            'Thermal resistance',
            'Precise metal cutting',
            'Extended tool life',
            'Specialized for MCPCB'
        ],
        specifications: {
            'Application': 'MCPCB',
            'Material': 'Specialized carbide',
            'Durability': 'Enhanced',
            'Type': 'Metal routing'
        }
    },
    'diamond-coated-routers': {
        name: 'Diamond Coated Routers',
        image: './Images/SELECTED/DIAMOND COATED FR4 ROUTER.JPG',
        subtitle: 'Diamond-coated routing blades for extended durability',
        description: 'Premium diamond-coated routing tools offering exceptional durability and performance. The diamond coating significantly extends tool life while maintaining cutting precision.',
        features: [
            'Diamond coating technology',
            'Extended tool life (3-5x)',
            'Superior wear resistance',
            'Maintained precision',
            'Cost-effective over time',
            'Premium quality finish'
        ],
        specifications: {
            'Coating': 'Diamond',
            'Life Extension': '3-5x',
            'Quality': 'Premium',
            'Durability': 'Maximum'
        }
    },
    'routing-brushes': {
        name: 'Routing Brushes',
        image: './Images/SELECTED/ROUTING BRUSH.JPG',
        subtitle: 'Quality routing brushes for surface finishing',
        description: 'Professional routing brushes designed for PCB edge finishing and deburring. These brushes ensure clean edges and smooth surfaces after routing operations.',
        features: [
            'Edge finishing',
            'Deburring capability',
            'Smooth surface finish',
            'Durable bristles',
            'Easy maintenance',
            'Consistent quality'
        ],
        specifications: {
            'Type': 'Finishing brush',
            'Application': 'Edge finishing',
            'Quality': 'Professional',
            'Material': 'High-grade bristles'
        }
    },
    'locating-pins': {
        name: 'Locating Pins',
        image: './Images/SELECTED/DOWEL ( STACK ) PIN - D2.O-L15.8.JPG',
        subtitle: 'Precise locating pins for accurate positioning',
        description: 'High-precision locating pins essential for accurate PCB alignment during manufacturing. These pins ensure consistent positioning for multi-layer board alignment.',
        features: [
            'High precision alignment',
            'Multi-layer compatibility',
            'Durable construction',
            'Accurate positioning',
            'Standard dimensions',
            'Reliable performance'
        ],
        specifications: {
            'Diameter': '2.0mm',
            'Length': '15.8mm',
            'Type': 'Stack pin',
            'Precision': 'High'
        }
    },
    'carlson-pins': {
        name: 'Carlson Pins',
        image: './Images/SELECTED/CARLSON PIN.JPG',
        subtitle: 'Specialized Carlson pins for manufacturing processes',
        description: 'Professional Carlson pins designed for precise tooling and alignment in PCB manufacturing equipment. Essential components for maintaining accuracy in production lines.',
        features: [
            'Precise tooling',
            'Equipment alignment',
            'Durable materials',
            'Standard compatibility',
            'Long-lasting',
            'Industry standard'
        ],
        specifications: {
            'Type': 'Carlson pin',
            'Application': 'Tooling',
            'Standard': 'Industry',
            'Quality': 'Professional'
        }
    },
    'spindle-spares': {
        name: 'Spindle and Spares',
        image: './Images/SELECTED/SPINDLE COLLET 263504.JPG',
        subtitle: 'High-quality spindle components and spare parts',
        description: 'Premium spindle components and replacement parts for PCB drilling and routing machines. Maintain your equipment\'s performance with our high-quality spare parts.',
        features: [
            'Genuine spare parts',
            'Machine compatibility',
            'Extended equipment life',
            'Reliable performance',
            'Easy installation',
            'Quality guaranteed'
        ],
        specifications: {
            'Type': 'Spindle collet',
            'Part Number': '263504',
            'Quality': 'OEM equivalent',
            'Compatibility': 'Standard'
        }
    },
    'drill-rings': {
        name: 'Drill Rings',
        image: './Images/SELECTED/DRILL RINGS.JPG',
        subtitle: 'Precision drill rings for accurate drilling operations',
        description: 'Essential drill rings for maintaining accuracy and alignment in PCB drilling machines. These precision components ensure consistent hole placement.',
        features: [
            'Precision alignment',
            'Accurate drilling',
            'Durable construction',
            'Easy replacement',
            'Standard sizes',
            'Consistent performance'
        ],
        specifications: {
            'Application': 'Drill alignment',
            'Precision': 'High',
            'Material': 'Premium',
            'Compatibility': 'Standard'
        }
    },
    'dlr': {
        name: 'DLR',
        image: './Images/SELECTED/DLR Y-TEK-2.JPG',
        subtitle: 'DLR components for advanced PCB processing',
        description: 'Advanced DLR (Y-TEK-2) components designed for specialized PCB processing applications. These components enhance machine capabilities and processing efficiency.',
        features: [
            'Advanced technology',
            'Enhanced processing',
            'Specialized applications',
            'High performance',
            'Reliable operation',
            'Industry leading'
        ],
        specifications: {
            'Model': 'Y-TEK-2',
            'Type': 'DLR component',
            'Technology': 'Advanced',
            'Performance': 'High'
        }
    },
    'bearings': {
        name: 'Front Bearings',
        image: './Images/SELECTED/FRONT BEARING - WW1331.JPG',
        subtitle: 'High-quality front bearings for smooth operation',
        description: 'Premium front bearings (WW1331) designed for smooth operation and extended life in PCB manufacturing equipment. Essential for maintaining machine precision.',
        features: [
            'Smooth operation',
            'Extended bearing life',
            'Low friction',
            'High precision',
            'Easy maintenance',
            'Quality construction'
        ],
        specifications: {
            'Model': 'WW1331',
            'Type': 'Front bearing',
            'Quality': 'Premium',
            'Life': 'Extended'
        }
    }
};

// Function to get product data by ID
function getProductById(productId) {
    return productsDatabase[productId] || null;
}

// Function to generate product detail HTML
function generateProductHTML(product, productId) {
    if (!product) {
        return `
            <div class="not-found">
                <h2>Product Not Found</h2>
                <p>The product you're looking for doesn't exist.</p>
                <a href="index.html#products" class="back-btn">
                    <i class="fas fa-arrow-left"></i> Back to Products
                </a>
            </div>
        `;
    }

    const whatsappNumber = '919730429324';
    const productName = encodeURIComponent(product.name);
    const message = encodeURIComponent(`Hello! I'm interested in ordering: ${product.name}`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    const featuresHTML = product.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');

    const specsHTML = Object.entries(product.specifications).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key}</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');

    return `
        <div class="product-detail-content">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h1 class="product-detail-title">${product.name}</h1>
                <p class="product-detail-subtitle">${product.subtitle}</p>
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-features">
                    <h4>Key Features</h4>
                    <ul>
                        ${featuresHTML}
                    </ul>
                </div>

                <div class="product-specifications">
                    <h4>Specifications</h4>
                    <div class="spec-grid">
                        ${specsHTML}
                    </div>
                </div>

                <div class="product-actions">
                    <button class="order-btn" onclick="openWhatsAppChat('${productName}')">
                        <i class="fab fa-whatsapp"></i> Order Now
                    </button>
                    <a href="index.html#contact" class="contact-btn">
                        <i class="fas fa-envelope"></i> Contact Us
                    </a>
                    <a href="index.html#products" class="back-btn">
                        <i class="fas fa-arrow-left"></i> Back to Products
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to open WhatsApp chat
function openWhatsAppChat(productName) {
    const whatsappNumber = '919730429324';
    const message = encodeURIComponent(`Hello! I'm interested in ordering: ${productName}. Please provide more details.`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
}

// Function to get product name from URL or ID
function getProductNameFromId(productId) {
    // Convert ID to readable name (e.g., 'drills' -> 'Drills')
    return productId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Function to generate basic product HTML for products not in database
function generateBasicProductHTML(productName, productId) {
    const whatsappNumber = '919730429324';
    const message = encodeURIComponent(`Hello! I'm interested in ordering: ${productName}. Please provide more details and pricing.`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return `
        <div class="product-detail-content">
            <div class="product-detail-info" style="grid-column: 1 / -1; text-align: center;">
                <h1 class="product-detail-title">${productName}</h1>
                <p class="product-detail-subtitle">Contact us for detailed information and pricing</p>
                <p class="product-detail-description">
                    We offer high-quality ${productName.toLowerCase()} solutions for your PCB manufacturing needs. 
                    Our products are designed to meet the highest industry standards for precision, 
                    durability, and performance. Contact our team to learn more about specifications, 
                    pricing, and availability.
                </p>

                <div class="product-specifications">
                    <h4>Get More Information</h4>
                    <p style="color: #475569; margin-top: 1rem;">
                        Our sales team is ready to provide you with detailed product information, 
                        technical specifications, pricing, and delivery options. Get in touch with us today!
                    </p>
                </div>

                <div class="product-actions" style="justify-content: center;">
                    <button class="order-btn" onclick="openWhatsAppChat('${productName}')">
                        <i class="fab fa-whatsapp"></i> Order Now / Get Quote
                    </button>
                    <a href="index.html#contact" class="contact-btn">
                        <i class="fas fa-envelope"></i> Contact Us
                    </a>
                    <a href="index.html#products" class="back-btn">
                        <i class="fas fa-arrow-left"></i> Back to Products
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Load product on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const container = document.getElementById('productDetail');

    if (!productId) {
        container.innerHTML = `
            <div class="not-found">
                <h2>No Product Selected</h2>
                <p>Please select a product from the products page.</p>
                <a href="index.html#products" class="back-btn">
                    <i class="fas fa-arrow-left"></i> Back to Products
                </a>
            </div>
        `;
        return;
    }

    const product = getProductById(productId);
    
    if (product) {
        container.innerHTML = generateProductHTML(product, productId);
        document.title = `${product.name} - Suryatantra Enterprises LLP`;
    } else {
        // Product not in database, show basic page with ordering option
        const productName = getProductNameFromId(productId);
        container.innerHTML = generateBasicProductHTML(productName, productId);
        document.title = `${productName} - Suryatantra Enterprises LLP`;
    }
});

