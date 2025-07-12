export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dutamover",
  "alternateName": "Duta Mover",
  "url": "https://www.dutamover.com",
  "logo": "https://www.dutamover.com/images/logo.png",
  "description": "Dutamover adalah perusahaan jasa pindahan terpercaya di Jakarta dengan pengalaman 10+ tahun. Menyediakan layanan pindahan rumah, kantor, dan packing profesional.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plaza Cordoba Blok I no 6 dan 7, Jl. Batam Nusaloka BSD",
    "addressLocality": "Tangerang Selatan",
    "addressRegion": "Banten",
    "postalCode": "15345",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-815-1032-6123",
    "contactType": "customer service",
    "availableLanguage": ["Indonesian", "English"],
    "areaServed": "ID"
  },
  "sameAs": [
    "https://www.instagram.com/dutamove",
    "https://api.whatsapp.com/send?phone=+6281510326123"
  ],
  "foundingDate": "2014",
  "numberOfEmployees": "20-50",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088,
      "longitude": 106.8456
    },
    "geoRadius": "100000"
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dutamover",
  "image": "https://www.dutamover.com/images/logo.png",
  "telephone": "+62-815-1032-6123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plaza Cordoba Blok I no 6 dan 7, Jl. Batam Nusaloka BSD",
    "addressLocality": "Tangerang Selatan",
    "addressRegion": "Banten",
    "postalCode": "15345",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.2088,
    "longitude": 106.8456
  },
  "url": "https://www.dutamover.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "15:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "IDR",
  "paymentAccepted": "Cash, Bank Transfer"
}

export const movingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Jasa Pindahan Profesional",
  "provider": {
    "@type": "Organization",
    "name": "Dutamover"
  },
  "description": "Layanan pindahan rumah dan kantor dengan tim profesional berpengalaman. Meliputi packing, loading, transport, dan penataan di lokasi tujuan.",
  "serviceType": "Moving Service",
  "areaServed": {
    "@type": "Place",
    "name": "Jakarta, Bogor, Depok, Tangerang, Bekasi"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "IDR",
    "price": "500000",
    "description": "Mulai dari Rp 500.000 tergantung jarak dan volume barang"
  }
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa biaya jasa pindahan Dutamover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya jasa pindahan Dutamover mulai dari Rp 500.000 tergantung jarak, volume barang, dan layanan yang dipilih. Kami menyediakan survey gratis untuk estimasi biaya yang akurat."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah barang diasuransikan selama proses pindahan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, semua barang yang ditangani Dutamover diasuransikan selama proses pindahan. Kami juga menggunakan teknik packing profesional untuk memastikan keamanan barang."
      }
    },
    {
      "@type": "Question",
      "name": "Wilayah mana saja yang dilayani Dutamover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dutamover melayani seluruh wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan juga menyediakan layanan pindahan antar kota se-Indonesia."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama proses pindahan biasanya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Waktu pindahan tergantung volume barang dan jarak. Untuk pindahan lokal biasanya 4-8 jam, sedangkan pindahan antar kota bisa 1-3 hari tergantung jarak."
      }
    }
  ]
}

export const workProcessSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Proses Kerja Jasa Pindahan Dutamover",
  "description": "Panduan lengkap proses kerja pindahan profesional Dutamover mulai dari survey hingga penyusunan kembali di lokasi tujuan.",
  "image": "https://www.dutamover.com/images/dutamover-moving-service.jpg",
  "totalTime": "P1D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "IDR",
    "value": "500000"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Bubble wrap dan kardus berkualitas tinggi"
    },
    {
      "@type": "HowToSupply", 
      "name": "Kendaraan transport sesuai volume"
    },
    {
      "@type": "HowToSupply",
      "name": "Peralatan loading profesional"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Survey Lokasi",
      "text": "Tim survey menganalisis volume barang, akses lokasi, dan menentukan strategi pindahan optimal",
      "image": "https://www.dutamover.com/images/survey.png"
    },
    {
      "@type": "HowToStep", 
      "name": "Packing Profesional",
      "text": "Packing sistematis menggunakan bahan berkualitas tinggi dengan teknik khusus untuk barang fragile",
      "image": "https://www.dutamover.com/images/packing.png"
    },
    {
      "@type": "HowToStep",
      "name": "Pemindahan Aman", 
      "text": "Loading, transport, dan unloading dengan teknik aman menggunakan kendaraan sesuai volume",
      "image": "https://www.dutamover.com/images/pengiriman.png"
    },
    {
      "@type": "HowToStep",
      "name": "Penyusunan Kembali",
      "text": "Unpacking dan penataan barang di lokasi tujuan sesuai keinginan klien",
      "image": "https://www.dutamover.com/images/penyusunankembali.png"
    }
  ]
}

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Dutamover",
    "image": "https://www.dutamover.com/images/logo.png",
    "telephone": "+62-815-1032-6123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plaza Cordoba Blok I no 6 dan 7, Jl. Batam Nusaloka BSD",
      "addressLocality": "Tangerang Selatan",
      "postalCode": "15345",
      "addressCountry": "ID"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Pelanggan Dutamover"
  },
  "reviewBody": "Pelayanan jasa pindahan Dutamover sangat memuaskan. Tim profesional, barang aman, dan proses cepat. Highly recommended!"
}

export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dutamover",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "4"
  }
}

export const breadcrumbSchemaLayanan = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.dutamover.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Layanan",
      "item": "https://www.dutamover.com/layanan"
    }
  ]
}

export const breadcrumbSchemaContact = {
  "@context": "https://schema.org", 
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.dutamover.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Kontak",
      "item": "https://www.dutamover.com/contact"
    }
  ]
}
