import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import L from "leaflet";
import Select from "react-select";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {

  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import { getDichVu } from "@/service/api/DichVu";
import { getSanPham, likeSp } from "@/service/api/SanPham";
import { getCuaHang } from "@/service/api/CuaHang";
import { createDatLich } from "@/service/api/Booking";
import AlertModal from "./AlertModal";

interface BookingFormData {
  name: string;
  phone: string;
  bikeType: string;
  bikeYear: string;
  licensePlate: string;
  service: string;
  maintenancePackage: string;
  date: string;
  time: string;
  ServiceId: string[];
  SanPhamId: string[];
  CuaHangId: string;
  notes: string;
  address?: string;
}
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
const BookingForm = () => {
  const [alert, setAlert] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);
  const form = useForm<BookingFormData>({
    defaultValues: {
      name: "",
      phone: "",
      bikeType: "",
      bikeYear: "",
      CuaHangId: "",
      ServiceId: [],
      SanPhamId: [],
      licensePlate: "",
      service: "",
      maintenancePackage: "",
      date: "",
      time: "",
      notes: "",
    },
  });
  const [Dichvu, setDichVu] = useState([]);
  const [SanPham, setSanPham] = useState([]);
  const [CuaHang, setCuaHang] = useState([]);
  const customSelectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: "#17212E",
      borderColor: state.isFocused ? "#00E8F8" : "#374153",
      boxShadow: state.isFocused ? "0 0 0 1px #00E8F8" : "none",
      padding: "2px",
      borderRadius: "0.75rem",
      color: "white",
      "&:hover": {
        borderColor: "#00E8F8",
      },
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: "#1F2A37",
      color: "white",
      borderRadius: "0.5rem",
      overflow: "hidden",
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "#00E8F8"
        : state.isSelected
          ? "#2563EB"
          : "#1F2A37",
      color: state.isFocused || state.isSelected ? "#000" : "#FFF",
      padding: "10px 12px",
      cursor: "pointer",
    }),
    placeholder: (base: any) => ({
      ...base,
      color: "#9CA3AF", // text-gray-400
    }),
    singleValue: (base: any) => ({
      ...base,
      color: "white",
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: "#9CA3AF",
      "&:hover": {
        color: "#00E8F8",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    multiValue: (base: any) => ({
      ...base,
      backgroundColor: "#374153",
    }),
    multiValueLabel: (base: any) => ({
      ...base,
      color: "white",
    }),
    multiValueRemove: (base: any) => ({
      ...base,
      color: "white",
      ":hover": {
        backgroundColor: "#EF4444",
        color: "white",
      },
    }),
  };


  const fetchData = async () => {
    try {
      const responseDichVu = await getDichVu();
      const responseSanPham = await getSanPham();
      const responseCuaHang = await getCuaHang();
      const DichVuOptions = responseDichVu.data.data.map((option: any) => ({
        value: option.id,
        label: option.tenDichVu
      }));
      const CuaHangOptions = responseCuaHang.data.data.map((option: any) => ({
        value: option.id,
        label: option.tenCuaHang
      }));
      const SanPhamOptions = responseSanPham.data.data.map((option: any) => ({
        value: option.idSanPham,
        label: option.tenSanPham
      }));
      setSanPham(SanPhamOptions)
      setDichVu(DichVuOptions);
      setCuaHang(CuaHangOptions);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  const onSubmit = async () => {
    try {
      const rawDate = form.getValues("date"); // string, ví dụ: "2025-04-25T10:00"
      const date = new Date(rawDate); // chuyển về Date object
      const formattedDate = date.toISOString().slice(0, 19); // "2025-04-25T03:00:00" (cẩn thận: giờ UTC)
      const BookingFormData = {
        thoiGianDatLich: formattedDate,
        ghiChu: form.getValues("notes"),
        cuaHangId: form.getValues("CuaHangId"),
        dichVuIds: form.getValues("ServiceId"),
        sanPhamIds: form.getValues("SanPhamId")
      }
      const response = await createDatLich(BookingFormData);
      setAlert({ message: response.data.message, type: response.data.status })
      for (const stringId of form.getValues("SanPhamId")) {
        const id = parseInt(stringId, 10); // chuyển sang số nguyên
      
        if (!isNaN(id)) {
          try {
            await likeSp(id);
            
          } catch (error) {
            console.error(`Lỗi khi like sản phẩm id ${id}:`, error);
          }
        } else {
          console.warn(`ID không hợp lệ: ${stringId}`);
        }
      }
      form.reset({
        date: "",
        notes: "",
        CuaHangId: "",
        ServiceId: [],
        SanPhamId: []
      });
    } catch (error) {
      setAlert({ message: '❌ Đặt lịch thất bại', type: 'error' });
    }
  };
  const navigate = useNavigate();
  const [mapsrc, setmapsrc] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.706163296001!2d106.71923087590294!3d10.756481889396117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1e0b13a7fd%3A0x6c8f94e1b0179ae4!2zMTIgTmd1eeG7hW4gVGjhu4sgVGjhuq1wLCBUw6JuIFBow7osIFF14bqtbiA3LCBUaMOhaSBO4buZaCBIw6AgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1713099876975!5m2!1svi!2s");
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 relative z-10">
      <h2 className="text-3xl font-bold text-center text-[#FFB800] mb-8">
        Đặt lịch bảo dưỡng xe
      </h2>

      <div className="bg-[#1F2632] rounded-lg p-6 shadow-lg">
        <Tabs defaultValue="store" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#1F2632]">
            <TabsTrigger
              value="store"
              className="data-[state=active]:bg-[#FFB800] data-[state=active]:text-black text-white bg-[#374153]"
            >
              Đặt lịch tại cửa hàng
            </TabsTrigger>
            <TabsTrigger
              value="home"
              className="data-[state=active]:bg-[#FFB800] data-[state=active]:text-black text-white bg-[#374153]"
            >
              Tiếp nhận xe tận nơi
            </TabsTrigger>
          </TabsList>

          <TabsContent value="store" className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Ngày đặt lịch</FormLabel>
                      <FormControl>
                        <input
                          type="datetime-local"
                          className="w-full bg-[#17212E] text-white border border-[#374153] rounded-xl px-4 py-2 
                            shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E8F8] focus:border-[#00E8F8] 
                            transition duration-200 ease-in-out"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <FormField
                    control={form.control}
                    name="SanPhamId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Sản phẩm</FormLabel>
                        <FormControl>
                          <Select
                            isMulti
                            options={SanPham}
                            value={SanPham.filter(opt => field.value?.includes(opt.value))}
                            onChange={(selectedOptions) =>
                              field.onChange(selectedOptions.map((opt) => opt.value))
                            }
                            styles={customSelectStyles}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ServiceId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Dịch vụ</FormLabel>
                        <FormControl>
                          <Select
                            isMulti
                            options={Dichvu}
                            value={Dichvu.filter(opt => field.value?.includes(opt.value))}
                            onChange={(selectedOptions) =>
                              field.onChange(selectedOptions.map((opt) => opt.value))
                            }
                            styles={customSelectStyles}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="CuaHangId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Cửa hàng</FormLabel>
                      <FormControl>
                        <Select
                          options={CuaHang}
                          value={CuaHang.find((opt) => opt.value === field.value) || null}
                          onChange={(selectedOption) =>
                            field.onChange(selectedOption?.value || "")
                          }
                          styles={customSelectStyles}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* <FormField
                    control={form.control}
                    name="bikeType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Loại xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn loại xe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="honda">Honda</SelectItem>
                            <SelectItem value="yamaha">Yamaha</SelectItem>
                            <SelectItem value="suzuki">Suzuki</SelectItem>
                            <SelectItem value="kawasaki">Kawasaki</SelectItem>
                            <SelectItem value="ducati">Ducati</SelectItem>
                            <SelectItem value="bmw">BMW</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}

                  {/* <FormField
                    control={form.control}
                    name="bikeYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Đời xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn đời xe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2021">2021</SelectItem>
                            <SelectItem value="2020">2020</SelectItem>
                            <SelectItem value="older">Trước 2020</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="licensePlate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Biển số xe</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập biển số xe"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Gói bảo dưỡng/Dịch vụ
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn dịch vụ" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="engine">
                              Sửa chữa động cơ
                            </SelectItem>
                            <SelectItem value="electrical">
                              Hệ thống điện
                            </SelectItem>
                            <SelectItem value="paint">Sơn & Dọn xe</SelectItem>
                            <SelectItem value="diagnosis">
                              Chẩn đoán kỹ thuật
                            </SelectItem>
                            <SelectItem value="maintenance">
                              Bảo dưỡng định kỳ
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                  {/* <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Giờ đặt lịch
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn thời gian" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="morning">
                              Buổi sáng (8:00 - 12:00)
                            </SelectItem>
                            <SelectItem value="afternoon">
                              Buổi chiều (13:00 - 17:00)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Ghi chú</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Nhập thông tin thêm về tình trạng xe hoặc yêu cầu đặc biệt"
                          className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153] min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button

                  className="w-full md:w-auto bg-[#FFB800] hover:bg-[#E6A700] text-black font-medium py-3 px-8 rounded-md"
                >
                  Xác nhận đặt lịch
                </Button>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="home" className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Họ tên</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập họ tên của bạn"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Số điện thoại
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập số điện thoại"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Địa chỉ đón xe
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập địa chỉ đón xe"
                          className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* <FormField
                    control={form.control}
                    name="bikeType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Loại xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn loại xe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="honda">Honda</SelectItem>
                            <SelectItem value="yamaha">Yamaha</SelectItem>
                            <SelectItem value="suzuki">Suzuki</SelectItem>
                            <SelectItem value="kawasaki">Kawasaki</SelectItem>
                            <SelectItem value="ducati">Ducati</SelectItem>
                            <SelectItem value="bmw">BMW</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}

                  {/* <FormField
                    control={form.control}
                    name="bikeYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Đời xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn đời xe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2021">2021</SelectItem>
                            <SelectItem value="2020">2020</SelectItem>
                            <SelectItem value="older">Trước 2020</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="licensePlate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Biển số xe</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập biển số xe"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Gói bảo dưỡng/Dịch vụ
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn dịch vụ" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="engine">
                              Sửa chữa động cơ
                            </SelectItem>
                            <SelectItem value="electrical">
                              Hệ thống điện
                            </SelectItem>
                            <SelectItem value="paint">Sơn & Dọn xe</SelectItem>
                            <SelectItem value="diagnosis">
                              Chẩn đoán kỹ thuật
                            </SelectItem>
                            <SelectItem value="maintenance">
                              Bảo dưỡng định kỳ
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Ngày đón xe
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="bg-[#17212E] text-white border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Giờ đón xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn thời gian" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="morning">
                              Buổi sáng (8:00 - 12:00)
                            </SelectItem>
                            <SelectItem value="afternoon">
                              Buổi chiều (13:00 - 17:00)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Ghi chú</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Nhập thông tin thêm về tình trạng xe hoặc yêu cầu đặc biệt"
                          className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153] min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-700">
                  <iframe
                    title="Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapsrc}
                  ></iframe>
                </div>
                <div className="space-y-4 bg-[#0F172A] text-white p-4 rounded-xl border border-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Cửa hàng gần nhất: <span className="text-red-500">ANT CENTER - Quận 7</span>
                    </h3>
                    <p className="text-sm mt-1 text-gray-400">
                      12 Nguyễn Thị Thập, Tân Phú, Quận 7, TP HCM
                    </p>
                    <p className="text-sm mt-1">
                      Khoảng cách: <span className="font-medium text-red-500">7.88 km</span> (khoảng 21 phút theo đường đi thực tế)
                    </p>
                    <p className="text-sm mt-1 font-medium font-sans">
                      Chi phí giao nhận xe dự kiến:
                      <br />- Trong giờ làm việc (8:00-17:30):{" "}
                      <span className="font-medium text-yellow-400">236.436đ/chiều</span>
                      <br />- Ngoài giờ:{" "}
                      <span className="font-medium text-yellow-400">354.654đ/chiều</span>
                    </p>

                  </div>
                  <div>

                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-sm">
                    <div className="space-y-1">
                      <p>
                        <strong>Khoảng cách bán kính:</strong> 7.88 km
                      </p>
                    </div>
                  </div>
                </div>
                <h4 className="text-base font-semibold mb-2 text-white">
                  Danh sách cửa hàng
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: "ANT CENTER - Hóc Môn",
                      address: "313E Tô Ký, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM",
                      distance: "15.58 km",
                      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.078426225136!2d106.60328397770212!3d10.881639561616254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d5f57967a3ff%3A0x53c2a5264dd2dc6d!2zMzEzRSBUw7QgS8O9IOG6pXAgTeG7m2kgMSwgVMOibiBYdcOibiwgSMOzYyBNw7RuLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sfr!2s!4v1744810153368!5m2!1sfr!2s'
                    },
                    {
                      name: "ANT CENTER - Quận 7",
                      address: "12 Nguyễn Thị Thập, Tân Phú, Quận 7, TP HCM",
                      distance: "5.25 km",
                      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.962037843487!2d106.71842417480437!3d10.73740928940899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f871916fa6b%3A0x1171e59396948037!2zMTIgTmd1eeG7hW4gVGjhu4sgVGjhuq1wLCBUw6JuIFBow7osIFF14bqtbiA3LCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sfr!2s!4v1744813653753!5m2!1sfr!2s"
                    },
                    {
                      name: "ANT CENTER - Thủ Đức",
                      address: "345 Võ Văn Ngân, Linh Chiểu, Thủ Đức, TP HCM",
                      distance: "15.51 km",
                      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.48199510503!2d106.754230174806!3d10.850897289302385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bd64f9a221%3A0xf64158aec892df11!2zMzQvNSDEkC4gVsO1IFbEg24gTmfDom4sIFRyxrDhu51uZyBUaOG7jSwgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sfr!2s!4v1744813701734!5m2!1sfr!2s"
                    },
                  ].map((store, i) => (
                    <div
                      key={i}
                      className="bg-[#1E293B] p-4 rounded-lg border border-gray-600"
                    >
                      <h5 className="font-semibold text-white mb-1">{store.name}</h5>
                      <p className="text-sm text-gray-400 mb-3">{store.address}</p>
                      <p className="text-sm mb-3">
                        <i className="fa-solid fa-location-dot mr-1 text-red-400"></i> {store.distance} (đường chim)
                      </p>
                      <div className="flex gap-2 justify-between">
                        <button onClick={() => setmapsrc(store.map)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                          Chọn cửa hàng
                        </button>
                        <button className=" border bg-gray-500 text-white border-gray-500 px-3 py-1 rounded text-sm hover:bg-gray-700">
                          <i className="fa-solid fa-eye mr-1"></i> Xem
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 bg-[#0F172A] text-white p-4 rounded-xl border border-gray-700">
                  <div>
                    <h4 className="text-lg font-semibold text-white text-center">
                      Chi phí nhận xe dự kiến
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-1  mt-4 text-sm">
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Khoảng cách bán kính:</p>
                        <p className="font-semibold">7.88 km</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Phí giao nhận (trong giờ):</p>
                        <p className="font-semibold text-yellow-400">236.436đ/chiều</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Phí giao nhận (ngoài giờ):</p>
                        <p className="font-semibold text-yellow-400">236.436đ/chiều</p>
                      </div>
                      <div className="w-full border mt-4 border-solid border-gray-600">

                      </div>
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Tổng chi phí  (trong giờ):</p>
                        <p className="font-semibold text-yellow-400">472.872đ/chiều</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Tổng chi phí  (ngoài giờ):</p>
                        <p className="font-semibold text-yellow-400">236.308đ</p>
                      </div>

                    </div>
                    <div className="text-white text-sm space-y-1">
                      <h4 className="text-lg font-semibold text-yellow-400 text-center">
                        Thông tin về chi phí giao nhận xe
                      </h4>
                      <p>• Miễn phí giao nhận trong phạm vi bán kính 3km.</p>
                      <p>
                        • Phí giao nhận: 30.000đ/km (cho khoảng cách lớn hơn 3km) trong giờ làm việc.
                      </p>
                      <p>
                        • Phí ngoài giờ: 45.000đ/km (sau 19h hoặc ngoài khung giờ làm việc).
                      </p>

                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-white mb-1">Ghi chú</label>
                  <textarea
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập thông tin thêm về tình trạng xe hoặc yêu cầu đặc biệt"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto bg-[#FFB800] hover:bg-[#E6A700] text-black font-medium py-3 px-8 rounded-md"
                >
                  Xác nhận đặt lịch đón xe
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
      {alert && (
        <AlertModal
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}

    </div>
  );
};

export default BookingForm;
