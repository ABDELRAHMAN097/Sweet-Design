import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappNumber = "+201016097965"; // 👈 حط رقم الواتساب هنا بصيغة دولية بدون +

  const serviceGroups = [
    {
      title: "خدمات التنظيف 🧹",
      services: ["تنظيف المنازل", "تنظيف المكاتب", "تنظيف السجاد", "تنظيف الزجاج"],
    },
    {
      title: "خدمات الصيانة 🔧",
      services: ["سباكة", "كهرباء", "نجارة", "دهان وديكور"],
    },
    {
      title: "خدمات متخصصة 🏠",
      services: ["تركيب مكيفات", "نقل العفش", "مكافحة الحشرات", "تركيب ستائر"],
    },
    {
      title: "خدمات إضافية 💼",
      services: ["مساعدة في الطبخ", "تنظيف بعد التشطيب", "تنظيف الحدائق"],
    },
  ];

  const handleServiceClick = (service) => {
    const message = `مرحبًا، أريد طلب خدمة: ${service}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full md:w-[80%] mx-auto py-10 px-4">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 text-primary">
        خدماتنا
      </h2>

      <div className="space-y-4">
        {serviceGroups.map((group, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-4 border border-gray-100 transition-all"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {group.title}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="text-primary" />
              ) : (
                <ChevronDown className="text-primary" />
              )}
            </div>

            {openIndex === index && (
              <ul className="mt-3 space-y-2 pl-3">
                {group.services.map((service, i) => (
                  <li
                    key={i}
                    onClick={() => handleServiceClick(service)}
                    className="cursor-pointer bg-gray-50 hover:bg-primary hover:text-white transition rounded-xl p-2"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
