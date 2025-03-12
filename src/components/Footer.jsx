import { Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-logo-gradient  text-white py-12">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-6">
        <img
            src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/b8CsrvnVZxxtmNJ0wkHtJrA2fTYAil0R_1718070877____bdc57f42dbf8641261b818344560fc00.jpg"
            alt="Description"
            className="w-40 h-40 object-cover rounded-lg"
        />

        <div className="min-w-[250px] text-center md:text-left">
            
            <h3 className="text-cyan-500 text-xl font-semibold mb-4 cursor-pointer">Trụ sở</h3>
            <p className="text-sm">Đ. Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội, Việt Nam</p>
            <h3 className="text-cyan-500 text-xl font-semibold mb-4 mt-4 cursor-pointer">Gio làm việc</h3>
            <p className="text-sm">8h00-17h00 hàng ngày</p>
        </div>

        <div className="min-w-[250px] text-center md:text-left flex flex-col">
            <h3 className="text-cyan-500 text-xl font-semibold mb-4 cursor-pointer">Liên hệ</h3>
            <p className="text-sm">Hotline</p>
            <div className="flex space-x-5">
            <Phone size={24} strokeWidth={2} className="text-cyan-500" />
            <p className="text-sm">0383385258</p>
            </div>
        </div>

        <div className="w-full md:w-auto flex justify-center">
            <iframe
            className="w-full max-w-[600px] h-[300px] md:h-[250px] rounded-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6629862054297!2d105.8038909747138!3d21.00614228855612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad0058b2c3d7%3A0x294ba85b036903c6!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gUElDT05TIFZJ4buGVCBOQU0!5e0!3m2!1svi!2s!4v1741717593894!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
            ></iframe>
        </div>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer