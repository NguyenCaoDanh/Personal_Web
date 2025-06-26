// src/data/projectsData.ts
export interface Project {
  title: string;
  desc: string;
  stack: string;
  source: string;
  demo: string;
  type: 'Outsource' | 'Personal';
}

export const projects: Project[] = [
 {
      title: 'Recruitment Web App (Wisdom Career)',
      desc: 'A full-stack recruitment system with JWT authentication and email notifications.',
      stack: 'Spring Boot, ReactJS, MySQL, JWT, Email API',
      source: '#',
      demo: '#',
      type: 'Outsource',
    },
    {
      title: 'E-commerce Web App (Robotics Store)',
      desc: 'An e-commerce platform with online payments and shipping APIs.',
      stack: 'Spring Boot, ReactJS, VNPay, REST API',
      source: '#',
      demo: 'https://roboticsecommerce.wisdombrain.org/',
      type: 'Outsource',
    },
    {
      title: 'Spa Booking App (Milano Nail Spa)',
      desc: 'A mobile hybrid app for spa appointment booking and receipt management.',
      stack: 'Ionic, Firebase, ReactJS',
      source: '#',
      demo: '#',
      type: 'Outsource',
    },
    {
      title: 'AntMotor.vn',
      desc: 'A motorcycle e-commerce website delivered in collaboration with the client.',
      stack: 'Spring Boot, ReactJS, MySQL',
      source: '#',
      demo: 'https://antmotor.vn',
      type: 'Outsource',
    },
    {
      title: 'Streaming App',
      desc: 'A video streaming UI prototype with smooth UX and responsive design.',
      stack: 'ReactJS, Tailwind CSS',
      source: '#',
      demo: '#',
      type: 'Outsource',
    },
    {
      title: 'Tư vấn tuyển sinh - Bài tập lớn môn học Java',
      desc: 'Ứng dụng Java Web quản lý tuyển sinh các ngành học.',
      stack: 'Spring Boot',
      source: 'https://github.com/NguyenCaoDanh/TuVanTuyenSinh',
      demo: '#',
      type: 'Outsource',
    },
    {
      title: 'App bán hàng Android - Đồ án tốt nghiệp',
      desc: 'Ứng dụng Android quản lý bán hàng.',
      stack: 'Android Java',
      source: 'https://github.com/NguyenCaoDanh/DoAnAndroid-main',
      demo: '#',
      type: 'Outsource',
    },

    // PERSONAL
    {
      title: 'Portfolio Web',
      desc: 'A modern landing page showcasing my portfolio.',
      stack: 'ReactJS, Tailwind CSS',
      source: 'https://github.com/NguyenCaoDanh/Personal_Web',
      demo: 'https://danhcaoportfolio.netlify.app/',
      type: 'Personal',
    },
    {
      title: 'Tutor Web',
      desc: 'A web platform for online tutoring and class management.',
      stack: 'ReactJS, Tailwind CSS',
      source: 'https://github.com/NguyenCaoDanh/Tutor_Web',
      demo: '#',
      type: 'Personal',
    },
    {
      title: 'Microservice Ecommerce Demo',
      desc: 'A demo microservice-based e-commerce project with authentication and service communication.',
      stack: 'Spring Boot, Spring Cloud, Spring Security',
      source: 'https://github.com/NguyenCaoDanh/Microservice_02',
      demo: '#',
      type: 'Personal',
    },
    {
      title: 'Quản lý kiểm định',
      desc: 'Java desktop app to manage vehicle inspection.',
      stack: 'Java Core, OOP',
      source: 'https://github.com/NguyenCaoDanh/QuanLiKiemDinh',
      demo: '#',
      type: 'Personal',
    },
    {
      title: 'Quản lý sinh viên',
      desc: 'Student management system for software testing subject.',
      stack: 'JavaFX',
      source: 'https://github.com/NguyenCaoDanh/BaiTapNhom_QuanLySinhVien',
      demo: '#',
      type: 'Personal',
    },
];
