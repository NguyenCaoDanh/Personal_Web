import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { getAllDichVu } from '@/service/api/DichVu';
import { getDichVuImage } from '@/service/api/imageApi';

interface ServiceItem {
  id: number;
  tenDichVu: string;
  tieuDe: string;
  hinhAnh: string;
  imageUrl: string;
}

const ServicesSection = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getAllDichVu(0, 6, '');
        const { content = [] } = res.data?.data || [];

        // Load blob image cho từng dịch vụ
        const servicesWithImages = await Promise.all(
          content.map(async (service: any) => {
            try {
              // Bỏ tiền tố "dichvu/" trước khi lấy ảnh
           
              const imgRes = await getDichVuImage(service.hinhAnh); // Chỉ truyền đường dẫn ảnh sau khi đã bỏ tiền tố
              const blob = imgRes.data;
              const imageUrl = URL.createObjectURL(blob); // 👈 tạo URL từ blob
              return { ...service, imageUrl };
            } catch (error) {
              console.error('Lỗi tải ảnh dịch vụ:', error);
              return { ...service, imageUrl: '' };
            }
          })
        );

        setServices(servicesWithImages);
      } catch (error) {
        console.error('Lỗi khi tải dịch vụ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();

    // Cleanup: Revoke các object URLs tránh leak bộ nhớ
    return () => {
      services.forEach((service) => {
        if (service.imageUrl) {
          URL.revokeObjectURL(service.imageUrl);
        }
      });
    };
  }, []);

  const ServiceCard = ({
    id,
    title,
    description,
    imageUrl,
  }: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }) => {
    return (
      <div className="flex flex-col bg-[#252B39] rounded-lg overflow-hidden h-full">
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl || '/default-image.png'} // Nếu không có ảnh, hiển thị ảnh mặc định
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm flex-grow">{description}</p>
          <Link to={`/services/${id}`}>
            <Button className="w-full bg-[#7A47E0] hover:bg-[#6A37D0] text-white mt-4">
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-16 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00E8F8] mb-12">
          Dịch vụ nổi bật
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Đang tải dịch vụ...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id} // Truyền id để tạo đường dẫn chi tiết
                title={service.tenDichVu}
                description={service.tieuDe}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <Link to="/services">
            <Button
              className={cn(
                'bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white hover:opacity-90 transition-opacity',
                'border-none font-medium px-8'
              )}
            >
              Xem thêm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;